import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import { SectionLabel } from "../visuals/SectionLabel";

function CountUp({ from = 0, to, prefix = "", suffix = "" }: { from?: number; to: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mv = useMotionValue(from);
  const rounded = useTransform(mv, (v) => `${prefix}${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration: 1.6, ease: [0.16, 1, 0.3, 1] });
    return () => controls.stop();
  }, [inView, mv, to]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

const benefits = [
  {
    cat: "Sport",
    statValue: 12,
    statPrefix: "+",
    statSuffix: "%",
    label: "VO₂max po 6 týdnech",
    points: [
      "Vyšší vytrvalost a ekonomika dechu",
      "Rychlejší regenerace mezi intervaly",
      "Stabilní výkon v zóně 2",
    ],
  },
  {
    cat: "Spánek",
    statValue: 65,
    statPrefix: "−",
    statSuffix: "%",
    label: "snížení chrápání",
    points: [
      "Hlubší a kontinuální REM fáze",
      "Probuzení s vyšší energií",
      "Méně nočních probuzení",
    ],
  },
  {
    cat: "Stres",
    statValue: 24,
    statPrefix: "+",
    statSuffix: "%",
    label: "růst HRV",
    points: [
      "Aktivace parasympatiku",
      "Lepší fokus a klidnější mysl",
      "Odolnost vůči akutnímu stresu",
    ],
  },
];

export function Benefits() {
  return (
    <section id="benefity" className="relative w-full border-t border-border py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <SectionLabel index="02">Benefity</SectionLabel>
            <h2 className="font-display mt-6 max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Tři systémy.<br />
              <span className="text-silver">Měřitelný posun.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-silver leading-relaxed">
            Výsledky vycházejí z publikovaných studií a metrik mých klientů
            (BOLT skóre, HRV, SpO₂, výkonnostní testy).
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <motion.div
              key={b.cat}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex flex-col gap-8 rounded-sm border border-border bg-card p-8"
            >
              <div className="flex items-center justify-between">
                <span className="label-mono text-foreground">{b.cat}</span>
                <span className="h-px flex-1 ml-4 bg-border" />
              </div>

              <div>
                <div className="font-display text-6xl sm:text-7xl font-semibold tracking-tighter text-foreground">
                  {b.stat}
                </div>
                <div className="mt-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {b.label}
                </div>
              </div>

              <ul className="space-y-3 border-t border-border pt-6">
                {b.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm text-silver">
                    <span className="mt-2 h-px w-3 bg-accent flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
