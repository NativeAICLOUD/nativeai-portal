'use client';

import { formatDistanceToNow } from 'date-fns';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';

const NEW_THRESHOLD_DAYS = 60;

function isNewArticle(date: string) {
  const diff = (Date.now() - new Date(date).getTime()) / (1000 * 60 * 60 * 24);
  return diff <= NEW_THRESHOLD_DAYS;
}

function calcReadingTime(desc: string) {
  return Math.max(1, Math.ceil(desc.split(' ').length / 200));
}

const KBCard = ({ id, image, title, desc, date, category }: IPost & { category?: string }) => {
  const readingTime = calcReadingTime(desc);
  const isNew = isNewArticle(date);

  return (
    <Link
      href={`/knowledge-base/${id}`}
      className="group flex flex-col h-full bg-white rounded-2xl border border-black/[0.07] shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] hover:-translate-y-1 transition-all duration-200 overflow-hidden"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={title}
          priority
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Category badge */}
        {category && (
          <span
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wide"
            style={{ background: 'rgba(10,14,26,0.55)', color: '#fff', backdropFilter: 'blur(6px)' }}
          >
            {category}
          </span>
        )}

        {/* New badge */}
        {isNew && (
          <span
            className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide"
            style={{ background: '#e89a78', color: '#fff' }}
          >
            New
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 px-5 py-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[11px] font-medium text-[#0a0e1a]/35">
            {formatDistanceToNow(new Date(date), { addSuffix: true })}
          </span>
          <span className="w-1 h-1 rounded-full bg-[#0a0e1a]/20" />
          <span className="text-[11px] font-medium text-[#0a0e1a]/35">{readingTime} min read</span>
        </div>

        <h2 className="text-[#0a0e1a] font-bold text-lg leading-snug mb-3 group-hover:text-[#e89a78] transition-colors duration-200 line-clamp-2">
          {title}
        </h2>

        <p className="text-[#0a0e1a]/50 text-sm leading-relaxed flex-1 line-clamp-3 mb-5">
          {desc}
        </p>

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#e89a78]">
          Read article
          <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
};

export default KBCard;
