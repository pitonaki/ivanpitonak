import { SectionLabel } from "../visuals/SectionLabel";

const partners = [
  { name: "Spartan Race", src: "/partners/spartan.png", scale: "scale-125" },
  { name: "Český tenis", src: "/partners/cesky-tenis.webp", scale: "scale-150" },
  { name: "Běhej lesy", src: "/partners/behej-lesy.svg", scale: "scale-90" },
  { name: "Český atletický svaz", src: "/partners/cesky-atleticky-svaz.png", scale: "scale-90" },
  { name: "Pozemní hokej Plzeň — Litice", src: "/partners/litice.jpeg" },
  { name: "Sportelo", src: "/partners/sportelo.png", scale: "scale-150" },
];


function LogoItem({
  name,
  src,
  scale,
}: {
  name: string;
  src: string;
  scale?: string;
}) {
  return (
    <div className="group/logo flex h-36 w-72 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-border bg-card px-6 py-5 transition-colors duration-300 hover:border-accent sm:h-40 sm:w-80">
      <img
        src={src}
        alt={name}
        loading="lazy"
        className={`max-h-full w-auto max-w-full object-contain opacity-70 grayscale transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 ${scale ?? ""}`}
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
            <LogoItem key={`${p.name}-${i}`} name={p.name} src={p.src} scale={p.scale} />
          ))}
        </div>
      </div>
    </section>
  );
}
