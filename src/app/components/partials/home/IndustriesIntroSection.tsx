import { Landmark } from 'lucide-react';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

const industryTags = ['Legal & Compliance', 'Finance & Banking', 'Travel & Aviation', 'Healthcare', 'E-commerce'];

/* Same design as the nearshore intro, themed for industries */
export default function IndustriesIntroSection() {
  return (
    <section className="font-switzer">
      <div
        style={{
          background:
            'radial-gradient(circle at 15% 100%, rgba(224,225,255,0.75), transparent 43%), ' +
            'radial-gradient(circle at 80% 100%, rgba(191,219,254,0.55), transparent 48%), ' +
            'radial-gradient(circle at 100% 70%, rgba(219,234,254,0.50), transparent 43%), ' +
            '#ffffff',
        }}
      >
        <div className={`${CONTAINER} py-16 lg:py-20`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Industries · Sector expertise</Eyebrow></div>
              <h2 className="m-0 max-w-[560px] text-[36px] font-medium leading-[1.05] text-[#111] sm:text-[46px] lg:text-[56px]">
                Solutions built for your industry.
              </h2>
              <p className="mt-6 max-w-[540px] text-[18px] font-light leading-[1.6] text-[#111]">
                From legal intelligence and financial services to healthcare and technology — sector-specific
                expertise that addresses what is happening in your industry today, and prepares you for
                what comes next.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/industries">Explore our industries</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SCHEDULE_CALL}>Book a discovery call</SecondaryButton>
              </div>
            </div>

            {/* Right — Industry focus card */}
            <div className="w-full lg:max-w-[380px] lg:flex-1">
              <div className="flex flex-col gap-5 rounded-2xl border border-[#e6e6e6] bg-white p-6">
                <div className="flex items-center justify-between">
                  <Eyebrow>Industry focus</Eyebrow>
                  <Landmark className="h-5 w-5 text-[#2563EB]" strokeWidth={1.6} aria-hidden="true" />
                </div>
                <p className="m-0 text-[15px] leading-[1.6] text-[#111]">
                  AI-powered platforms for regulated, high-stakes sectors — built compliance-first,
                  secure by default, and ready for audit from day one.
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {industryTags.map((tag) => (
                    <span key={tag} className="rounded-md border border-[rgba(37,99,235,0.18)] bg-[rgba(37,99,235,0.06)] px-2.5 py-1 text-[11px] font-medium text-[#1e4fd6]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Azure blue divider — same as /migrate-to-azure */}
        <hr
          className="m-0 h-1 w-full border-0"
          style={{
            backgroundImage: 'linear-gradient(260deg, #fff, #50e6ff 18%, #0089d6 50%, #0050ef 82%, #fff)',
            borderRadius: 100,
          }}
        />
      </div>
    </section>
  );
}
