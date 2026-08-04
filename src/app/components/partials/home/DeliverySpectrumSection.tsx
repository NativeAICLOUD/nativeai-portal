import {
  Compass, PenTool, Code2, Rocket, Sparkles, Lightbulb,
  Users, FolderKanban, Handshake,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';

/* Premium icon tiles — solid 2px icon on an 8% tint, cycling the
   nearshore divider gradient palette (#ff9900 → #ff6a3d → #ff4f8b) */
const TILE = [
  { color: '#FF9900', bg: 'rgba(255,153,0,0.08)' },
  { color: '#FF6A3D', bg: 'rgba(255,106,61,0.08)' },
  { color: '#FF4F8B', bg: 'rgba(255,79,139,0.08)' },
];

function IconTile({ icon, variant }: { icon: LucideIcon | string; variant: number }) {
  const t = TILE[variant % TILE.length];
  const Icon = typeof icon === 'string' ? null : icon;
  return (
    <div
      className="mb-5 flex h-[72px] w-[72px] items-center justify-center rounded-[20px] transition-transform duration-200 group-hover:scale-105"
      style={{
        background: t.bg,
        border: '1px solid rgba(15,23,42,0.06)',
        boxShadow: '0 8px 24px rgba(15,23,42,0.06)',
      }}
    >
      {typeof icon === 'string' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={icon} alt="" className="h-9 w-auto object-contain" aria-hidden="true" />
      ) : (
        Icon && (
          <Icon
            className="h-9 w-9"
            style={{ color: t.color }}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        )
      )}
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

const cardCls =
  'group flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6 transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-1 hover:border-[#111]/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.10)]';

export default function DeliverySpectrumSection() {
  return (
    <div className="font-switzer">

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

    </div>
  );
}
