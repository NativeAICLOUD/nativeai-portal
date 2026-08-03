export default function DesignLoading() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        @keyframes pulse-blob {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 0.8; transform: scale(1.08); }
        }
        .sk {
          background: linear-gradient(90deg,
            rgba(255,255,255,0.35) 0%,
            rgba(255,255,255,0.70) 40%,
            rgba(255,255,255,0.35) 80%
          );
          background-size: 600px 100%;
          animation: shimmer 1.6s ease-in-out infinite;
        }
      `}</style>

      {/* ── Hero skeleton ── */}
      <section
        className="relative overflow-hidden min-h-[100svh] flex items-center"
        style={{ background: "#f0eeff" }}
      >
        {/* Blobs */}
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          {[
            { w: 700, h: 700, top: "-20%", left: "-15%", c: "rgba(192,132,252,0.40)", delay: "0s" },
            { w: 600, h: 600, top: "10%",  right: "-10%", c: "rgba(249,168,212,0.35)", delay: "0.8s" },
            { w: 500, h: 500, bottom: "-10%", left: "25%", c: "rgba(147,197,253,0.30)", delay: "1.4s" },
          ].map((b, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: b.w, height: b.h,
                top: b.top, left: b.left,
                right: (b as { right?: string }).right,
                bottom: (b as { bottom?: string }).bottom,
                background: `radial-gradient(circle, ${b.c} 0%, transparent 65%)`,
                filter: "blur(60px)",
                animation: `pulse-blob 4s ease-in-out ${b.delay} infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 pt-36 pb-24">
          <div className="flex flex-col lg:flex-row lg:items-center gap-14 xl:gap-20">

            {/* Left skeleton */}
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              {/* Pill */}
              <div className="w-28 h-7 rounded-full sk" style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.9)" }} />

              {/* Headline lines */}
              <div className="flex flex-col gap-4">
                <div className="h-[72px] w-[85%] rounded-2xl sk" />
                <div className="h-[72px] w-[90%] rounded-2xl sk" />
                <div className="h-[72px] w-[60%] rounded-2xl sk" />
              </div>

              {/* Body lines */}
              <div className="flex flex-col gap-2.5 mt-2">
                <div className="h-5 w-full rounded-full sk" />
                <div className="h-5 w-[88%] rounded-full sk" />
                <div className="h-5 w-[72%] rounded-full sk" />
              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-2">
                <div className="h-14 w-52 rounded-full sk" />
                <div className="h-14 w-40 rounded-full sk" />
              </div>
            </div>

            {/* Right — mockup card skeleton */}
            <div className="lg:flex-1 lg:max-w-[500px] w-full">
              <div
                className="rounded-[28px] p-6 flex flex-col gap-5"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(32px) saturate(150%)",
                  WebkitBackdropFilter: "blur(32px) saturate(150%)",
                  border: "1px solid rgba(255,255,255,0.80)",
                  boxShadow: "0 4px 32px rgba(120,80,200,0.07), inset 0 1px 0 rgba(255,255,255,0.92)",
                }}
              >
                {/* Browser bar */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full sk" />
                  <div className="w-3 h-3 rounded-full sk" />
                  <div className="w-3 h-3 rounded-full sk" />
                  <div className="flex-1 ml-2 h-6 rounded-full sk" />
                </div>
                {/* Nav mock */}
                <div className="h-10 rounded-2xl sk" />
                {/* Hero mock */}
                <div className="h-32 rounded-2xl sk" />
                {/* Card grid mock */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="h-[72px] rounded-2xl sk" />
                  <div className="h-[72px] rounded-2xl sk" />
                  <div className="h-[72px] rounded-2xl sk" />
                </div>
                {/* Tokens */}
                <div className="flex items-center gap-2.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-6 h-6 rounded-full sk shrink-0" />
                  ))}
                  <div className="flex-1 h-4 rounded-full sk ml-2" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Features skeleton ── */}
      <section
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #faf5ff 0%, #fdf2f8 40%, #eff6ff 100%)" }}
      >
        <div aria-hidden className="absolute inset-0 pointer-events-none">
          <div className="absolute rounded-full" style={{ width: 800, height: 800, top: "-30%", right: "-20%", background: "radial-gradient(circle, rgba(192,132,252,0.25) 0%, transparent 65%)", filter: "blur(60px)" }} />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 md:px-12 py-28">
          {/* Section label + heading */}
          <div className="flex flex-col gap-4 mb-16">
            <div className="w-36 h-4 rounded-full sk" />
            <div className="w-96 h-12 rounded-2xl sk" />
            <div className="w-72 h-12 rounded-2xl sk" />
          </div>
          {/* 6 glass skeleton cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="rounded-[22px] p-8 flex flex-col gap-3"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(32px)",
                  WebkitBackdropFilter: "blur(32px)",
                  border: "1px solid rgba(255,255,255,0.80)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.92)",
                }}
              >
                <div className="w-8 h-3 rounded-full sk" />
                <div className="w-[80%] h-5 rounded-full sk" />
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="w-full h-3.5 rounded-full sk" />
                  <div className="w-[90%] h-3.5 rounded-full sk" />
                  <div className="w-[65%] h-3.5 rounded-full sk" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
