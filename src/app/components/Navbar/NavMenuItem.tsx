'use client';

import { Link } from 'react-transition-progress/next';
import { LucideIcon } from 'lucide-react';

/* Icons can be Lucide components or image paths (the technology glyph SVGs) */
function MenuIcon({ icon, className }: { icon: LucideIcon | string; className: string }) {
  if (typeof icon === 'string') {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={icon} alt="" className={`${className} w-auto object-contain`} aria-hidden="true" />
    );
  }
  const Icon = icon;
  return <Icon className={className} strokeWidth={1.6} />;
}

interface NavMenuItemProps {
  href: string;
  title: string;
  desc?: string;
  icon: LucideIcon | string;
  color?: string;
  onClick?: () => void;
  compact?: boolean;
}

export function NavMenuItemCard({
  href, title, desc, icon, color = '#5B7CFA', onClick, compact = false,
}: NavMenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-4 rounded-lg transition-colors duration-200 hover:bg-black/[0.04] ${
        compact ? 'px-4 py-3' : 'px-2.5 py-2.5 -mx-2.5'
      }`}
    >
      <MenuIcon icon={icon} className="h-5 w-5 shrink-0 text-[#111] transition-colors duration-200" />
      <div className="flex flex-col gap-[3px] min-w-0">
        <span className="text-[14px] font-medium leading-snug text-[#111]">{title}</span>
        {desc && (
          <span className="text-[12px] leading-snug text-[#6b7280] truncate">{desc}</span>
        )}
      </div>
    </Link>
  );
}

interface NavMenuItemDisabledProps {
  title: string;
  desc?: string;
  icon: LucideIcon | string;
  color?: string;
  compact?: boolean;
}

export function NavMenuItemDisabled({ title, desc, icon, color = '#5B7CFA', compact = false }: NavMenuItemDisabledProps) {
  return (
    <span className={`flex items-center gap-4 opacity-35 cursor-default select-none ${
      compact ? 'px-4 py-3' : 'px-2.5 py-2.5 -mx-2.5'
    }`}>
      <MenuIcon icon={icon} className="h-5 w-5 shrink-0 text-[#8C8C99]" />
      <div className="flex flex-col gap-[3px] min-w-0">
        <span className="text-[13.5px] font-semibold leading-snug text-[#111118]">{title}</span>
        {desc && (
          <span className="text-[12px] leading-snug text-[#8C8C99] truncate">{desc}</span>
        )}
      </div>
    </span>
  );
}
