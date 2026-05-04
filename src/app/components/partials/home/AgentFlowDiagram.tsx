'use client';

import { motion } from 'framer-motion';

/* ─── nodes (x/y as % of square container) ─── */
const nodes = [
  { id: 'input',  x: 50, y:  5, label: 'INPUT',      sub: 'User Request',   cat: 'neutral', hero: false },
  { id: 'agent',  x: 50, y: 23, label: 'AI AGENT',   sub: 'Orchestrator',   cat: 'orange',  hero: true  },
  { id: 'gpt',    x: 17, y: 46, label: 'GPT-4o',     sub: 'Language Model', cat: 'blue',    hero: false },
  { id: 'mcp',    x: 83, y: 46, label: 'MCP',        sub: 'Protocol',       cat: 'purple',  hero: false },
  { id: 'srv',    x: 83, y: 64, label: 'MCP Server', sub: 'Tool Runtime',   cat: 'purple',  hero: false },
  { id: 'az',     x: 22, y: 84, label: 'Azure AI',   sub: 'Search',         cat: 'azure',   hero: false },
  { id: 'rag',    x: 50, y: 84, label: 'RAG Store',  sub: 'Vector DB',      cat: 'teal',    hero: false },
  { id: 'tools',  x: 78, y: 84, label: 'TOOLS',      sub: 'Functions',      cat: 'neutral', hero: false },
];

/* ─── edges: path + dot speed + framer fade delay ─── */
const edges = [
  { d: 'M50,5 L50,23',   dur: 1.6, fd: 0.00 },
  { d: 'M50,23 L17,46',  dur: 2.2, fd: 0.10 },
  { d: 'M50,23 L83,46',  dur: 2.0, fd: 0.10 },
  { d: 'M83,46 L83,64',  dur: 1.7, fd: 0.22 },
  { d: 'M83,64 L22,84',  dur: 2.5, fd: 0.32 },
  { d: 'M83,64 L50,84',  dur: 2.0, fd: 0.37 },
  { d: 'M83,64 L78,84',  dur: 1.8, fd: 0.42 },
];

const P: Record<string, { bg: string; bd: string; tx: string; sh: string }> = {
  orange:  { bg: 'rgba(232,154,120,0.15)', bd: 'rgba(232,154,120,0.55)', tx: '#e89a78', sh: '0 0 32px rgba(232,154,120,0.35)' },
  blue:    { bg: 'rgba(96,165,250,0.11)',  bd: 'rgba(96,165,250,0.44)',  tx: '#60a5fa', sh: '0 0 20px rgba(96,165,250,0.25)'  },
  purple:  { bg: 'rgba(167,139,250,0.11)', bd: 'rgba(167,139,250,0.44)', tx: '#a78bfa', sh: '0 0 20px rgba(167,139,250,0.22)' },
  azure:   { bg: 'rgba(56,189,248,0.11)',  bd: 'rgba(56,189,248,0.44)',  tx: '#38bdf8', sh: '0 0 16px rgba(56,189,248,0.22)'  },
  teal:    { bg: 'rgba(45,212,191,0.11)',  bd: 'rgba(45,212,191,0.44)',  tx: '#2dd4bf', sh: '0 0 16px rgba(45,212,191,0.22)'  },
  neutral: { bg: 'rgba(255,255,255,0.05)', bd: 'rgba(255,255,255,0.18)', tx: 'rgba(255,255,255,0.88)', sh: 'none' },
};

/* ─── icons (24×24 SVG paths) ─── */
const icons: Record<string, React.ReactNode> = {
  input: (
    <path d="M12 4v16m0 0-5-5m5 5 5-5" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round"/>
  ),
  agent: (
    <path d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  ),
  gpt: (
    <path d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  ),
  mcp: (
    <>
      <circle cx="12" cy="12" r="2.5" strokeWidth={1.5}/>
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2m-3.05-6.95-1.41 1.41M5.46 18.54l-1.41 1.41M18.95 18.54l-1.41-1.41M5.46 5.46 4.05 4.05"
        strokeWidth={1.5} strokeLinecap="round"/>
    </>
  ),
  srv: (
    <>
      <rect x="2" y="3" width="20" height="5.5" rx="1.5" strokeWidth={1.5}/>
      <rect x="2" y="10.5" width="20" height="5.5" rx="1.5" strokeWidth={1.5}/>
      <circle cx="6" cy="5.75" r="1" fill="currentColor" stroke="none"/>
      <circle cx="6" cy="13.25" r="1" fill="currentColor" stroke="none"/>
    </>
  ),
  az: (
    <path d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  ),
  rag: (
    <>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.5" strokeWidth={1.5}/>
      <path d="M4 5.5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" strokeWidth={1.5} strokeLinecap="round"/>
      <path d="M4 10.5v5c0 1.38 3.58 2.5 8 2.5s8-1.12 8-2.5v-5" strokeWidth={1.5} strokeLinecap="round"/>
    </>
  ),
  tools: (
    <path d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
      strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"/>
  ),
};

