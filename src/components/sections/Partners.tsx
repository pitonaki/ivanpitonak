import { SectionLabel } from "../visuals/SectionLabel";
import spartan from "@/assets/spartan.png.asset.json";
import ceskyTenis from "@/assets/cesky-tenis.png.asset.json";
import ceskaAtletika from "@/assets/cesky-atleticky-svaz.png.asset.json";
import litice from "@/assets/litice.jpeg.asset.json";
import sportelo from "@/assets/sportelo.png.asset.json";

const partners = [
  { name: "Spartan Race", src: spartan.url },
  { name: "Český tenis", src: ceskyTenis.url },
  { name: "Běhej lesy", src: "/partners/behej-lesy.svg" },
  { name: "Český atletický svaz", src: ceskaAtletika.url },
  { name: "Pozemní hokej Plzeň — Litice", src: litice.url },
  { name: "Sportelo", src: sportelo.url },
];

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <div className="group/logo flex h-24 w-56 shrink-0 items-center justify-center rounded-sm border border-border bg-card px-8 transition-colors duration-300 hover:border-accent">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className="max-h-12 w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0"
      />
    </div>
  );
}

export function Partners() {
  const track = [...partners, ...partners];

  return (
    <section
      id="spoluprace"
      className="relative w-full border-t border-border py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel index="05">Reference</SectionLabel>
        <h2 className="font-display mt-6 text-3xl sm:text-4xl font-semibold leading-[1.05] tracking-tight">
          Spolupracoval <span className="text-silver">jsem.</span>
        </h2>
      </div>

      <div className="marquee-mask group relative mt-12 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6 pl-6">
          {track.map((p, i) => (
            <LogoItem key={`${p.name}-${i}`} name={p.name} src={p.src} />
          ))}
        </div>
      </div>
    </section>
  );
}
