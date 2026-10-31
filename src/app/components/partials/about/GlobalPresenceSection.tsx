'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { CONTAINER, Eyebrow } from '@/app/components/partials/services/ServiceUI';
import { Constants } from '@/Constants';
import { PinMarkerBlue } from '@/ImagePath';

/*
 * About page — Global Presence.
 * Zurich first, as a full-bleed scene, then Skopje — each followed by a quiet location strip.
 * Wording is deliberate — the Zurich address is the partner location (Müller & Paparis), not a NativeCloud HQ.
 *
 * Scroll choreography (all disabled under prefers-reduced-motion):
 *  - heading words rise out of a soft blur, one after another
 *  - each photo is tied to scroll: it opens from a rounded inset window to full bleed as it
 *    reaches the top of the viewport, settling from a slight zoom
 *  - the photo drifts against the page (parallax), like looking through a window
 *  - city name and details rise in once the scene is open
 */
type Location = {
  country: string;
  city: string;
  role: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  address: { label: string; href: string };
  timezone: string;
};

const locations: Location[] = [
  {
    country: 'Switzerland',
    city: 'Zurich',
    role: 'Engineering & Partnerships',
    image: '/img/about/zurich.jpg', // Firdevs Birol, Pexels License — pexels.com/photo/18293505
    imagePosition: 'center 42%', // portrait source — keep St. Peter's tower and the Limmat front in frame
    imageAlt: 'Zurich old town and St. Peter church on the Limmat at dusk',
    // Müller & Paparis, Bahnhofstrasse — business partnership location
    address: { label: 'Bahnhofstrasse 44, 8001 Zürich', href: 'https://www.google.com/maps/search/?api=1&query=Bahnhofstrasse+44%2C+8001+Z%C3%BCrich' },
    timezone: 'Central European Time',
  },
  {
    country: 'North Macedonia',
    city: 'Skopje',
    role: 'Engineering & Delivery',
    image: '/img/Esg.jpg', // East Gate Skopje — same image as the Let's talk map section
    imagePosition: '55% 60%',
    imageAlt: 'East Gate Skopje at night, North Macedonia',
    address: { label: Constants.ADDRESS, href: Constants.MAPS },
    timezone: 'Central European Time · same as Zurich',
  },
];

const HEADING = 'Built in Zurich and Skopje.';
const EASE = [0.16, 1, 0.3, 1] as const;
const VIEWPORT = { once: true, margin: '-15% 0px' } as const;

function useWindowReveal(progress: MotionValue<number>) {
  // 0 → panel just entering at the bottom, 1 → panel top reaches the top of the viewport.
  const inset = useTransform(progress, [0, 1], [10, 0]);
  const radius = useTransform(progress, [0, 1], [36, 0]);
  const clipPath = useTransform([inset, radius], ([i, r]) => `inset(${i}% ${i}% ${i}% ${i}% round ${r}px)`);
  const scale = useTransform(progress, [0, 1], [1.18, 1]);
  return { clipPath, scale };
}

function LocationScene({ location, index }: { location: Location; index: number }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: enter } = useScroll({ target: ref, offset: ['start end', 'start start'] });
  const { scrollYProgress: pass } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const { clipPath, scale } = useWindowReveal(enter);
  const y = useTransform(pass, [0, 1], ['-8%', '8%']);

  const details = [
    { label: 'Focus', value: location.role },
    { label: 'Time zone', value: location.timezone },
    { label: 'Country', value: location.country },
  ];

  return (
    <article aria-labelledby={`presence-${location.city}`}>
      {/* Full-bleed scene */}
      <motion.div
        ref={ref}
        className="group relative h-[72vh] min-h-[440px] max-h-[860px] w-full overflow-hidden bg-[#0B1220]"
        style={reduce ? undefined : { clipPath }}
      >
        <motion.div className="absolute inset-x-0 -inset-y-[9%]" style={reduce ? undefined : { y }}>
          <motion.div className="absolute inset-0" style={reduce ? undefined : { scale }}>
            <Image
              src={location.image}
              alt={location.imageAlt}
              fill
              sizes="100vw"
              style={{ objectPosition: location.imagePosition ?? 'center' }}
              className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </motion.div>
        </motion.div>

        {/* Legibility wash for the overlaid title */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(5,10,20,0.72) 0%, rgba(5,10,20,0.25) 38%, rgba(5,10,20,0) 60%)' }}
          aria-hidden="true"
        />

        <div className={`${CONTAINER} absolute inset-x-0 bottom-0 pb-10 lg:pb-16`}>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30% 0px' }}
            transition={{ duration: 1, ease: EASE }}
          >
            <p className="m-0 text-[12px] font-medium uppercase tracking-[0.18em] text-white/70">
              0{index + 1} · {location.country}
            </p>
            <h3
              id={`presence-${location.city}`}
              className="m-0 mt-3 text-[56px] font-medium leading-[0.95] tracking-[-0.04em] text-white sm:text-[80px] lg:text-[120px]"
            >
              {location.city}
            </h3>
          </motion.div>
        </div>
      </motion.div>

      {/* Location strip */}
      <motion.div
        className={CONTAINER}
        initial={reduce ? false : { opacity: 0, y: 16 }}
        whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
        viewport={VIEWPORT}
        transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
      >
        <dl className="m-0 grid grid-cols-1 gap-x-10 gap-y-6 border-b border-[#E6E6E6] py-8 sm:grid-cols-2 lg:grid-cols-4 lg:py-10">
          <div className="flex flex-col gap-2">
            <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">Location</dt>
            <dd className="m-0">
              <a
                href={location.address.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/addr inline-flex items-center gap-2.5 text-[16px] font-medium tracking-tight text-[#111] transition-colors hover:text-[#2563EB]"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 transition-colors group-hover/addr:bg-[#2563EB]/20">
                  <Image src={PinMarkerBlue} alt="" className="size-3.5" />
                </span>
                {location.address.label}
                <span className="sr-only">(opens Google Maps)</span>
              </a>
            </dd>
          </div>
          {details.map(({ label, value }) => (
            <div key={label} className="flex flex-col gap-2">
              <dt className="text-[11px] font-medium uppercase tracking-[0.14em] text-[#9ca3af]">{label}</dt>
              <dd className="m-0 text-[16px] font-medium tracking-tight text-[#111]">{value}</dd>
            </div>
          ))}
        </dl>
      </motion.div>
    </article>
  );
}

export default function GlobalPresenceSection() {
  const reduce = useReducedMotion();
  const words = HEADING.split(' ');

  return (
    <section className="bg-white pb-20 lg:pb-24">
      <div className={`${CONTAINER} mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end lg:gap-16`}>
        <div>
          <div className="mb-4"><Eyebrow>Global presence</Eyebrow></div>
          <h2
            className="m-0 text-[30px] font-medium leading-[1.1] tracking-[-0.02em] text-[#111] md:text-[40px] lg:text-[48px]"
            aria-label={HEADING}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                className="inline-block"
                aria-hidden="true"
                initial={reduce ? false : { opacity: 0, y: '0.45em', filter: 'blur(8px)' }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={VIEWPORT}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.08 }}
              >
                {word}
                {i < words.length - 1 && ' '}
              </motion.span>
            ))}
          </h2>
        </div>
        <motion.p
          className="m-0 max-w-[440px] text-[18px] font-light leading-[1.6] text-[#374151] lg:justify-self-end"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.9, ease: EASE, delay: words.length * 0.08 }}
        >
          One team. Swiss standards.<br />
          No borders in between.
        </motion.p>
      </div>

      <div className="flex flex-col gap-20 lg:gap-32">
        {locations.map((location, i) => (
          <LocationScene key={location.city} location={location} index={i} />
        ))}
      </div>
    </section>
  );
}
