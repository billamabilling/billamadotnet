"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import {
  initOpenSnowcatMarketing,
  trackMarketingPageView,
  trackMarketingCta,
} from "@/lib/snowcat/tracker";

export default function SnowcatTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize tracker on mount
    initOpenSnowcatMarketing();

    // 2. Track page view
    trackMarketingPageView();
  }, [pathname]);

  // Global click delegate for outbound and CTA tracking
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href) return;

      // Track outbound App / GitHub / External links
      if (href.startsWith("http://") || href.startsWith("https://")) {
        const isAppOrGitHub =
          href.includes("billama.net") ||
          href.includes("github.com/billamabilling") ||
          href.includes("localhost:3000");

        if (isAppOrGitHub) {
          const text = target.innerText?.trim() || target.getAttribute("aria-label") || href;
          trackMarketingCta({
            ctaName: text.substring(0, 40),
            location: "auto_link_delegate",
            targetUrl: href,
            ctaType: href.includes("github") ? "github" : "signup",
          });
        }
      }
    };

    document.addEventListener("click", handleClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleClick, { capture: true });
    };
  }, []);

  return null;
}
