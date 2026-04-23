import AIServicesSection from "./components/partials/home/AIServicesSection";
import CloudServicesSection from "./components/partials/home/CloudServicesSection";
import HomeHeader from "./components/partials/home/Header";
import HomeLowerSection from "./components/partials/home/HomeLowerSection";
import HomePartner from "./components/partials/home/homepartner";
import IndustriesBusinessDomain from "./components/partials/home/IndustriesBusinessDomain";
import ScrollCardsSection from "./components/partials/home/ScrollCardsSection";
import TechStackSection from "./components/partials/home/TechStackSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />

      {/* Scroll-animated 3-card services */}
      <ScrollCardsSection />

      {/* Cloud Services Section */}
      <CloudServicesSection />

      {/* AI Services — Custom Dev, Cloud, AI Agents & RAG */}
      <AIServicesSection />

      {/* Existing Blog Section */}
      <HomeLowerSection />

      {/* Interactive Tech Stack */}
      <TechStackSection />

      {/* Home Partner Section */}
      <HomePartner />

      {/* Industries Section */}
      <IndustriesBusinessDomain />
    </main>
  );
}
