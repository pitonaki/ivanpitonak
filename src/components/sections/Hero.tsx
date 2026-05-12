import { motion } from "framer-motion";
import { ArrowRight, Activity } from "lucide-react";
import { TelemetryGrid } from "../visuals/TelemetryGrid";
import { BreathWave } from "../visuals/BreathWave";
import { Particles } from "../visuals/Particles";
import ivanPhoto from "@/assets/ivan.jpg";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen w-full items-center overflow-hidden pt-20"
    >
      <TelemetryGrid />
      <BreathWave />
      <Particles count={36} />

      {/* radial fade to background */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, transparent 0%, oklch(0.985 0.002 220 / 0.55) 70%, oklch(0.985 0.002 220) 100%)",
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center gap-3 label-mono"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            OXYGEN ADVANTAGE · ADVANCED INSTRUCTOR
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="font-display mt-8 max-w-4xl text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.95] tracking-tighter"
          >
            Dýchej líp.
            <br />
            <span className="text-silver">Výkon</span>{" "}
            <span className="relative inline-block">
              výš
              <span className="absolute -bottom-2 left-0 h-px w-full bg-accent shadow-[0_0_12px_oklch(0.7_0.13_195_/_0.7)]" />
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-8 max-w-xl text-base sm:text-lg text-silver leading-relaxed"
          >
            Funkční dechový trénink podle metody Patricka McKeowna. Vědecky
            podložené techniky pro vyšší sportovní výkon, hlubší regeneraci a
            klidnou nervovou soustavu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#kontakt"
              className="group inline-flex h-12 items-center gap-3 rounded-sm bg-foreground px-6 text-sm font-medium uppercase tracking-widest text-background transition-all hover:bg-accent"
            >
              Rezervovat konzultaci
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#metoda"
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-border px-6 text-sm font-medium uppercase tracking-widest text-foreground hover:border-foreground transition-colors"
            >
              Co je metoda
            </a>
          </motion.div>
        </div>

        {/* Portrait + HUD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:col-span-5"
        >
          <div
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm border border-border bg-card"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <img
              src={ivanPhoto}
              alt="Ivan Pitoňák — certifikovaný Oxygen Advantage Advanced Instructor"
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* subtle gradient over photo */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

            {/* name badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
              <div>
                <div className="label-mono text-background/80">— Instruktor</div>
                <div className="font-display mt-1 text-xl font-semibold text-background tracking-tight">
                  Ivan Pitoňák
                </div>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-background/80">
                CZ · OA Advanced
              </span>
            </div>
          </div>

          {/* HUD card overlapping bottom-left */}
          <div className="absolute -bottom-8 -left-6 hidden w-56 rounded-sm border border-border bg-card/95 p-4 backdrop-blur-md sm:block"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            <div className="flex items-center justify-between label-mono">
              <span className="flex items-center gap-2">
                <Activity size={12} className="text-accent" />
                LIVE TELEMETRY
              </span>
              <span className="animate-pulse-dot text-accent">●</span>
            </div>
            <div className="mt-4 space-y-2.5">
              <Metric label="SpO₂" value="98" unit="%" />
              <Metric label="HR" value="54" unit="bpm" />
              <Metric label="BOLT" value="42" unit="s" highlight />
              <Metric label="BREATH" value="5.5" unit="/min" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}

function Metric({
  label,
  value,
  unit,
  highlight,
}: {
  label: string;
  value: string;
  unit: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-baseline justify-between font-mono text-xs">
      <span className="text-muted-foreground">{label}</span>
      <span className="flex items-baseline gap-1">
        <span className={`text-lg ${highlight ? "text-accent" : "text-foreground"}`}>
          {value}
        </span>
        <span className="text-muted-foreground">{unit}</span>
      </span>
    </div>
  );
}
