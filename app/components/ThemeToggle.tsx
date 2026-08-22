"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [perfMode, setPerfMode] = useState<"ultra" | "saver">("ultra");
  const [mounted, setMounted] = useState(false);
  const [feedbackToast, setFeedbackToast] = useState<string | null>(null);

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
  }, []);

  const triggerToast = (msg: string) => {
    setFeedbackToast(msg);
    setTimeout(() => setFeedbackToast(null), 1800);
  };

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("aiml_hub_theme", nextTheme);
    triggerToast(nextTheme === "dark" ? "🌙 Dark Theme" : "☀️ Light Theme");
  };

  const togglePerfMode = () => {
    const nextPerf = perfMode === "ultra" ? "saver" : "ultra";
    setPerfMode(nextPerf);
    document.documentElement.setAttribute("data-performance", nextPerf);
    localStorage.setItem("aiml_hub_perf", nextPerf);
    triggerToast(nextPerf === "ultra" ? "🚀 Ultra FX Mode" : "🔋 Thermal Saver Mode");
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
    <div className="relative">
      <div className="top-action-bar" role="toolbar" aria-label="Display & Thermal Controls">
        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={toggleTheme}
          className="action-bar-btn flex items-center gap-1.5 px-2.5 py-1 text-xs font-extrabold rounded-full transition-all active:scale-95"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          {theme === "dark" ? (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-400 animate-spin-once"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2" /><path d="M12 20v2" />
                <path d="m4.93 4.93 1.41 1.41" /><path d="m17.66 17.66 1.41 1.41" />
                <path d="M2 12h2" /><path d="M20 12h2" />
                <path d="m6.34 17.66-1.41 1.41" /><path d="m19.07 4.93-1.41 1.41" />
              </svg>
              <span className="text-[11px] font-bold text-amber-400">Dark</span>
            </>
          ) : (
            <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-cyan-500 animate-spin-once"
                aria-hidden="true"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
              </svg>
              <span className="text-[11px] font-bold text-cyan-600">Light</span>
            </>
          )}
        </button>

        {/* Divider */}
        <div className="w-px h-4 bg-[rgba(var(--border-default))]" aria-hidden="true" />

        {/* Thermal / Battery Mode Toggle Button */}
        <button
          type="button"
          onClick={togglePerfMode}
          className={`action-bar-btn flex items-center gap-1 px-2.5 py-1 text-xs font-extrabold rounded-full transition-all active:scale-95 ${
            perfMode === "ultra"
              ? "bg-[rgba(var(--accent-cyan),0.12)] text-[rgb(var(--accent-cyan))]"
              : "bg-[rgba(var(--accent-lime-glow))] text-[rgb(var(--accent-lime-bright))]"
          }`}
          aria-label={`Toggle performance mode. Current mode: ${perfMode === "ultra" ? "Ultra Visual FX" : "Thermal Saver"}`}
          title={perfMode === "ultra" ? "Ultra FX (Click to enable Battery Saver)" : "Thermal Saver (Click to enable Ultra FX)"}
        >
          {perfMode === "ultra" ? (
            <>
              <span className="text-xs" aria-hidden="true">🚀</span>
              <span className="text-[11px] font-extrabold text-[rgb(var(--accent-cyan))]">FX</span>
            </>
          ) : (
            <>
              <span className="text-xs" aria-hidden="true">🔋</span>
              <span className="text-[11px] font-extrabold text-[rgb(var(--accent-lime-bright))]">Saver</span>
            </>
          )}
        </button>
      </div>

      {/* Floating Mode Feedback Hint Toast */}
      {feedbackToast && (
        <div
          className="fixed top-14 right-4 z-50 px-3 py-1.5 rounded-full text-xs font-extrabold bg-[rgba(var(--bg-surface),0.95)] border border-[rgba(var(--border-accent))] text-[rgb(var(--accent-lime-bright))] shadow-lg animate-fade-in pointer-events-none"
          role="status"
        >
          {feedbackToast}
        </div>
      )}
    </div>
  );
}
