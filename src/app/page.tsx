import ExpertiseSection from "./components/partials/home/ExpertiseSection";
import ServicesScrollSection from "./components/partials/home/ServicesScrollSection";
import HomeHeader from "./components/partials/home/Header";
import HomeLowerSection from "./components/partials/home/HomeLowerSection";
import HomePartner from "./components/partials/home/homepartner";
import IndustriesBusinessDomain from "./components/partials/home/IndustriesBusinessDomain";
import PracticalSolutionsSection from "./components/partials/home/PracticalSolutionsSection";
import ScrollCardsSection from "./components/partials/home/ScrollCardsSection";
import RotatingHeadlineHero from "./components/partials/home/RotatingHeadlineHero";
import TechStackSection from "./components/partials/home/TechStackSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />

      {/* Scroll-animated 3-card services */}
      <ScrollCardsSection />

      {/* Metallic shimmer headline hero */}
      <RotatingHeadlineHero />

      {/* Industries Section */}
      <IndustriesBusinessDomain />

      {/* What We Deliver — pinned scroll card experience */}
      <ServicesScrollSection />

      {/* Practical AI & Cloud solutions — where Core Services used to be */}
      <PracticalSolutionsSection />

      {/* Areas of Expertise — Azure & cloud security */}
      <ExpertiseSection />

      {/* Existing Blog Section */}
      <HomeLowerSection />

      {/* Interactive Tech Stack */}
      <TechStackSection />

      {/* Home Partner Section */}
      <HomePartner />
    </main>
  );
}
