'use client';

import { useEffect, useState } from 'react';

const SECTIONS = [
  { id: 'home-hero', label: 'Home' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'industries', label: 'Industries' },
  { id: 'services', label: 'Services' },
  { id: 'ai-services', label: 'AI Services' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'mission', label: 'Mission' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'tech-stack', label: 'Tech Stack' },
  { id: 'partners', label: 'Partners' },
];

export default function ScrollSectionNav() {
  const [active, setActive] = useState(SECTIONS[0].id);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const elements = SECTIONS.map(({ id }) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav
      aria-label="Page sections"
      className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {SECTIONS.map(({ id, label }) => {
        const isActive = active === id;
        const isHovered = hovered === id;
        const isRevealed = isActive || isHovered;

        return (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
            aria-label={`Go to ${label} section`}
            aria-current={isActive ? 'true' : undefined}
            className="group flex items-center gap-2.5 py-1"
          >
            <span
              className="whitespace-nowrap rounded-full px-3 py-1 text-[11px] font-medium text-white shadow-[0_2px_10px_rgba(0,0,0,0.18)] transition-all duration-200"
              style={{
                background: '#111',
                opacity: isRevealed ? 1 : 0,
                transform: isRevealed ? 'translateX(0)' : 'translateX(6px)',
                pointerEvents: 'none',
              }}
            >
              {label}
            </span>
            <span
              className="block rounded-full transition-all duration-300 ease-out"
              style={{
                height: 2,
                width: isActive ? 28 : 14,
                background: isActive ? '#111' : 'rgba(17,17,17,0.28)',
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
