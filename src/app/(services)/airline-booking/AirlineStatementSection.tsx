import { Instrument_Serif } from "next/font/google";
import { CONTAINER } from "@/app/components/partials/services/ServiceUI";

/* Editorial serif used only for the highlighted word */
const serif = Instrument_Serif({
  weight: "400",
  style: "italic",
  subsets: ["latin"],
  display: "swap",
});

/* Fine grain — breaks up gradient banding. Inline SVG noise, no image asset. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/* Big product statement — minimal editorial hero with a soft cyan glow
   rising from the upper-right and fading to white toward the left/bottom. */
export default function AirlineStatementSection() {
  return (
    <section
      aria-labelledby="airline-statement-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        {/* base wash */}
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(200deg, #F8FCFF 0%, #FFFFFF 55%, #FFFFFF 100%)" }}
        />
        {/* broad sky field from the upper-right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 95% at 100% 0%, rgba(174,235,255,0.85) 0%, rgba(193,240,255,0.62) 22%, rgba(223,245,255,0.42) 42%, rgba(240,250,255,0.18) 62%, rgba(255,255,255,0) 80%)",
          }}
        />
        {/* blurred core glow — strongest point, upper-right */}
        <div
          className="absolute -right-[18%] -top-[30%] h-[85%] w-[70%] rounded-full opacity-60 blur-[120px] md:opacity-70"
          style={{
            background:
              "radial-gradient(closest-side, rgba(111,215,245,0.75) 0%, rgba(174,235,255,0.45) 50%, rgba(223,245,255,0) 100%)",
          }}
        />
        {/* secondary soft halo that carries the tone toward the centre */}
        <div
          className="absolute right-[8%] top-[10%] h-[60%] w-[55%] rounded-full opacity-50 blur-[140px]"
          style={{
            background:
              "radial-gradient(closest-side, rgba(174,235,255,0.55) 0%, rgba(223,245,255,0) 100%)",
          }}
        />
        {/* settle into white at the bottom so the next section joins cleanly */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #FFFFFF 100%)" }}
        />
        {/* grain */}
        <div
          className="absolute inset-0 opacity-[0.07] mix-blend-multiply"
          style={{ backgroundImage: GRAIN, backgroundSize: "160px 160px" }}
        />
      </div>

      <div
        className={`${CONTAINER} flex min-h-[78svh] flex-col justify-center pb-[10vh] pt-[22vh] md:min-h-[90vh] md:pt-[26vh] lg:px-20`}
      >
        <h2
          id="airline-statement-heading"
          className="m-0 max-w-[1100px] text-[44px] font-light leading-[1.02] tracking-[-0.035em] text-[#141414] sm:text-[64px] md:text-[80px] lg:text-[96px] xl:text-[108px]"
        >
          Your airline.
          <br />
          Your customers.
          <br />
          Your{" "}
          <em
            className={`${serif.className} font-normal tracking-[-0.01em]`}
            style={{ fontStyle: "italic" }}
          >
            distribution.
          </em>
        </h2>
        <p className="mt-8 max-w-[520px] text-[17px] font-light leading-[1.6] text-[#4B5563] sm:text-[18px] md:mt-10">
          Sell directly. Work with agencies. Connect external inventory. Manage the
          passenger journey from one platform.
        </p>
      </div>
    </section>
  );
}
