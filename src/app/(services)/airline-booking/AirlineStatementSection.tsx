import { CONTAINER } from "@/app/components/partials/services/ServiceUI";
import { EditorialGlow, SerifAccent } from "@/app/components/ui/EditorialGlow";

/* Big product statement — minimal editorial hero with a soft cyan glow
   rising from the upper-right and fading to white toward the left/bottom. */
export default function AirlineStatementSection() {
  return (
    <section
      aria-labelledby="airline-statement-heading"
      className="relative isolate overflow-hidden bg-white"
    >
      <EditorialGlow />

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
          Your <SerifAccent>distribution.</SerifAccent>
        </h2>
        <p className="mt-8 max-w-[520px] text-[17px] font-light leading-[1.6] text-[#4B5563] sm:text-[18px] md:mt-10">
          Sell directly. Work with agencies. Connect external inventory. Manage the
          passenger journey from one platform.
        </p>
      </div>
    </section>
  );
}
