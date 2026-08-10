'use client';

import { Constants } from "@/Constants";
import { CONTAINER, Eyebrow, PrimaryButton, SecondaryButton } from "@/app/components/partials/services/ServiceUI";

const coreValues: { icon: string; title: string; body: string }[] = [
  {
    icon: '/about-us/handshake.svg',
    title: 'Transparency & Honesty',
    body: "We believe in being open and honest with our clients, partners, and team members. We will always communicate openly and transparently, even when it's difficult.",
  },
  {
    icon: '/about-us/hand-heart.svg',
    title: 'Trust & Care',
    body: 'We believe that trust is the foundation of any successful relationship. We will always act with care and empathy towards our clients and team members, and we will do our best to earn and maintain their trust.',
  },
  {
    icon: '/about-us/compass.svg',
    title: 'Curiosity & Inspiration',
    body: 'We believe that the best solutions come from asking questions and exploring new ideas. We will approach every project with a curious and open mind, and we will inspire our clients and team members to do the same.',
  },
  {
    icon: '/about-us/hand-heart.svg',
    title: 'Respect',
    body: 'We believe that everyone deserves to be treated with respect and dignity. We will treat our clients, team members, and partners with the utmost respect, regardless of their background or experience.',
  },
  {
    icon: '/about-us/trophy.svg',
    title: 'Excellence',
    body: 'We believe in delivering the highest quality work possible. We will always strive for excellence in everything we do, from the code we write to the way we interact with our clients and team members.',
  },
  {
    icon: '/about-us/books-open.svg',
    title: 'Knowledge & Commitment',
    body: 'We believe in constantly learning and growing as professionals. We will invest in our own knowledge and skills, and we will be committed to helping our clients and team members do the same.',
  },
  {
    icon: '/about-us/four-users.svg',
    title: 'Inclusiveness & Opportunity',
    body: 'We believe in creating a culture of inclusiveness where everyone has the opportunity to lead, own, and take responsibility. We will actively seek out diverse perspectives and voices, and we will work to remove barriers to access and advancement for all team members.',
  },
];

const achievements = [
  { label: 'Azure Expert MSP',                  sub: 'Microsoft designation',                 logo: null,                          msLogo: true  },
  { label: 'Cloud Native Computing Foundation', sub: 'CNCF member',                           logo: null,                          msLogo: false },
  { label: 'Kubernetes KCSP',                   sub: 'Kubernetes Certified Service Provider', logo: '/img/partners/kubernetes.svg', msLogo: false },
  { label: '5× Microsoft Solutions Partner',    sub: 'Multi-area certification',              logo: '/img/microsoft-partner.png',  msLogo: false },
  { label: 'AWS Partner',                       sub: 'Amazon Web Services network',           logo: '/img/aws-partner.png',        msLogo: false },
  { label: 'Microsoft AI Tour',                 sub: 'Official member & partner',             logo: null,                          msLogo: true  },
] as { label: string; sub: string; logo: string | null; msLogo: boolean }[];

const socials = [
  { name: 'LinkedIn', icon: 'icon-linkedin', url: Constants.SOCIALS.LINKEDIN },
  { name: 'Instagram', icon: 'icon-instagram', url: Constants.SOCIALS.INSTAGRAM },
];

function AchievementMark({ logo, msLogo, label }: { logo: string | null; msLogo: boolean; label: string }) {
  if (logo) {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#eee] bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logo} alt={label} className="h-8 w-8 object-contain" />
      </span>
    );
  }
  if (msLogo) {
    return (
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#eee] bg-white">
        <svg width="24" height="24" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0"  y="0"  width="10" height="10" fill="#F25022" />
          <rect x="11" y="0"  width="10" height="10" fill="#7FBA00" />
          <rect x="0"  y="11" width="10" height="10" fill="#00A4EF" />
          <rect x="11" y="11" width="10" height="10" fill="#FFB900" />
        </svg>
      </span>
    );
  }
  return (
    <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[#eee] bg-white">
      {/* CNCF official icon mark — source: cncf.io */}
      <svg width="28" height="28" viewBox="0 0 45 45" xmlns="http://www.w3.org/2000/svg">
        <path fill="#0086FF" d="M6.263 29.706H0v14.776h14.66v-6.354H6.263v-8.422zm31.524.069v8.353H29.39v6.354h14.66V29.706h-6.332l.069.069zM0 15.005h6.332l-.069-.069V6.584H14.66V.229H0v14.776zM29.39.229v6.355h8.397v8.421h6.263V.229H29.39z" />
        <path fill="#93EAFF" d="M28.563 15.005l-8.397-8.421h9.223V.229H14.66v6.355l8.397 8.421h5.506zm-7.571 14.7h-5.506l6.951 6.977 1.377 1.445H14.66v6.354h14.73v-6.423l-4.198-4.149-4.2-4.204zm16.794-14.7v9.182l-1.445-1.452-6.952-6.977v5.594l4.13 4.149 4.198 4.211h6.332V15.006h-6.263zM14.66 23.358l-8.328-8.353H0v14.7h6.263v-9.182l8.397 8.429v-5.594z" />
      </svg>
    </span>
  );
}

