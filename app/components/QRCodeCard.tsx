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

  return (
    <section
      aria-label="QR Code to share your voice"
      className="animate-fade-up delay-650"
    >
      <div className="mb-3 px-1 flex items-center justify-between">
        <span className="section-label">Scan. Connect. Explore.</span>
        <span className="text-[10px] font-mono text-[rgb(var(--text-muted))]">Instant Portal</span>
      </div>

      <div className="card p-6 flex flex-col items-center gap-5 border-[rgba(var(--border-default))] text-center">
        {/* QR Code with high contrast quiet zone */}
        <div
          className="qr-wrapper transition-transform duration-300 hover:scale-105"
          role="img"
          aria-label={`QR code linking to ${siteConfig.voice}`}
        >
          <QRCodeSVG
            value={siteConfig.voice}
            size={180}
            level="H"
            bgColor="#ffffff"
            fgColor="#080a0c"
            marginSize={2}
          />
        </div>

        {/* Supporting text & Link Copy */}
        <div className="flex flex-col items-center gap-2 max-w-xs">
          <p className="text-sm font-extrabold text-[rgb(var(--text-primary))]">
            Scan to share your voice with AIML Club OCT.
          </p>
          <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
            Point your smartphone camera at the QR code to open the official Voice portal.
          </p>

          <div className="flex items-center gap-2.5 mt-1.5">
            <a
              href={siteConfig.voice}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-extrabold text-[rgb(var(--accent-lime-bright))] hover:underline"
              aria-label="Voice of AIML Club portal link (opens in new tab)"
            >
              voice.aimlcluboct.in ↗
            </a>

            <span className="text-[rgb(var(--border-default))]">•</span>

            <button
              type="button"
              onClick={handleCopy}
              className="px-2.5 py-1 text-xs font-semibold rounded-full bg-[rgba(var(--bg-surface))] hover:bg-[rgba(var(--bg-card-hover))] border border-[rgba(var(--border-default))] text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] transition-all active:scale-95"
              aria-label="Copy Voice of AIML Club link to clipboard"
            >
              {copied ? "✓ Link Copied" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
