export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 label-mono">
      <span className="text-accent">— {index}</span>
      <span>{children}</span>
    </div>
  );
}
