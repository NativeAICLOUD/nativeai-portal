"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Globe, Palette, Server, type LucideIcon } from "lucide-react";
import { techStack, type TechItem } from "@/lib/tech-stack-data";
import { CONTAINER, Eyebrow, SECTION_Y, H2, H3, BODY } from "./HomeUI";

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
  backend:              { visual: { type: "lucide", icon: Server },                          color: "#059669", bg: "#ECFDF5" },
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
  backend: "Backend",
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

/* ── Technology row — flat divided list, minimal icon, restrained hover ── */
function TechnologyRow({ item, meta }: { item: TechItem; meta: CategoryMeta }) {
  return (
    <div className="group flex items-center gap-4 py-4 transition-colors duration-200 hover:bg-[rgba(15,23,42,.02)] sm:py-5">
      <span
        className="grid h-9 w-9 shrink-0 place-items-center rounded-lg"
        style={{ background: meta.bg }}
      >
        {item.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="h-auto max-h-[18px] w-auto max-w-[18px] object-contain"
          />
        ) : (
          <CategoryIcon meta={meta} size={16} />
        )}
      </span>

      <span className={`min-w-0 ${H3}`}>{item.name}</span>
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
      <div className={`${CONTAINER} ${SECTION_Y}`}>

        {/* ── Header ── */}
        <header>
          <div className="mb-4"><Eyebrow>State-of-the-Art</Eyebrow></div>
          <h2 className={`m-0 ${H2}`}>
            Technologies we use
          </h2>
          <p className={`m-0 mt-5 max-w-[500px] ${BODY}`}>
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

        {/* ── Technology list — flat, divided rows, no card/panel ── */}
        <motion.div
          key={activeCategory}
          className="mt-10 sm:mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-60px" }}
        >
          <ul role="list" className="divide-y divide-[rgba(15,23,42,.08)] border-t border-[rgba(15,23,42,.08)]">
            {techStack[activeCategory].map((item) => (
              <li key={item.name}>
                <TechnologyRow item={item} meta={activeMeta} />
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </section>
  );
}
