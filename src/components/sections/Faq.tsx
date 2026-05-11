import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionLabel } from "../visuals/SectionLabel";

const faqs = [
  {
    q: "Pro koho je Oxygen Advantage vhodný?",
    a: "Pro kohokoliv od 12 let — sportovce, manažery, lidi se sníženou výkonností, problémy se spánkem nebo úzkostí. Metoda je funkční a nenáročná na vstup.",
  },
  {
    q: "Existují kontraindikace?",
    a: "Ano, určitá zdravotní omezení (pokročilá srdeční selhání, neléčená hypertenze, těhotenství u některých technik). Před začátkem proberu zdravotní stav v dotazníku.",
  },
  {
    q: "Jak probíhá první konzultace?",
    a: "90 minut online nebo osobně v Praze. Změřím BOLT skóre, projdeme tvé cíle, naučíš se tři základní techniky a dostaneš plán na první 2 týdny.",
  },
  {
    q: "Online nebo osobně?",
    a: "Obojí. Většina klientů jede online, osobní setkání nabízím v Praze a okolí. Workshopy a skupinové programy také hybridně.",
  },
  {
    q: "Kdy uvidím první výsledky?",
    a: "Klid v hlavě a kvalitnější spánek typicky během 7–10 dní. Výkonnostní posun (BOLT, ekonomika dechu) za 4–8 týdnů konzistentního tréninku.",
  },
  {
    q: "Kolik to stojí?",
    a: "Cena záleží na formátu. Konkrétní nabídku ti pošlu po krátkém úvodním hovoru, ať vybereme správný program.",
  },
  {
    q: "Potřebuji nějaké pomůcky?",
    a: "Ne. Stačí tvé tělo a chuť. Pokročilejším doporučím SportsMask nebo pulzní oxymetr, ale nejsou nutné.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="relative w-full border-t border-border py-32 sm:py-40">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionLabel index="04">FAQ</SectionLabel>
            <h2 className="font-display mt-6 text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight">
              Časté<br />
              <span className="text-silver">otázky.</span>
            </h2>
            <p className="mt-6 text-sm text-silver leading-relaxed">
              Odpovědi na nejčastější dotazy. Nenašel jsi to, co tě zajímá?
              Napiš mi přímo.
            </p>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={f.q}
                  value={`item-${i}`}
                  className="border-border"
                >
                  <AccordionTrigger className="py-6 text-left text-base sm:text-lg font-medium hover:text-accent hover:no-underline transition-colors">
                    <span className="flex items-baseline gap-4">
                      <span className="font-mono text-xs text-muted-foreground tracking-widest">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {f.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-12 text-silver leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
