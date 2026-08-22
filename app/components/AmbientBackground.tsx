// Ambient background — pure CSS, no canvas, no JS, battery-friendly
export function AmbientBackground() {
  return (
    <div className="ambient-bg" aria-hidden="true">
      <div className="ambient-grid" />
      <div className="ambient-glow-lime" />
      <div className="ambient-glow-cyan" />
    </div>
  );
}
