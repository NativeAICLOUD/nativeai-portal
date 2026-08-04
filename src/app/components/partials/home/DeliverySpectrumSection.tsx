import {
  Compass, PenTool, Code2, Rocket, Sparkles, Lightbulb,
  Users, FolderKanban, Handshake,
  Bot, UserCog, PackagePlus, RefreshCw,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* Premium icon tiles — gradient-stroked icon on an 8% tint, Linear/Stripe style */
const TILE = [
  { gradId: 'nc-grad-azure', color: '#2563EB', bg: 'rgba(37,99,235,0.08)' },  // Azure gradient
  { gradId: 'nc-grad-warm',  color: '#FF8A3D', bg: 'rgba(255,138,61,0.08)' }, // Warm gradient
];

/* SVG gradient defs referenced by the icon strokes (rendered once, invisible).
   userSpaceOnUse over the 24x24 icon grid so straight-line segments render too. */
function IconGradientDefs() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <linearGradient id="nc-grad-warm" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#FF9900" />
          <stop offset="55%" stopColor="#FF6A3D" />
          <stop offset="100%" stopColor="#FF4F8B" />
        </linearGradient>
        <linearGradient id="nc-grad-azure" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="24" y2="24">
          <stop offset="0%" stopColor="#50E6FF" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#0050EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IconTile({ icon: Icon, variant }: { icon: LucideIcon; variant: number }) {
  const t = TILE[variant % TILE.length];
  return (
    <div
      className="mb-5 flex h-16 w-16 items-center justify-center rounded-[18px] transition-transform duration-200 group-hover:scale-105"
      style={{
        background: t.bg,
        border: '1px solid rgba(8,27,58,0.06)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.06)',
      }}
    >
      {/* inline stroke url resolves against the document; color is the fallback */}
      <Icon
        className="h-7 w-7"
        style={{ color: t.color, stroke: `url(#${t.gradId})` }}
        strokeWidth={2}
        aria-hidden="true"
      />
    </div>
  );
}

const capabilities: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Discovery',   icon: Compass,   desc: 'Workshops, audits and scoping that de-risk the build before it starts.' },
  { title: 'Design',      icon: PenTool,   desc: 'UX research, UI design and prototyping your users will actually enjoy.' },
  { title: 'Development', icon: Code2,     desc: 'Senior .NET, React and cloud-native engineering in two-week sprints.' },
  { title: 'Delivery',    icon: Rocket,    desc: 'CI/CD, automated testing and zero-downtime releases — shipped with discipline.' },
  { title: 'Data & AI',   icon: Sparkles,  desc: 'LLMs, RAG pipelines, agents and analytics built into your product core.' },
  { title: 'Consultancy', icon: Lightbulb, desc: 'Architecture reviews, technical leadership and pragmatic advice.' },
];

const collaborationModels: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Blended teams',               icon: Users,       desc: 'Our engineers embed in your existing team — filling skill gaps and adding senior capacity exactly where you need it.' },
  { title: 'Project-based collaboration', icon: FolderKanban, desc: 'A defined scope, a dedicated team and end-to-end ownership — from kickoff to production handover.' },
  { title: 'Digital partner',             icon: Handshake,   desc: 'A long-term partnership covering build, run and evolve — your extended engineering department.' },
];

const useCases: { title: string; desc: string; icon: LucideIcon }[] = [
  { title: 'Digital Solutions',                         icon: Bot,         desc: 'Custom software to improve patient care and operational efficiency.' },
  { title: 'HR Management Systems',                     icon: UserCog,     desc: 'People platform for effective employee management and compliance.' },
  { title: 'Launching New Products (from zero-to-one)', icon: PackagePlus, desc: 'Design, prototype, and deliver beloved products for your users.' },
  { title: 'Legacy Software Modernization',             icon: RefreshCw,   desc: 'Modernize and innovate on critical business applications.' },
];

const cardCls =
  'group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#111]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]';

export default function DeliverySpectrumSection() {
  return (
    <div className="font-switzer">
      <IconGradientDefs />

      {/* ── End-to-end capability ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Full delivery spectrum</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Every capability your product needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ title, desc, icon }, i) => (
              <div key={title} className={cardCls}>
                <IconTile icon={icon} variant={i} />
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration models ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>How we work together</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Three ways to plug us in.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {collaborationModels.map(({ title, desc, icon }, i) => (
              <div key={title} className={cardCls}>
                <IconTile icon={icon} variant={i} />
                <h3 className="m-0 text-[18px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14.5px] font-normal leading-[1.55] text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we do ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>What we do</Eyebrow></div>
            <h2 className="m-0 max-w-[560px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              End-to-end product development
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {useCases.map(({ title, desc, icon }, i) => (
              <div key={title} className={cardCls}>
                <IconTile icon={icon} variant={i} />
                <h3 className="m-0 text-[16px] font-medium leading-[1.3] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14px] font-normal leading-[1.5] text-[#6b7280]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
