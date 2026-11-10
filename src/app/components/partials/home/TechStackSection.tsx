"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles, Globe, Palette, Server, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { CONTAINER, Eyebrow, SECTION_Y, H2, BODY } from "./HomeUI";

/* ── Category configuration (data-driven) ─────────────────────────
   Icons: provided glyph SVGs where available, matching vectors elsewhere.
   Icon colour is the existing NativeCloud brand colour per category;
   the chip background is the soft pastel tint used on every card. */
type CatVisual =
  | { type: "glyph"; src: string }
  | { type: "lucide"; icon: LucideIcon };

type CategoryMeta = { visual: CatVisual; color: string; bg: string };

const CATEGORY_META: Record<string, CategoryMeta> = {
  "agentic AI":         { visual: { type: "lucide", icon: Workflow },                        color: "#2563EB", bg: "#EFF5FF" },
  "generative AI":      { visual: { type: "lucide", icon: Sparkles },                        color: "#FF8A3D", bg: "#FFF4EA" },
  backend:              { visual: { type: "lucide", icon: Server },                          color: "#059669", bg: "#ECFDF5" },
  frontend:             { visual: { type: "glyph", src: "/icons/web-frontend.svg" },         color: "#4F46E5", bg: "#F2F0FF" },
  mobile:               { visual: { type: "glyph", src: "/icons/mobile-icons.png" },         color: "#0F8B83", bg: "#EFFAF8" },
  devOps:               { visual: { type: "glyph", src: "/icons/cloud-and-devops.svg" },     color: "#7C3AED", bg: "#F8F0FF" },
  security:             { visual: { type: "lucide", icon: ShieldCheck },                     color: "#0E7490", bg: "#ECFEFF" },
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
  "agentic AI": "Agentic AI",
  "generative AI": "Generative AI",
  backend: "Backend",
  frontend: "Frontend",
  mobile: "Mobile",
  devOps: "Cloud & DevOps",
  security: "Security",
  "API & integrations": "API & Integrations",
  webflow: "Webflow",
  design: "Design",
};

/* Same choreography as the About page's Zurich / Skopje section:
   heading words rise out of a soft blur one after another, then the
   categories follow with the same expo-out ease. Off under reduced motion. */
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: "-15% 0px" } as const;
const HEADING = ["Technologies", "we", "use"];

/* Tabs grouped under the Microsoft AI Tour topic areas. Security is kept
   second on purpose: it is the most important layer for agentic AI. */
const GROUPS: { label: string; categories: string[] }[] = [
  { label: "AI Solutions",          categories: ["agentic AI", "generative AI"] },
  { label: "Security",              categories: ["security"] },
  { label: "Cloud & AI Platforms",  categories: ["devOps", "backend", "frontend", "mobile", "API & integrations", "webflow", "design"] },
];
/* ── Category card — icon tile and label; `featured` is the larger bento tile ── */
function CategoryCard({ category, meta, featured = false }: { category: string; meta: CategoryMeta; featured?: boolean }) {
  return (
    <div
      className={`group flex h-full flex-col rounded-[18px] bg-white transition-[transform,box-shadow] duration-[250ms] ease-out hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,23,42,.08)] motion-reduce:transition-none ${
        featured ? 'gap-5 p-6 sm:p-7' : 'gap-4 p-5'
      }`}
      style={{ boxShadow: '0 1px 2px rgba(15,23,42,.04)' }}
    >
      <span
        className={`grid shrink-0 place-items-center rounded-[14px] ${featured ? 'h-14 w-14' : 'h-11 w-11'}`}
        style={{ background: meta.bg }}
      >
        <CategoryIcon meta={meta} size={featured ? 26 : 20} />
      </span>
      <div>
        <h3 className={`m-0 font-semibold leading-[1.25] text-[#101828] ${featured ? 'text-[21px] sm:text-[23px]' : 'text-[17px]'}`}>
          {CATEGORY_LABELS[category] ?? category}
        </h3>
      </div>
    </div>
  );
}

/* Group panel — the same soft shell as "What We Offer", tinted per group */
function GroupPanel({ label, tint, className = '', children }: { label: string; tint: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`flex flex-col rounded-[24px] p-4 sm:p-6 ${className}`} style={{ background: tint }}>
      <div className="mb-4 flex items-center gap-3 px-1 sm:mb-5">
        <p className="m-0 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#667085]">{label}</p>
      </div>
      {children}
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function TechStackSection() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 28, filter: "blur(8px)" },
    whileInView: reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: VIEWPORT,
    transition: { duration: 0.9, ease: EASE, delay },
  });

  return (
    <section className="font-switzer bg-white">
      <div className={`${CONTAINER} ${SECTION_Y}`}>

        {/* ── Header ── */}
        <header className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <div className="mb-4"><Eyebrow>State-of-the-Art</Eyebrow></div>
            <h2 className={`m-0 ${H2}`} aria-label={HEADING.join(" ")}>
              {HEADING.map((word, i) => (
                <Fragment key={word}>
                {i > 0 && " "}
                <motion.span
                  className="inline-block"
                  aria-hidden="true"
                  initial={reduce ? false : { opacity: 0, y: "0.45em", filter: "blur(8px)" }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
                >
                  {word}
                </motion.span>
                </Fragment>
              ))}
            </h2>
          </div>
          <motion.p className={`m-0 max-w-[440px] lg:justify-self-end ${BODY}`} {...rise(HEADING.length * 0.08)}>
            Agentic AI first. Senior engineers delivering end to end: multi-agent systems, secured by design and shipped across cloud, backend, frontend and mobile.
          </motion.p>
        </header>

        {/* ── Bento: AI Solutions + Security on top, Cloud & AI Platforms full width below ── */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-14 lg:grid-cols-12 lg:gap-5">
          {GROUPS.map((group, gi) => {
            const cats = group.categories;
            const layout =
              gi === 0
                ? { span: 'lg:col-span-7', tint: '#F4F7FE', grid: 'sm:grid-cols-2' }
                : gi === 1
                  ? { span: 'lg:col-span-5', tint: '#F1FAFB', grid: '' }
                  : { span: 'lg:col-span-12', tint: '#FAF8F6', grid: 'sm:grid-cols-2 lg:grid-cols-4' };
            return (
              <motion.div key={group.label} className={layout.span} {...rise(gi * 0.08)}>
                <GroupPanel label={group.label} tint={layout.tint} className="h-full">
                  <div className={`grid flex-1 grid-cols-1 gap-3 sm:gap-4 ${layout.grid}`}>
                    {cats.map((category, ci) => (
                      <div
                        key={category}
                        className={gi === 2 && ci === 0 ? 'sm:col-span-2' : ''}
                      >
                        <CategoryCard
                          category={category}
                          meta={CATEGORY_META[category] ?? FALLBACK_META}
                          featured={gi < 2 || ci === 0}
                        />
                      </div>
                    ))}
                  </div>
                </GroupPanel>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
