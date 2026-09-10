'use client';

import { motion } from 'framer-motion';
import { Link } from 'react-transition-progress/next';
import AgentFlowDiagram from './AgentFlowDiagram';

const bullets = [
  { label: 'Azure OpenAI', desc: 'GPT-4o & embeddings running inside your own cloud tenant' },
  { label: 'MCP Protocol', desc: 'Connects agents to any tool, API, or database securely' },
  { label: 'RAG Pipeline',  desc: 'Your data retrieved in real-time — no hallucinations' },
];

export default function HowItWorksSection() {
  return (
    <section className="bg-[#0a0e1a] border-t border-white/[0.06] py-24 sm:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: copy ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="flex items-center gap-2 mb-5">
              <p className="text-xs uppercase tracking-[0.18em] text-white/35 font-medium">How it works</p>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              AI that plugs into{' '}
              <span className="bg-gradient-to-r from-[#3b82f6] via-[#2563EB] to-[#1d4ed8] bg-clip-text text-transparent">
                your systems.
              </span>
            </h2>

            <p className="text-white/45 text-base leading-relaxed mb-10 max-w-md">
              Our agents orchestrate GPT-4o, connect to your tools via MCP, and retrieve live knowledge from your own data — no manual handoffs, no black boxes.
            </p>

            <div className="flex flex-col gap-5 mb-12">
              {bullets.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[7px] w-1 h-1 rounded-full bg-[#2563EB]/70 shrink-0" />
                  <p className="text-sm text-white/55 leading-relaxed">
                    <span className="font-semibold text-white/85">{b.label} — </span>
                    {b.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/services/ai-agents-rag"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2563EB] hover:gap-3 transition-all duration-200"
            >
              Explore AI Agents & RAG
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>

          {/* ── Right: diagram ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            viewport={{ once: true, margin: '-60px' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-[400px]">
              <AgentFlowDiagram />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
