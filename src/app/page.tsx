import AIServicesSection from "./components/partials/home/AIServicesSection";
import ServicesScrollSection from "./components/partials/home/ServicesScrollSection";
import HomeHeader from "./components/partials/home/Header";
import HomeLowerSection from "./components/partials/home/HomeLowerSection";
import HomePartner from "./components/partials/home/homepartner";
import IndustriesBusinessDomain from "./components/partials/home/IndustriesBusinessDomain";
import MissionSection from "./components/partials/home/MissionSection";
import PracticalSolutionsSection from "./components/partials/home/PracticalSolutionsSection";
import ScrollCardsSection from "./components/partials/home/ScrollCardsSection";
import RotatingHeadlineHero from "./components/partials/home/RotatingHeadlineHero";
import TechStackSection from "./components/partials/home/TechStackSection";
import ScrollSectionNav from "./components/partials/home/ScrollSectionNav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <ScrollSectionNav />

      <div id="home-hero" style={{ scrollMarginTop: 90 }}>
        <HomeHeader />
      </div>

      <div id="highlights" style={{ scrollMarginTop: 90 }}>
        {/* Scroll-animated 3-card services */}
        <ScrollCardsSection />

        {/* Metallic shimmer headline hero */}
        <RotatingHeadlineHero />
      </div>

      <div id="industries" style={{ scrollMarginTop: 90 }}>
        {/* Industries Section */}
        <IndustriesBusinessDomain />
      </div>

      <div id="services" style={{ scrollMarginTop: 90 }}>
        {/* What We Deliver — pinned scroll card experience */}
        <ServicesScrollSection />
      </div>

      <div id="ai-services" style={{ scrollMarginTop: 90 }}>
        {/* AI Services — 3 core services */}
        <AIServicesSection />
      </div>

      <div id="solutions" style={{ scrollMarginTop: 90 }}>
        {/* Practical AI & Cloud solutions */}
        <PracticalSolutionsSection />
      </div>

      <div id="mission" style={{ scrollMarginTop: 90 }}>
        {/* Mission statement */}
        <MissionSection />
      </div>

      <div id="capabilities" style={{ scrollMarginTop: 90 }}>
        {/* Existing Blog Section */}
        <HomeLowerSection />
      </div>

      <div id="tech-stack" style={{ scrollMarginTop: 90 }}>
        {/* Interactive Tech Stack */}
        <TechStackSection />
      </div>

      <div id="partners" style={{ scrollMarginTop: 90 }}>
        {/* Home Partner Section */}
        <HomePartner />
      </div>
    </main>
  );
}
