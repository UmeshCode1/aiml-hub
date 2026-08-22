"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [perfMode, setPerfMode] = useState<"ultra" | "saver">("ultra");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Theme initialization
    const savedTheme = localStorage.getItem("aiml_hub_theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    // Performance & Thermal mode initialization
    const savedPerf = localStorage.getItem("aiml_hub_perf") as "ultra" | "saver" | null;
    let initialPerf: "ultra" | "saver" = "ultra";

    if (savedPerf) {
      initialPerf = savedPerf;
    } else {
      // Auto detect device thermal capability
      const isLowCores = typeof navigator !== "undefined" && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isLowCores || prefersReducedMotion) {
        initialPerf = "saver";
      }
    }

    setPerfMode(initialPerf);
    document.documentElement.setAttribute("data-performance", initialPerf);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("aiml_hub_theme", nextTheme);
  };

  const togglePerfMode = () => {
    const nextPerf = perfMode === "ultra" ? "saver" : "ultra";
    setPerfMode(nextPerf);
    document.documentElement.setAttribute("data-performance", nextPerf);
    localStorage.setItem("aiml_hub_perf", nextPerf);
  };

  if (!mounted) {
    return (
      <div
        className="top-action-bar opacity-0 pointer-events-none"
        aria-hidden="true"
      />
    );
  }

  return (
    <div className="top-action-bar" role="toolbar" aria-label="Display & Thermal Controls">
      {/* Theme Toggle Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className="action-bar-btn"
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      >
        {theme === "dark" ? (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-amber-400"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" />
            <path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-cyan-500"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>

      {/* Vertical divider inside action bar */}
      <div className="w-px h-4 bg-[rgba(var(--border-default))]" aria-hidden="true" />

      {/* Thermal & Performance Mode Button */}
      <button
        type="button"
        onClick={togglePerfMode}
        className={`action-bar-btn ${perfMode === "ultra" ? "active" : ""}`}
        aria-label={`Toggle performance mode. Current mode: ${perfMode === "ultra" ? "Ultra Visual Effects" : "Thermal & Battery Saver"}`}
        title={perfMode === "ultra" ? "Ultra FX (Click for Battery/Thermal Saver)" : "Thermal Saver (Click for Ultra FX)"}
      >
        {perfMode === "ultra" ? (
          <span className="text-xs font-bold" aria-hidden="true">🚀</span>
        ) : (
          <span className="text-xs font-bold" aria-hidden="true">🔋</span>
        )}
      </button>
    </div>
  );
}
