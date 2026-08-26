import { SectionLabel } from "../visuals/SectionLabel";

const partners = [
  "Partner 01",
  "Partner 02",
  "Partner 03",
  "Partner 04",
  "Partner 05",
  "Partner 06",
];

function LogoItem({ name }: { name: string }) {
  return (
    <div className="group flex h-20 shrink-0 items-center justify-center rounded-sm border border-border bg-card px-10 transition-all duration-300 hover:border-accent">
      <span className="label-mono whitespace-nowrap text-silver transition-colors duration-300 group-hover:text-accent">
        {name}
      </span>
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
        <SectionLabel index="06">Reference</SectionLabel>
        <h2 className="font-display mt-6 text-3xl sm:text-4xl font-semibold leading-[1.05] tracking-tight">
          Spolupracoval <span className="text-silver">jsem.</span>
        </h2>
      </div>

      <div className="marquee-mask group relative mt-12 w-full overflow-hidden">
        <div className="marquee-track flex w-max gap-6 pl-6">
          {track.map((name, i) => (
            <LogoItem key={`${name}-${i}`} name={name} />
          ))}
        </div>
      </div>
    </section>
  );
}
