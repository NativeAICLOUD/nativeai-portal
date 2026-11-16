import { CONTAINER, Eyebrow, SECTION_Y, H2, BODY, CAPTION } from './HomeUI';
import { getMicrosoftUpdates } from './microsoftUpdates';

/*
 * "Latest from Microsoft" — live headlines from Microsoft's public feeds
 * (Azure service updates, Azure Blog, Microsoft Foundry). Server component:
 * the data is fetched and cached in microsoftUpdates.ts and refreshes hourly.
 * Renders nothing if every feed is unreachable.
 */

const DATE_FORMAT = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function ExternalArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default async function MicrosoftUpdatesSection() {
  const feeds = await getMicrosoftUpdates();
  if (feeds.length === 0) return null;

  return (
    <section className="font-switzer bg-white" aria-labelledby="ms-updates-heading">
      <div className={`${CONTAINER} ${SECTION_Y}`}>
        <div className="mb-4"><Eyebrow>Live from Microsoft</Eyebrow></div>
        <h2 id="ms-updates-heading" className={`m-0 max-w-[720px] ${H2}`}>
          What Microsoft shipped this week.
        </h2>
        <p className={`m-0 mt-4 max-w-[560px] ${BODY}`}>
          As a Microsoft partner we track every Azure and AI release, so your platform is built on what is current. These headlines come straight from Microsoft.
        </p>

        <div className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {feeds.map((feed) => (
            <div key={feed.key} className="flex flex-col">
              <div className="border-b border-[#111827] pb-3">
                <h3 className="m-0 text-[17px] font-medium leading-[1.3] text-[#111827]">{feed.label}</h3>
                <p className={`m-0 mt-0.5 ${CAPTION}`}>{feed.blurb}</p>
              </div>

              <ul className="m-0 flex-1 list-none p-0">
                {feed.items.map((item) => (
                  <li key={item.link} className="border-b border-[#E6E6E6]">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827]/20"
                    >
                      {item.date && (
                        <time dateTime={item.date} className="block text-[12px] font-medium uppercase tracking-[0.08em] text-[#6B7280]">
                          {DATE_FORMAT.format(new Date(item.date))}
                        </time>
                      )}
                      <span className="mt-1 block text-[15px] font-medium leading-[1.4] text-[#111827] transition-colors duration-200 group-hover:text-[#0066B3]">
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href={feed.more}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-4 inline-flex items-center gap-1.5 self-start text-[13px] font-medium text-[#111827] transition-colors duration-200 hover:text-[#0066B3]"
              >
                All {feed.label}
                <ExternalArrow />
              </a>
            </div>
          ))}
        </div>

        <p className={`m-0 mt-10 ${CAPTION}`}>
          Refreshed hourly from Microsoft&apos;s public feeds. Headlines link to microsoft.com.
        </p>
      </div>
    </section>
  );
}
