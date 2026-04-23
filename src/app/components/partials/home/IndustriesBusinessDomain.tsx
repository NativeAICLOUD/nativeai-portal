"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const industries = [
  { w: 81, h: 81, src: '/img/industry1.png', title: 'Reliable' },
  { w: 77, h: 74, src: '/img/industry2.png', title: 'Fintech' },
  { w: 67, h: 74, src: '/img/industry3.png', title: 'E-commerce & Retail' },
  { w: 78, h: 80, src: '/img/industry4.png', title: 'Insurance' },
  { w: 72, h: 80, src: '/img/industry5.png', title: 'Manufacturing' },
  { w: 80, h: 79, src: '/img/industry6.png', title: 'Chemical' },
  { w: 79, h: 79, src: '/img/industry7.png', title: 'Construction' },
  { w: 74, h: 89, src: '/img/industry8.png', title: 'Renewable Energy' },
  { w: 90, h: 82, src: '/img/industry9.png', title: 'B2B Solutions' },
];

const IndustriesBusinessDomain = () => {
  return (
    <section className="relative bg-white py-20 sm:py-28 px-6 sm:px-12 xl:px-16 overflow-hidden">
      <div className="max-w-9xl mx-auto">

        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-80px' }}
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e89a78] shrink-0" />
              <p className="text-xs uppercase tracking-wider text-[#6b6b6b] font-medium">Industries we serve</p>
            </div>
            <h2 className="text-2xl sm:text-3.5xl lg:text-4xl font-bold text-[#0a0e1a] leading-tight max-w-xl">
              Industries &amp; Business Domains
            </h2>
          </div>
          <p className="text-[#6b6b6b] text-sm max-w-xs leading-relaxed sm:text-right">
            Deep domain knowledge across sectors — we speak your industry&apos;s language, not just tech.
          </p>
        </motion.div>

        {/* Industry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-9 gap-3 sm:gap-4">
          {industries.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
                delay: index * 0.07,
              }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group flex flex-col items-center gap-4 p-5 sm:p-6 rounded-2xl border border-[#e8e0d8] hover:border-[#e89a78] bg-[#faf7f4] hover:bg-[#f4ebe8] hover:shadow-md transition-colors duration-200 text-center cursor-default"
            >
              <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
                <div className="absolute inset-0 rounded-xl bg-[#ece8e0] group-hover:bg-[#e8d8cc] transition-colors duration-200" />
                <Image
                  src={item.src}
                  alt={item.title}
                  width={item.w}
                  height={item.h}
                  className="relative z-10 max-w-[40px] max-h-[40px] object-contain opacity-75 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-xs sm:text-sm font-medium text-[#0a0e1a] leading-snug">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndustriesBusinessDomain;
