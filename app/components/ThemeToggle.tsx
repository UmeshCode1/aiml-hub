"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [perfMode, setPerfMode] = useState<"ultra" | "saver">("ultra");
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

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
      const isLowCores = typeof navigator !== "undefined" && navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (isLowCores || prefersReducedMotion) {
        initialPerf = "saver";
      }
    }

    setPerfMode(initialPerf);
    document.documentElement.setAttribute("data-performance", initialPerf);
    document.documentElement.setAttribute("data-thermal", initialPerf);

    // Scroll listener: hide on scroll down, show on scroll up / top
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50 && currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
    document.documentElement.setAttribute("data-thermal", nextPerf);
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
    <div
      className={`top-action-bar flex items-center gap-1.5 p-1 rounded-full bg-[rgba(var(--bg-surface),0.95)] border border-[rgba(var(--border-default))] shadow-lg backdrop-blur-md transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-6 pointer-events-none"
      }`}
      role="toolbar"
      aria-label="Display & Thermal Controls"
    >
      {/* Theme Toggle Icon Button */}
      <button
        type="button"
        onClick={toggleTheme}
        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 shadow-sm ${
          theme === "dark"
            ? "bg-[rgba(245,158,11,0.15)] border border-[rgba(245,158,11,0.3)] text-amber-400 hover:bg-[rgba(245,158,11,0.25)] shadow-[0_0_10px_rgba(245,158,11,0.2)]"
            : "bg-[rgba(6,182,212,0.15)] border border-[rgba(6,182,212,0.3)] text-cyan-600 hover:bg-[rgba(6,182,212,0.25)] shadow-[0_0_10px_rgba(6,182,212,0.2)]"
        }`}
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
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin-once"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" /><path d="M12 20v2" />
            <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
            <path d="M2 12h2" /><path d="M20 12h2" />
            <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
          </svg>
        ) : (
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="animate-spin-once"
            aria-hidden="true"
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
          </svg>
        )}
      </button>

      {/* Divider */}
      <div className="w-px h-4 bg-[rgba(var(--border-default))]" aria-hidden="true" />

      {/* Thermal / Battery Icon Toggle Button */}
      <button
        type="button"
        onClick={togglePerfMode}
        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all duration-200 active:scale-90 ${
          perfMode === "ultra"
            ? "bg-[rgba(var(--accent-cyan),0.18)] border border-[rgba(var(--accent-cyan),0.4)] shadow-[0_0_12px_rgba(34,211,238,0.3)]"
            : "bg-[rgba(var(--accent-lime-glow))] border border-[rgba(var(--border-accent),0.4)] shadow-[0_0_12px_rgba(132,204,22,0.3)]"
        }`}
        aria-label={`Toggle performance mode. Current mode: ${perfMode === "ultra" ? "Ultra Visual FX" : "Thermal Saver"}`}
        title={perfMode === "ultra" ? "Ultra FX Active (Click for Battery Saver)" : "Thermal Saver Active (Click for Ultra FX)"}
      >
        {perfMode === "ultra" ? (
          <span aria-hidden="true">🚀</span>
        ) : (
          <span aria-hidden="true">🔋</span>
        )}
      </button>
    </div>
  );
}
