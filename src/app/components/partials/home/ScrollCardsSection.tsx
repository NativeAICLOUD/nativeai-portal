"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-transition-progress/next";

const NOISE_URI = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.4 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>";

const cards = [
  {
    title: "Custom Development",
    subtitle: "Tailored software built precisely for your business workflows and goals.",
    href: "/services/custom-development",
    bg: [
      "radial-gradient(circle at 20% 30%, #c9a0c9 0%, transparent 55%)",
      "radial-gradient(circle at 75% 20%, #e8b8a8 0%, transparent 50%)",
      "radial-gradient(circle at 60% 80%, #a89bc4 0%, transparent 60%)",
      "radial-gradient(circle at 30% 70%, #d4a89c 0%, transparent 55%)",
      "linear-gradient(135deg, #d9b8b0 0%, #c9a0b8 100%)",
    ].join(", "),
  },
  {
    title: "Design",
    subtitle: "Beautiful, intuitive interfaces that users actually love to use.",
    href: "/services/design",
    bg: [
      "radial-gradient(circle at 50% 50%, #f4b97a 0%, transparent 55%)",
      "radial-gradient(circle at 15% 15%, #c99bc4 0%, transparent 45%)",
      "radial-gradient(circle at 80% 75%, #f4a07c 0%, transparent 50%)",
      "radial-gradient(circle at 62% 18%, #f9d4a0 0%, transparent 55%)",
      "linear-gradient(135deg, #e8a87c 0%, #f4c99c 100%)",
    ].join(", "),
  },
  {
    title: "AI Agents & RAG",
    subtitle: "Intelligent automation and retrieval-augmented generation for your data.",
    href: "/services/ai-agents-rag",
    bg: [
      "radial-gradient(circle at 20% 70%, #d4845c 0%, transparent 55%)",
      "radial-gradient(circle at 70% 28%, #9a96c4 0%, transparent 55%)",
      "radial-gradient(circle at 42% 42%, #c4a870 0%, transparent 50%)",
      "radial-gradient(circle at 82% 80%, #b88c6c 0%, transparent 50%)",
      "linear-gradient(135deg, #c88968 0%, #9a96c4 100%)",
    ].join(", "),
  },
];

const NoiseOverlay = () => (
  <div
    aria-hidden
    className="pointer-events-none absolute inset-0 rounded-2xl"
    style={{ backgroundImage: `url("${NOISE_URI}")`, mixBlendMode: "overlay", opacity: 0.5 }}
  />
);

/* ── Mobile ── */
function MobileCards() {
  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, i) => (
        <Link key={i} href={card.href} className="block">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            className="relative rounded-2xl overflow-hidden flex flex-col justify-between p-6 min-h-[200px] cursor-pointer"
            style={{ background: card.bg }}
          >
            <NoiseOverlay />
            <p className="relative text-sm font-medium text-white/80 leading-relaxed max-w-[85%]">{card.subtitle}</p>
            <h3 className="relative text-2xl font-black leading-tight text-white mt-4">{card.title}</h3>
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

  const leftX    = useTransform(scrollYProgress, [0, 1], [290, 0]);
  const leftRot  = useTransform(scrollYProgress, [0, 1], [-8, 0]);
  const rightX   = useTransform(scrollYProgress, [0, 1], [-290, 0]);
  const rightRot = useTransform(scrollYProgress, [0, 1], [6, 0]);

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
            className="relative rounded-2xl overflow-hidden flex flex-col justify-end p-8 xl:p-10 min-h-[440px] cursor-pointer"
            style={{
              x: transforms[i].x as any,
              rotate: transforms[i].rotate as any,
              zIndex: transforms[i].z,
              background: card.bg,
            }}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
          >
            <NoiseOverlay />
            <motion.h3
              className="relative text-3xl xl:text-4xl font-black leading-tight text-white"
              style={{ opacity: titleOpacity, filter: titleBlur }}
            >
              {card.title}
            </motion.h3>
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
    <section className="max-w-9xl mx-auto px-6 sm:px-12 xl:px-16 py-20 sm:py-28">
      {isMobile ? <MobileCards /> : <DesktopCards />}
    </section>
  );
}
