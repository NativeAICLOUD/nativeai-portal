import Image from 'next/image';

import { Constants } from '@/Constants';
import { BGNativeWhite, PhoneWhite } from '@/ImagePath';
import { button } from '@/app/components/utils/tw-variants';


function ContactUsFooter() {
  return (
    <div className="contact-us max-w-9xl mx-auto lg:gap-16 flex flex-col lg:flex-row items-center lg:justify-between p-8 md:py-0 md:px-20 relative bg-[#283D3B] text-white 2xl:rounded-xl mb-8 sm:mb-16">
      <Image
        src={BGNativeWhite}
        alt="Native logo"
        className={'absolute bottom-[-600px] right-[-150px]'}
      />
      <div className="relative object-contain w-full mx-auto lg:mx-0 max-w-xs sm:max-w-sm -mt-12 sm:-mt-8 flex items-center justify-center">
        <svg width="180" height="180" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <circle cx="32" cy="32" r="32" fill="rgba(255,255,255,0.08)" />
          <path d="M20 20c-.6 0-1.1.5-1.1 1.1v1.8c0 12.1 9.8 21.9 21.9 21.9h1.8c.6 0 1.1-.5 1.1-1.1v-4.2c0-.6-.5-1.1-1.1-1.1h-4.2c-.6 0-1.1.5-1.1 1.1v.7c-5.4-1.3-9.6-5.5-10.9-10.9h.7c.6 0 1.1-.5 1.1-1.1v-4.2c0-.6-.5-1.1-1.1-1.1H20z" fill="white" opacity="0.7"/>
        </svg>
      </div>
      <div className="relative gap-6 flex flex-col flex-1 items-center lg:items-end lg:pr-20 md:py-10 ">
        <h2 className="text-2xl sm:text-4xl bg-h2-native-linear bg-clip-text font-bold">Get in touch!</h2>
        <p className="max-w-3xl">Have a question or can we help you with something?</p>
        <div className="contact inline-flex gap-6 items-center flex-wrap">
          <a href={`mailto:${Constants.MAIL}`} className={`${button({ size: 'lg', color: 'native', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit`}>
            Send us an Email
            <svg className={`icon-arrow-right text-white`} width={30} height={20}>
              <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
            </svg>
          </a>
          <a href={`tel:${Constants.PHONE}`} target='_blank' className='flex gap-2 items-center hover:text-primary'>
            <Image
              src={PhoneWhite}
              alt="PinMarker"
              className='pin size-4'
            />
            {Constants.PHONE}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUsFooter;