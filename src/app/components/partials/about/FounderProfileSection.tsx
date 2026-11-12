import Image from 'next/image';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* ── Founder profile ──
   Portrait and identity on the left (sticky on desktop), first-person bio and
   focus areas on the right. Sits on the About page directly under the hero. */
const PROFILE = {
  name: 'Artan Ajredini',
  role: 'Co-Founder & CTO at NativeCloud',
  email: 'artan@nativeai.cloud',
  portrait: '/img/about/artan-ajredini.png',
};

const LEAD =
  'For more than 11 years, I have been passionate about software development, software architecture, and exploring how emerging technologies can create real business value.';

const BIO = [
  'Today, my primary focus is on Generative AI, Small and Large Language Models (SLMs and LLMs), Agentic Systems, and modern software architectures. What interests me most is exploring how these technologies can be applied in practical and meaningful ways to solve real-world challenges and improve how businesses operate.',
  'Together with our customers, I design strategies, architectures, and AI-native software solutions. From intelligent assistants and AI agents to complex end-to-end platforms, I help organizations integrate artificial intelligence into their products and processes in a secure, scalable, and sustainable way.',
  'As a Microsoft Azure-certified professional and Lead of the Global AI Community in Skopje, I have worked closely with international technology communities and product teams for many years. I bring these insights and experiences into customer engagements, technical workshops, and software architecture consulting.',
  'What excites me most is bridging the gap between technology and practical business value: How do new platforms, models, and frameworks translate into better products? How do we build systems that go beyond intelligent capabilities and deliver measurable outcomes?',
];

const FOCUS_AREAS = [
  'Generative AI and Small & Large Language Models (SLMs & LLMs)',
  'Semantic AI, Embeddings, Retrieval-Augmented Generation (RAG) & Graph RAG',
  'AI Agents, Agentic Systems & Multi-Agent Architectures',
  'Model Context Protocol (MCP) & Tool Integration',
  'AI-Native Software Architectures',
  'Human-in-the-Loop Systems, Observability & Governance',
  'Cloud-Native, Hybrid & Local AI Systems',
  'WebAssembly & Edge AI',
];

export default function FounderProfileSection() {
  return (
    <section aria-labelledby="founder-profile-heading" className="bg-white">
      <div className={`${CONTAINER} pt-20 lg:pt-24`}>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">

          {/* Identity */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Image
              src={PROFILE.portrait}
              alt={`Portrait of ${PROFILE.name}`}
              width={600}
              height={600}
              sizes="(min-width: 1024px) 300px, 160px"
              className="h-40 w-40 rounded-2xl object-cover lg:h-[300px] lg:w-[300px]"
            />
            <h2
              id="founder-profile-heading"
              className="m-0 mt-5 text-[22px] font-medium leading-[1.2] text-[#111] lg:text-[24px]"
            >
              {PROFILE.name}
            </h2>
            <p className="m-0 mt-1 text-[15px] leading-[1.4] text-[#6b7280]">{PROFILE.role}</p>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-2 inline-block break-all text-[15px] font-medium text-[#2563EB] transition-colors hover:text-[#1D4ED8]"
            >
              {PROFILE.email}
            </a>
          </div>

          {/* Bio */}
          <div className="max-w-[760px]">
            <div className="mb-4"><Eyebrow>Leadership</Eyebrow></div>
            <p className="m-0 text-[20px] font-medium leading-[1.5] text-[#111] md:text-[24px]">{LEAD}</p>

            <div className="mt-6 flex flex-col gap-5">
              {BIO.map((text) => (
                <p key={text} className="m-0 text-[16px] font-normal leading-[1.7] text-[#374151] sm:text-[17px]">
                  {text}
                </p>
              ))}
            </div>

            <h3 className="m-0 mt-10 text-[18px] font-medium leading-[1.25] text-[#111]">
              My current areas of focus
            </h3>
            <ul className="m-0 mt-4 flex list-none flex-wrap gap-2 p-0">
              {FOCUS_AREAS.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-[#e6e6e6] bg-white px-3.5 py-1.5 text-[14px] font-normal leading-[1.4] text-[#374151]"
                >
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
