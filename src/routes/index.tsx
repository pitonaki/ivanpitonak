import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Benefits } from "@/components/sections/Benefits";
import { Programs } from "@/components/sections/Programs";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Partners } from "@/components/sections/Partners";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ivan Pitoňák — Oxygen Advantage Instruktor | Dýchej líp. Výkon výš.",
      },
      {
        name: "description",
        content:
          "Funkční dechový trénink podle Oxygen Advantage®. Vyšší sportovní výkon, lepší spánek a odolnost vůči stresu. Konzultace, workshopy a programy.",
      },
      {
        property: "og:title",
        content: "Ivan Pitoňák — Oxygen Advantage Instruktor",
      },
      {
        property: "og:description",
        content:
          "Funkční dechový trénink pro výkon, regeneraci a odolnost. Konzultace, workshopy, programy.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen w-full bg-background text-foreground">
      <Nav />
      <Hero />
      <Method />
      <Benefits />
      <Programs />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
