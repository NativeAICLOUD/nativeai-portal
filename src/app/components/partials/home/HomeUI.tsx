import { Link } from 'react-transition-progress/next';
import { type LucideIcon } from 'lucide-react';
import { type SVGProps, type ComponentType } from 'react';

type IconComponent = LucideIcon | ComponentType<SVGProps<SVGSVGElement>>;

export { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from '@/app/components/partials/services/ServiceUI';

/* ── Section rhythm ──
   72px mobile / 96px tablet / 144px desktop — inside the requested
   72-96 / 90-120 / 120-160 ranges. Use SECTION_Y for a section's own
   top+bottom padding, SECTION_PB where the section only needs bottom
   padding (its own content or the section above already supplies the top). */
export const SECTION_Y = 'py-18 sm:py-24 lg:py-36';
export const SECTION_PB = 'pb-18 sm:pb-24 lg:pb-36';

/* ── Typography roles ──
   One size per role, used everywhere instead of each section picking its
   own number. Hero H1 is intentionally excluded — it stays bespoke in
   RotatingHeroHeadline.tsx, and H2 is calibrated to read as a calm step
   down from it (H1 uses -0.04em tracking / weight 500 / leading 1.0). */
export const H2 =
  'text-[32px] sm:text-[38px] lg:text-[44px] font-medium leading-[1.12] tracking-[-0.02em] text-[#111827]';

export const H3 =
  'text-[17px] font-medium leading-[1.3] text-[#111827]';

export const BODY =
  'text-[15px] font-normal leading-[1.6] text-[#6B7280]';

export const CAPTION =
  'text-[13px] font-normal leading-[1.5] text-[#6B7280]';

/* ── Colour tokens ── one border gray, one text gray. Brand blue/purple untouched. */
export const BORDER_GRAY = '#E6E6E6';
export const TEXT_GRAY = '#6B7280';

/* ── Radius tiers ── */
export const RADIUS_MD = 'rounded-2xl';   // cards / panels
export const RADIUS_ICON = 'rounded-xl';  // icon tiles

/* ── Card surfaces ── border only, no shadow at rest, restrained hover. */
export const CARD_SURFACE =
  'border border-[#E6E6E6] bg-white';

export const CARD_SURFACE_INTERACTIVE =
  'border border-[#E6E6E6] bg-white transition-[border-color,transform] duration-200 hover:border-[#111827]/15 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20';

export const TAG_PILL =
  'rounded-full border border-[#E6E6E6] bg-[#FAFAFA] px-2.5 py-0.5 text-[11px] font-medium text-[#6B7280]';

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

type FeatureCardProps = {
  icon: IconComponent | string;
  iconColor: string;
  iconBg: string;
  title: string;
  desc: string;
  href?: string;
  tags?: string[];
  cta?: string;
  /* Renders the icon tile above/outside the bordered card instead of
     inside its padding — a bigger, more prominent icon treatment for
     sections that want the icon to read as its own element. */
  iconOutside?: boolean;
  /* Washes the card background with the icon's own tint colour on hover,
     instead of the default border-only hover — an opt-in, bolder
     interaction for grids where each item should feel distinct on hover. */
  hoverTint?: boolean;
};

function CardIcon({ Icon, iconColor, iconBg, size }: { Icon: IconComponent | string; iconColor: string; iconBg: string; size: 'md' | 'lg' }) {
  const GlyphIcon = typeof Icon === 'string' ? null : Icon;
  const tile = size === 'lg' ? 'h-32 w-32' : 'h-16 w-16';
  const glyph = size === 'lg' ? 'h-20 w-20' : 'h-10 w-10';
  return (
    <div
      className={`flex ${tile} shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105`}
      style={{ background: iconBg }}
    >
      {typeof Icon === 'string' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={Icon} alt="" className={`${glyph} object-contain`} aria-hidden="true" />
      ) : (
        GlyphIcon && <GlyphIcon className={glyph} style={{ color: iconColor }} strokeWidth={1.6} aria-hidden="true" />
      )}
    </div>
  );
}

/* One shared card: icon tile, title, description, optional tags/cta.
   Icon-top layout (not icon-left+divider) — simpler, more open, matches
   the "icon + text block" pattern used for restraint across the pass. */
export function FeatureCard({ icon: Icon, iconColor, iconBg, title, desc, href, tags, cta, iconOutside, hoverTint }: FeatureCardProps) {
  const body = (
    <>
      <h3 className={`m-0 ${H3}`}>{title}</h3>
      <p className={`mt-2 flex-1 ${BODY}`}>{desc}</p>
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className={TAG_PILL}>{tag}</span>
          ))}
        </div>
      )}
      {cta && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-medium text-[#111827]">
          {cta}
          <ArrowIcon />
        </span>
      )}
    </>
  );

  const surface = href ? CARD_SURFACE_INTERACTIVE : CARD_SURFACE;
  const cardClassName = hoverTint
    ? `flex h-full flex-col ${RADIUS_MD} p-6 ${surface} transition-[border-color,transform,background-color] duration-200 hover:bg-[var(--hover-tint)]`
    : `flex h-full flex-col ${RADIUS_MD} p-6 ${surface}`;
  const cardStyle = hoverTint ? ({ '--hover-tint': iconBg } as React.CSSProperties) : undefined;

  if (iconOutside) {
    return (
      <div className="group flex h-full flex-col">
        <div className="mb-5">
          <CardIcon Icon={Icon} iconColor={iconColor} iconBg={iconBg} size="lg" />
        </div>
        {href ? (
          <Link href={href} className={cardClassName} style={cardStyle}>{body}</Link>
        ) : (
          <div className={cardClassName} style={cardStyle}>{body}</div>
        )}
      </div>
    );
  }

  const inner = (
    <>
      <div className="mb-5">
        <CardIcon Icon={Icon} iconColor={iconColor} iconBg={iconBg} size="md" />
      </div>
      {body}
    </>
  );

  const className = `group ${cardClassName}`;

  if (href) {
    return (
      <Link href={href} className={className} style={cardStyle}>
        {inner}
      </Link>
    );
  }
  return <div className={className} style={cardStyle}>{inner}</div>;
}