export default function AgentFlowDiagram() {
  return (
    <div
      className="relative w-full select-none"
      style={{ aspectRatio: '1 / 1', maxWidth: 440 }}
    >
      {/* ambient glow behind agent */}
      <div
        className="pointer-events-none absolute"
        style={{
          left: '50%', top: '23%',
          transform: 'translate(-50%,-50%)',
          width: 280, height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(232,154,120,0.08) 0%, transparent 70%)',
        }}
      />

      {/* ── SVG lines + moving dots ── */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <style>{`
            @keyframes flowDash {
              from { stroke-dashoffset: 8; }
              to   { stroke-dashoffset: 0; }
            }
          `}</style>
        </defs>

        {edges.map((e, i) => (
          <g key={i}>
            {/* base track */}
            <motion.path
              d={e.d} fill="none"
              stroke="rgba(255,255,255,0.07)" strokeWidth="0.35"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: e.fd }}
              viewport={{ once: true }}
            />
            {/* animated dashes */}
            <motion.path
              d={e.d} fill="none"
              stroke="rgba(232,154,120,0.45)"
              strokeWidth="0.4"
              strokeDasharray="2 2.5"
              strokeLinecap="round"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: e.fd + 0.15 }}
              viewport={{ once: true }}
              style={{ animation: 'flowDash 1.4s linear infinite' }}
            />
            {/* moving dot */}
            <circle r="0.9" fill="#e89a78" opacity="0.95">
              {/* @ts-ignore – animateMotion path attr */}
              <animateMotion dur={`${e.dur}s`} repeatCount="indefinite" path={e.d}/>
            </circle>
          </g>
        ))}
      </svg>

      {/* ── Nodes ── */}
      {nodes.map((n, i) => {
        const p = P[n.cat];
        return (
          <motion.div
            key={n.id}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            style={{
              position: 'absolute',
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: 'translate(-50%, -50%)',
              background: p.bg,
              border: `1px solid ${p.bd}`,
              boxShadow: p.sh,
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: n.hero ? 16 : 12,
              padding: n.hero ? '11px 20px' : '7px 11px',
              minWidth: n.hero ? 128 : 78,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 4,
              zIndex: n.hero ? 2 : 1,
            }}
          >
            {/* double pulse rings on AI AGENT */}
            {n.hero && (
              <>
                <motion.span
                  animate={{ scale: [1, 1.55, 1], opacity: [0.4, 0, 0.4] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ position: 'absolute', inset: -14, borderRadius: 24, border: '1px solid rgba(232,154,120,0.28)', pointerEvents: 'none' }}
                />
                <motion.span
                  animate={{ scale: [1, 1.28, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                  style={{ position: 'absolute', inset: -7, borderRadius: 20, border: '1px solid rgba(232,154,120,0.2)', pointerEvents: 'none' }}
                />
              </>
            )}

            {/* icon */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              style={{ width: n.hero ? 18 : 14, height: n.hero ? 18 : 14, color: p.tx, flexShrink: 0 }}
            >
              {icons[n.id]}
            </svg>

            {/* label */}
            <p style={{
              color: p.tx,
              fontWeight: 700,
              fontSize: n.hero ? 12 : 9.5,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              lineHeight: 1,
              margin: 0,
              whiteSpace: 'nowrap',
            }}>
              {n.label}
            </p>

            {/* sublabel */}
            <p style={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 8,
              letterSpacing: '0.04em',
              margin: 0,
              lineHeight: 1,
              whiteSpace: 'nowrap',
            }}>
              {n.sub}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
}
