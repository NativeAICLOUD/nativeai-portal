"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Palette, type LucideIcon } from "lucide-react";
import { techStack, type TechItem } from "@/lib/tech-stack-data";

/* ── Category configuration (data-driven) ─────────────────────────
   Icons: provided glyph SVGs where available, matching vectors elsewhere.
   Icon colour is the existing NativeCloud brand colour per category;
   the chip background is the soft pastel tint used on every card. */
type CatVisual =
  | { type: "glyph"; src: string }
  | { type: "lucide"; icon: LucideIcon };

type CategoryMeta = { visual: CatVisual; color: string; bg: string };

const CATEGORY_META: Record<string, CategoryMeta> = {
  "generative AI":      { visual: { type: "lucide", icon: Sparkles },                        color: "#FF8A3D", bg: "#FFF4EA" },
  frontend:             { visual: { type: "glyph", src: "/icons/web-frontend.svg" },         color: "#4F46E5", bg: "#F2F0FF" },
  mobile:               { visual: { type: "glyph", src: "/icons/mobile-icons.png" },         color: "#0F8B83", bg: "#EFFAF8" },
  devOps:               { visual: { type: "glyph", src: "/icons/cloud-and-devops.svg" },     color: "#7C3AED", bg: "#F8F0FF" },
  "API & integrations": { visual: { type: "glyph", src: "/icons/api-and-integrations.svg" }, color: "#E11D48", bg: "#FFF2F2" },
  webflow:              { visual: { type: "lucide", icon: Globe },                           color: "#1D4ED8", bg: "#EEF4FF" },
  design:               { visual: { type: "lucide", icon: Palette },                         color: "#DB2777", bg: "#FDF0F6" },
};

const FALLBACK_META: CategoryMeta = {
  visual: { type: "lucide", icon: Sparkles },
  color: "#2563EB",
  bg: "#EFF5FF",
};

/* ── Category icon — same glyph/lucide source as before, untouched ── */
function CategoryIcon({ meta, size = 26 }: { meta: CategoryMeta; size?: number }) {
  if (meta.visual.type === "glyph") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={meta.visual.src}
        alt=""
        style={{ height: size, width: "auto" }}
        className="object-contain"
        aria-hidden="true"
      />
    );
  }
  const Icon = meta.visual.icon;
  return (
    <Icon
      style={{ color: meta.color, height: size, width: size }}
      strokeWidth={1.8}
      aria-hidden="true"
    />
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  "generative AI": "Generative AI",
  frontend: "Frontend",
  mobile: "Mobile",
  devOps: "Cloud & DevOps",
  "API & integrations": "API & Integrations",
  webflow: "Webflow",
  design: "Design",
};

/* ── Category nav row — Haselt-style sidebar row, not a card ── */
function CategoryRow({
  category,
  meta,
  isActive,
  onSelect,
}: {
  category: string;
  meta: CategoryMeta;
  isActive: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className="group relative flex w-full cursor-pointer items-center gap-4 py-3.5 text-left transition-transform duration-[250ms] ease-out hover:translate-x-1"
      style={{ background: isActive ? meta.bg + '55' : 'transparent' }}
    >
      {isActive && (
        <span
          className="absolute left-0 top-1/2 h-5 w-[3px] -translate-y-1/2 rounded-full"
          style={{ background: meta.color }}
          aria-hidden="true"
        />
      )}
      <span
        className={`grid h-11 w-11 shrink-0 place-items-center rounded-[14px] transition-opacity duration-[250ms] ease-out ${
          isActive ? 'opacity-100' : 'opacity-60 group-hover:opacity-80'
        }`}
        style={{ background: meta.bg }}
      >
        <CategoryIcon meta={meta} size={19} />
      </span>
      <span
        className={`text-[16px] transition-colors duration-[250ms] ease-out lg:text-[20px] ${
          isActive ? 'text-[#101828]' : 'text-[#667085] group-hover:text-[#101828]'
        }`}
        style={{ fontWeight: 500 }}
      >
        {CATEGORY_LABELS[category] ?? category}
      </span>
    </button>
  );
}

/* ── Technology card — floating card, Haselt-style ── */
function TechnologyCard({ item, meta }: { item: TechItem; meta: CategoryMeta }) {
  return (
    <div
      className="flex h-[100px] items-center gap-[22px] rounded-[22px] border border-[rgba(0,0,0,.04)] bg-white pl-7 pr-7 shadow-[0_8px_30px_rgba(15,23,42,.08)] transition-[transform,box-shadow,border-color] duration-[250ms] ease-[ease] hover:-translate-y-[3px] hover:border-[rgba(0,0,0,.08)] hover:shadow-[0_18px_45px_rgba(15,23,42,.12)] sm:h-[110px]"
    >
      <span
        className="grid h-[60px] w-[60px] shrink-0 place-items-center rounded-[16px]"
        style={{ background: meta.bg }}
      >
        {item.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="h-auto max-h-[28px] w-auto max-w-[28px] object-contain"
          />
        ) : (
          <CategoryIcon meta={meta} />
        )}
      </span>

      <span
        className="min-w-0 text-[#111827]"
        style={{ fontSize: 18, fontWeight: 600, lineHeight: 1.2 }}
      >
        {item.name}
      </span>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function TechStackSection() {
  const categories = Object.keys(techStack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const activeMeta = CATEGORY_META[activeCategory] ?? FALLBACK_META;

  return (
    <section className="font-switzer bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 pb-20 pt-[72px] sm:px-6 md:pb-[110px] md:pt-24">

        {/* ── Header ── */}
        <header>
          <p className="m-0 mb-[14px] text-[11px] font-medium uppercase tracking-[0.18em] text-[#64748B]">
            State-of-the-Art
          </p>
          <h2 className="m-0 text-[31px] font-medium leading-[1.08] tracking-[-0.025em] text-[#111827] md:text-[36px] lg:text-[42px]">
            Technologies we use
          </h2>
          <p className="m-0 mt-[22px] max-w-[500px] text-[14px] font-normal leading-[1.65] text-[#7A8392]">
            Our tech stack covers everything: design, frontend, backend, mobile, AI, and cloud.
          </p>
        </header>

        {/* ── Category navigation — Haselt-style row list, not cards ── */}
        <nav className="mt-10 divide-y divide-[rgba(15,23,42,.08)] sm:mt-14" aria-label="Technology categories">
          {categories.map((category) => (
            <CategoryRow
              key={category}
              category={category}
              meta={CATEGORY_META[category] ?? FALLBACK_META}
              isActive={activeCategory === category}
              onSelect={() => setActiveCategory(category)}
            />
          ))}
        </nav>

        {/* ── Technology grid — floating cards inside one soft outer panel (unchanged) ── */}
        <motion.div
          key={activeCategory}
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <div
            className="rounded-[32px] p-6 sm:p-10"
            style={{
              background: "#FCFBFA",
              boxShadow: "inset 0 1px 2px rgba(15,23,42,0.03), inset 0 -1px 2px rgba(15,23,42,0.02)",
            }}
          >
            <div className="grid grid-cols-1 gap-[22px] sm:grid-cols-2 lg:grid-cols-3">
              {techStack[activeCategory].map((item) => (
                <TechnologyCard key={item.name} item={item} meta={activeMeta} />
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
