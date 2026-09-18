import { Constants } from '@/Constants';
import { BG3Img, BGGroupLogo, Location, Phone, PinMarker } from '@/ImagePath';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { Eyebrow } from '../components/partials/services/ServiceUI';
import ContactEngineerSection from '../components/partials/get-in-touch/ContactEngineerSection';

const GetInTouchPage = () => {
  return (
    <div className={`relative min-h-full font-switzer`}>
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
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

            <div className="mb-3"><Eyebrow>Get in touch</Eyebrow></div>
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
            <div className="info absolute inset-0 top-[4.5rem] left-[34%] sm:top-[27.5%] sm:left-[34%] md:top-[29.5%] md:left-[36%] lg:top-[30%] lg:left-[36.4%] xl:top-[31%]">
              <div className="content absolute text-black px-4 py-2.5 bg-white/95 backdrop-blur-sm rounded-14 shadow-[0_12px_32px_-6px_rgba(15,23,42,0.28)] -translate-x-[7rem] -translate-y-[4.5rem] before:absolute before:bottom-[-6px] before:left-2/4 before:-translate-x-2.5 before:z-[-1] before:border-x-8 before:rotate-180 before:border-x-transparent before:border-b-8 before:border-b-white/95 before:size-0">
                <div className="list text-sm">
                  <a href={Constants.MAPS} target='_blank' className='flex mb-1 gap-2 items-center hover:text-primary'>
                    <Image
                      src={PinMarker}
                      alt="PinMarker"
                      className='pin size-4'
                    />
                    {Constants.ADDRESS}
                  </a>
                  <a href={`tel:${Constants.PHONE}`} target='_blank' className='flex gap-2 items-center hover:text-primary'>
                    <Image
                      src={Phone}
                      alt="PinMarker"
                      className='pin size-4'
                    />
                    {Constants.PHONE}
                  </a>
                </div>
              </div>
              <Image
                src={PinMarker}
                alt="PinMarker"
                className='pin cursor-pointer'
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GetInTouchPage;