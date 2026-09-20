"use client";

import {
  newTracker,
  trackPageView,
  trackStructEvent,
  trackSelfDescribingEvent,
  enableActivityTracking,
  setUserId,
} from "@snowplow/browser-tracker";

export interface MarketingAttribution {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  landingPage?: string;
  anonymousId?: string;
}

let isTrackerInitialized = false;
let cachedAttribution: MarketingAttribution | null = null;

/**
 * Generates or retrieves a persistent anonymous visitor ID
 */
export function getOrCreateAnonymousId(): string {
  if (typeof window === "undefined") return "server-ssr";

  try {
    const existing = localStorage.getItem("blm_aid");
    if (existing && existing.length >= 16) {
      return existing;
    }

    const generated =
      "blm_aid_" +
      Math.random().toString(36).substring(2, 10) +
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 8);

    localStorage.setItem("blm_aid", generated);
    document.cookie = `blm_aid=${generated}; path=/; max-age=31536000; SameSite=Lax`;
    return generated;
  } catch {
    return "anon_" + Date.now();
  }
}

/**
 * Extracts and captures UTM and referrer campaign parameters on first landing
 */
export function captureMarketingAttribution(): MarketingAttribution {
  if (typeof window === "undefined") return {};

  if (cachedAttribution) return cachedAttribution;

  try {
    const stored = sessionStorage.getItem("blm_marketing_attr");
    if (stored) {
      cachedAttribution = JSON.parse(stored);
      return cachedAttribution!;
    }
  } catch {}

  const urlParams = new URLSearchParams(window.location.search);
  const utmSource = urlParams.get("utm_source") || undefined;
  const utmMedium = urlParams.get("utm_medium") || undefined;
  const utmCampaign = urlParams.get("utm_campaign") || undefined;
  const utmTerm = urlParams.get("utm_term") || undefined;
  const utmContent = urlParams.get("utm_content") || undefined;
  const referrer = document.referrer ? new URL(document.referrer, window.location.href).origin : undefined;
  const landingPage = window.location.pathname + window.location.search;
  const anonymousId = getOrCreateAnonymousId();

  const attribution: MarketingAttribution = {
    utmSource: utmSource || (referrer ? "referral" : "direct"),
    utmMedium: utmMedium || (referrer ? "web" : "direct"),
    utmCampaign: utmCampaign || "organic",
    utmTerm,
    utmContent,
    referrer: referrer || "direct",
    landingPage,
    anonymousId,
  };

  try {
    sessionStorage.setItem("blm_marketing_attr", JSON.stringify(attribution));
  } catch {}

  cachedAttribution = attribution;
  return attribution;
}

/**
 * Resolves the OpenSnowcat collector endpoint.
 * Configured via NEXT_PUBLIC_SNOWCAT_COLLECTOR_URL, defaulting to first-party proxy on app.billama.net.
 */
function resolveCollectorUrl(): string {
  if (process.env.NEXT_PUBLIC_SNOWCAT_COLLECTOR_URL) {
    return process.env.NEXT_PUBLIC_SNOWCAT_COLLECTOR_URL;
  }

  if (typeof window !== "undefined") {
    // If testing on local network / localhost:
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      return "http://localhost:3000/api/snowcat";
    }
  }

  return "https://app.billama.net/api/snowcat";
}

/**
 * Initializes the OpenSnowcat browser tracker for billama.net
 */
export function initOpenSnowcatMarketing(options?: { collectorUrl?: string; appId?: string }) {
  if (typeof window === "undefined" || isTrackerInitialized) return;

  const endpoint = options?.collectorUrl || resolveCollectorUrl();
  const appId = options?.appId || "billama-website";
  const aid = getOrCreateAnonymousId();

  try {
    newTracker("billama-marketing", endpoint, {
      appId,
      platform: "web",
      cookieDomain: undefined,
      discoverRootDomain: true,
      cookieSameSite: "Lax",
      cookieSecure: window.location.protocol === "https:",
      sessionCookieTimeout: 1800,
      anonymousTracking: false,
      encodeBase64: true,
    });

    enableActivityTracking({
      minimumVisitLength: 5,
      heartbeatDelay: 10,
    });

    setUserId(aid);
    captureMarketingAttribution();

    isTrackerInitialized = true;
    console.info(`[OpenSnowcat Marketing] Initialized tracker for '${appId}' -> ${endpoint}`);
  } catch (err) {
    console.warn("[OpenSnowcat Marketing Init Error]", err);
  }
}

/**
 * Builds standard Iglu contexts for self-describing events
 */
function buildMarketingContexts(additionalContexts?: Array<{ schema: string; data: Record<string, any> }>) {
  const attr = captureMarketingAttribution();
  const contexts: Array<{ schema: string; data: Record<string, any> }> = [
    {
      schema: "iglu:com.billama/marketing_context/jsonschema/1-0-0",
      data: {
        utmSource: attr.utmSource || "direct",
        utmMedium: attr.utmMedium || "direct",
        utmCampaign: attr.utmCampaign || "organic",
        utmTerm: attr.utmTerm,
        utmContent: attr.utmContent,
        referrer: attr.referrer,
        landingPage: attr.landingPage,
        anonymousId: attr.anonymousId,
      },
    },
  ];

  if (typeof document !== "undefined") {
    const currentTheme = document.documentElement.getAttribute("data-theme") || "cyber";
    const currentMode = document.documentElement.getAttribute("data-mode") || "dark";
    contexts.push({
      schema: "iglu:com.billama/theme_context/jsonschema/1-0-0",
      data: {
        theme: currentTheme,
        mode: currentMode,
      },
    });
  }

  if (additionalContexts && additionalContexts.length > 0) {
    contexts.push(...additionalContexts);
  }

  return contexts;
}

