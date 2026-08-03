'use client';

/**
 * Decorative three-ring orbital + logo.
 * Logo lives inside the SVG so it tracks the orbital dot at all viewport sizes.
 * Place as the first child of any `relative overflow-hidden` container.
 */
export function OrbitalDecoration() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <defs>
          {/* Outer ring */}
          <linearGradient id="nc-orbit-outer" gradientUnits="userSpaceOnUse" x1="80" y1="820" x2="1200" y2="60">
            <stop offset="0%"   stopColor="white" stopOpacity="0.00" />
            <stop offset="30%"  stopColor="white" stopOpacity="0.07" />
            <stop offset="65%"  stopColor="white" stopOpacity="0.22" />
            <stop offset="100%" stopColor="white" stopOpacity="0.02" />
          </linearGradient>

          {/* Middle ring */}
          <linearGradient id="nc-orbit-mid" gradientUnits="userSpaceOnUse" x1="200" y1="820" x2="1100" y2="80">
            <stop offset="0%"   stopColor="white" stopOpacity="0.00" />
            <stop offset="55%"  stopColor="white" stopOpacity="0.10" />
            <stop offset="100%" stopColor="white" stopOpacity="0.00" />
          </linearGradient>

          {/* Inner ring */}
          <linearGradient id="nc-orbit-inner" gradientUnits="userSpaceOnUse" x1="200" y1="820" x2="1000" y2="120">
            <stop offset="0%"   stopColor="white" stopOpacity="0.00" />
            <stop offset="60%"  stopColor="white" stopOpacity="0.05" />
            <stop offset="100%" stopColor="white" stopOpacity="0.00" />
          </linearGradient>

          {/* Radial glow for dots */}
          <radialGradient id="nc-glow-white" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="white" stopOpacity="0.30" />
            <stop offset="100%" stopColor="white" stopOpacity="0.00" />
          </radialGradient>
        </defs>

        {/* ── Rings ── */}
        <ellipse cx="480" cy="520" rx="700" ry="380" stroke="url(#nc-orbit-outer)" strokeWidth="1.5" transform="rotate(-12 480 520)" />
        <ellipse cx="480" cy="520" rx="540" ry="293" stroke="url(#nc-orbit-mid)"   strokeWidth="1"   transform="rotate(-12 480 520)" />
        <ellipse cx="480" cy="520" rx="380" ry="206" stroke="url(#nc-orbit-inner)" strokeWidth="1"   transform="rotate(-12 480 520)" />

        {/* ── Anchor dot — (1016, 168) ── */}
        <circle className="nc-orbit-pulse" cx="1016" cy="168" r="20" fill="url(#nc-glow-white)" />
        <circle cx="1016" cy="168" r="6"   fill="none" stroke="white" strokeWidth="0.75" opacity="0.25" />
        <circle cx="1016" cy="168" r="2.5" fill="white" opacity="0.70" />

        {/* ── Secondary dot — (754, 126) ── */}
        <circle className="nc-orbit-pulse-slow" cx="754" cy="126" r="12" fill="url(#nc-glow-white)" />
        <circle cx="754" cy="126" r="1.5" fill="white" opacity="0.45" />
        <line x1="749.5" y1="126" x2="758.5" y2="126" stroke="white" strokeWidth="0.5" opacity="0.22" />
        <line x1="754"   y1="121.5" x2="754" y2="130.5" stroke="white" strokeWidth="0.5" opacity="0.22" />

        {/* ── Middle ring dot — (877, 264) ── */}
        <circle cx="877" cy="264" r="1.4" fill="white" opacity="0.30" />
        <circle cx="877" cy="264" r="4"   fill="white" opacity="0.04" />

        {/* ── Inner ring dot — (737, 330) ── */}
        <circle cx="737" cy="330" r="1" fill="white" opacity="0.20" />

        {/* ── Logo — embedded in SVG so it scales with the rings ── */}
        {/* Centered on anchor dot: x = 1016 - 75 = 941, y = 168 - 13 = 155 */}
        <image
          href="/img/Native-white.png"
          x="941"
          y="155"
          width="150"
          height="26"
          preserveAspectRatio="xMidYMid meet"
          opacity="0.90"
        />
      </svg>

    </div>
  );
}
