
# Oxygen Advantage – Landing Page

Jednostránkový web v češtině pro Ivana Pitoňáka, certifikovaného Oxygen Advantage instruktora. Vizuální jazyk: hluboká černá, bílá typografie, stříbrné akcenty, minimální turkysové highlighty (AMG F1). Bez wellness/yoga estetiky – čistý high-tech performance vibe.

## Sekce (v tomto pořadí)

1. **Navigace** – fixní, průhledná s blur efektem. Logo „IP / OXYGEN ADVANTAGE", odkazy na kotvy: Metoda, Benefity, Programy, FAQ, Kontakt. CTA „Rezervovat konzultaci".
2. **Hero** – fullscreen černá plocha. Velký display headline („Dýchej líp. Výkon výš."), podtitul, jméno + titul Ivan Pitoňák, dvě CTA tlačítka. Na pozadí animované telemetrické křivky (SVG dechová vlna), jemné částice, scanline grid. Vpravo dole malé „live" metriky stylizované jako HUD (SpO₂, BPM, CO₂ tolerance).
3. **Metoda** – co je Oxygen Advantage, krátký intro odstavec + 3–4 pilíře (Nosní dýchání, CO₂ tolerance, Simulace výšky, Dechová mechanika) jako karty s ikonami a velkými čísly 01–04.
4. **Benefity** – 3 sloupce: Sport (vytrvalost, VO₂max), Spánek (regenerace, snížený chrápání), Stres (HRV, nervový systém). Každý sloupec s velkým číselným statistikem stylem dashboard.
5. **Programy** – 4 karty:
   - Individuální konzultace
   - Workshop (max 15 osob)
   - Skupinový program (max 5 osob)
   - Plán na míru pro sportovce
   Karty mají hover stav s turkysovým glow okrajem, krátký popis, pro koho je určen, CTA „Mám zájem".
6. **FAQ** – accordion (shadcn) s 6–8 otázkami (vhodnost pro koho, kontraindikace, jak probíhá konzultace, online vs offline, cena, výsledky atd.).
7. **Kontakt** – statická sekce: email, telefon (placeholder), Instagram odkaz, lokalita. Velké CTA „Napište mi" s `mailto:`. Žádný backend.
8. **Footer** – minimální, copyright, jméno, odkaz nahoru.

## Design system (src/styles.css)

- Background: `oklch(0.05 0 0)` (deep black)
- Foreground: `oklch(0.98 0 0)` (white)
- Muted: `oklch(0.65 0 0)` (silver)
- Border: `oklch(0.18 0 0)`
- Accent (turquoise AMG): `oklch(0.82 0.15 190)` – používat extrémně střídmě (CTA hover, čísla highlights, podtržení 1px linie)
- Card: `oklch(0.08 0 0)` s `oklch(0.18 0 0)` border
- Gradient pro glow efekty: `--gradient-accent` od accent k transparent
- Shadow: `--shadow-glow: 0 0 40px oklch(0.82 0.15 190 / 0.15)`

## Typografie

- Display heading: **Space Grotesk** (700/500) – tech, geometric
- Body: **Inter** (400/500) – čisté, neutrální
- Mono accent (čísla, labels): **JetBrains Mono** (uppercase, letter-spacing, malé) – pro „01", „SPO₂ 98%", section labels typu „— 02 / METODA"
- Velmi silná hierarchie: hero headline ~clamp(3rem, 8vw, 7rem), section headlines ~3–4rem

## Pozadí / atmosféra (subtilní, ne rušivé)

Reusable komponenty:
- `<TelemetryGrid />` – CSS grid linky s velmi nízkou opacity
- `<BreathWave />` – animovaný SVG sinusoid path s draw animací (framer-motion)
- `<Particles />` – cca 30 floating dots, slow drift, low opacity
- `<NoiseOverlay />` – jemná SVG noise texture pro filmový pocit

Použít jen na hero a 1–2 sekcích jako decoration, nikdy přes text.

## Animace (framer-motion)

- Hero: stagger fade-up textu, telemetrie kresba on mount
- Sekce: scroll-triggered fade-up + slight Y, intersection observer
- Karty programů: subtle hover lift + turquoise border glow
- Čísla benefitů: count-up při scrollu

## Technické detaily

- Tanstack Start, route `src/routes/index.tsx` (nahradit placeholder)
- Komponenty rozdělit do `src/components/sections/` (Hero, Method, Benefits, Programs, FAQ, Contact, Footer, Nav) a `src/components/visuals/` (TelemetryGrid, BreathWave, Particles)
- Smooth scroll na kotvy přes `scroll-behavior: smooth` + anchor IDs
- Použít existující shadcn `accordion`, `button`, `card`
- `head()` v index route: title „Ivan Pitoňák — Oxygen Advantage Instruktor | Dýchej líp. Výkon výš.", description CZ, og:title/description
- Importovat fonty přes Google Fonts CSS link v `__root.tsx`
- Bez backendu – vše statické, žádný Lovable Cloud zatím
- Plně responzivní (mobile first), nav se na mobilu sbalí do drawer/sheet

## Co se nemění

- Bootstrap router (`src/router.tsx`, `src/routes/__root.tsx`) zůstává, jen do `__root.tsx` přidat font linky a globální dark třídu na `<html>`.
- shadcn UI komponenty se používají, design tokens jsou přepsány v `src/styles.css`.
