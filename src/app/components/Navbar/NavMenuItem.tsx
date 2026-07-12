'use client';

import { Link } from 'react-transition-progress/next';
import { LucideIcon } from 'lucide-react';

interface NavMenuItemProps {
  href: string;
  title: string;
  desc?: string;
  icon: LucideIcon;
  color?: string;
  onClick?: () => void;
  compact?: boolean;
}

export function NavMenuItemCard({
  href, title, desc, icon: Icon, color = '#5B7CFA', onClick, compact = false,
}: NavMenuItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group flex items-center gap-4 rounded-lg transition-colors duration-200 hover:bg-black/[0.04] ${
        compact ? 'px-4 py-3' : 'px-2.5 py-2.5 -mx-2.5'
      }`}
    >
      <Icon className="h-5 w-5 shrink-0 text-[#111] transition-colors duration-200" strokeWidth={1.6} />
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
  icon: LucideIcon;
  color?: string;
  compact?: boolean;
}

export function NavMenuItemDisabled({ title, desc, icon: Icon, color = '#5B7CFA', compact = false }: NavMenuItemDisabledProps) {
  return (
    <span className={`flex items-center gap-4 opacity-35 cursor-default select-none ${
      compact ? 'px-4 py-3' : 'px-2.5 py-2.5 -mx-2.5'
    }`}>
      <Icon className="h-5 w-5 shrink-0 text-[#8C8C99]" strokeWidth={1.6} />
      <div className="flex flex-col gap-[3px] min-w-0">
        <span className="text-[13.5px] font-semibold leading-snug text-[#111118]">{title}</span>
        {desc && (
          <span className="text-[12px] leading-snug text-[#8C8C99] truncate">{desc}</span>
        )}
      </div>
    </span>
  );
}
