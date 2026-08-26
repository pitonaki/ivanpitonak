import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, ArrowRight, ArrowUpRight } from "lucide-react";
import { SectionLabel } from "../visuals/SectionLabel";
import { BreathWave } from "../visuals/BreathWave";

export function Contact() {
  return (
    <section id="kontakt" className="relative w-full overflow-hidden border-t border-border py-32 sm:py-40">
      <BreathWave className="opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel index="06">Kontakt</SectionLabel>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="font-display mt-6 max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tighter"
        >
          Připraven posunout<br />
          svůj <span className="text-accent">dech</span>?
        </motion.h2>

        <p className="mt-8 max-w-xl text-base text-silver leading-relaxed">
          Napiš mi, co řešíš a co od dechového tréninku očekáváš. Ozvu se do
          24 hodin a domluvíme se na nejlepším formátu.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="mailto:petra@ivanpitonak.cz"
            className="group inline-flex h-14 items-center gap-3 rounded-sm bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-all hover:bg-accent"
          >
            Napsat email
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-20">
          <h3 className="font-display text-3xl sm:text-4xl font-medium tracking-tight mb-8 text-silver">
            Spojte se s námi
          </h3>
          <div className="grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-4 bg-border">
            <ContactCard
              icon={Mail}
              label="Instruktor"
              value="Ivan Pitoňák"
              sub="ivan@ivanpitonak.cz"
              href="mailto:ivan@ivanpitonak.cz"
            />
            <ContactCard
              icon={Mail}
              label="Operatíva & Podpora"
              value="Petra Pitoňáková"
              sub="petra@ivanpitonak.cz"
              href="mailto:petra@ivanpitonak.cz"
            />
            <ContactCard
              icon={Instagram}
              label="Instagram"
              value="@ivanpitonak_"
              href="https://www.instagram.com/ivanpitonak_"
            />
            <ContactCard
              icon={Youtube}
              label="YouTube"
              value="@ivanpitonak"
              href="https://www.youtube.com/@ivanpitonak"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  sub,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  sub?: string;
  href?: string;
}) {
  const content = (
    <div className="group relative h-full overflow-hidden bg-background p-8 transition-all duration-500 hover:bg-card">
      {/* corner brackets */}
      <span className="pointer-events-none absolute left-2 top-2 h-3 w-3 border-l border-t border-accent/0 transition-all duration-300 group-hover:border-accent group-hover:left-3 group-hover:top-3" />
      <span className="pointer-events-none absolute right-2 top-2 h-3 w-3 border-r border-t border-accent/0 transition-all duration-300 group-hover:border-accent group-hover:right-3 group-hover:top-3" />
      <span className="pointer-events-none absolute left-2 bottom-2 h-3 w-3 border-l border-b border-accent/0 transition-all duration-300 group-hover:border-accent group-hover:left-3 group-hover:bottom-3" />
      <span className="pointer-events-none absolute right-2 bottom-2 h-3 w-3 border-r border-b border-accent/0 transition-all duration-300 group-hover:border-accent group-hover:right-3 group-hover:bottom-3" />

      {/* scan line sweep */}
      <span className="pointer-events-none absolute inset-x-0 top-0 h-px translate-x-[-100%] bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-[100%] group-hover:opacity-100" />

      {/* glow */}
      <span className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 [background:radial-gradient(120%_60%_at_50%_0%,oklch(0.7_0.13_195/0.18),transparent_70%)]" />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex items-center justify-between">
          <Icon
            size={20}
            className="text-silver transition-all duration-300 group-hover:text-accent group-hover:scale-110 group-hover:[filter:drop-shadow(0_0_6px_oklch(0.7_0.13_195/0.6))]"
          />
          <ArrowUpRight
            size={16}
            className="-translate-x-1 translate-y-1 text-silver opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent group-hover:opacity-100"
          />
        </div>
        <div>
          <div className="label-mono transition-colors duration-300 group-hover:text-accent">{label}</div>
          <div className="mt-2 font-display text-xl font-medium tracking-tight">{value}</div>
          {sub && (
            <div className="mt-1 text-sm text-silver transition-colors duration-300 group-hover:text-foreground">
              {sub}
            </div>
          )}
        </div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="block focus:outline-none focus-visible:ring-1 focus-visible:ring-accent"
    >
      {content}
    </a>
  ) : (
    content
  );
}