export default function AboutUsPage() {
  return (
    <div className="font-switzer">

      {/* ── Hero ── */}
      <div className="hero-bg-blue">
        <div className={`${CONTAINER} pb-12 pt-32 lg:pt-28`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">

            {/* Left */}
            <div className="flex-1">
              <div className="mb-6"><Eyebrow>About NativeCloud</Eyebrow></div>
              <h1 className="m-0 text-[40px] font-medium leading-[1.05] text-[#111] sm:text-[52px] lg:text-[64px]">
                We make AI work for you.
              </h1>
              <p className="mt-6 max-w-[520px] text-[18px] font-light leading-[1.6] text-[#111]">
                NativeCloud is an AI and cloud engineering company that helps businesses turn ideas
                into working solutions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton href={Constants.PAGES.SCHEDULE_CALL}>Schedule a free call</PrimaryButton>
                <SecondaryButton href={Constants.PAGES.SOLUTIONS}>See all solutions</SecondaryButton>
              </div>
              <div className="mt-8 flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e6e6e6] bg-white text-[#111] transition-colors hover:border-[#111]"
                  >
                    <svg width="18" height="18">
                      <use href={`/icons/all-icons.svg#${s.icon}`} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* blue divider — matches the footer's brand gradient */}
        <hr
          className="m-0 h-1 w-full border-0"
          style={{
            backgroundImage: 'linear-gradient(260deg, #fff, #BECBFF 20%, #5B7CFA 50%, #2563EB 80%, #fff)',
            borderRadius: 100,
          }}
        />
      </div>

      {/* ── Vision & Mission ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="mb-4"><Eyebrow>Our vision</Eyebrow></div>
              <div className="flex flex-col gap-4">
                <p className="m-0 text-[20px] font-medium leading-[1.5] text-[#111] md:text-[24px]">
                  We&apos;re dedicated to providing high-quality software development solutions that
                  help businesses grow, innovate, and succeed in today&apos;s fast-changing digital
                  world.
                </p>
                <p className="m-0 text-[15px] font-normal leading-[1.6] text-[#6b7280]">
                  We work closely with our clients, using the latest technologies while staying
                  honest, transparent, and focused on delivering results that meet—and exceed—their
                  expectations.
                </p>
              </div>
            </div>
            <div>
              <div className="mb-4"><Eyebrow>Our mission</Eyebrow></div>
              <p className="m-0 text-[20px] font-medium leading-[1.5] text-[#111] md:text-[24px]">
                Our goal is to make technology feel natural, useful, and human. We do this with
                honesty, transparency, and respect—because the best solutions are built on trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Core Values</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              What we stand for.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {coreValues.map(({ icon, title, body }) => (
              <div key={title} className="flex h-full flex-col rounded-lg border border-[#e6e6e6] bg-white p-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={icon} alt="" className="mb-4 h-10 w-10 object-contain" aria-hidden="true" />
                <h3 className="m-0 text-[18px] font-medium leading-[1.25] text-[#111]">{title}</h3>
                <p className="mt-2 text-[14.5px] font-normal leading-[1.55] text-[#6b7280]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners & achievements ── */}
      <section className="bg-white">
        <div className={`${CONTAINER} pb-20 lg:pb-24`}>
          <div className="mb-12">
            <div className="mb-4"><Eyebrow>Partners &amp; credentials</Eyebrow></div>
            <h2 className="m-0 max-w-[620px] text-[30px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
              Recognised by the platforms we build on.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {achievements.map((a) => (
              <div key={a.label} className="flex items-center gap-4 rounded-lg border border-[#e6e6e6] bg-white p-5">
                <AchievementMark logo={a.logo} msLogo={a.msLogo} label={a.label} />
                <div className="min-w-0">
                  <p className="m-0 text-[15px] font-medium leading-snug text-[#111]">{a.label}</p>
                  <p className="m-0 mt-0.5 text-[13px] font-normal leading-snug text-[#9ca3af]">{a.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get in touch ── */}
      <section className="border-t border-[#eee] hero-bg-blue">
        <div className={`${CONTAINER} py-20 lg:py-24`}>
          <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
            <div className="flex-1">
              <div className="mb-4"><Eyebrow>Get in touch</Eyebrow></div>
              <h2 className="m-0 text-[28px] font-medium leading-[1.1] text-[#111] md:text-[40px]">
                Let&apos;s build something that actually works.
              </h2>
            </div>

            <div className="flex-1">
              <div
                className="overflow-hidden"
                style={{ background: '#ffffff', border: '1px solid #e6e6e6', borderRadius: 28, boxShadow: '0 24px 64px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.04)' }}
              >
                <div className="border-b border-[#eee] px-6 sm:px-8 pt-6 pb-5" style={{ background: '#fafafa' }}>
                  <h3 className="m-0 text-base font-semibold text-[#111]">Send us a message</h3>
                </div>
                <div className="px-6 sm:px-8 py-7">
                  <form onSubmit={(e) => e.preventDefault()} className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold uppercase tracking-[0.10em] text-[#6b7280]">Name</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#111]"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[10.5px] font-semibold uppercase tracking-[0.10em] text-[#6b7280]">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#111]"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10.5px] font-semibold uppercase tracking-[0.10em] text-[#6b7280]">Subject</label>
                <input
                  type="text"
                  placeholder="What are you working on?"
                  className="w-full rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#111]"
                />
              </div>
              <div className="flex flex-col gap-1.5 sm:col-span-2">
                <label className="text-[10.5px] font-semibold uppercase tracking-[0.10em] text-[#6b7280]">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, timeline, or any questions…"
                  className="w-full resize-none rounded-2xl border border-[#e6e6e6] bg-white px-4 py-3 text-sm text-[#111] outline-none transition-colors placeholder:text-[#9ca3af] focus:border-[#111]"
                />
              </div>
              <div className="flex flex-col gap-4 pt-2 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-[#9ca3af]">We reply within one business day.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#111] px-8 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 shrink-0">
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                  Send message
                </button>
              </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
