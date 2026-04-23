import { notFound } from "next/navigation";
import Image from "next/image";
import { Link } from "react-transition-progress/next";
import { services } from "@/lib/services-data";
import ProcessTimeline from "@/app/components/partials/services/ProcessTimeline";
import ServiceFooter from "@/app/components/partials/services/ServiceFooter";


export function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <>
    <div
      className="bg-[#f4ebe8] min-h-screen"
      style={{
        backgroundImage: "url('/img/noise-background.jpg')",
        backgroundBlendMode: "multiply",
        backgroundSize: "300px 300px",
      }}
    >

      {/* ── Hero ── */}
      {service.heroHeadline ? (
        <section className="relative min-h-[85vh] overflow-hidden">
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-20 min-h-[85vh] flex flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-[#0a0e1a] leading-[1.05] max-w-2xl">
              {service.heroHeadline}
            </h1>
            <p className="mt-8 text-lg text-[#0a0e1a] max-w-[560px] font-normal">
              {service.heroBody}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href={service.ctaPrimary.href}
                className="bg-[#0a0e1a] text-white px-7 py-3.5 rounded-full text-base font-medium whitespace-nowrap hover:opacity-90 transition-opacity"
              >
                {service.heroCTALabel ?? service.ctaPrimary.label}
              </Link>
              <Link
                href={service.ctaPrimary.href}
                aria-label="Learn more"
                className="w-12 h-12 rounded-full bg-[#0a0e1a] flex items-center justify-center shrink-0 hover:opacity-90 transition-opacity"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </Link>
            </div>
            {service.heroTagline && (
              <p className="mt-auto pt-20 text-base text-[#0a0e1a] font-normal">
                {service.heroTagline}
              </p>
            )}
          </div>
        </section>
      ) : (
        /* Image-based hero fallback (design, ai-agents-rag) */
        <section className="relative overflow-hidden min-h-[70vh] flex items-center bg-[#f4ebe8]">
          {service.heroImage && (
            <Image
              src={service.heroImage}
              alt=""
              fill
              className="object-contain object-right pointer-events-none hidden md:block"
              priority
            />
          )}
          <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-40 pb-16">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-[#1a1d2e] leading-none tracking-tight max-w-xl">
              {service.heroTitle}
            </h1>
            <p className="text-[#6b6b6b] text-lg mt-5 max-w-md leading-relaxed">
              {service.heroSubtitle}
            </p>
          </div>
        </section>
      )}

      {/* ── Section A — "Here's what's included" ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-16">
        {/* Label */}
        <div className="flex items-center gap-2 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
            {service.includedLabel}
          </p>
        </div>

        {/* Intro + pill CTA row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <p className="text-[#1a1d2e] text-base leading-relaxed max-w-[650px]">
            {service.includedIntro}
          </p>
          <Link
            href={service.ctaPrimary.href}
            className="shrink-0 self-start inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            {service.ctaPrimary.label}
          </Link>
        </div>
      </section>

      {/* ── Section B — Feature cards ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-32">
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.features.map((feature, i) => (
            <div
              key={i}
              className="relative rounded-xl overflow-hidden bg-[#ece8e0] p-8 min-h-[280px] flex flex-col gap-4"
            >
              {feature.decoration === "top-left" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/decorations/blob-orange-corner.svg"
                  width={220}
                  height={220}
                  alt=""
                  aria-hidden="true"
                  className="absolute top-0 left-0 pointer-events-none select-none"
                />
              )}
              {feature.decoration === "bottom-right" && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src="/decorations/blob-sage-corner.svg"
                  width={220}
                  height={220}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-0 right-0 pointer-events-none select-none"
                />
              )}

              <h3 className="relative text-xl font-semibold text-[#1a1d2e] leading-snug z-10">
                {feature.title}
              </h3>
              <p className="relative text-[#6b6b6b] text-sm leading-relaxed z-10">
                {feature.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Section C — "How we work" ── */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 mt-40 py-20 md:py-32">
        {/* Label */}
        <div className="flex items-center gap-2 mb-10">
          <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
          <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">
            {service.howWeWorkLabel}
          </p>
        </div>

        {/* Headline + pill CTA row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <h2 className="text-4xl md:text-5xl font-normal text-[#1a1d2e] max-w-[900px] leading-tight">
            {service.howWeWorkTitle}
          </h2>
          <Link
            href={service.ctaSecondary.href}
            className="shrink-0 self-start lg:self-end inline-flex items-center bg-[#0a0a0a] hover:bg-[#1a1d2e] text-white text-sm font-medium px-6 py-3 rounded-full transition-colors whitespace-nowrap"
          >
            {service.ctaSecondary.label}
          </Link>
        </div>

        {/* Timeline — only rendered if the service defines processSteps */}
        {service.processSteps && (
          <ProcessTimeline steps={service.processSteps} />
        )}
      </section>

    </div>

    <ServiceFooter />
    </>
  );
}
