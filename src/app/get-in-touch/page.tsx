import { Constants } from '@/Constants';
import { BG3Img, BGNativeWhite, Location, Phone, PinMarker, Telephone } from '@/ImagePath';
import Image from 'next/image';
import ContactUsForm from '../components/partials/ContactForm';

const GetInTouchPage = () => {
  return (
    <div className={`relative min-h-full`}>
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
        <Image src="/img/Group 31.png" alt="Design Element" layout="fill" objectFit="contain" objectPosition='top right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start lg:justify-between pt-36 gap-10">
          <div className="relative side xl:pl-4 pt-28 z-1 px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
              Get in touch with us
            </h1>
            <p className={'md:max-w-[600px] xl:max-w-[800px] pt-3 pb-16 text-base lg:text-lg font-normal'}>
              We`re always happy to help! Please choose a way to contact us below.
            </p>
          </div>
          <Image
            src={Telephone}
            alt="About Image"
            priority
            className={'opacity-80 md:opacity-100 absolute md:relative object-contain w-full max-w-sm xl:-translate-x-28'}
          />
        </div>

      </div>
      <div className="section mt-8 sm:mt-20 md:mt-8 mx-auto max-w-9xl">
        <div className="relative w-full h-[300px] sm:h-auto sm:aspect-video">
          <Image
            src={Location}
            alt="Location Image"
            priority
            className={'relative w-full h-full 2xl:rounded-20 object-cover'}
          />
          <div className="info absolute inset-0 top-[4.5rem] left-[34%] sm:top-[27.5%] sm:left-[34%] md:top-[29.5%] md:left-[36%] lg:top-[30%] lg:left-[36.4%] xl:top-[31%]">
            <div className="content absolute text-black px-3 py-2 bg-white/80 rounded-14 -translate-x-[7rem] -translate-y-[4.5rem] before:absolute before:bottom-[-6px] before:left-2/4 before:-translate-x-2.5 before:z-[-1] before:border-x-8 before:rotate-180 before:border-x-transparent before:border-b-8 before:border-b-white/7 before:size-0">
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
        <div className="relative bg-gtouch-bg-linear 2xl:bg-none lg:-mb-20 px-2">
          <Image
            src={BGNativeWhite}
            alt="Native logo"
            className={'absolute top-[-244px] right-0'}
          />
          <ContactUsForm className='-translate-y-20 lg:-translate-y-48 border-2 border-footer' />
        </div>
      </div>
    </div>
  );
};

export default GetInTouchPage;