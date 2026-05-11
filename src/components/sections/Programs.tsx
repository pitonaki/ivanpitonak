import { motion } from "framer-motion";
import { ArrowUpRight, User, Users, UsersRound, Target } from "lucide-react";
import { SectionLabel } from "../visuals/SectionLabel";

const programs = [
  {
    icon: User,
    name: "Individuální konzultace",
    for: "Pro každého, kdo chce začít",
    desc: "Vstupní diagnostika, BOLT test, plán na míru a první sada technik. Ideální start.",
    meta: "1 osoba · 90 min",
  },
  {
    icon: Users,
    name: "Workshop",
    for: "Pro skupiny do 15 osob",
    desc: "Půldenní workshop pro firmy, sportovní týmy nebo komunity. Teorie i praxe.",
    meta: "max 15 osob · 4 h",
  },
  {
    icon: UsersRound,
    name: "Skupinový program",
    for: "Pro malé skupiny do 5 osob",
    desc: "8týdenní průvodcovaný program s pravidelnými setkáními a komunitou.",
    meta: "max 5 osob · 8 týdnů",
  },
  {
    icon: Target,
    name: "Plán pro sportovce",
    for: "Pro výkonnostní a profi sportovce",
    desc: "Individuální dechový protokol napojený na tréninkový cyklus, hypoxický trénink.",
    meta: "1:1 · průběžně",
  },
];

export function Programs() {
  return (
    <section id="programy" className="relative w-full border-t border-border py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="03">Programy</SectionLabel>
        <h2 className="font-display mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
          Vyber formát,<br />
          <span className="text-silver">který sedne tvému cíli.</span>
        </h2>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {programs.map((p, i) => (
            <motion.a
              href="#kontakt"
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative flex flex-col gap-6 overflow-hidden rounded-sm border border-border bg-card p-8 transition-all duration-300 hover:border-accent/60 hover:-translate-y-1"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="flex items-start justify-between">
                <p.icon size={26} className="text-foreground group-hover:text-accent transition-colors" />
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-accent transition-all group-hover:rotate-12"
                />
              </div>

              <div>
                <div className="label-mono text-accent">{p.for}</div>
                <h3 className="font-display mt-3 text-2xl sm:text-3xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-3 text-sm text-silver leading-relaxed">{p.desc}</p>
              </div>

              <div className="mt-2 flex items-center justify-between border-t border-border pt-5">
                <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {p.meta}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-foreground group-hover:text-accent transition-colors">
                  Mám zájem →
                </span>
              </div>

              {/* glow line */}
              <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
