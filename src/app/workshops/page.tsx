import type { Metadata } from 'next';
import WorkshopCards from '../components/partials/workshop';
import WorkshopCTA from '../components/partials/workshop/WorkshopCTA';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';
import { workshops } from '@/data/workshops';

export const metadata: Metadata = {
  title: 'Workshops | NativeCloud',
  description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams. Live sessions, real workloads, expert instructors.',
  openGraph: {
    title: 'Workshops | NativeCloud',
    description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams. Live sessions, real workloads, expert instructors.',
    url: 'https://nativeai.cloud/workshops',
    images: [{ url: 'https://nativeai.cloud/nativeai.cloud-og.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Workshops | NativeCloud',
    description: 'Hands-on Azure, Kubernetes and AI workshops for engineering teams.',
    images: ['https://nativeai.cloud/nativeai.cloud-og.png'],
  },
};

export default function WorkshopPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>Workshops · Azure &amp; AI Training</Eyebrow></div>
              <h1 className="m-0 max-w-3xl text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                Hands-on workshops for your team.
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href="/schedule-call">Book a private workshop</PrimaryButton>
                <SecondaryButton href="/solutions">All solutions</SecondaryButton>
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — full viewport width */}
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Workshops grid ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pt-16 lg:pt-20`}>
          <div className="mb-10">
            <div className="mb-4"><Eyebrow>Upcoming sessions</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Live, hands-on, and built around real workloads.
            </h2>
          </div>
          <WorkshopCards data={workshops} />
        </div>
      </section>

      {/* ── CTA ── */}
      <WorkshopCTA />

    </div>
  );
}
