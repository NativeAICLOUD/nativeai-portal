"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "nc_cookie_consent";

/* Cookie consent — same language as the rest of the site: white card with a hairline
   border, periwinkle pill eyebrow, round (pill) blue primary button, quiet secondary actions. */

const PILL_RADIUS = '0.9em 1.05em 0.85em 1em / 1em 0.9em 1.05em 0.9em';
const BTN = 'inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full px-5 py-2 text-[13px] font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2';
const BTN_PRIMARY = `${BTN} bg-[#2563EB] text-white hover:bg-[#1D4ED8] active:bg-[#1E40AF]`;
const BTN_SECONDARY = `${BTN} border border-[#E5E7EB] bg-white text-[#141414] hover:bg-[#F4F5F7]`;
const BTN_QUIET = `${BTN} text-[#6B7280] hover:bg-[#F1F2F4] hover:text-[#111]`;

const categories = [
  {
    key: "necessary",
    label: "Necessary",
    description:
      "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms.",
    alwaysActive: true,
  },
  {
    key: "analytics",
    label: "Analytics",
    description:
      "These cookies help us to understand how visitors engage with the website. We may use a set of cookies to collect information and report site usage statistics. In addition to reporting site usage statistics, data collected may also be used, together with some of the advertising cookies described, to help show more relevant ads across the web and to measure interactions with the ads we show.",
    alwaysActive: false,
  },
  {
    key: "advertisement",
    label: "Advertisement",
    description:
      "We use cookies to make our ads more engaging and valuable to site visitors. Some common applications of cookies are to select advertising based on what's relevant to a user; to improve reporting on ad campaign performance; and to avoid showing ads the user has already seen.",
    alwaysActive: false,
  },
  {
    key: "functionality",
    label: "Functionality",
    description:
      "We use a set of cookies that are optional for the website to function. They are usually only set in response to information provided to the website to personalize and optimize your experience as well as remember your chat history.",
    alwaysActive: false,
  },
];

type Prefs = { analytics: boolean; advertisement: boolean; functionality: boolean };

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>({
    analytics: false,
    advertisement: false,
    functionality: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, analytics: true, advertisement: true, functionality: true }));
    setVisible(false);
  };

  // "Decline" keeps only the necessary cookies and remembers that choice.
  const decline = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, analytics: false, advertisement: false, functionality: false }));
    setVisible(false);
  };

  const save = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, ...prefs }));
    setVisible(false);
  };

  const toggle = (key: keyof Prefs) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-6 left-1/2 z-[9990] w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2 font-switzer"
    >
      <div className="flex max-h-[calc(100dvh-2rem)] flex-col gap-5 overflow-y-auto rounded-[22px] border border-[#E5E7EB] bg-white p-6 shadow-[0_24px_60px_-16px_rgba(15,23,42,0.28)]">

        {!showSettings ? (
          /* ── Main banner ── */
          <>
            <div>
              <span
                className="inline-block bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                style={{ borderRadius: PILL_RADIUS }}
              >
                Cookies
              </span>
              <h2 className="m-0 mt-3 text-[18px] font-medium leading-[1.2] tracking-tight text-[#141414]">
                Your privacy, your choice.
              </h2>
            </div>
            <div className="flex flex-col gap-3 text-[12.5px] leading-relaxed text-[#4B5563]">
              <p className="m-0">
                This website stores cookies on your computer. These cookies are used to collect
                information about how you interact with our website and allow us to remember you.
                We use this information in order to improve and customize your browsing experience
                and for analytics and metrics about our visitors both on this website and other
                media. To find out more about the cookies we use, see our{" "}
                <Link href="/privacy-policy" className="font-medium text-[#2563EB] underline underline-offset-2 hover:text-[#1D4ED8]">
                  Privacy Policy
                </Link>
                .
              </p>
              <p className="m-0">
                If you decline, your information won&apos;t be tracked when you visit this website.
                A single cookie will be used in your browser to remember your preference not to be
                tracked.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-end gap-3">
              <button type="button" onClick={() => setShowSettings(true)} className={`${BTN_QUIET} mr-auto -ml-3`}>
                Cookie settings
              </button>
              <button type="button" onClick={decline} className={BTN_SECONDARY}>
                Decline
              </button>
              <button type="button" onClick={accept} className={`${BTN_PRIMARY}`}>
                Accept
              </button>
            </div>
          </>
        ) : (
          /* ── Settings panel ── */
          <>
            <div>
              <span
                className="inline-block bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                style={{ borderRadius: PILL_RADIUS }}
              >
                Cookie settings
              </span>
              <h2 className="m-0 mt-3 text-[18px] font-medium leading-[1.2] tracking-tight text-[#141414]">About cookies</h2>
              <p className="m-0 mt-2 text-[12px] leading-relaxed text-[#4B5563]">
                This site uses cookies. We use cookies mainly to improve and analyze your experience
                on our websites and for marketing purposes. Because we respect your right to privacy,
                you can choose not to allow some types of cookies. Blocking some types of
                cookies may negatively impact your experience on the site and limit the services we
                are able to provide.
              </p>
            </div>

            <div className="divide-y divide-[#EEF1F2] border-y border-[#EEF1F2]">
              {categories.map((cat) => (
                <div key={cat.key} className="py-3.5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-[13px] font-semibold text-[#141414]">{cat.label}</span>
                    {cat.alwaysActive ? (
                      <span className="rounded-md bg-[#EEF1F2] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#4B5563]">
                        Always active
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggle(cat.key as keyof Prefs)}
                        className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB] focus-visible:ring-offset-2 ${
                          prefs[cat.key as keyof Prefs] ? "bg-[#2563EB]" : "bg-[#D9DDE3]"
                        }`}
                        aria-checked={prefs[cat.key as keyof Prefs]}
                        aria-label={cat.label}
                        role="switch"
                      >
                        <span
                          className={`absolute left-[3px] top-[3px] h-[18px] w-[18px] rounded-full bg-white shadow transition-transform duration-200 ${
                            prefs[cat.key as keyof Prefs] ? "translate-x-5" : "translate-x-0"
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  <p className="m-0 mt-1.5 max-w-[720px] text-[11px] leading-relaxed text-[#6B7280]">{cat.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3">
              <button type="button" onClick={() => setShowSettings(false)} className={`${BTN_QUIET} mr-auto -ml-3`}>
                &larr; Back
              </button>
              <button type="button" onClick={save} className={BTN_SECONDARY}>
                Save settings
              </button>
              <button type="button" onClick={accept} className={`${BTN_PRIMARY}`}>
                Accept all
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
