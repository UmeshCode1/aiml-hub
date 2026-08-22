"use client";

import { useState } from "react";
import { AmbientBackground } from "./components/AmbientBackground";
import { ThemeToggle } from "./components/ThemeToggle";
import { ClubHeader } from "./components/ClubHeader";
import { PrimaryVoiceCard } from "./components/PrimaryVoiceCard";
import { LinkCard } from "./components/LinkCard";
import { LinkSection } from "./components/LinkSection";
import { SocialGrid } from "./components/SocialGrid";
import { FeedbackCard } from "./components/FeedbackCard";
import { QRCodeCard } from "./components/QRCodeCard";
import { Footer } from "./components/Footer";
import { siteConfig } from "./config/site";

/* ─── Inline SVG Icons — zero runtime cost ─────────────────────────────── */
function IconGlobe() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  );
}
function IconImage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
    </svg>
  );
}
function IconBlog() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>
    </svg>
  );
}
function IconGitHub() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
      <path d="M9 18c-4.51 2-5-2-7-2"/>
    </svg>
  );
}
function IconBookOpen() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>
    </svg>
  );
}
function IconDrive() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/>
    </svg>
  );
}
function IconScroll() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4"/><path d="M19 3H8.5a1.5 1.5 0 0 0 0 3H14"/><path d="m14 9-2 2 2 2"/>
    </svg>
  );
}
function IconBell() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
    </svg>
  );
}
function IconPackage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"/><path d="M12 22V12"/><path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7"/><path d="m7.5 4.27 9 5.15"/>
    </svg>
  );
}
function IconMessage() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}

