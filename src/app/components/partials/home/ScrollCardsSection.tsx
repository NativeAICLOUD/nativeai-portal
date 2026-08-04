"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-transition-progress/next";
import BracketFrame from "../../ui/BracketFrame";

const cards = [
  {
    number: "01",
    title: "AI Development",
    subtitle: "Production-grade AI features and custom software, engineered for your workflows.",
    href: "/services/custom-development",
    background: "linear-gradient(135deg, #F0A062 0%, #E85D2F 100%)",
    border: undefined,
    textColor: "#F5F2EA",
    numColor: "rgba(245,242,234,0.7)",
    bracketColor: "rgba(245,242,234,0.5)",
    hatch: false,
    glows: [] as string[],
  },
  {
    number: "02",
    title: "AI Design",
    subtitle: "Interfaces for AI products that feel effortless — clear, intuitive, on-brand.",
    href: "/services/design",
    background: "#F5F2EA",
    border: "1.5px solid #1A1A1A",
    textColor: "#1A1A1A",
    numColor: "#888888",
    bracketColor: "#1A1A1A",
    hatch: true,
    glows: [] as string[],
  },
  {
    number: "03",
    title: "AI Product",
    subtitle: "From idea to shipped AI product — strategy, build, and iteration in sprints.",
    href: "/services/ai-agents-rag",
    background:
      "radial-gradient(ellipse 60% 45% at 32% 48%, rgba(240,160,98,0.35), transparent 65%), " +
      "radial-gradient(ellipse 45% 35% at 80% 28%, rgba(240,160,98,0.28), transparent 60%), " +
      "#fffcf7",
    border: "1px solid #f0e4d8",
    textColor: "#111111",
    numColor: "#E85D2F",
    bracketColor: "rgba(26,26,26,0.4)",
    hatch: false,
    glows: [] as string[],
  },
];

function CardGlows({ glows }: { glows: string[] }) {
  return (
    <>
      {glows.map((cls, i) => (
        <div key={i} aria-hidden className={`pointer-events-none ${cls}`} />
      ))}
    </>
  );
}

/* ── Mobile ── */
function MobileCards() {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, i) => (
        <Link key={i} href={card.href} className="block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)", transition: { duration: 0.2 } }}
            className="relative overflow-hidden flex flex-col justify-between p-6 min-h-[200px] cursor-pointer"
            style={{
              background: card.background,
              border: card.border,
              borderRadius: 18,
            }}
          >
            <CardGlows glows={card.glows} />
            {card.hatch && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  borderRadius: 18,
                  background:
                    "repeating-linear-gradient(135deg, transparent 0px 8px, rgba(232,93,47,0.08) 8px 9px)",
                }}
              />
            )}
            <BracketFrame color={card.bracketColor} />
            <h3
              className="relative max-w-[85%] text-4xl font-bold leading-[0.98] tracking-[-0.04em]"
              style={{ color: card.textColor }}
            >
              {card.title}
            </h3>
            <p
              className="relative mt-6 text-sm font-medium leading-relaxed max-w-[85%]"
              style={{ color: card.textColor, opacity: 0.7 }}
            >
              {card.subtitle}
            </p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

/* ── Desktop ── */
function DesktopCards() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center 38%"],
  });

  const leftX   = useTransform(scrollYProgress, [0, 1], [290, 0]);
  const leftRot = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const rightX  = useTransform(scrollYProgress, [0, 1], [-290, 0]);
  const rightRot= useTransform(scrollYProgress, [0, 1], [6, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.75], [0.3, 1]);
  const titleBlur    = useTransform(scrollYProgress, [0, 0.75], ["blur(5px)", "blur(0px)"]);

  const transforms = [
    { x: leftX,  rotate: leftRot,  z: 1 },
    { x: 0,      rotate: 0,        z: 2 },
    { x: rightX, rotate: rightRot, z: 1 },
  ];

  return (
    <div ref={sectionRef} className="grid grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <Link key={i} href={card.href} className="block">
          <motion.div
            className="relative overflow-hidden cursor-pointer"
            style={{
              x: transforms[i].x as any,
              rotate: transforms[i].rotate as any,
              zIndex: transforms[i].z,
              background: card.background,
              border: card.border,
              borderRadius: 18,
              padding: 24,
              aspectRatio: "1 / 1.05",
            }}
            whileHover={{
              y: -2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
              transition: { duration: 0.2 },
            }}
          >
            <CardGlows glows={card.glows} />

            {/* Diagonal hatch overlay (card 2 only) */}
            {card.hatch && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                style={{
                  borderRadius: 18,
                  background:
                    "repeating-linear-gradient(135deg, transparent 0px 8px, rgba(232,93,47,0.08) 8px 9px)",
                }}
              />
            )}

            {/* Number badge */}
            <span
              aria-hidden
              className="absolute"
              style={{
                top: 16,
                right: 18,
                fontFamily: "monospace",
                fontSize: 10,
                letterSpacing: "0.12em",
                color: card.numColor,
              }}
            >
              {card.number}
            </span>

            <BracketFrame color={card.bracketColor} />

            <motion.h3
              className="absolute left-7 top-8 max-w-[85%] text-4xl font-bold leading-[0.98] tracking-[-0.04em] md:text-5xl lg:text-6xl"
              style={{
                color: card.textColor,
                opacity: titleOpacity,
                filter: titleBlur,
              }}
            >
              {card.title}
            </motion.h3>

            <p
              className="absolute bottom-7 left-7 max-w-[80%] text-sm font-medium leading-relaxed"
              style={{ color: card.textColor, opacity: 0.65 }}
            >
              {card.subtitle}
            </p>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

/* ── Section wrapper ── */
export default function ScrollCardsSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className="min-h-screen flex items-center py-16 sm:py-20">
      <div className="w-full max-w-9xl mx-auto px-6 sm:px-12 xl:px-16">
        {isMobile ? <MobileCards /> : <DesktopCards />}
      </div>
    </section>
  );
}
