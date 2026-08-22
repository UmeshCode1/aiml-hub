"use client";

import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "../config/site";

export function ClubHeader() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    if (typeof window === "undefined") return;
    const url = siteConfig.digitalHub;
    const title = `${siteConfig.clubName} — Digital Hub`;
    const text = `Explore official links, community, resources and share your voice at the AIML Club OCT Digital Hub.`;

    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        // Fallback to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  return (
    <header className="flex flex-col items-center text-center gap-3.5 sm:gap-4 pt-1 sm:pt-2 pb-1 animate-fade-up">
      {/* ── Logos row ─────────────────────────────────────────────────── */}
      <div className="flex items-center justify-center gap-4 sm:gap-6">
        {/* AIML Club Logo */}
        <div className="relative group animate-logo-breathing">
          <div
            className="absolute inset-0 rounded-full logo-glow-lime transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
          <div className="relative z-10 w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-[rgba(var(--bg-card))] border border-[rgba(var(--border-default))] shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/aiml-club-logo.png"
              alt="AI & Machine Learning Club OCT logo"
              width={88}
              height={88}
              priority
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Vertical divider */}
        <div
          className="w-px h-10 sm:h-14 self-center bg-gradient-to-b from-transparent via-[rgba(var(--border-default))] to-transparent"
          aria-hidden="true"
        />

        {/* OCT Logo */}
        <div className="relative group animate-logo-breathing" style={{ animationDelay: "1.5s" }}>
          <div
            className="absolute inset-0 rounded-full logo-glow-cyan transition-transform duration-300 group-hover:scale-125"
            aria-hidden="true"
          />
          <div className="relative z-10 w-16 h-16 sm:w-18 sm:h-18 p-1 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/oct-logo.png"
              alt="Oriental College of Technology, Bhopal logo"
              width={76}
              height={76}
              priority
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* ── Identity text & status ────────────────────────────────────── */}
      <div className="flex flex-col items-center gap-1.5 max-w-md px-2">
        {/* Live status badge with radar sonar ring */}
        <div className="status-badge shadow-sm">
          <span className="status-dot-wrap" aria-hidden="true">
            <span className="status-ring" />
            <span className="status-dot" />
          </span>
          <span>Official Student Technology Club</span>
        </div>

        {/* Main title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-[rgb(var(--text-primary))] mt-0.5">
          {siteConfig.clubName}
        </h1>

        {/* College name */}
        <p className="text-xs sm:text-sm font-semibold tracking-wide text-[rgb(var(--text-secondary))]">
          {siteConfig.institution}
        </p>

        {/* Tagline */}
        <p className="text-[0.6875rem] sm:text-xs font-black tracking-widest uppercase mt-0.5 text-[rgb(var(--accent-lime-bright))]">
          “{siteConfig.tagline}”
        </p>

        {/* Description */}
        <p className="text-xs sm:text-sm leading-relaxed text-[rgb(var(--text-secondary))] max-w-sm mt-0.5">
          {siteConfig.description}
        </p>

        {/* Action pill row: Share Link + Website badge */}
        <div className="flex items-center gap-2 mt-2">
          <button
            type="button"
            onClick={handleShare}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold rounded-full bg-[rgba(var(--bg-surface))] hover:bg-[rgba(var(--bg-card-hover))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-all active:scale-95 shadow-sm"
            aria-label="Share AIML Club digital hub link"
          >
            {copied ? (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgb(132,204,22)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span className="text-[rgb(var(--accent-lime-bright))] font-bold">✓ Copied Link</span>
              </>
            ) : (
              <>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
                <span>Share Link</span>
              </>
            )}
          </button>

          <a
            href={siteConfig.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-bold rounded-full bg-[rgba(var(--bg-surface))] hover:bg-[rgba(var(--bg-card-hover))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-all active:scale-95 shadow-sm"
            aria-label="Visit official website aimlcluboct.in (opens in new tab)"
          >
            <span>aimlcluboct.in</span>
            <span className="text-[10px] opacity-70">↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}
