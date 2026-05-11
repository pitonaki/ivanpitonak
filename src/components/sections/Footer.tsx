import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full border-t border-border py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-base font-bold tracking-tight">
            Ivan Pitoňák
          </span>
          <span className="h-3 w-px bg-border" />
          <span className="label-mono">OA Advanced Instructor</span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Všechna práva vyhrazena
          </span>
          <a
            href="#top"
            className="group inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="Nahoru"
          >
            <ArrowUp size={14} className="transition-transform group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
