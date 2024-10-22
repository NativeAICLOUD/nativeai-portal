import React from 'react';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';

import { Constants } from '@/Constants';
import { AWSPartnerImg, MicrosotPartnerImg } from '@/ImagePath';

const HomePartner = () => {
  return (
    <div className={'relative home-partner mt-16 xl:mt-32'}>
      <div className={'relative max-w-9xl mx-auto bg-two-color 2xl:rounded-2xl text-white'}>
        <Image
          src="/img/arrow-down-1.png"
          alt="Arrow Down"
          width={51}
          height={55}
          className={'absolute top-[-30px] left-[50%] translate-x-[-50%]'}
        />
        <h2 className={'relative text-2xl sm:text-3.5xl lg:text-4.5xl mb-4 text-center font-semibold leading-snug pt-16 pb-4'}>
          Opt for a secure and scalable cloud solution
        </h2>
        <div className={'flex flex-wrap flex-col sm:flex-row justify-center gap-2 mb-8 sm:mb-14 max-w-5xl mx-auto px-2'}>
          <Link href="/azure" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Going to Azure</Link>
          <Link href="/accelerate-azure" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Accelerate with Azure</Link>
          <Link href="/managed-services" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Managed Services</Link>
          <Link href="/cloud-native-sd" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Cloud Native Software Development</Link>
          <Link href="/devops-on-azure" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>DevOps</Link>
          <Link href="/cloud-migrations" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Cloud Migrations</Link>
          <Link href="/solutions" className={'text-center inline-flex justify-center items-center min-h-[42px] md:min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Solutions</Link>
        </div>
        <div className={'flex justify-center items-center sm:mb-52 pt-8 sm:pt-0'}>
          <div className={'sm:-mb-52 sm:size-[450px] rounded-full sm:border-2 sm:border-[#0f0909] flex items-center flex-col justify-around relative sm:pt-8 pb-12'}>
            <p className={'text-base text-white text-center w-full px-8 sm:px-16'}>
              <b>Would you like to further discuss possibilities for your company?</b>
              <br /><br />
              <span>We love to help! You can reach us at</span>
              <br />
              <b><a href={`mail:${Constants.MAIL}`}>{Constants.MAIL}</a></b>
            </p>
            <h2 className={'text-4xl sm:text-5xl font-black bg-text-linear bg-clip-text text-transparent pt-10 sm:pt-0'}>Get in touch!</h2>
          </div>
        </div>
      </div>

      <div className={'max-w-9xl mx-auto mt-20 sm:mt-24 sm:pt-20 mb-20 sm:mb-28 px-5 text-center'}>
        <h2 className={'text-2xl sm:text-3.5xl lg:text-4.5xl font-semibold text-native-text mb-4'}>
          Our level of partnership
        </h2>
        <div className={'flex items-center flex-wrap justify-around md:gap-16'}>
          <Image
            src={MicrosotPartnerImg}
            alt="Microsoft Partner"
            className="max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
            placeholder={'blur'}
          />
          <Image
            src={AWSPartnerImg}
            alt="AWS Partner"
            className="max-w-[100px] sm:max-w-[200px] lg:max-w-[300px]"
            placeholder={'blur'}
          />
        </div>
      </div>
    </div >
  );
};

export default HomePartner;
