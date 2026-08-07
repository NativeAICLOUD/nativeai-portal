'use client';

import { motion } from 'framer-motion';
import {
  Compass, PenTool, Code2, Rocket, Sparkles, Lightbulb,
  Users, FolderKanban, Handshake,
  type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, SECTION_PB, H2, FeatureCard } from './HomeUI';

/* Icon tint cycle — reuses the nearshore divider palette (#ff9900 → #ff6a3d → #ff4f8b) */
const TILE = [
  { color: '#FF9900', bg: 'rgba(255,153,0,0.08)' },
  { color: '#FF6A3D', bg: 'rgba(255,106,61,0.08)' },
  { color: '#FF4F8B', bg: 'rgba(255,79,139,0.08)' },
];

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

export default function DeliverySpectrumSection() {
  return (
    <div className="font-switzer">

      {/* ── End-to-end capability ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="mb-4"><Eyebrow>Full delivery spectrum</Eyebrow></div>
            <h2 className={`m-0 max-w-[560px] ${H2}`}>
              Every capability your product needs.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {capabilities.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <FeatureCard icon={icon} iconColor={TILE[i % TILE.length].color} iconBg={TILE[i % TILE.length].bg} title={title} desc={desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration models ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} ${SECTION_PB}`}>
          <motion.div
            className="mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="mb-4"><Eyebrow>How we work together</Eyebrow></div>
            <h2 className={`m-0 max-w-[560px] ${H2}`}>
              Three ways to plug us in.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {collaborationModels.map(({ title, desc, icon }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: (i % 3) * 0.1 }}
                viewport={{ once: true, margin: '-40px' }}
              >
                <FeatureCard icon={icon} iconColor={TILE[i % TILE.length].color} iconBg={TILE[i % TILE.length].bg} title={title} desc={desc} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
