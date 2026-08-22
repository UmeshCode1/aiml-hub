"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { siteConfig } from "../config/site";

export function QRCodeCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.voice);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {
      // ignore
    }
  };

  const handleShare = async () => {
    const title = "Voice of AIML Club";
    const text = "Share your voice with AI & Machine Learning Club OCT.";
    const url = siteConfig.voice;

    if (typeof window !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return;
      } catch (err) {
        // Fallback to copy link
      }
    }
    handleCopy();
  };

  return (
    <section
      aria-label="QR Code to share your voice"
      className="animate-fade-up delay-600"
    >
      <div className="mb-3 px-1 flex items-center justify-between">
        <span className="section-label">Scan. Connect. Explore.</span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Voice Portal</span>
      </div>

      <div className="card p-5 sm:p-6 flex flex-col items-center gap-4 text-center border-[rgba(var(--border-default))]">
        {/* QR Code wrapper — sharp, high contrast, quiet zone */}
        <div
          className="qr-wrapper transition-transform duration-200 hover:scale-105"
          role="img"
          aria-label={`QR code linking to ${siteConfig.voice}`}
        >
          <QRCodeSVG
            value={siteConfig.voice}
            size={160}
            level="H"
            bgColor="#ffffff"
            fgColor="#080a0c"
            marginSize={2}
          />
        </div>

        {/* Supporting Text */}
        <div className="flex flex-col items-center gap-1.5 max-w-xs">
          <p className="text-sm font-extrabold text-[rgb(var(--text-primary))]">
            Scan to share your voice with AIML Club OCT.
          </p>
          <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
            Point your camera at the QR code to open the Voice of AIML Club portal instantly.
          </p>

          {/* Direct Action Row: Open Voice + Copy Link + Share */}
          <div className="flex items-center justify-center flex-wrap gap-2 mt-2 w-full">
            <a
              href={siteConfig.voice}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-[rgba(var(--accent-lime-glow))] border border-[rgba(var(--border-accent))] text-[rgb(var(--accent-lime-bright))] hover:bg-[rgba(var(--accent-lime-glow))] transition-all active:scale-95 shadow-sm"
              aria-label="Open Voice portal directly (opens in new tab)"
            >
              <span>Open Voice ↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-[rgba(var(--bg-surface))] hover:bg-[rgba(var(--bg-card-hover))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-all active:scale-95 shadow-sm"
              aria-label="Copy Voice of AIML Club link to clipboard"
            >
              {copied ? "✓ Link Copied" : "Copy Link"}
            </button>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-full bg-[rgba(var(--bg-surface))] hover:bg-[rgba(var(--bg-card-hover))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-all active:scale-95 shadow-sm"
              aria-label="Share Voice portal link via device share dialog"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              <span>Share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
