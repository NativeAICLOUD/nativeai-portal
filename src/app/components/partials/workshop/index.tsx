'use client';

import { useState } from 'react';
import { Link } from 'react-transition-progress/next';
import { motion } from 'framer-motion';

type TCard = {
  id: number;
  color: string;
  level: string;
  link: string;
  title: string;
  desc: string;
  date: string;
  duration: string;
  language: string;
  format: string;
  tags: string[];
};

const LEVELS = ['All', 'Basic', 'Deep Dive', 'Special'];

const levelStyle: Record<string, { bg: string; text: string; dot: string }> = {
  Basic:      { bg: 'rgba(10,14,26,0.06)',   text: '#374151', dot: '#6b7280' },
  'Deep Dive': { bg: 'rgba(37,99,235,0.10)',  text: '#1d4ed8', dot: '#3b82f6' },
  Special:    { bg: 'rgba(5,150,105,0.10)',  text: '#065f46', dot: '#059669' },
};

function WorkshopCards({ data }: { data: TCard[] }) {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? data : data.filter((d) => d.level === active);

  return (
    <div className="pb-32">

      {/* Filter tabs */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
        {LEVELS.map((lvl) => (
          <button
            key={lvl}
            onClick={() => setActive(lvl)}
            className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
            style={
              active === lvl
                ? { background: '#0a0e1a', color: '#fff' }
                : { background: 'rgba(10,14,26,0.06)', color: 'rgba(10,14,26,0.55)' }
            }
          >
            {lvl}
          </button>
        ))}
        <span className="ml-auto text-xs text-[#0a0e1a]/35 whitespace-nowrap shrink-0">
          {filtered.length} session{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: i * 0.06 }}
          >
            <Card {...item} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const Card = ({ id, level, title, desc, date, duration, language, format, tags }: TCard) => {
  const style = levelStyle[level] ?? levelStyle['Basic'];

  return (
    <div className="group flex flex-col h-full bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-200 overflow-hidden">

      {/* Card header */}
      <div className="px-5 pt-5 pb-4 border-b border-black/[0.06]">
        <div className="flex items-center justify-between mb-3">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
            style={{ background: style.bg, color: style.text }}
          >
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: style.dot }} />
            {level}
          </span>
          <div className="flex flex-wrap gap-1 justify-end">
            {tags.map((t) => (
              <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-black/[0.05] text-[#0a0e1a]/50">
                {t}
              </span>
            ))}
          </div>
        </div>
        <h2 className="text-[#0a0e1a] font-bold text-lg leading-snug group-hover:text-[#2563eb] transition-colors duration-200">
          {title}
        </h2>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-4">
        <p className="text-[#0a0e1a]/50 text-sm leading-relaxed flex-1 mb-5">
          {desc}
        </p>

        {/* Meta */}
        <div className="grid grid-cols-2 gap-y-2 gap-x-3 mb-5">
          {[
            { icon: 'icon-calendar', label: date },
            { icon: 'icon-time',     label: duration },
            { icon: 'icon-world',    label: language },
            { icon: 'icon-camera',   label: format },
          ].map((m) => (
            <div key={m.icon} className="flex items-center gap-1.5 text-[12px] text-[#0a0e1a]/45">
              <svg width={14} height={14} className="shrink-0 opacity-60">
                <use href={`/icons/all-icons.svg#${m.icon}`} />
              </svg>
              {m.label}
            </div>
          ))}
        </div>

        {/* CTA */}
        <Link
          href={`/workshops/${id}`}
          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group/btn"
          style={{ background: '#0a0e1a', color: '#fff' }}
        >
          View workshop
          <svg className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default WorkshopCards;
