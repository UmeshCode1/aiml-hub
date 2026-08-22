import { ReactNode } from "react";

interface LinkSectionProps {
  label: string;
  children: ReactNode;
}

export function LinkSection({ label, children }: LinkSectionProps) {
  return (
    <section aria-label={label}>
      <div className="mb-3 px-1">
        <span className="section-label">{label}</span>
      </div>
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
