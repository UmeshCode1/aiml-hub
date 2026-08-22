"use client";

import { ReactNode, useRef } from "react";

interface LinkCardProps {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
  animationDelay?: string;
  iconBg?: string;
  iconColor?: string;
  isExternal?: boolean;
  badge?: string;
}

export function LinkCard({
  href,
  icon,
  title,
  description,
  animationDelay = "",
  iconBg = "rgba(var(--bg-surface))",
  iconColor = "rgb(var(--accent-lime-bright))",
  isExternal = true,
  badge,
}: LinkCardProps) {
  const cardRef = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const externalProps = isExternal
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      ref={cardRef}
      href={href}
      onMouseMove={handleMouseMove}
      {...externalProps}
      className={`link-card group ${animationDelay ? `animate-fade-up ${animationDelay}` : ""}`}
      aria-label={`${title} — ${description}${isExternal ? " (opens in new tab)" : ""}`}
    >
      {/* Icon Badge */}
      <div
        className="icon-wrap"
        style={{ background: iconBg, color: iconColor }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Text Hierarchy */}
      <div className="flex flex-col gap-0.5 min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-sm sm:text-base font-bold leading-snug text-[rgb(var(--text-primary))] group-hover:text-[rgb(var(--accent-lime-bright))] transition-colors truncate">
            {title}
          </span>
          {badge && (
            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-[rgba(var(--accent-lime-glow))] text-[rgb(var(--accent-lime-bright))] border border-[rgba(var(--border-accent))] flex-shrink-0">
              {badge}
            </span>
          )}
        </div>
        <span className="text-xs leading-relaxed text-[rgb(var(--text-secondary))] line-clamp-2">
          {description}
        </span>
      </div>

      {/* Animated Action Arrow */}
      <svg
        className="link-arrow"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </svg>
    </a>
  );
}
