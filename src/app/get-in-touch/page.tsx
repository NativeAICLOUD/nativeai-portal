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
          <div className="relative w-full h-[420px] sm:h-[520px] lg:h-[580px]">
            <Image
              src={Location}
              alt="Location Image"
              priority
              className={'relative w-full h-full rounded-20 object-cover shadow-[0_24px_60px_-12px_rgba(15,23,42,0.35)]'}
            />
            <div className="info absolute inset-0 top-[4.5rem] left-[38%] sm:top-[27.5%] sm:left-[38%] md:top-[29.5%] md:left-[40%] lg:top-[30%] lg:left-[40.4%] xl:top-[31%]">
              <div className="content absolute flex flex-col gap-2.5 rounded-2xl border border-[#e6e6e6] bg-white px-5 py-4 text-[#1A1A1A] shadow-[0_16px_40px_-8px_rgba(15,23,42,0.28)] -translate-x-[3rem] -translate-y-[5.5rem] transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_50px_-8px_rgba(15,23,42,0.32)] sm:-translate-y-[8.5rem]">
                <a href={Constants.MAPS} target='_blank' className='flex items-center gap-2.5 text-[13.5px] font-medium tracking-tight transition-colors hover:text-primary'>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 transition-all duration-200 hover:scale-125 hover:bg-[#2563EB]/20">
                    <Image src={PinMarkerBlue} alt="" className='size-3.5' />
                  </span>
                  {Constants.ADDRESS}
                </a>
                <a href={`tel:${Constants.PHONE}`} target='_blank' className='flex items-center gap-2.5 text-[13.5px] font-medium tracking-tight transition-colors hover:text-primary'>
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 transition-all duration-200 hover:scale-125 hover:bg-[#2563EB]/20">
                    <Image src={PhoneBlue} alt="" className='size-3.5' />
                  </span>
                  {Constants.PHONE}
                </a>
              </div>
              <a
                href={Constants.MAPS}
                target="_blank"
                aria-label="View on map"
                className="absolute flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#e6e6e6] bg-white shadow-[0_4px_12px_rgba(15,23,42,0.18)] transition-all duration-300 hover:scale-150 hover:border-transparent hover:bg-[#0a0e1a] hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)]"
              >
                <Image src={PinMarkerBlue} alt="" className="size-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetInTouchPage;