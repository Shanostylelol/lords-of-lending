import { Hero } from "@/components/sections/hero";
import { Steps } from "@/components/sections/steps";
import { Testimonials } from "@/components/sections/testimonials";
import { PortfolioMarquee } from "@/components/sections/portfolio-marquee";
import { Stats } from "@/components/sections/stats";
import { Resources } from "@/components/sections/resources";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Steps />
      <Testimonials />
      <PortfolioMarquee />
      <Stats />
      <Resources />
      <Faq />
    </main>
  );
}
