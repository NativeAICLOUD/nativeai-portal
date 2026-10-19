'use client';

import { motion } from 'framer-motion';
import {
  Cloud, Layers, Rocket, Workflow, RefreshCw, Building2,
  Sparkles, Briefcase, Palette, CloudUpload, type LucideIcon,
} from 'lucide-react';
import { CONTAINER, Eyebrow, SECTION_Y, H2 } from './HomeUI';

/* Icon tile tints — four colours: pink (Enterprise App Development),
   teal (UI / UX Design), orange (App Modernization) and cherry. */
const TILE = [
  { color: '#DB2777', bg: 'rgba(219,39,119,0.08)' },
  { color: '#0F8B83', bg: 'rgba(15,139,131,0.08)' },
  { color: '#FF6A3D', bg: 'rgba(255,106,61,0.08)' },
  { color: '#BE123C', bg: 'rgba(190,18,60,0.08)' },
];

/* tile = index into TILE (0 pink · 1 teal · 2 orange · 3 cherry); assigned so
   the three reference services keep their colours and neighbours never repeat. */
const services: { title: string; icon: LucideIcon; tile: number }[] = [
  { title: 'Cloud Solutions & Services',     icon: Cloud,       tile: 3 },
  { title: 'Platform Development',           icon: Layers,      tile: 1 },
  { title: 'SaaS App Development',           icon: Rocket,      tile: 0 },
  { title: 'Cloud & DevOps',                 icon: Workflow,    tile: 3 },
  { title: 'App Modernization',              icon: RefreshCw,   tile: 2 },
  { title: 'Enterprise App Development',     icon: Building2,   tile: 0 },
  { title: 'Digital Transformation',         icon: Sparkles,    tile: 3 },
  { title: 'End-to-end Business Solutions',  icon: Briefcase,   tile: 2 },
  { title: 'UI / UX Design',                 icon: Palette,     tile: 1 },
  { title: 'Cloud Migrations',               icon: CloudUpload, tile: 0 },
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
            Everything your business needs. In one place.
          </h2>
        </motion.div>

        {/* Service tabs — tinted icon tile matching the site's icon-tile system */}
        <div className="flex flex-wrap gap-x-8 gap-y-5">
          {services.map(({ title, icon: Icon, tile: t }) => {
            const tile = TILE[t];
            return (
              <div
                key={title}
                className="group flex items-center gap-3.5"
                style={{ '--hover-tint': tile.bg } as React.CSSProperties}
              >
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105"
                  style={{ background: tile.bg }}
                >
                  <Icon className="h-5 w-5" style={{ color: tile.color }} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="inline-flex items-center rounded-full border border-[#E6E6E6] bg-white px-5 py-2.5 transition-[transform,border-color,background-color] duration-200 group-hover:-translate-y-0.5 group-hover:border-[#111827]/20 group-hover:bg-[var(--hover-tint)]">
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