type TabType = "all" | "official" | "ecosystem" | "community";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("all");

  return (
    <>
      <AmbientBackground />
      <ThemeToggle />

      <main id="main-content">
        <div className="hub-container">
          {/* ── 1. Header / Identity ───────────────────────────────────── */}
          <ClubHeader />

          {/* ── Filter Tabs for Instant Access on all devices ─────────── */}
          <div className="flex items-center justify-center gap-1.5 p-1 rounded-full bg-[rgba(var(--bg-surface))] border border-[rgba(var(--border-default))] mt-5 max-w-md mx-auto shadow-sm">
            {(
              [
                { id: "all", label: "All Hub" },
                { id: "official", label: "Official" },
                { id: "ecosystem", label: "Ecosystem" },
                { id: "community", label: "Community" },
              ] as const
            ).map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-1.5 px-2 text-xs font-bold rounded-full transition-all duration-200 text-center ${
                    isActive
                      ? "bg-[linear-gradient(135deg,rgb(var(--accent-lime-bright)),rgb(var(--accent-cyan)))] text-black shadow-sm scale-100 font-extrabold"
                      : "text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--bg-card-hover))]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-col gap-6 mt-6">
            {/* ── 2. Primary Voice CTA (always visible on all/official) ──── */}
            {(activeTab === "all" || activeTab === "official") && (
              <PrimaryVoiceCard />
            )}

            {/* ── 3. Official Website & Pages ────────────────────────────── */}
            {(activeTab === "all" || activeTab === "official") && (
              <LinkSection label="Official Platforms">
                <LinkCard
                  href={siteConfig.website}
                  icon={<IconGlobe />}
                  title="AIML Club OCT — Official Website"
                  description="Explore the complete AIML Club ecosystem and portal."
                  animationDelay="delay-200"
                  iconBg="rgba(34,211,238,0.12)"
                  iconColor="rgb(34,211,238)"
                  badge="Official"
                />
                <LinkCard
                  href={siteConfig.pages.events}
                  icon={<IconCalendar />}
                  title="Events &amp; Workshops"
                  description="Discover workshops, talks, hackathons, and upcoming activities."
                  animationDelay="delay-250"
                  iconBg="rgba(59,130,246,0.12)"
                  iconColor="rgb(59,130,246)"
                />
                <LinkCard
                  href={siteConfig.pages.team}
                  icon={<IconUsers />}
                  title="Our Team &amp; Leads"
                  description="Meet the core leaders and members building AIML Club OCT."
                  animationDelay="delay-300"
                  iconBg="rgba(132,204,22,0.12)"
                  iconColor="rgb(132,204,22)"
                />
                <LinkCard
                  href={siteConfig.pages.gallery}
                  icon={<IconImage />}
                  title="Gallery"
                  description="Explore memorable moments from our events and sessions."
                  animationDelay="delay-350"
                  iconBg="rgba(168,85,247,0.12)"
                  iconColor="rgb(168,85,247)"
                />
                <LinkCard
                  href={siteConfig.pages.blog}
                  icon={<IconBlog />}
                  title="Blog &amp; Tech Articles"
                  description="Read technical write-ups, AI insights, and announcements."
                  animationDelay="delay-400"
                  iconBg="rgba(249,115,22,0.12)"
                  iconColor="rgb(249,115,22)"
                />
              </LinkSection>
            )}

            {/* ── 4. AIML Ecosystem ──────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "ecosystem") && (
              <LinkSection label="AIML Ecosystem &amp; Resources">
                <LinkCard
                  href={siteConfig.resources.github}
                  icon={<IconGitHub />}
                  title="GitHub Organization"
                  description="Explore open-source AI projects, codebases, and repositories."
                  animationDelay="delay-400"
                  iconBg="rgba(var(--bg-surface))"
                  iconColor="rgb(var(--accent-lime-bright))"
                  badge="Open Source"
                />
                <LinkCard
                  href={siteConfig.resources.notion}
                  icon={<IconBookOpen />}
                  title="Notion Knowledge Base"
                  description="Documentation, meeting notes, roadmaps, and event workspaces."
                  animationDelay="delay-450"
                  iconBg="rgba(59,130,246,0.12)"
                  iconColor="rgb(59,130,246)"
                />
                <LinkCard
                  href={siteConfig.resources.drive}
                  icon={<IconDrive />}
                  title="Media &amp; Brand Assets Drive"
                  description="Event photos, logos, branding assets, and promotional materials."
                  animationDelay="delay-450"
                  iconBg="rgba(34,197,94,0.12)"
                  iconColor="rgb(34,197,94)"
                />
                <LinkCard
                  href={siteConfig.pages.constitution}
                  icon={<IconScroll />}
                  title="Club Constitution"
                  description="Official bylaws, structure, and governance of AIML Club OCT."
                  animationDelay="delay-500"
                  iconBg="rgba(234,179,8,0.12)"
                  iconColor="rgb(234,179,8)"
                />
                <LinkCard
                  href={siteConfig.pages.updates}
                  icon={<IconBell />}
                  title="Announcements &amp; Updates"
                  description="Latest notices, workshop dates, and official announcements."
                  animationDelay="delay-500"
                  iconBg="rgba(249,115,22,0.12)"
                  iconColor="rgb(249,115,22)"
                />
                <LinkCard
                  href={siteConfig.pages.suggestions}
                  icon={<IconMessage />}
                  title="Suggestions Box"
                  description="Direct portal to submit suggestions to the AIML Club core team."
                  animationDelay="delay-550"
                  iconBg="rgba(132,204,22,0.12)"
                  iconColor="rgb(132,204,22)"
                />
                <LinkCard
                  href={siteConfig.resources.apkDrive}
                  icon={<IconPackage />}
                  title="APK Distribution Drive"
                  description="Download AIML Club official apps and test releases."
                  animationDelay="delay-550"
                  iconBg="rgba(168,85,247,0.12)"
                  iconColor="rgb(168,85,247)"
                />
                <LinkCard
                  href={siteConfig.socialHub}
                  icon={<IconGlobe />}
                  title="Social Links Hub"
                  description="Complete social directory on social.aimlclub.tech."
                  animationDelay="delay-600"
                  iconBg="rgba(34,211,238,0.12)"
                  iconColor="rgb(34,211,238)"
                />
              </LinkSection>
            )}

            {/* ── 5. Social Grid ─────────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "community") && (
              <SocialGrid />
            )}

            {/* ── 6. Feedback ────────────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "community") && (
              <FeedbackCard />
            )}

            {/* ── 7. QR Code ─────────────────────────────────────────────── */}
            {(activeTab === "all" || activeTab === "official") && (
              <QRCodeCard />
            )}

            {/* ── 8. Footer ──────────────────────────────────────────────── */}
            <Footer />
          </div>
        </div>
      </main>
    </>
  );
}
