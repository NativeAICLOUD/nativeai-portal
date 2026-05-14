"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COOKIE_KEY = "nc_cookie_consent";

const glass: React.CSSProperties = {
  background: "rgba(255,255,255,0.82)",
  backdropFilter: "blur(40px) saturate(160%)",
  WebkitBackdropFilter: "blur(40px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.88)",
  boxShadow: "0 8px 48px rgba(232,154,120,0.18), 0 2px 12px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.95)",
};

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

  const save = () => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify({ necessary: true, ...prefs }));
    setVisible(false);
  };

  const toggle = (key: keyof Prefs) =>
    setPrefs((p) => ({ ...p, [key]: !p[key] }));

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9990] w-[calc(100%-2rem)] max-w-4xl">
      <div className="rounded-[22px] p-6 flex flex-col gap-5" style={glass}>

        {!showSettings ? (
          /* ── Main banner ── */
          <>
            <p className="text-[12.5px] leading-relaxed text-[#0a0e1a]/65">
              This website stores cookies on your computer. These cookies are used to collect
              information about how you interact with our website and allow us to remember you.
              We use this information in order to improve and customize your browsing experience
              and for analytics and metrics about our visitors both on this website and other
              media. To find out more about the cookies we use, see our{" "}
              <Link href="/privacy-policy" className="underline" style={{ color: "#b86a30" }}>
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-[12.5px] leading-relaxed text-[#0a0e1a]/65">
              If you decline, your information won&apos;t be tracked when you visit this website.
              A single cookie will be used in your browser to remember your preference not to be
              tracked.
            </p>
            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={() => setShowSettings(true)}
                className="px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  color: "#b86a30",
                  background: "rgba(240,160,96,0.10)",
                  border: "1px solid rgba(240,160,96,0.30)",
                }}
              >
                Cookies settings
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-full text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "#e89a78" }}
              >
                Accept
              </button>
            </div>
          </>
        ) : (
          /* ── Settings panel ── */
          <>
            <div>
              <h3 className="text-[15px] font-bold text-[#0a0e1a] mb-1">About Cookies</h3>
              <p className="text-[12px] leading-relaxed text-[#0a0e1a]/60">
                This site uses cookies. We use cookies mainly to improve and analyze your experience
                on our websites and for marketing purposes. Because we respect your right to privacy,
                you can choose not to allow some types of cookies. Click on the different category
                headings to find out more and change your default settings. Blocking some types of
                cookies may negatively impact your experience on the site and limit the services we
                are able to provide.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className="rounded-[14px] overflow-hidden"
                  style={{ border: "1px solid rgba(240,160,96,0.18)", background: "rgba(255,255,255,0.55)" }}
                >
                  <div className="flex items-center justify-between px-4 pt-3 pb-2">
                    <span className="text-[13px] font-semibold text-[#0a0e1a]">{cat.label}</span>
                    {cat.alwaysActive ? (
                      <span
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                        style={{ color: "#b86a30", background: "rgba(240,160,96,0.14)", border: "1px solid rgba(240,160,96,0.28)" }}
                      >
                        Always active
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={() => toggle(cat.key as keyof Prefs)}
                        className="relative shrink-0 w-10 h-[22px] rounded-full transition-all duration-300 focus:outline-none"
                        style={{ background: prefs[cat.key as keyof Prefs] ? "#e89a78" : "rgba(0,0,0,0.12)" }}
                        aria-checked={prefs[cat.key as keyof Prefs]}
                        role="switch"
                      >
                        <span
                          className="absolute top-[3px] w-4 h-4 rounded-full bg-white shadow transition-all duration-300"
                          style={{ left: prefs[cat.key as keyof Prefs] ? "calc(100% - 19px)" : "3px" }}
                        />
                      </button>
                    )}
                  </div>
                  <div className="px-4 pb-3">
                    <p className="text-[11px] leading-relaxed text-[#0a0e1a]/55">{cat.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 justify-end">
              <button
                onClick={save}
                className="px-5 py-2 rounded-full text-[13px] font-semibold transition-all duration-200 hover:opacity-80"
                style={{
                  color: "#b86a30",
                  background: "rgba(240,160,96,0.10)",
                  border: "1px solid rgba(240,160,96,0.30)",
                }}
              >
                Save settings
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 rounded-full text-[13px] font-semibold text-white transition-all duration-200 hover:opacity-90"
                style={{ background: "#e89a78" }}
              >
                Accept All
              </button>
            </div>
          </>
        )}

      </div>
    </div>
  );
}
