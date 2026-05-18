'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import { KCSP, KTP, MSP } from "@/ImagePath";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const services = [
  { title: "Custom Development",       body: "Tailored software built precisely for your business workflows — from API design to production-ready delivery.",                                href: "/services/custom-development",  tag: "Engineering" },
  { title: "Design",                   body: "Beautiful, intuitive interfaces that users love — from UX research and wireframes through to pixel-perfect UI.",                             href: "/services/design",               tag: "Design" },
  { title: "AI Agents & RAG",          body: "Intelligent automation and retrieval-augmented generation connected to your data, documents, and workflows.",                                href: "/services/ai-agents-rag",        tag: "AI & LLMs" },
  { title: "Data Lifecycle",           body: "End-to-end data platforms on Azure — from raw ingestion and transformation to analytics layers and Power BI dashboards.",                   href: "/data-lifecycle-management",     tag: "Data" },
  { title: "Cloud Architecture",       body: "Scalable, resilient cloud-native architectures designed for your team's size, traffic patterns, and growth trajectory.",                    href: "/cloud-software-architecture",   tag: "Cloud" },
  { title: "Migrate to Azure",         body: "A structured, low-risk migration from on-premises or any cloud provider to Microsoft Azure — without disrupting your operations.",          href: "/migrate-to-azure",              tag: "Cloud" },
  { title: "Cloud Native Development", body: "Microservices, containers, and Kubernetes — modern application architectures built to scale on Azure from day one.",                        href: "/cloud-native-sd",               tag: "Engineering" },
  { title: "DevOps on Azure",          body: "CI/CD pipelines, infrastructure-as-code, and automated testing workflows that let your team ship faster and safer.",                       href: "/devops-on-azure",               tag: "DevOps" },
];

const products = [
  { title: "Airline & Travel Booking", body: "A cloud-based platform for airlines, travel agencies, and tour operators — reservations, ticketing, GDS connectivity, and passenger management in one system.", href: "/airline-booking" },
  { title: "AI Legal Workspace",       body: "AI-powered document analysis, contract review, and legal research — built for law firms and in-house legal teams that want to move faster.",                   href: "/ai-legal-workspace" },
  { title: "Payment Automation",       body: "Recurring billing, rent collection, and payment reconciliation — automated end-to-end so your finance team focuses on decisions, not data entry.",             href: "/payment-automation" },
];

const certifications = [
  { src: MSP,  alt: "Microsoft Solutions Partner",           title: "Microsoft Solutions Partner",  body: "Recognised by Microsoft for consistent delivery of Azure solutions across cloud adoption, migration, and modern application development." },
  { src: KCSP, alt: "Kubernetes Certified Service Provider", title: "KCSP",                         body: "Certified by the CNCF to deliver Kubernetes production support, consulting, and professional services at enterprise scale." },
  { src: KTP,  alt: "Kubernetes Training Partner",           title: "Kubernetes Training Partner",  body: "Authorised to deliver official Kubernetes training — from fundamentals to advanced cluster operations and application deployment." },
];

/* ── glass tokens ── */
const lg: React.CSSProperties = {
  background: "rgba(255,255,255,0.58)",
  backdropFilter: "blur(48px) saturate(200%)",
  WebkitBackdropFilter: "blur(48px) saturate(200%)",
  border: "1px solid rgba(255,255,255,0.88)",
  boxShadow: "0 8px 40px rgba(180,80,20,0.10), 0 1px 2px rgba(0,0,0,0.04), inset 0 1px 0 rgba(255,255,255,0.98)",
};

const lgCard: React.CSSProperties = {
  background: "rgba(255,255,255,0.52)",
  backdropFilter: "blur(40px) saturate(190%)",
  WebkitBackdropFilter: "blur(40px) saturate(190%)",
  border: "1px solid rgba(255,255,255,0.84)",
  boxShadow: "0 4px 28px rgba(180,80,20,0.08), inset 0 1px 0 rgba(255,255,255,0.95)",
};

const lgDark: React.CSSProperties = {
  background: "rgba(255,255,255,0.07)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.24)",
};

