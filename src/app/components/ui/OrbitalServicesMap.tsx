'use client';

/**
 * Elliptical orbital rings — center at (100, 600), rotation -10°.
 * The orbit center sits outside/left of the section so only partial arcs
 * are visible, giving the "planet orbit intersecting the card" look.
 *
 * Motion paths computed from rotated ellipse parametric formula:
 *   P0(t=0)  = (cx + rx·cos α,  cy + rx·sin α)
 *   Pπ(t=π)  = (cx − rx·cos α,  cy − rx·sin α)
 *   cos(−10°)=0.9848  sin(−10°)=−0.1736
 */

// Outer  rx=900 ry=480  → P0=(986,444)  Pπ=(−786,756)
const OUTER = 'M 986.3 443.7 A 900 480 -10 1 0 -786.3 756.3 A 900 480 -10 1 0 986.3 443.7';
// Middle rx=660 ry=340  → P0=(750,485)  Pπ=(−550,715)
const MID   = 'M 749.8 485.5 A 660 340 -10 1 0 -549.8 714.5 A 660 340 -10 1 0 749.8 485.5';
// Inner  rx=430 ry=220  → P0=(523,525)  Pπ=(−323,675)
const INNER = 'M 523.5 525.3 A 430 220 -10 1 0 -323.5 674.7 A 430 220 -10 1 0 523.5 525.3';

export function OrbitalServicesMap() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 820"
        preserveAspectRatio="xMinYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Hidden motion paths */}
          <path id="nc-mp-o" d={OUTER} />
          <path id="nc-mp-m" d={MID}   />
          <path id="nc-mp-i" d={INNER} />

          {/* Dot glows */}
          <radialGradient id="nc-glow-blue"  cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#5B8BF5" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#5B8BF5" stopOpacity="0"   />
          </radialGradient>
          <radialGradient id="nc-glow-white" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0"    />
          </radialGradient>
          <radialGradient id="nc-glow-coral" cx="50%" cy="50%" r="50%">
            <stop offset="0%"   stopColor="#e89a78" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#e89a78" stopOpacity="0"   />
          </radialGradient>
        </defs>

        {/* ── Elliptical rings ── */}
        <ellipse cx="100" cy="600" rx="900" ry="480"
          stroke="rgba(110,150,230,0.22)" strokeWidth="1"
          transform="rotate(-10 100 600)" />

        <ellipse cx="100" cy="600" rx="660" ry="340"
          stroke="rgba(110,150,230,0.15)" strokeWidth="1"
          transform="rotate(-10 100 600)" />

        <ellipse cx="100" cy="600" rx="430" ry="220"
          stroke="rgba(110,150,230,0.10)" strokeWidth="1"
          transform="rotate(-10 100 600)" />

        {/* ── Blue dot — outer ring, 34 s ── */}
        <g>
          {/* @ts-expect-error – animateMotion is valid SVG */}
          <animateMotion dur="34s" repeatCount="indefinite" begin="0s" rotate="0" calcMode="linear">
            {/* @ts-expect-error – mpath is valid SVG */}
            <mpath href="#nc-mp-o" />
          </animateMotion>
          <circle r="18" fill="url(#nc-glow-blue)" />
          <circle r="4"  fill="#5B8BF5" opacity="0.95" />
        </g>

        {/* ── White dot — middle ring, 22 s ── */}
        <g>
          {/* @ts-expect-error – animateMotion is valid SVG */}
          <animateMotion dur="22s" repeatCount="indefinite" begin="-7s" rotate="0" calcMode="linear">
            {/* @ts-expect-error – mpath is valid SVG */}
            <mpath href="#nc-mp-m" />
          </animateMotion>
          <circle r="14" fill="url(#nc-glow-white)" />
          <circle r="3.5" fill="#ffffff" opacity="0.90" />
        </g>

        {/* ── Coral dot — inner ring, 14 s ── */}
        <g>
          {/* @ts-expect-error – animateMotion is valid SVG */}
          <animateMotion dur="14s" repeatCount="indefinite" begin="-4s" rotate="0" calcMode="linear">
            {/* @ts-expect-error – mpath is valid SVG */}
            <mpath href="#nc-mp-i" />
          </animateMotion>
          <circle r="16" fill="url(#nc-glow-coral)" />
          <circle r="3.5" fill="#e89a78" opacity="0.95" />
        </g>
      </svg>
    </div>
  );
}
