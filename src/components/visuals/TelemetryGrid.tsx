export function TelemetryGrid({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 bg-grid bg-grid-fade ${className}`}
      aria-hidden
    />
  );
}
