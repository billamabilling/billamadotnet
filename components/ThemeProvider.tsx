"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { trackThemeSwitch } from "@/lib/snowcat/tracker";

export interface ThemeInfo {
  id: string;
  name: string;
  category: "dark" | "light";
  primaryColor: string;
  secondaryColor: string;
  bgPreview: string;
  description: string;
}

export const AVAILABLE_THEMES: ThemeInfo[] = [
  // Dark Themes
  {
    id: "cyber",
    name: "Cyber Obsidian",
    category: "dark",
    primaryColor: "#38bdf8",
    secondaryColor: "#818cf8",
    bgPreview: "#080c14",
    description: "Deep obsidian with electric cyan and indigo accents",
  },
  {
    id: "matrix",
    name: "Neon Matrix",
    category: "dark",
    primaryColor: "#22c55e",
    secondaryColor: "#10b981",
    bgPreview: "#040d06",
    description: "Hacker green terminal with cyber emerald glow",
  },
  {
    id: "synthwave",
    name: "Synthwave Nebula",
    category: "dark",
    primaryColor: "#c084fc",
    secondaryColor: "#f472b6",
    bgPreview: "#0c071e",
    description: "Retro 80s neon purple, violet, and electric pink",
  },
  {
    id: "solar",
    name: "Solar Flare",
    category: "dark",
    primaryColor: "#fbbf24",
    secondaryColor: "#f97316",
    bgPreview: "#0f0a04",
    description: "Dark carbon with warm amber and sunset flame",
  },
  {
    id: "crimson",
    name: "Crimson Core",
    category: "dark",
    primaryColor: "#f87171",
    secondaryColor: "#fb7185",
    bgPreview: "#110608",
    description: "Volcanic charcoal with ruby red and rose highlights",
  },
  {
    id: "nord",
    name: "Nordic Frost",
    category: "dark",
    primaryColor: "#88c0d0",
    secondaryColor: "#81a1c1",
    bgPreview: "#0e141f",
    description: "Subtle arctic twilight with polar ice cyan",
  },

  // Light Themes
  {
    id: "daylight",
    name: "Clean Daylight",
    category: "light",
    primaryColor: "#0284c7",
    secondaryColor: "#4f46e5",
    bgPreview: "#f8fafc",
    description: "Crisp porcelain white with modern azure blue",
  },
  {
    id: "solarized",
    name: "Solarized Linen",
    category: "light",
    primaryColor: "#d97706",
    secondaryColor: "#b45309",
    bgPreview: "#fcf7ea",
    description: "Warm antique linen with amber bronze contrast",
  },
  {
    id: "lavender",
    name: "Lavender Mist",
    category: "light",
    primaryColor: "#7c3aed",
    secondaryColor: "#a855f7",
    bgPreview: "#fbfaff",
    description: "Soft ethereal lilac with royal purple accents",
  },
  {
    id: "emerald",
    name: "Emerald Spring",
    category: "light",
    primaryColor: "#059669",
    secondaryColor: "#10b981",
    bgPreview: "#f4fbf7",
    description: "Refreshing mint white with deep forest sage",
  },
];

interface ThemeContextType {
  theme: string;
  mode: "dark" | "light";
  setTheme: (id: string) => void;
  toggleDayNight: () => void;
  themes: ThemeInfo[];
  currentThemeInfo: ThemeInfo;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<string>("cyber");
  const [mode, setModeState] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("billama-theme");
    const validTheme = AVAILABLE_THEMES.find((t) => t.id === savedTheme);

    if (validTheme) {
      setThemeState(validTheme.id);
      setModeState(validTheme.category);
      applyThemeToDom(validTheme.id, validTheme.category);
    } else {
      applyThemeToDom("cyber", "dark");
    }
  }, []);

  const applyThemeToDom = (newTheme: string, newMode: "dark" | "light") => {
    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);
    root.setAttribute("data-mode", newMode);
    if (newMode === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
  };

  const setTheme = (id: string) => {
    const found = AVAILABLE_THEMES.find((t) => t.id === id);
    if (!found) return;

    trackThemeSwitch({
      newTheme: found.id,
      previousTheme: theme,
      mode: found.category,
    });

    setThemeState(found.id);
    setModeState(found.category);
    localStorage.setItem("billama-theme", found.id);
    applyThemeToDom(found.id, found.category);
  };

  const toggleDayNight = () => {
    if (mode === "dark") {
      // Switch to daylight default
      setTheme("daylight");
    } else {
      // Switch to cyber default
      setTheme("cyber");
    }
  };

  const currentThemeInfo =
    AVAILABLE_THEMES.find((t) => t.id === theme) || AVAILABLE_THEMES[0];

  return (
    <ThemeContext.Provider
      value={{
        theme,
        mode,
        setTheme,
        toggleDayNight,
        themes: AVAILABLE_THEMES,
        currentThemeInfo,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
