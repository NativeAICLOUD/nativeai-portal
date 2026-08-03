"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStack } from "@/lib/tech-stack-data";

export default function TechStackSection() {
  const categories = Object.keys(techStack);
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="font-switzer py-24 px-6 md:px-12 max-w-7xl mx-auto">

      {/* Top row */}
      <motion.div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-6 mb-20"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, margin: "-80px" }}
      >
        <span className="text-[12px] tracking-[0.14em] uppercase text-[#9ca3af] font-medium shrink-0 pt-1">
          Tech Stack
        </span>
        <p className="text-[16px] font-light text-[#6b7280] max-w-[500px] leading-relaxed">
          Our tech stack covers everything: design, frontend, backend, mobile, AI, and cloud. We pick tools that are proven, reliable, and ready to grow with your business.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-12">

        {/* Left — category list (vertical on desktop, scrollable row on mobile) */}
        <motion.ul
          className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible gap-1 md:gap-0 pb-2 md:pb-0 scrollbar-hide"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-60px" }}
        >
          {categories.map((cat) => (
            <li key={cat} className="shrink-0 md:border-b md:border-[#e6e6e6] last:border-0">
              <button
                onClick={() => setActive(cat)}
                className={`
                  w-full py-3 md:py-6 px-4 md:px-0
                  flex items-center justify-between text-left
                  text-base md:text-xl transition-all duration-200 cursor-pointer
                  rounded-xl md:rounded-none
                  ${active === cat
                    ? "text-[#111] md:bg-transparent bg-[#fafafa]"
                    : "text-[#9ca3af] hover:text-[#111]"
                  }
                `}
              >
                <span className="capitalize">{cat}</span>
                {active === cat && (
                  <motion.span
                    layoutId="activeDot"
                    className="hidden md:block w-1.5 h-1.5 rounded-full bg-[#111] shrink-0 ml-3"
                  />
                )}
              </button>
            </li>
          ))}
        </motion.ul>

        {/* Right — logo grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: "easeInOut" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {techStack[active].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.93 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05, ease: "easeOut" }}
                  className="group bg-white border border-[#e6e6e6] hover:bg-[#fafafa] rounded-lg aspect-square flex flex-col items-center justify-center p-8 gap-3 transition-colors duration-200"
                >
                  {item.logo ? (
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="max-w-[65%] max-h-[55%] object-contain"
                    />
                  ) : (
                    <span className="text-sm font-medium text-[#111] text-center leading-snug px-2">
                      {item.name}
                    </span>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
