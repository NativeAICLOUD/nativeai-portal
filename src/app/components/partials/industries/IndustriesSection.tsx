import Image from "next/image";
import { ShieldCheck, Landmark, ShoppingCart, type LucideIcon } from "lucide-react";

type Industry = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const industries: Industry[] = [
  {
    title: "Insurance",
    description:
      "Increase efficiency and accuracy and unlock new value across product and pricing, underwriting, pricing and claims.",
    icon: ShieldCheck,
  },
  {
    title: "Banking",
    description:
      "AI Governance models to unlock value safely. Improve reporting accuracy, team efficiency and compliance as well as new products and services..",
    icon: Landmark,
  },
  {
    title: "Retail & Luxury",
    description:
      "Enhance your consumer experience through intelligent and personalised experiences. Create efficiency in your supply chain from stack to delivery.",
    icon: ShoppingCart,
  },
];

const INTRO =
  "We understand that to help transform your business with AI, we need to complement our cutting-edge data, cloud and AI expertise with a deep understanding of your industry. Our approach brings this combination to life, with experienced vertical leadership and pre-built accelerators for specific use cases to unlock value faster.";

function IndustryCard({ title, description, icon: Icon }: Industry) {
  return (
    <article className="group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-4 lg:p-6 transition-[filter,box-shadow,border-color] duration-200 hover:border-white hover:shadow-[0_4px_16px_rgba(0,0,0,0.2)] hover:[filter:invert(1)]">
      <div className="flex items-center gap-2">
        <Icon
          aria-hidden="true"
          strokeWidth={1.6}
          className="h-8 w-8 shrink-0 text-[#111]"
        />
        <h2 className="m-0 text-[24px] font-medium leading-[1.25] text-[#111] lg:text-[30px]">
          {title}
        </h2>
      </div>
      <p className="mt-1 text-[16px] font-normal leading-[1.5] text-[#111]">
        {description}
      </p>
    </article>
  );
}

export default function IndustriesSection() {
  return (
    <section className="font-switzer">
      {/* ── Hero: heading + intro + image + full-bleed gradient divider ── */}
      <div className="industries-hero-bg">
        <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 md:px-12 lg:pt-28">
          {/* headline row: two equal columns on desktop, stacked on mobile */}
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-8">
            <h1 className="m-0 flex-1 text-[36px] font-normal leading-[1.25] text-[#111] md:text-[44px]">
              Industries
            </h1>
            <p className="m-0 flex-1 text-[16px] font-light leading-[1.5] text-[#111]">
              {INTRO}
            </p>
          </div>

          {/* hero image */}
          <div className="relative mt-6 h-[220px] w-full overflow-hidden rounded-2xl md:h-[320px]">
            <Image
              src="/img/HeroLarge.png"
              alt="Immersive data visualisation representing the industries we serve"
              fill
              priority
              sizes="(max-width: 1344px) 100vw, 1344px"
              className="object-cover"
            />
          </div>
        </div>

        {/* multicolour divider — full viewport width */}
        <hr className="linegrad-divider m-0 h-1 w-full border-0" />
      </div>

      {/* ── Industry cards ── */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1536px] px-5 pb-20 pt-16 md:px-12">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry) => (
              <IndustryCard key={industry.title} {...industry} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
