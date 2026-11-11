import Image from 'next/image';
import { CONTAINER } from '@/app/components/partials/services/ServiceUI';

/* ── Letter content ──
   `highlight: true` renders a paragraph as the letter's key statement. */
const GREETING = 'Hi 👋🏻 I’m Artan, founder of NativeCloud.';

const LETTER: { text: string; highlight?: boolean }[] = [
  {
    text: 'I started NativeCloud to help businesses turn ideas into working solutions — and to make technology feel natural, useful and human for the people who rely on it every day. Too many companies are handed systems that look impressive at launch and become a burden a few years in. We set out to build the opposite.',
  },
  {
    text: 'Today we are an AI and cloud engineering company built between Zurich and Skopje. Our engineers design agentic AI, cloud platforms and software that work inside your business, on foundations we know deeply — as an Azure Expert MSP, a five-times Microsoft Solutions Partner and an AWS Partner. Whether you need advice, a delivery partner, a single project or engineers who join your team, we choose technology for your problem, not for the trend.',
  },
  {
    text: 'The real measure of good technology is how well it serves you years later.',
    highlight: true,
  },
  {
    text: 'That is why we work with honesty, transparency and respect, stay curious, and stay close long after launch. The best solutions are built on trust, and trust is earned one honest conversation at a time.',
  },
  {
    text: 'If you are thinking about where AI can make a real difference in your business, I would be glad to hear from you personally.',
  },
];

const FOUNDER = {
  name: 'Artan Ajredini',
  role: 'Founder & CEO, NativeCloud',
  email: 'artan@nativeai.cloud',
  portrait: '/img/about/artan-ajredini.png',
  /* Transparent PNG/SVG of the handwritten signature. Rendered only when set. */
  signature: null as string | null,
};

export default function FounderLetterSection() {
  return (
    <section aria-labelledby="founder-letter-heading" className="bg-white">
      <div className={`${CONTAINER} py-16 lg:py-24`}>
        <article className="mx-auto max-w-[720px]">

          <h2
            id="founder-letter-heading"
            className="m-0 text-[26px] font-medium leading-[1.2] tracking-[-0.015em] text-[#111] sm:text-[32px]"
          >
            {GREETING}
          </h2>

          <div className="mt-8 flex flex-col gap-6 sm:mt-10 sm:gap-7">
            {LETTER.map(({ text, highlight }) =>
              highlight ? (
                <p
                  key={text}
                  className="m-0 py-1 text-[21px] font-medium leading-[1.4] tracking-[-0.01em] text-[#111] sm:text-[24px]"
                >
                  {text}
                </p>
              ) : (
                <p key={text} className="m-0 text-[16px] font-normal leading-[1.75] text-[#374151] sm:text-[17px]">
                  {text}
                </p>
              ),
            )}
          </div>

          {/* Sign-off: signature, then the founder's identity */}
          <footer className="mt-10 sm:mt-12">
            <p className="m-0 text-[16px] text-[#374151] sm:text-[17px]">Warm regards,</p>

            {FOUNDER.signature && (
              <Image
                src={FOUNDER.signature}
                alt={`${FOUNDER.name}'s signature`}
                width={480}
                height={160}
                className="mt-3 h-auto w-[130px] sm:w-[160px]"
              />
            )}

            <div className="mt-6 flex items-center gap-4 sm:gap-5">
              <Image
                src={FOUNDER.portrait}
                alt={`Portrait of ${FOUNDER.name}`}
                width={192}
                height={192}
                sizes="(min-width: 640px) 96px, 80px"
                className="h-20 w-20 shrink-0 rounded-2xl object-cover sm:h-24 sm:w-24"
              />
              <div className="min-w-0">
                <p className="m-0 text-[18px] font-semibold leading-[1.25] text-[#111] sm:text-[20px]">{FOUNDER.name}</p>
                <p className="m-0 mt-1 text-[14px] leading-[1.4] text-[#6b7280] sm:text-[15px]">{FOUNDER.role}</p>
                <a
                  href={`mailto:${FOUNDER.email}`}
                  className="mt-1.5 inline-block break-all text-[14px] font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8] sm:text-[15px]"
                >
                  {FOUNDER.email}
                </a>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </section>
  );
}
