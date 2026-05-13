import { motion } from "framer-motion";
import { Wind, Gauge, Mountain, Waves } from "lucide-react";
import { SectionLabel } from "../visuals/SectionLabel";

const pillars = [
  {
    n: "01",
    icon: Wind,
    title: "Dýchání nosem",
    text: "Filtrace, zvlhčení a optimalizace každého nádechu. Aktivace bránice a parasympatiku.",
  },
  {
    n: "02",
    icon: Gauge,
    title: "Tolerance CO₂",
    text: "Trénink chemoreceptorů pro vyšší ekonomiku dechu a oddálení nástupu kyseliny mléčné a únavy při zátěži.",
  },
  {
    n: "03",
    icon: Mountain,
    title: "Simulace vysoké nadmořské výšky",
    text: "Hypoxický a hyperkapnický trénink — zvyšuje anaerobní práh a stimuluje anaerobní glykolýzu bez nutnosti vysokohorského pobytu.",
  },
  {
    n: "04",
    icon: Waves,
    title: "Dechová mechanika",
    text: "Pomalé, lehké a hluboké dýchání. Tichý dech jako základ regenerace a soustředění.",
  },
];

export function Method() {
  return (
    <section id="metoda" className="relative w-full py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="01">Metoda</SectionLabel>

        <div className="mt-6 grid gap-12 lg:grid-cols-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight lg:col-span-7"
          >
            Funkční dechový trénink<br />
            <span className="text-silver">postavený na vědě.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-silver lg:col-span-5 text-base leading-relaxed lg:pt-2"
          >
            Oxygen Advantage® je metoda Patricka McKeowna, která propojuje
            sportovní fyziologii, biochemii dýchání a neurovědu. Cílem je
            přenastavit způsob, jakým dýcháte — 24 hodin denně. Vhodná je i pro
            lidi, kteří se rychle zadýchávají nebo trpí pocitem dušnosti.
          </motion.p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden border border-border sm:grid-cols-2 lg:grid-cols-4 bg-border">
          {pillars.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative bg-background p-8 transition-colors hover:bg-card"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground tracking-widest">
                  {p.n}
                </span>
                <p.icon
                  size={20}
                  className="text-silver group-hover:text-accent transition-colors"
                />
              </div>
              <h3 className="font-display mt-12 text-2xl font-medium tracking-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-silver">{p.text}</p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>

        {/* Infographic blocks */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <BohrEffectCard />
          <CadenceCard />
          <BoltScaleCard />
        </div>
      </div>
    </section>
  );
}

function BohrEffectCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-sm border border-border bg-card p-8 lg:col-span-2"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center justify-between label-mono">
        <span className="text-accent">— Bohrův efekt</span>
        <span className="text-muted-foreground">FYZIOLOGIE · 1904</span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
            Více CO₂ = více kyslíku <span className="text-silver">do svalů.</span>
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-silver">
            Hemoglobin uvolňuje kyslík do tkání ochotněji v prostředí s vyšší
            koncentrací CO₂. Trénink tolerance CO₂ proto zlepšuje okysličení
            svalů, mozku a srdce — i při stejném nádechu.
          </p>
        </div>

        {/* Diagram */}
        <div className="relative lg:col-span-3">
          <svg viewBox="0 0 400 200" className="h-auto w-full" aria-hidden>
            <defs>
              <linearGradient id="bohr-line" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.7 0.13 195)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="oklch(0.7 0.13 195)" stopOpacity="1" />
              </linearGradient>
            </defs>
            {/* axes */}
            <line x1="40" y1="170" x2="380" y2="170" stroke="currentColor" strokeOpacity="0.2" />
            <line x1="40" y1="20" x2="40" y2="170" stroke="currentColor" strokeOpacity="0.2" />
            {/* gridlines */}
            {[50, 90, 130].map((y) => (
              <line key={y} x1="40" x2="380" y1={y} y2={y} stroke="currentColor" strokeOpacity="0.08" strokeDasharray="2 4" />
            ))}
            {/* sigmoid curve - normal */}
            <motion.path
              d="M40,160 C100,158 150,150 200,110 C240,70 280,35 380,28"
              fill="none"
              stroke="currentColor"
              strokeOpacity="0.35"
              strokeWidth="1.5"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4 }}
            />
            {/* sigmoid - shifted (Bohr) */}
            <motion.path
              d="M40,168 C120,165 180,158 240,110 C290,55 320,30 380,24"
              fill="none"
              stroke="url(#bohr-line)"
              strokeWidth="2.25"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 0.2 }}
            />
            {/* labels */}
            <text x="42" y="14" className="font-mono" fontSize="9" fill="currentColor" opacity="0.55">
              SATURACE O₂ (%)
            </text>
            <text x="320" y="186" className="font-mono" fontSize="9" fill="currentColor" opacity="0.55">
              pCO₂ →
            </text>
            <text x="250" y="60" className="font-mono" fontSize="10" fill="oklch(0.7 0.13 195)">
              ↑ uvolňování O₂
            </text>
          </svg>
          <div className="mt-2 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span className="flex items-center gap-2"><span className="h-px w-6 bg-accent" /> Trénovaný dech</span>
            <span className="flex items-center gap-2"><span className="h-px w-6 bg-foreground/40" /> Běžný dech</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CadenceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative overflow-hidden rounded-sm border border-border bg-card p-8"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center justify-between label-mono">
        <span className="text-accent">— Optimální kadence</span>
        <span className="text-muted-foreground">5,5 / min</span>
      </div>

      <h4 className="font-display mt-6 text-2xl font-medium tracking-tight leading-tight">
        Rezonanční dech
      </h4>
      <p className="mt-3 text-sm leading-relaxed text-silver">
        Vdech 5,5 s · výdech 5,5 s. Maximalizuje HRV a synchronizuje srdce,
        plíce a nervový systém.
      </p>

      {/* breathing animation */}
      <div className="mt-8 flex h-32 items-center justify-center">
        <motion.div
          className="rounded-full border border-accent/40"
          style={{ background: "radial-gradient(circle, oklch(0.7 0.13 195 / 0.25), transparent 70%)" }}
          animate={{ scale: [0.55, 1, 0.55] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="h-24 w-24" />
        </motion.div>
      </div>

      <div className="mt-4 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        <span>↑ Nádech 5,5 s</span>
        <span>Výdech 5,5 s ↓</span>
      </div>
    </motion.div>
  );
}

function BoltScaleCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-sm border border-border bg-card p-8 lg:col-span-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-center justify-between label-mono">
        <span className="text-accent">— BOLT skóre</span>
        <span className="text-muted-foreground">VSTUPNÍ DIAGNOSTIKA</span>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-5 lg:items-center">
        <div className="lg:col-span-2">
          <h4 className="font-display text-2xl sm:text-3xl font-medium tracking-tight leading-tight">
            Změř svou toleranci CO₂.
          </h4>
          <p className="mt-3 text-sm leading-relaxed text-silver">
            Body Oxygen Level Test je rychlý ukazatel funkčního dýchání. Cílem
            tréninku je dlouhodobě posunout skóre nad 40 sekund.
          </p>
        </div>

        <div className="lg:col-span-3">
          {/* scale */}
          <div className="relative h-3 w-full overflow-hidden rounded-full bg-foreground/10">
            <div className="absolute inset-y-0 left-0 w-1/4 bg-foreground/30" />
            <div className="absolute inset-y-0 left-1/4 w-1/4 bg-foreground/50" />
            <div className="absolute inset-y-0 left-2/4 w-1/4 bg-accent/60" />
            <div className="absolute inset-y-0 left-3/4 w-1/4 bg-accent" />
            <motion.div
              className="absolute -top-1 h-5 w-px bg-foreground"
              initial={{ left: "0%" }}
              whileInView={{ left: "70%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, ease: "easeOut", delay: 0.3 }}
            >
              <span className="absolute -top-6 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest">
                cíl 40 s+
              </span>
            </motion.div>
          </div>
          <div className="mt-3 grid grid-cols-4 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            <span>&lt; 10 s · dušnost</span>
            <span>10–20 s · slabé</span>
            <span>20–40 s · průměr</span>
            <span className="text-accent">40+ s · elite</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