/**
 * Track a page view on billama.net with attribution context
 */
export function trackMarketingPageView(customTitle?: string) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    const contexts = buildMarketingContexts();
    trackPageView({
      title: customTitle || document.title,
      context: contexts,
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackPageView error]", err);
  }
}

/**
 * Track Call-To-Action (CTA) click
 */
export function trackMarketingCta({
  ctaName,
  location,
  targetUrl,
  ctaType,
  metadata,
}: {
  ctaName: string;
  location: string;
  targetUrl?: string;
  ctaType?: "signup" | "connect_gpu" | "explore_api" | "docs" | "calculator" | "github" | "nav";
  metadata?: Record<string, any>;
}) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    const contexts = buildMarketingContexts(
      metadata
        ? [
            {
              schema: "iglu:com.billama/cta_context/jsonschema/1-0-0",
              data: metadata,
            },
          ]
        : undefined
    );

    // Standard structured event
    trackStructEvent({
      category: "marketing_cta",
      action: "click",
      label: `${location}:${ctaName}`,
      property: targetUrl || ctaType || "cta",
      context: contexts,
    });

    // Funnel step self-describing event
    trackSelfDescribingEvent({
      event: {
        schema: "iglu:com.billama/funnel_step/jsonschema/1-0-0",
        data: {
          funnelName: "sales_conversion_v4",
          stepName: `cta_${ctaName.toLowerCase().replace(/\s+/g, "_")}`,
          stepNumber: ctaType === "signup" || ctaType === "connect_gpu" ? 2 : 1,
        },
      },
      context: contexts,
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackMarketingCta error]", err);
  }
}

/**
 * Track interactive calculator simulation (high intent sales indicator)
 */
export function trackCalculatorEngagement({
  mode,
  selectedId,
  volume,
  estimatedCost,
  savingsOrYield,
}: {
  mode: "buyer" | "provider";
  selectedId: string;
  volume: number;
  estimatedCost: number;
  savingsOrYield: number;
}) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    const contexts = buildMarketingContexts([
      {
        schema: "iglu:com.billama/calculator_interaction/jsonschema/1-0-0",
        data: {
          mode,
          selectedTarget: selectedId,
          volumeUnits: volume,
          estimatedCostUsd: Math.round(estimatedCost * 100) / 100,
          savingsOrYieldUsd: Math.round(savingsOrYield * 100) / 100,
        },
      },
    ]);

    trackStructEvent({
      category: "sales_calculator",
      action: mode === "buyer" ? "calculate_token_savings" : "calculate_gpu_yield",
      label: selectedId,
      property: `vol:${volume}|cost:${Math.round(estimatedCost)}`,
      value: Math.round(savingsOrYield),
      context: contexts,
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackCalculatorEngagement error]", err);
  }
}

/**
 * Track developer documentation interaction
 */
export function trackDocsEngagement({
  docSection,
  action,
  codeSnippetKey,
}: {
  docSection: string;
  action: "tab_switch" | "code_copy" | "anchor_click";
  codeSnippetKey?: string;
}) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    const contexts = buildMarketingContexts();

    trackStructEvent({
      category: "developer_docs",
      action,
      label: docSection,
      property: codeSnippetKey || docSection,
      context: contexts,
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackDocsEngagement error]", err);
  }
}

/**
 * Track theme switch (helps correlate aesthetic preferences with buyer personas)
 */
export function trackThemeSwitch({
  newTheme,
  previousTheme,
  mode,
}: {
  newTheme: string;
  previousTheme?: string;
  mode: "dark" | "light";
}) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    const contexts = buildMarketingContexts();

    trackStructEvent({
      category: "ui_interaction",
      action: "theme_switch",
      label: newTheme,
      property: `prev:${previousTheme || "none"}|mode:${mode}`,
      context: contexts,
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackThemeSwitch error]", err);
  }
}

/**
 * Track FAQ item toggles (identifies buyer friction points)
 */
export function trackFaqToggle({
  question,
  isOpen,
}: {
  question: string;
  isOpen: boolean;
}) {
  if (typeof window === "undefined") return;
  if (!isTrackerInitialized) initOpenSnowcatMarketing();

  try {
    trackStructEvent({
      category: "faq_engagement",
      action: isOpen ? "open_question" : "close_question",
      label: question.substring(0, 80),
      context: buildMarketingContexts(),
    });
  } catch (err) {
    console.debug("[OpenSnowcat trackFaqToggle error]", err);
  }
}

/**
 * Cross-domain link decorator: Decorates outbound links to the Billama App
 * with attribution params (blm_aid, utm_source, etc.) so user sessions are
 * stitched seamlessly between marketing site and billing app.
 */
export function getDecoratedAppUrl(rawUrl: string, ctaLocation?: string): string {
  if (typeof window === "undefined") return rawUrl;

  try {
    const url = new URL(rawUrl, window.location.href);
    const attr = captureMarketingAttribution();

    if (attr.anonymousId) {
      url.searchParams.set("blm_aid", attr.anonymousId);
    }
    if (attr.utmSource && attr.utmSource !== "direct") {
      url.searchParams.set("utm_source", attr.utmSource);
    }
    if (attr.utmMedium && attr.utmMedium !== "direct") {
      url.searchParams.set("utm_medium", attr.utmMedium);
    }
    if (attr.utmCampaign && attr.utmCampaign !== "organic") {
      url.searchParams.set("utm_campaign", attr.utmCampaign);
    }
    if (ctaLocation) {
      url.searchParams.set("ref_cta", ctaLocation);
    }

    return url.toString();
  } catch {
    return rawUrl;
  }
}
