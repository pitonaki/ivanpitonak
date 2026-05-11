import { useMemo } from "react";

export function Particles({ count = 30, className = "" }: { count?: number; className?: string }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
        delay: Math.random() * 8,
        duration: 8 + Math.random() * 10,
        accent: Math.random() > 0.85,
      })),
    [count],
  );

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {dots.map((d) => (
        <span
          key={d.id}
          className="absolute rounded-full animate-drift"
          style={{
            top: `${d.top}%`,
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            background: d.accent ? "oklch(0.85 0.14 195)" : "oklch(1 0 0)",
            opacity: d.accent ? 0.5 : 0.25,
            animationDelay: `${d.delay}s`,
            animationDuration: `${d.duration}s`,
            boxShadow: d.accent ? "0 0 8px oklch(0.85 0.14 195 / 0.6)" : "none",
          }}
        />
      ))}
    </div>
  );
}
