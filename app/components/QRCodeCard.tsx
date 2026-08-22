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

      <div className="card p-6 flex flex-col items-center gap-5 border-[rgba(var(--border-default))]">
        {/* QR Code with sleek border */}
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
            marginSize={1}
          />
        </div>

        {/* Text and URL button */}
        <div className="flex flex-col items-center gap-2 text-center max-w-xs">
          <p className="text-sm font-bold text-[rgb(var(--text-primary))]">
            Scan to Share Your Voice
          </p>
          <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
            Point your mobile camera at the QR code to open the Voice of AIML Club portal instantly.
          </p>

          <div className="flex items-center gap-2 mt-1">
            <a
              href={siteConfig.voice}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono font-bold text-[rgb(var(--accent-lime))] hover:underline"
              aria-label="Voice of AIML Club link (opens in new tab)"
            >
              voice.aimlcluboct.in ↗
            </a>

            <span className="text-[rgb(var(--border-default))]">•</span>

            <button
              type="button"
              onClick={handleCopy}
              className="text-xs font-semibold text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text-primary))] transition-colors"
            >
              {copied ? "✓ Copied Link" : "Copy Link"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
