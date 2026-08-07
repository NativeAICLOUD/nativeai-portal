'use client';

import { motion } from 'framer-motion';
import {
  Cloud, Layers, Rocket, Workflow, RefreshCw, Building2,
  Sparkles, Briefcase, Palette, CloudUpload, type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, H2 } from './HomeUI';

/* Icon tile tint cycle — same palette/recipe as the delivery-spectrum icons */
const TILE = [
  { color: '#FF9900', bg: 'rgba(255,153,0,0.08)' },
  { color: '#FF6A3D', bg: 'rgba(255,106,61,0.08)' },
  { color: '#FF4F8B', bg: 'rgba(255,79,139,0.08)' },
];

const services: { title: string; icon: LucideIcon }[] = [
  { title: 'Cloud Solutions & Services',     icon: Cloud },
  { title: 'Platform Development',           icon: Layers },
  { title: 'SaaS App Development',           icon: Rocket },
  { title: 'Cloud & DevOps',                 icon: Workflow },
  { title: 'App Modernization',              icon: RefreshCw },
  { title: 'Enterprise App Development',     icon: Building2 },
  { title: 'Digital Transformation',         icon: Sparkles },
  { title: 'End-to-end Business Solutions',  icon: Briefcase },
  { title: 'UI / UX Design',                 icon: Palette },
  { title: 'Cloud Migrations',               icon: CloudUpload },
];

export default function ServicesScrollSection() {
  return (
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_Y}`}>

        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-60px' }}
        >
          <div className="mb-4"><Eyebrow>What we deliver</Eyebrow></div>
          <h2 className={`m-0 max-w-[620px] ${H2}`}>
            Every service your business needs — under one roof
          </h2>
        </motion.div>

        {/* Service tabs — tinted icon tile matching the site's icon-tile system */}
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          {services.map(({ title, icon: Icon }, i) => {
            const tile = TILE[i % TILE.length];
            return (
              <div key={title} className="group flex items-center gap-3.5">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                  style={{ background: tile.bg }}
                >
                  <Icon className="h-5 w-5" style={{ color: tile.color }} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="inline-flex items-center rounded-full border border-[#E6E6E6] bg-white px-5 py-2.5 transition-[transform,border-color,box-shadow] duration-200 group-hover:-translate-y-0.5 group-hover:border-[#111827]/20 group-hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
                  <span className="text-[15px] font-medium text-[#111]">{title}</span>
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
