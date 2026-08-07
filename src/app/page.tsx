import DeliverySpectrumSection from "./components/partials/home/DeliverySpectrumSection";
import ExpertiseSection from "./components/partials/home/ExpertiseSection";
import NearshoreIntroSection from "./components/partials/home/NearshoreIntroSection";
import ServicesScrollSection from "./components/partials/home/ServicesScrollSection";
import HomeHeader from "./components/partials/home/Header";
import HomePartner from "./components/partials/home/homepartner";
import IndustriesBusinessDomain from "./components/partials/home/IndustriesBusinessDomain";
import IndustriesIntroSection from "./components/partials/home/IndustriesIntroSection";
import PracticalSolutionsSection from "./components/partials/home/PracticalSolutionsSection";
import ProductDevelopmentSection from "./components/partials/home/ProductDevelopmentSection";
import TechStackSection from "./components/partials/home/TechStackSection";
import WhatWeOfferSection from "./components/partials/home/WhatWeOfferSection";
import WhyCloudNativeSection from "./components/partials/home/WhyCloudNativeSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />

      {/* What we do — end-to-end product development */}
      <ProductDevelopmentSection />

      {/* What We Offer — Discovery, Prototype, Development & Growth */}
      <WhatWeOfferSection />

      {/* Industries intro — same design as the nearshore intro */}
      <IndustriesIntroSection />

      {/* Industries Section */}
      <IndustriesBusinessDomain />

      {/* What We Deliver — pinned scroll card experience */}
      <ServicesScrollSection />

      {/* Why go cloud-native — moved here from the cloud-native-sd service page */}
      <WhyCloudNativeSection />

      {/* Practical AI & Cloud solutions — where Core Services used to be */}
      <PracticalSolutionsSection />

      {/* Dedicated nearshore teams — same design as /nearshore-teams hero */}
      <NearshoreIntroSection />

      {/* Full delivery spectrum, collaboration models, product development */}
      <DeliverySpectrumSection />

      {/* Areas of Expertise — Azure & cloud security (with rotating headline) */}
      <ExpertiseSection />

      {/* Interactive Tech Stack */}
      <TechStackSection />

      {/* Home Partner Section */}
      <HomePartner />
    </main>
  );
}
