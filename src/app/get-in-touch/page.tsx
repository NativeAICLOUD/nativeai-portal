import { Constants } from '@/Constants';
import { BGGroupLogo, Location, PhoneBlue, PinMarkerBlue } from '@/ImagePath';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import ContactEngineerSection from '../components/partials/get-in-touch/ContactEngineerSection';

const GetInTouchPage = () => {
  return (
    <div className={`relative min-h-full font-switzer`}>
      <div className="hero-bg-blue absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='right 22%' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start lg:justify-between pt-24 sm:pt-28 gap-10">
          <div className="relative side xl:pl-4 z-1 px-10 md:px-0 text-center md:text-left">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm text-[#6b7280] hover:text-[#111] transition-colors mb-4 group"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 transition-transform group-hover:-translate-x-0.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Back to home
            </Link>

            <p className="m-0 mb-3 text-[12px] font-medium uppercase tracking-[0.18em] text-[#64748B]">Get in touch</p>
          </div>
        </div>

      </div>

      <ContactEngineerSection />

      <div className="section mt-0 mx-auto max-w-9xl px-2">

        {/* Map */}
        <div className="pb-16 sm:pb-20 lg:pb-28">
          <div className="relative">
            <div className="relative w-full h-[360px] sm:h-[520px] lg:h-[580px]">
              <Image
                src={Location}
                alt="NativeCloud office at East Gate Skopje"
                priority
                className={'relative w-full h-full rounded-20 object-cover shadow-[0_24px_60px_-12px_rgba(15,23,42,0.35)]'}
              />
              {/* soft shade so the office card reads on any part of the photo */}
              <div aria-hidden="true" className="pointer-events-none absolute inset-0 hidden rounded-20 bg-gradient-to-tr from-[#0a0e1a]/45 via-transparent to-transparent sm:block" />

              {/* pin on the building */}
              <div className="info absolute inset-0 top-[4.5rem] left-[38%] sm:top-[27.5%] sm:left-[38%] md:top-[29.5%] md:left-[40%] lg:top-[30%] lg:left-[40.4%] xl:top-[31%]">
                <a
                  href={Constants.MAPS}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View on map"
                  className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6e6e6] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] transition-transform duration-300 hover:scale-110 motion-reduce:transition-none"
                >
                  <span aria-hidden="true" className="absolute inset-0 rounded-full bg-white/70 motion-safe:animate-ping" />
                  <Image src={PinMarkerBlue} alt="" className="relative size-6" />
                </a>
              </div>
            </div>

            {/* Office card — overlaps the photo on phones, sits bottom-left from sm up */}
            <div className="relative z-10 mx-3 -mt-16 rounded-[24px] border border-[#E5E7EB] bg-white p-5 text-[#141414] shadow-[0_16px_40px_-12px_rgba(15,23,42,0.28)] sm:absolute sm:bottom-6 sm:left-6 sm:mx-0 sm:mt-0 sm:w-[360px] sm:p-6 lg:bottom-8 lg:left-8">
              <span
                className="inline-block bg-[#BECBFF] px-3 py-1.5 text-[11px] font-semibold uppercase leading-none tracking-[0.14em] text-[#141414]"
                style={{ borderRadius: '0.9em 1.05em 0.85em 1em / 1em 0.9em 1.05em 0.9em' }}
              >
                Our office
              </span>
              <h2 className="m-0 mt-4 text-[24px] font-medium leading-[1.1] tracking-tight text-[#141414]">Skopje, North Macedonia</h2>

              <div className="mt-4 divide-y divide-[#EEF1F2] border-y border-[#EEF1F2]">
                <a href={Constants.MAPS} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 py-3 transition-colors hover:text-[#2563EB]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF]">
                    <Image src={PinMarkerBlue} alt="" className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">Address</span>
                    <span className="block text-[15px] font-medium leading-snug">{Constants.ADDRESS}</span>
                  </span>
                </a>
                <a href={`tel:${Constants.PHONE.replace(/\s/g, '')}`} className="group flex items-center gap-3 py-3 transition-colors hover:text-[#2563EB]">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EEF3FF]">
                    <Image src={PhoneBlue} alt="" className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[#6B7280]">Phone</span>
                    <span className="block text-[15px] font-medium leading-snug">{Constants.PHONE}</span>
                  </span>
                </a>
              </div>

              <a
                href={Constants.MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="group/dir mt-5 inline-flex h-10 w-full cursor-pointer items-center justify-center gap-1.5 whitespace-nowrap rounded-md bg-black px-5 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-[#1A1818] active:bg-[#2E2B2B]"
              >
                Get directions
                <span aria-hidden="true" className="transition-transform duration-200 group-hover/dir:translate-x-0.5 motion-reduce:transition-none">&rarr;</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetInTouchPage;