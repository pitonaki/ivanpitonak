import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import rebreathLogo from "@/assets/rebreath-logo.png.asset.json";

const links = [
  { href: "#metoda", label: "Metoda" },
  { href: "#benefity", label: "Benefity" },
  { href: "#programy", label: "Programy" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/70 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-3 group">
          <span className="font-display text-lg font-bold tracking-tight">IP</span>
          <span className="h-4 w-px bg-border" />
          <img
            src={oaLogo}
            alt="Oxygen Advantage"
            className="h-4 w-auto logo-invert opacity-80 group-hover:opacity-100 transition-opacity"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-silver hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="hidden md:inline-flex h-9 items-center rounded-sm border border-foreground/80 bg-foreground px-4 text-xs font-medium uppercase tracking-widest text-background transition-all hover:bg-accent hover:border-accent hover:text-accent-foreground"
        >
          Rezervovat
        </a>

        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-silver hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-10 items-center justify-center rounded-sm bg-foreground px-4 text-xs font-medium uppercase tracking-widest text-background"
            >
              Rezervovat konzultaci
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
