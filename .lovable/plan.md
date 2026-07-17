# Doplniť programovú možnosť: Děti a mládež

## Cieľ
V sekcii **Programy** na landing page pridať novú kartu, ktorá komunikuje, že konzultácie a workshopy sú dostupné aj pre deti hravou, interaktívnou formou – pre jednotlivcov, skupiny aj kluby.

## Implementačné kroky

1. **Editovať `src/components/sections/Programs.tsx`**
   - Pridať nový objekt do poľa `programs`:
     - **Názov:** Děti a mládež
     - **Pre koho:** Pro jednotlivce, skupiny i kluby
     - **Popis:** Hravá a interaktivní forma konzultací a workshopů pro děti. Naučí se základy zdravého nosního dýchání v pohodě a zábavně.
     - **Meta:** 6+ let · 45–90 min
   - Zvoliť ikonu v súlade s vizuálnym jazykom stránky (čisté, geometrické, high-tech AMG estetika, žiadny wellness vibe) – napr. `Sparkles` alebo `Smile` z `lucide-react`.
   - Použiť existujúce štýly karty: `bg-card`, border, hover glow, accent underline, CTA „Mám zájem →“.

2. **Responzívna mriežka**
   - Aktuálne sú 4 karty v `md:grid-cols-2` (2 + 2). S piatimi kartami sa rozloženie stane 3 + 2.
   - Ponechať `md:grid-cols-2`, ale prípadne zvážiť `lg:grid-cols-3` pre krajšie rozloženie, ak to plán/stránka pustí. Prednostne sa držať existujúceho 2-stĺpcového layoutu, aby sa nenarušila celková kompozícia, ale overiť vizuálne.

3. **Konzistencia s dizajnovým systémom**
   - Použiť `font-display`, `label-mono`, `text-silver`, `text-accent` podľa existujúcich tokenov.
   - Nezavádzať nové farby, ani meniť ostatné karty.

4. **Overenie**
   - Spustiť build (`bun run build` alebo `bun run dev` typecheck) a skontrolovať, že sa stránka načíta bez chýb.
   - V preview skontrolovať, že nová karta je viditeľná, dobre zarovnaná a hover efekty fungujú.

## Technické detaily
- Bez backendu, bez Lovable Cloud – len statická zmena v komponente.
- Ikonu importovať z `lucide-react`, ako ostatné karty.
- Text bude v češtine, aby ladil so zvyškom stránky.

## Texty (návrh)
- **Nadpis karty:** Děti a mládež
- **Label:** Pro jednotlivce, skupiny i kluby
- **Popis:** Hravá a interaktivní forma konzultací a workshopů pro děti. Základy zdravého nosního dýchání v pohodě a zábavně.
- **Meta:** 6+ let · 45–90 min