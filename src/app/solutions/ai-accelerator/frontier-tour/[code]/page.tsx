import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Constants } from '@/Constants';
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';
import { frontierSessions } from '@/data/frontierTour';

type PageProps = { params: Promise<{ code: string }> };

const findSession = (code: string) =>
  frontierSessions.find((s) => s.code.toLowerCase() === code.toLowerCase() && s.detail);

export function generateStaticParams() {
  return frontierSessions.filter((s) => s.detail).map((s) => ({ code: s.code.toLowerCase() }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const session = findSession((await params).code);
  if (!session) return {};
  const title = `${session.title} | AI Accelerator | NativeCloud`;
  return { title, description: session.summary, openGraph: { title, description: session.summary } };
}

const H2 = 'm-0 max-w-[620px] text-[28px] font-medium leading-[1.15] text-[#111] md:text-[36px]';

export default async function FrontierSessionPage({ params }: PageProps) {
  const session = findSession((await params).code);
  if (!session?.detail) notFound();
  const d = session.detail;

  return (
    <div className="font-switzer">
      {/* ── Hero ── */}
      <div
        style={{
          background:
            'radial-gradient(circle at 80% 100%, rgba(191, 219, 254, 0.55), transparent 48%), radial-gradient(circle at 100% 70%, rgba(219, 234, 254, 0.5), transparent 43%), #ffffff',
        }}
      >
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <Link
            href={`${Constants.PAGES.AI_ACCELERATOR}#frontier-tour`}
            className="group mb-6 inline-flex items-center gap-2 text-sm text-[#6b7280] transition-colors hover:text-[#111]"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5">&larr;</span>
            Back to AI Accelerator
          </Link>
          <div className="mb-6"><Eyebrow>Microsoft Frontier Tour 2027 · Session {session.code}</Eyebrow></div>
          <h1 className="m-0 max-w-[760px] text-[30px] font-medium leading-[1.15] text-[#111] sm:text-[38px] lg:text-[44px]">
            {session.title}
          </h1>
          <p className="mt-6 max-w-[640px] text-[18px] font-light leading-[1.6] text-[#111]">{session.summary}</p>
          <p className="mt-6 max-w-[640px] rounded-lg bg-[#F3F8FF] px-4 py-3 text-[15px] leading-[1.5] text-[#1F2937]">
            <span className="font-semibold text-[#0066B3]">What it means for you: </span>
            {session.explainer}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Build this with us</PrimaryButton>
            <SecondaryButton href="#steps">See the steps</SecondaryButton>
          </div>
        </div>
        <hr className="divider-blue m-0 h-1 w-full border-0" />
      </div>

      {/* ── Scenario ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-4"><Eyebrow>The scenario</Eyebrow></div>
          <h2 className={H2}>The business problem.</h2>
          <div className="mt-6 flex max-w-[760px] flex-col gap-4">
            {d.scenario.map((p) => (
              <p key={p} className="m-0 text-[16px] leading-[1.6] text-[#111]">{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {session.tech.map((t) => (
              <span key={t} className="inline-flex items-center rounded-full border border-[#e6e6e6] bg-[#fafafa] px-3 py-1 text-[12px] font-medium text-[#6b7280]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Architecture ── */}
      {d.architecture && (
        <section className="bg-white">
          <div className={`${CONTAINER} pb-20 lg:pb-24`}>
            <div className="mb-4"><Eyebrow>Architecture</Eyebrow></div>
            <h2 className={H2}>How it fits together.</h2>
            <figure className="m-0 mt-8">
              <div className="overflow-hidden rounded-lg border border-[#e6e6e6] bg-white p-4">
                <Image src={d.architecture.src} alt={d.architecture.alt} width={1700} height={640} sizes="(min-width: 1440px) 1340px, 100vw" className="h-auto w-full" />
              </div>
              <figcaption className="mt-3 max-w-[760px] text-[14px] leading-[1.5] text-[#6b7280]">{d.architecture.caption}</figcaption>
            </figure>
          </div>
        </section>
      )}

      {/* ── What gets built ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-4"><Eyebrow>What gets built</Eyebrow></div>
          <h2 className={H2}>Every capability, and what it does for the agent.</h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {d.builds.map((b) => (
              <div key={b.capability} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{b.capability}</h3>
                <p className="mt-2 text-[15px] leading-[1.5] text-[#6b7280]">{b.does}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Steps ── */}
      <section id="steps" className="scroll-mt-24 bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-4"><Eyebrow>Step by step</Eyebrow></div>
          <h2 className={H2}>The session, part by part.</h2>
          <ol className="m-0 mt-8 flex list-none flex-col gap-6 p-0">
            {d.parts.map((part) => (
              <li key={part.title} className="rounded-lg border border-[#e6e6e6] bg-white p-6 lg:p-8">
                <h3 className="m-0 text-[20px] font-medium leading-[1.25] text-[#111]">{part.title}</h3>
                <p className="mt-2 max-w-[720px] text-[15px] leading-[1.5] text-[#6b7280]">{part.summary}</p>
                <div className={part.image ? 'mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]' : 'mt-6'}>
                  <ol className="m-0 flex list-none flex-col gap-3 p-0">
                    {part.steps.map((step, i) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E1F0FF] text-[12px] font-semibold text-[#0066B3]">
                          {i + 1}
                        </span>
                        <span className="pt-0.5 text-[15px] leading-[1.5] text-[#111]">{step}</span>
                      </li>
                    ))}
                  </ol>
                  {part.image && (
                    <div className="overflow-hidden rounded-lg border border-[#e6e6e6] bg-[#fafafa]">
                      <Image src={part.image.src} alt={part.image.alt} width={1500} height={1280} sizes="(min-width: 1024px) 680px, 100vw" className="h-auto w-full" />
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Run of show + links ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} grid grid-cols-1 gap-6 pb-20 lg:grid-cols-2 lg:pb-24`}>
          <div className="rounded-lg border border-[#e6e6e6] bg-white p-6 lg:p-8">
            <div className="mb-4"><Eyebrow>Run of show</Eyebrow></div>
            <dl className="m-0 flex flex-col">
              {d.runOfShow.map((r) => (
                <div key={r.time} className="flex gap-4 border-b border-[#eee] py-3 last:border-0">
                  <dt className="w-[120px] shrink-0 text-[14px] font-medium tabular-nums text-[#6b7280]">{r.time}</dt>
                  <dd className="m-0 text-[15px] text-[#111]">{r.what}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-lg border border-[#e6e6e6] bg-white p-6 lg:p-8">
            <div className="mb-4"><Eyebrow>Go deeper</Eyebrow></div>
            <ul className="m-0 flex list-none flex-col p-0">
              {d.links.map((l) => (
                <li key={l.href} className="border-b border-[#eee] last:border-0">
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-4 py-3 text-[15px] font-medium text-[#111] transition-colors hover:text-[#0066B3]"
                  >
                    {l.label}
                    <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">&rarr;</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── CTA + credit ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="rounded-2xl bg-[#F3F8FF] p-8 lg:p-12">
            <h2 className={H2}>Want this running on your own data?</h2>
            <p className="mt-3 max-w-[560px] text-[16px] leading-[1.5] text-[#374151]">
              We build it as a production-ready proof of concept inside your Azure tenant, as part of the AI Accelerator.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Talk to our experts</PrimaryButton>
              <SecondaryButton href={Constants.PAGES.AI_ACCELERATOR}>About the AI Accelerator</SecondaryButton>
            </div>
          </div>
          <p className="mt-6 max-w-[760px] text-[12px] leading-[1.5] text-[#9ca3af]">
            {d.credit}{' '}
            <a href={session.repo} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#6b7280]">Source</a>
            {' · '}
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-[#6b7280]">License</a>
          </p>
        </div>
      </section>
    </div>
  );
}
