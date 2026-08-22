// Pure CSS static ambient background — zero JS loops, zero canvas rendering, 0% idle CPU/GPU load
export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow-lime" />
      <div className="ambient-glow-cyan" />
    </div>
  );
}
