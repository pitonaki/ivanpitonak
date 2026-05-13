import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Method } from "@/components/sections/Method";
import { Benefits } from "@/components/sections/Benefits";
import { Programs } from "@/components/sections/Programs";
import { Faq } from "@/components/sections/Faq";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export const Route = createFileRoute("/")({
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
