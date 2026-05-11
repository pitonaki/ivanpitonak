import { motion } from "framer-motion";
import { Wind, Gauge, Mountain, Waves } from "lucide-react";
import { SectionLabel } from "../visuals/SectionLabel";

const pillars = [
  {
    n: "01",
    icon: Wind,
    title: "Nosní dýchání",
    text: "Filtrace, zvlhčení a optimalizace každého nádechu. Aktivace bránice a parasympatiku.",
  },
  {
    n: "02",
    icon: Gauge,
    title: "Tolerance CO₂",
    text: "Trénink chemoreceptorů pro vyšší ekonomiku dechu a oddálení únavy při zátěži.",
  },
  {
    n: "03",
    icon: Mountain,
    title: "Simulace výšky",
    text: "Hypoxický a hyperkapnický trénink — adaptace bez nutnosti vysokohorského pobytu.",
  },
  {
    n: "04",
    icon: Waves,
    title: "Dechová mechanika",
    text: "Pomalé, lehké a hluboké dýchání. Tichý dech jako základ regenerace a fokusu.",
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
            přenastavit způsob, jakým dýcháte — 24 hodin denně.
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
      </div>
    </section>
  );
}
