"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Sparkles, Globe, Palette, Server, ShieldCheck, Workflow, type LucideIcon } from "lucide-react";
import { techStack, type TechItem } from "@/lib/tech-stack-data";
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
   categories and tiles follow with the same expo-out ease. Off under reduced motion. */
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
const GROUP_OF: Record<string, string> = Object.fromEntries(
  GROUPS.flatMap((g) => g.categories.map((c) => [c, g.label])),
);

/* ── Category tab — vertical list on desktop, scrollable chips on mobile ── */
function CategoryTab({
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
      className={`group relative flex shrink-0 cursor-pointer items-center gap-3 rounded-full border px-4 py-2 text-left transition-colors duration-200 lg:w-full lg:rounded-xl lg:border-transparent lg:px-3 lg:py-3 ${
        isActive ? "border-transparent" : "border-[#E6E6E6] hover:bg-[rgba(15,23,42,.03)]"
      }`}
      style={{ background: isActive ? meta.bg : undefined }}
    >
      <span
        className="hidden h-10 w-10 shrink-0 place-items-center rounded-[12px] bg-white transition-opacity duration-200 lg:grid"
        style={{ opacity: isActive ? 1 : 0.7 }}
      >
        <CategoryIcon meta={meta} size={18} />
      </span>
      <span
        className={`whitespace-nowrap text-[14px] font-medium transition-colors duration-200 lg:text-[17px] ${
          isActive ? "text-[#101828]" : "text-[#667085] group-hover:text-[#101828]"
        }`}
      >
        {CATEGORY_LABELS[category] ?? category}
      </span>
    </button>
  );
}

/* ── Technology tile — logo + name ── */
function TechnologyTile({ item, meta }: { item: TechItem; meta: CategoryMeta }) {
  return (
    <div className="flex h-full items-center gap-3 rounded-2xl border border-[#E6E6E6] bg-white p-4 transition-[border-color,transform] duration-200 hover:-translate-y-0.5 hover:border-[#111827]/15">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl" style={{ background: meta.bg }}>
        {item.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.logo} alt="" className="h-auto max-h-[20px] w-auto max-w-[20px] object-contain" aria-hidden="true" />
        ) : (
          <CategoryIcon meta={meta} size={18} />
        )}
      </span>
      <span className="min-w-0 text-[15px] font-medium leading-[1.3] text-[#111827]">{item.name}</span>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */
export default function TechStackSection() {
  const reduce = useReducedMotion();
  const groups = GROUPS.map((g) => ({ ...g, categories: g.categories.filter((c) => c in techStack) }));
  const [activeCategory, setActiveCategory] = useState(groups[0].categories[0]);
  const activeMeta = CATEGORY_META[activeCategory] ?? FALLBACK_META;

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
            Agentic AI first. Senior engineers delivering end to end: multi-agent systems orchestrated on Microsoft Foundry, secured by design and shipped across cloud, backend, frontend and mobile.
          </motion.p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-8 border-t border-[#E6E6E6] pt-8 sm:mt-14 lg:grid-cols-12 lg:gap-12 lg:pt-12">

          {/* ── Categories ── */}
          <motion.nav
            className="-mx-5 min-w-0 overflow-x-auto px-5 [scrollbar-width:none] md:-mx-12 md:px-12 lg:col-span-4 lg:mx-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
            aria-label="Technology categories"
            {...rise(0)}
          >
            <div className="flex gap-2 lg:sticky lg:top-28 lg:flex-col lg:gap-6">
              {groups.map((group) => (
                <div key={group.label} className="flex gap-2 lg:flex-col lg:gap-1">
                  <p className="m-0 mb-1 hidden px-3 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF] lg:block">
                    {group.label}
                  </p>
                  {group.categories.map((category) => (
                    <CategoryTab
                      key={category}
                      category={category}
                      meta={CATEGORY_META[category] ?? FALLBACK_META}
                      isActive={activeCategory === category}
                      onSelect={() => setActiveCategory(category)}
                    />
                  ))}
                </div>
              ))}
            </div>
          </motion.nav>

          {/* ── Technologies for the active category ── */}
          <motion.div className="min-w-0 lg:col-span-8" {...rise(0.1)}>
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-xl" style={{ background: activeMeta.bg }}>
                <CategoryIcon meta={activeMeta} size={17} />
              </span>
              <div>
                <p className="m-0 text-[11px] font-medium uppercase tracking-[0.14em] text-[#9CA3AF]">
                  {GROUP_OF[activeCategory]}
                </p>
                <h3 className="m-0 text-[20px] font-medium tracking-[-0.01em] text-[#111827]">
                  {CATEGORY_LABELS[activeCategory] ?? activeCategory}
                </h3>
              </div>
            </div>
            <AnimatePresence mode="wait" initial={false}>
              <motion.ul
                key={activeCategory}
                role="list"
                className="m-0 grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 xl:grid-cols-3"
                exit={reduce ? undefined : { opacity: 0, transition: { duration: 0.15 } }}
              >
                {techStack[activeCategory].map((item, i) => (
                  <motion.li
                    key={item.name}
                    initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: EASE, delay: i * 0.04 }}
                  >
                    <TechnologyTile item={item} meta={activeMeta} />
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
