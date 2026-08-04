"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Globe, Palette, type LucideIcon } from "lucide-react";
import { techStack, type TechItem } from "@/lib/tech-stack-data";

/* ── Category configuration (data-driven) ─────────────────────────
   Icons: provided glyph SVGs where available, matching vectors elsewhere.
   Each category carries its own icon colour and soft background tint. */
type CatVisual =
  | { type: "glyph"; src: string }
  | { type: "lucide"; icon: LucideIcon };

type CategoryMeta = { visual: CatVisual; color: string; bg: string };

const CATEGORY_META: Record<string, CategoryMeta> = {
  "generative AI":      { visual: { type: "lucide", icon: Sparkles },                        color: "#FF8A3D", bg: "rgba(255,138,61,0.10)" },
  backend:              { visual: { type: "glyph", src: "/icons/web-backend.svg" },          color: "#2563EB", bg: "rgba(37,99,235,0.08)" },
  frontend:             { visual: { type: "glyph", src: "/icons/web-frontend.svg" },         color: "#4F46E5", bg: "rgba(79,70,229,0.08)" },
  mobile:               { visual: { type: "glyph", src: "/icons/mobile-icons.png" },         color: "#0F8B83", bg: "rgba(15,139,131,0.08)" },
  devOps:               { visual: { type: "glyph", src: "/icons/cloud-and-devops.svg" },     color: "#7C3AED", bg: "rgba(124,58,237,0.08)" },
  "API & integrations": { visual: { type: "glyph", src: "/icons/api-and-integrations.svg" }, color: "#E11D48", bg: "rgba(225,29,72,0.08)" },
  webflow:              { visual: { type: "lucide", icon: Globe },                           color: "#1D4ED8", bg: "rgba(29,78,216,0.08)" },
  design:               { visual: { type: "lucide", icon: Palette },                         color: "#DB2777", bg: "rgba(219,39,119,0.08)" },
};

const FALLBACK_META: CategoryMeta = {
  visual: { type: "lucide", icon: Sparkles },
  color: "#2563EB",
  bg: "rgba(37,99,235,0.08)",
};

/* ── Category icon ── */
function CategoryIcon({ meta, size = 21 }: { meta: CategoryMeta; size?: number }) {
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
      strokeWidth={2}
      aria-hidden="true"
    />
  );
}

/* ── Technology card ── */
function TechnologyCard({ item }: { item: TechItem }) {
  return (
    <div className="flex min-h-[76px] items-center gap-[18px] rounded-xl border border-[#E9EBEF] bg-white p-3.5 shadow-[0_3px_12px_rgba(15,23,42,0.035)] transition-[transform,box-shadow] duration-200 hover:-translate-y-[1px] hover:shadow-[0_7px_18px_rgba(15,23,42,0.06)] md:min-h-[86px] md:px-[18px] md:py-4">
      {/* logo container — identical size for every technology */}
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] bg-[#F1F5FD] md:h-[50px] md:w-[50px]">
        {item.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt={`${item.name} logo`}
            className="h-auto max-h-[28px] w-auto max-w-[28px] object-contain"
          />
        ) : (
          <span className="text-[13px] font-semibold text-[#2563EB]" aria-hidden="true">
            {item.name.slice(0, 2).toUpperCase()}
          </span>
        )}
      </span>
      <span className="text-[15px] font-medium leading-[1.2] text-[#0F172A] md:text-[17px]">
        {item.name}
      </span>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function TechStackSection() {
  const categories = Object.keys(techStack);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

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
            Our tech stack covers everything: design, frontend, backend, mobile, AI, and cloud. We
            pick tools that are proven, reliable, and ready to grow with your business.
          </p>
        </header>

        {/* ── Technology explorer ── */}
        <div className="mt-10 md:mt-14 md:grid md:grid-cols-[290px_minmax(0,1fr)] md:items-start md:gap-x-8 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-x-[52px]">

          {/* Mobile — horizontally scrollable category tabs */}
          <nav className="scrollbar-hide -mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 md:hidden" aria-label="Technology categories">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[13.5px] font-medium capitalize transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40 ${
                    isActive
                      ? 'bg-[rgba(255,138,61,0.12)] text-[#D96B1F]'
                      : 'bg-[#F3F4F6] text-[#6B7280]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </nav>

          {/* Desktop / tablet — vertical category navigation (sticky on desktop) */}
          <nav className="hidden md:block lg:sticky lg:top-[120px]" aria-label="Technology categories">
            {categories.map((cat) => {
              const meta = CATEGORY_META[cat] ?? FALLBACK_META;
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  aria-pressed={isActive}
                  className="flex h-[78px] w-full cursor-pointer items-center gap-4 border-b border-[#ECEEF1] bg-transparent text-left transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/40"
                >
                  <span
                    className="grid h-11 w-11 shrink-0 place-items-center rounded-[12px] transition-all duration-200"
                    style={{
                      background: meta.bg,
                      border: isActive ? `1.5px solid ${meta.color}55` : '1px solid rgba(15,23,42,0.05)',
                    }}
                  >
                    <CategoryIcon meta={meta} />
                  </span>
                  <span
                    className={`capitalize text-[16px] leading-[1.2] transition-colors duration-200 lg:text-[18px] ${
                      isActive
                        ? 'font-semibold text-[#111827]'
                        : 'font-normal text-[#697386] hover:text-[#111827]'
                    }`}
                  >
                    {cat}
                  </span>
                </button>
              );
            })}
          </nav>

          {/* Right — technology panel */}
          <div className="mt-5 w-full overflow-hidden rounded-[15px] bg-[#FAFAF8] p-3.5 md:mt-0 md:min-h-[720px] md:rounded-[18px] md:p-[22px] lg:p-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="flex flex-col gap-4"
              >
                {techStack[activeCategory].map((item) => (
                  <TechnologyCard key={item.name} item={item} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
