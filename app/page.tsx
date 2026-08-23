"use client";

import { useState } from "react";
import { AmbientBackground } from "./components/AmbientBackground";
import { ThemeToggle } from "./components/ThemeToggle";
import { ClubHeader } from "./components/ClubHeader";
import { Tier1Socials } from "./components/Tier1Socials";
import { Tier2Ecosystem } from "./components/Tier2Ecosystem";
import { PrimaryVoiceCard } from "./components/PrimaryVoiceCard";
import { LiveUpdatesCard } from "./components/LiveUpdatesCard";
import { FeedbackCard } from "./components/FeedbackCard";
import { QRCodeCard } from "./components/QRCodeCard";
import { Footer } from "./components/Footer";

type TabType = "all" | "social" | "official" | "resources";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      <AmbientBackground />
      <ThemeToggle />

      <main id="main-content" className="min-h-screen">
        <div className="hub-container">
          {/* ── 1. Preserved Master Identity Header ─────────────────── */}
          <ClubHeader />

          {/* ── 2. Category Filter Navigation Bar ───────────────────── */}
          <nav aria-label="Category Filter" className="w-full">
            <div className="flex items-center justify-center gap-1 p-1 rounded-full bg-[rgba(var(--bg-surface))] border border-[rgba(var(--border-default))] mt-2 max-w-md mx-auto shadow-sm">
              {(
                [
                  { id: "all", label: "All" },
                  { id: "social", label: "Socials" },
                  { id: "official", label: "Official" },
                  { id: "resources", label: "Resources" },
                ] as const
              ).map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-full transition-all duration-150 text-center min-h-[38px] ${
                      isActive
                        ? "bg-[linear-gradient(135deg,rgb(var(--accent-lime-bright)),rgb(var(--accent-cyan)))] text-black shadow-sm font-extrabold"
                        : "text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--bg-card-hover))]"
                    }`}
                    aria-pressed={isActive}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="flex flex-col gap-5 mt-2">
            {/* ── Tier 1: Visually Dominant Primary Social Links ────── */}
            {(activeTab === "all" || activeTab === "social" || activeTab === "official") && (
              <Tier1Socials />
            )}

            {/* ── Flagship Voice Initiative CTA Card ─────────────────── */}
            {(activeTab === "all" || activeTab === "official") && (
              <PrimaryVoiceCard />
            )}

            {/* ── Real-Time Live Updates Section ─────────────────────── */}
            {(activeTab === "all" || activeTab === "official" || activeTab === "resources") && (
              <LiveUpdatesCard />
            )}

            {/* ── Tier 2: Compact Secondary Ecosystem & Community Links ─ */}
            {(activeTab === "all" || activeTab === "resources") && (
              <Tier2Ecosystem />
            )}

            {/* ── Tier 3: Feedback & Voice Section ───────────────────── */}
            {(activeTab === "all" || activeTab === "social") && (
              <FeedbackCard />
            )}

            {/* ── QR Code Section ────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "official") && (
              <QRCodeCard />
            )}

            {/* ── Minimal Official Footer ─────────────────────────────── */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
