# Sekce „Spolupracoval jsem" — pohyblivý pás log

## Cíl
Před patičkou přidat sekci s nadpisem **Spolupracoval jsem** a pod ním nekonečně plynoucí pás log firem (zprava doleva), vedle sebe.

## Co vznikne
1. Nová komponenta `src/components/sections/Partners.tsx`
   - Sekční hlavička ve stejném stylu jako ostatní sekce (`SectionLabel` s pořadovým číslem + `font-display` nadpis „Spolupracoval jsem").
   - Marquee pás: jeden řádek log, obsah zduplikovaný 2×, posun čistou CSS animací (`translateX(-50%)`, lineární, ~30 s, nekonečně).
   - Pauza při hoveru, plynulé prolnutí okrajů (fade maska vlevo/vpravo), aby loga nekončila ostře.
   - Loga: grayscale + snížená opacita, při hoveru plná barva — high-tech, nerušivé.
   - Respekt k `prefers-reduced-motion`: animace se vypne, pás zůstane statický a horizontálně scrollovatelný.
2. Registrace v `src/routes/index.tsx` mezi `Contact` a `Footer`.
3. Keyframes `marquee` doplnit do `src/styles.css` k ostatním animacím.

## Loga
Zatím nemám žádné soubory log. Nasadím sekci s dočasnými textovými placeholdery (názvy firem v rámečku ve stylu stránky) a jakmile pošleš PNG/SVG loga, nahradím je obrázky z `public/` (např. `/logos/nazev.png`).

## Technické detaily
- Bez backendu, čistě prezentační komponenta.
- Animace pouze CSS (žádná JS knihovna), tokeny z designového systému (`text-silver`, `label-mono`, `border-border`).
- Maska okrajů přes `mask-image: linear-gradient(...)`.