function Blobs({ items }: { items: { w: number; h: number; top?: string; left?: string; right?: string; bottom?: string; color: string; delay: string }[] }) {
  return (
    <div aria-hidden className="absolute inset-0 pointer-events-none overflow-hidden">
      {items.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: b.w, height: b.h,
            top: b.top, left: b.left, right: b.right, bottom: b.bottom,
            background: `radial-gradient(circle, ${b.color} 0%, transparent 68%)`,
            filter: "blur(64px)",
            animation: `pulse-blob 6s ease-in-out ${b.delay} infinite`,
          }}
        />
      ))}
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <>
      <style>{`
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.65; transform: scale(1); }
          50%       { opacity: 1;   transform: scale(1.06); }
        }
      `}</style>

      <div className={jakarta.className}>

        {/* ── Hero — white with warm blobs ── */}
        <section
          className="relative overflow-hidden min-h-[85svh] flex items-center"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 40%, #fdf6ff 100%)" }}
        >
          <Blobs items={[
            { w: 900, h: 900, top: "-25%",    left: "-18%",  color: "rgba(232,154,120,0.52)",  delay: "0s" },
            { w: 750, h: 750, top: "5%",      right: "-15%", color: "rgba(251,191,36,0.38)",   delay: "1.5s" },
            { w: 650, h: 650, bottom: "-20%", left: "28%",   color: "rgba(249,168,212,0.40)",  delay: "3s" },
            { w: 400, h: 400, top: "45%",     left: "-5%",   color: "rgba(167,243,208,0.28)",  delay: "2s" },
          ]} />

          <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: "easeOut" }}
            >
              {/* Pill */}
              <div
                className="inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 mb-10"
                style={{ background: "rgba(232,154,120,0.10)", border: "1px solid rgba(232,154,120,0.28)", backdropFilter: "blur(12px)" }}
              >
                <span className="text-[11px] font-bold text-[#b8714e] tracking-widest uppercase" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                  What we build
                </span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">
                <div className="flex-1 min-w-0">
                  <h1
                    className="font-extrabold text-[#0a0e1a] leading-[0.95] mb-7"
                    style={{ fontSize: "clamp(52px, 7.5vw, 100px)", letterSpacing: "-0.045em" }}
                  >
                    Solutions<br />
                    <span style={{
                      background: "linear-gradient(135deg, #e89a78 0%, #f0a060 60%, #fbbf24 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}>
                      built to last.
                    </span>
                  </h1>

                  <motion.p
                    className="text-[#6b7280] text-xl leading-[1.75] max-w-[480px] mb-10"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
                  >
                    From AI agents and cloud infrastructure to fully managed SaaS products — we design, build, and ship software that scales with your business.
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3"
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, delay: 0.27, ease: "easeOut" }}
                  >
                    <Link
                      href="/schedule-call"
                      className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-white"
                      style={{ background: "#0a0e1a" }}
                    >
                      Schedule a free call
                    </Link>
                    <Link
                      href="/about"
                      className="inline-flex items-center px-8 py-4 rounded-full text-base font-medium text-[#374151] border border-[#e5e7eb] hover:border-[#e89a78] transition-colors"
                    >
                      About us
                    </Link>
                  </motion.div>
                </div>

                {/* Floating glass card */}
                <motion.div
                  className="lg:w-[340px] w-full shrink-0"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative">
                      <div
                        className="absolute inset-0 rounded-[28px] -z-10"
                        style={{ background: "radial-gradient(ellipse at 50% 40%, rgba(232,154,120,0.35) 0%, transparent 70%)", filter: "blur(28px)", transform: "scale(1.1)" }}
                      />
                      <div className="rounded-[24px] p-6 flex flex-col gap-5" style={lg}>
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-9 h-9 rounded-xl flex items-center justify-center"
                            style={{ background: "linear-gradient(135deg, #e89a78, #f0a060)", boxShadow: "0 2px 12px rgba(232,154,120,0.40)" }}
                          >
                            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="white" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" /></svg>
                          </div>
                          <p className="text-[13px] font-bold text-[#0a0e1a]">Our portfolio</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2.5">
                          {[
                            { n: "8", l: "Services" },
                            { n: "3", l: "Products" },
                            { n: "3", l: "Certifications" },
                            { n: "∞", l: "Scale" },
                          ].map(item => (
                            <div
                              key={item.l}
                              className="rounded-xl px-4 py-3 flex flex-col gap-0.5"
                              style={{ background: "rgba(232,154,120,0.09)", border: "1px solid rgba(232,154,120,0.20)" }}
                            >
                              <p className="text-xl font-extrabold text-[#0a0e1a]" style={{ letterSpacing: "-0.03em" }}>{item.n}</p>
                              <p className="text-[11px] text-[#6b7280] font-medium">{item.l}</p>
                            </div>
                          ))}
                        </div>

                        <Link
                          href="/schedule-call"
                          className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
                          style={{ background: "linear-gradient(135deg, #e89a78, #f0a060)", boxShadow: "0 4px 16px rgba(232,154,120,0.38)" }}
                        >
                          Schedule a free call
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7" /><path d="M7 7h10v10" /></svg>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── Services — glass cards on white + soft blobs ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef2e8 40%, #fdf5ff 100%)" }}
        >
          <Blobs items={[
            { w: 950, h: 950, top: "-20%",    right: "-16%", color: "rgba(232,154,120,0.46)",  delay: "0s" },
            { w: 750, h: 750, bottom: "-16%", left: "-12%",  color: "rgba(251,146,60,0.38)",   delay: "1.8s" },
            { w: 600, h: 600, top: "35%",     left: "38%",   color: "rgba(253,224,71,0.28)",   delay: "3s" },
            { w: 450, h: 450, top: "10%",     left: "25%",   color: "rgba(249,168,212,0.32)",  delay: "1s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <p className="text-xs uppercase tracking-wider text-[#9ca3af] font-medium">Services</p>
                </div>
                <h2
                  className="font-extrabold text-[#0a0e1a] leading-[1.05]"
                  style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
                >
                  Everything you need<br />to build at scale.
                </h2>
              </div>
              <Link
                href="/schedule-call"
                className="shrink-0 self-start md:self-end inline-flex items-center px-6 py-3 rounded-full text-sm font-bold whitespace-nowrap text-white"
                style={{ background: "#0a0e1a" }}
              >
                Schedule a free call
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: "easeOut" }}
                >
                  <Link href={s.href} className="group block h-full">
                    <div
                      className="h-full rounded-[22px] p-7 flex flex-col gap-4 transition-all duration-200 group-hover:scale-[1.02]"
                      style={lgCard}
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]"
                          style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        >{s.tag}</span>
                      </div>
                      <h3 className="text-[17px] font-bold text-[#0a0e1a] leading-snug group-hover:text-[#e89a78] transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-[#6b7280] text-sm leading-relaxed flex-1">{s.body}</p>
                      <div className="flex items-center gap-1.5 text-[#e89a78]/50 group-hover:text-[#e89a78] group-hover:gap-3 transition-all text-xs font-semibold mt-2">
                        Learn more
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Products — dark with warm glow ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#0a0e1a" }}
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 55%, rgba(232,154,120,0.13) 0%, transparent 55%)" }} />
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 20%, rgba(232,154,120,0.07) 0%, transparent 50%)" }} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
            <div className="flex items-center gap-2 mb-5">
              <p className="text-xs uppercase tracking-wider text-[#e89a78]/60 font-medium">Products</p>
            </div>
            <h2
              className="font-extrabold text-white leading-[1.05] mb-14"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
            >
              Ready-made platforms.<br />Production-ready today.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <Link href={p.href} className="group block h-full">
                    <div
                      className="h-full rounded-[22px] p-8 flex flex-col gap-5 transition-all duration-200 group-hover:scale-[1.02]"
                      style={lgDark}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-[#e89a78]/75" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                          NativeCloud Product
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug group-hover:text-[#e89a78] transition-colors">{p.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed flex-1">{p.body}</p>
                      <div className="flex items-center gap-1.5 text-white/25 group-hover:text-[#e89a78] group-hover:gap-3 transition-all text-xs font-semibold mt-auto">
                        See the product
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Certifications — white + soft blobs ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "linear-gradient(160deg, #fff8f3 0%, #fef6ff 50%, #f0f9ff 100%)" }}
        >
          <Blobs items={[
            { w: 850, h: 850, top: "-18%",    right: "-12%", color: "rgba(232,154,120,0.42)",  delay: "0s" },
            { w: 700, h: 700, bottom: "-14%", left: "-8%",   color: "rgba(251,146,60,0.34)",   delay: "2s" },
            { w: 500, h: 500, top: "40%",     left: "35%",   color: "rgba(167,197,253,0.30)",  delay: "1.2s" },
          ]} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
            <div className="flex items-center gap-2 mb-5">
              <p className="text-xs uppercase tracking-wider text-[#9ca3af] font-medium">Certifications</p>
            </div>
            <h2
              className="font-extrabold text-[#0a0e1a] leading-[1.05] mb-14"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)", letterSpacing: "-0.035em" }}
            >
              Recognised expertise.<br />Trusted by industry.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {certifications.map((c, i) => (
                <motion.div
                  key={i}
                  className="rounded-[22px] p-8 flex flex-col gap-6"
                  style={lgCard}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                >
                  <Image src={c.src} alt={c.alt} className="h-14 w-auto object-contain self-start" />
                  <div className="flex flex-col gap-2">
                    <h3 className="text-base font-bold text-[#0a0e1a]">{c.title}</h3>
                    <p className="text-[#6b7280] text-sm leading-relaxed">{c.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA — dark with orange glow ── */}
        <section
          className="relative overflow-hidden"
          style={{ background: "#0a0e1a" }}
        >
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(232,154,120,0.18) 0%, transparent 60%)" }} />
          <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 30%, rgba(251,146,60,0.10) 0%, transparent 55%)" }} />

          <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-20 flex flex-col md:flex-row md:items-center md:justify-between gap-10">
            <div className="flex flex-col gap-4 max-w-xl">
              <h2
                className="font-extrabold text-white leading-[1.05]"
                style={{ fontSize: "clamp(28px, 4vw, 48px)", letterSpacing: "-0.035em" }}
              >
                Ready to build<br />something that lasts?
              </h2>
              <p className="text-white/55 text-lg leading-[1.75]">
                Talk to our team about your project — we&apos;ll map out the right solution in a free 15-minute call.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/schedule-call"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-bold text-white"
                style={{ background: "#e89a78", boxShadow: "0 4px 20px rgba(232,154,120,0.40)" }}
              >
                Book a free call
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 rounded-full text-base font-semibold"
                style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", color: "rgba(255,255,255,0.80)", backdropFilter: "blur(16px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22)" }}
              >
                About us
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
