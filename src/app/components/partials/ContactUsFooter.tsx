import Image from 'next/image';

import { Constants } from '@/Constants';
import { BGNativeWhite, PhoneWhite, Telephone } from '@/ImagePath';
import { button } from '@/app/components/utils/tw-variants';


function ContactUsFooter() {
  return (
    <div className="contact-us max-w-9xl mx-auto gap-16 flex flex-wrap md:flex-nowrap items-center md:justify-between p-8 md:py-0 md:px-20 relative bg-[#283D3B] text-white 2xl:rounded-xl mb-8 sm:mb-16">
      <Image
        src={BGNativeWhite}
        alt="Native logo"
        className={'absolute bottom-[-600px] right-[-150px]'}
      />
      <Image
        src={Telephone}
        alt="Telephone"
        className={'relative object-contain w-full mx-auto sm:mx-0 max-w-xs sm:max-w-sm -mt-12 sm:-mt-8'}
      />
      <div className="relative gap-6 flex flex-col flex-1 items-center sm:items-end lg:pr-20">
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