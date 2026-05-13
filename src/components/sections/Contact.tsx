import { motion } from "framer-motion";
import { Mail, Instagram, Youtube, MapPin, ArrowRight } from "lucide-react";
import { SectionLabel } from "../visuals/SectionLabel";
import { BreathWave } from "../visuals/BreathWave";

export function Contact() {
  return (
    <section id="kontakt" className="relative w-full overflow-hidden border-t border-border py-32 sm:py-40">
      <BreathWave className="opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-grid-fade" />

      <div className="relative mx-auto max-w-7xl px-6">
        <SectionLabel index="05">Kontakt</SectionLabel>

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
            href="mailto:ivan@ivanpitonak.cz"
            className="group inline-flex h-14 items-center gap-3 rounded-sm bg-foreground px-8 text-sm font-medium uppercase tracking-widest text-background transition-all hover:bg-accent"
          >
            Napsat email
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-20 grid gap-px border border-border sm:grid-cols-2 lg:grid-cols-4 bg-border">
          <ContactCard
            icon={Mail}
            label="Email"
            value="ivan@ivanpitonak.cz"
            href="mailto:ivan@ivanpitonak.cz"
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
          <ContactCard icon={MapPin} label="Lokalita" value="Česko / Slovensko & online" />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex h-full flex-col justify-between gap-8 bg-background p-8 transition-colors hover:bg-card">
      <Icon size={20} className="text-silver group-hover:text-accent transition-colors" />
      <div>
        <div className="label-mono">{label}</div>
        <div className="mt-2 font-display text-xl font-medium tracking-tight">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}
