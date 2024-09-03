import React from 'react';
import Image from 'next/image';
import { Link } from 'next-view-transitions';

import MicrosotPartnerImg from '../../../../../public/img/microsoft-partner.png';
import AWSPartnerImg from '../../../../../public/img/aws-partner.png';
import { Constants } from '@/Constants';

const HomePartner = () => {
  return (
    <div className={'relative home-partner mt-32'}>
      <div className={'relative max-w-9xl mx-auto bg-two-color rounded-2xl text-white'}>
        <Image
          src="/img/arrow-down-1.png"
          alt="Arrow Down"
          width={51}
          height={55}
          className={'absolute top-[-30px] left-[50%] translate-x-[-50%]'}
        />
        <h2 className={'relative text-4.5xl mb-4 text-center font-semibold leading-snug pt-16 pb-4'}>
          Opt for a secure and scalable cloud solution
        </h2>
        <div className={'flex flex-wrap justify-center gap-2 mb-14 max-w-5xl mx-auto'}>
          <Link href="/azure" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Going to Azure</Link>
          <Link href="/Linkccelerate-azure" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Accelerate with Azure</Link>
          <Link href="/managed-services" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Managed Services</Link>
          <Link href="/cloud-native" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Cloud Native Software Development</Link>
          <Link href="/generative-ai" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Generative AI</Link>
          <Link href="/data-lifecycle" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Data Lifecycle Management</Link>
          <Link href="/cloud-migrations" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Cloud Migrations</Link>
          <Link href="/solutions" className={'inline-flex justify-center items-center min-h-[50px] px-6 bg-native-btn hover:bg-white text-white hover:text-native-btn-text rounded-28 no-underline transition-colors duration-300'}>Solutions</Link>
        </div>
        <div className={'flex justify-center items-center mb-52'}>
          <div className={'-mb-52 size-[450px] rounded-full border-2 border-[#0f0909] flex items-center flex-col justify-around relative pt-8 pb-12'}>
            <p className={'text-base text-white text-center w-full px-16'}>
              <b>Would you like to further discuss possibilities for your company?</b>
              <br /><br />
              <span>We love to help! You can reach us at</span>
              <br />
              <b><a href={`mail:${Constants.MAIL}`}>{Constants.MAIL}</a></b>
            </p>
            <h2 className={'text-5xl font-black bg-text-linear bg-clip-text text-transparent'}>Get in touch!</h2>
          </div>
        </div>
      </div>

      <div className={'max-w-9xl mx-auto mt-24 pt-20 mb-28 px-5 text-center'}>
        <h2 className={'text-4.5xl font-semibold text-native-text'}>
          Our level of partnership
        </h2>
        <div className={'flex items-center justify-around gap-16'}>
          <Image
            src={MicrosotPartnerImg}
            alt="Microsoft Partner"
            className="max-w-[500px]"
            placeholder={'blur'}
          />
          <Image
            src={AWSPartnerImg}
            alt="AWS Partner"
            className="max-w-[400px]"
            placeholder={'blur'}
          />
        </div>
      </div>
    </div >
  );
};

export default HomePartner;
