"use client";

import { useState, useRef, useEffect } from "react";
import { useTheme, AVAILABLE_THEMES } from "./ThemeProvider";
import { Sun, Moon, Palette, Check, ChevronDown } from "lucide-react";

export default function ThemeSwitcher() {
  const { theme, mode, setTheme, toggleDayNight, currentThemeInfo } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close dropdown on outside click or escape key
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [dropdownOpen]);

  const darkThemes = AVAILABLE_THEMES.filter((t) => t.category === "dark");
  const lightThemes = AVAILABLE_THEMES.filter((t) => t.category === "light");

  // Stable fallback values before mount to match SSR output exactly
  const isDark = mounted ? mode === "dark" : true;
  const activeColor = mounted ? currentThemeInfo.primaryColor : "#38bdf8";
  const activeName = mounted ? currentThemeInfo.name.split(" ")[0] : "Cyber";
  const fullActiveName = mounted ? currentThemeInfo.name : "Cyber Obsidian";
  const activeThemeId = mounted ? theme : "cyber";

  return (
    <div className="flex items-center gap-1.5 relative" ref={dropdownRef}>
      {/* 1. Day / Night Toggle Button */}
      <button
        type="button"
        onClick={toggleDayNight}
        className="flex items-center justify-center w-8 h-8 rounded-lg border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-label={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
        title={isDark ? "Switch to Day Mode" : "Switch to Night Mode"}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-indigo-500 transition-transform duration-300 hover:-rotate-12" />
        )}
      </button>

      {/* 2. Theme Dropdown Trigger Button */}
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        aria-haspopup="true"
        aria-expanded={dropdownOpen}
        title="Choose Theme Preset"
      >
        <span
          className="w-3 h-3 rounded-full border border-white/20 shrink-0 shadow-sm"
          style={{ backgroundColor: activeColor }}
        />
        <span className="hidden sm:inline-block max-w-[90px] truncate text-[11px]">
          {activeName}
        </span>
        <ChevronDown
          className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${
            dropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* 3. Theme Dropdown Menu */}
      {dropdownOpen && (
        <div
          className="absolute right-0 top-full mt-2 w-72 sm:w-80 rounded-2xl border border-slate-700/80 bg-[#0c1220]/95 backdrop-blur-2xl shadow-2xl z-50 p-2 text-xs divide-y divide-slate-800/80 max-h-[85vh] overflow-y-auto"
          role="menu"
          aria-orientation="vertical"
        >
          {/* Header */}
          <div className="px-3 py-2 flex items-center justify-between text-slate-400 text-[11px] font-mono">
            <span className="font-semibold text-slate-300 flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-cyan-400" />
              Theme Presets ({AVAILABLE_THEMES.length})
            </span>
            <span className="text-[10px] uppercase font-bold text-cyan-400">
              {fullActiveName}
            </span>
          </div>

          {/* Dark Themes Group */}
          <div className="py-2 space-y-1">
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Moon className="w-3 h-3 text-indigo-400" />
              <span>Night / Dark Themes</span>
            </div>

            {darkThemes.map((t) => {
              const isSelected = activeThemeId === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-left ${
                    isSelected
                      ? "bg-cyan-950/60 border border-cyan-500/40 text-white shadow-sm"
                      : "hover:bg-slate-800/60 text-slate-300 hover:text-white"
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    {/* Swatch */}
                    <span className="flex -space-x-1 shrink-0 items-center">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 z-10"
                        style={{ backgroundColor: t.bgPreview }}
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20"
                        style={{ backgroundColor: t.primaryColor }}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="font-semibold text-xs truncate text-white block">{t.name}</span>
                      <span className="text-[10px] text-slate-400 truncate block">{t.description}</span>
                    </span>
                  </span>

                  {isSelected && (
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Light Themes Group */}
          <div className="py-2 space-y-1">
            <div className="px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Sun className="w-3 h-3 text-amber-400" />
              <span>Day / Light Themes</span>
            </div>

            {lightThemes.map((t) => {
              const isSelected = activeThemeId === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTheme(t.id);
                    setDropdownOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-xl transition-all text-left ${
                    isSelected
                      ? "bg-cyan-950/60 border border-cyan-500/40 text-white shadow-sm"
                      : "hover:bg-slate-800/60 text-slate-300 hover:text-white"
                  }`}
                  role="menuitem"
                >
                  <span className="flex items-center gap-2.5 min-w-0">
                    {/* Swatch */}
                    <span className="flex -space-x-1 shrink-0 items-center">
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 z-10 shadow-sm"
                        style={{ backgroundColor: t.bgPreview }}
                      />
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-slate-300 shadow-sm"
                        style={{ backgroundColor: t.primaryColor }}
                      />
                    </span>
                    <span className="min-w-0">
                      <span className="font-semibold text-xs truncate text-white block">{t.name}</span>
                      <span className="text-[10px] text-slate-400 truncate block">{t.description}</span>
                    </span>
                  </span>

                  {isSelected && (
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 ml-2" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
