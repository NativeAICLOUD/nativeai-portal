import React from 'react';
import Image from 'next/image';

const HomePartner = () => {
  return (
    <div className={'text-center'}>
      <div className={'font-montserrat bg-gradient-to-r from-[#131c2a] via-[#021f38] to-[#01122e] w-full max-w-[1440px] h-[595px] mx-auto p-[40px_20px] box-border relative top-[80px]'}>
        <Image
          src="/img/arrow-down-1.png"
          alt="Arrow Down"
          width={51}
          height={55}
          className={'absolute top-[-30px] left-[50%] translate-x-[-50%]'}
        />
        <div className={'font-montserrat text-[28px] text-white mb-[20px]'}>
          Opt for a secure and scalable cloud solution
        </div>
        <div className={'flex flex-wrap justify-center gap-[10px] mb-[40px]'}>
          <a href="/azure" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Going to Azure</a>
          <a href="/accelerate-azure" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Accelerate with Azure</a>
          <a href="/managed-services" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Managed Services</a>
          <a href="/cloud-native" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Cloud Native Software Development</a>
          <a href="/generative-ai" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Generative AI</a>
          <a href="/data-lifecycle" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Data Lifecycle Management</a>
          <a href="/cloud-migrations" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Cloud Migrations</a>
          <a href="/solutions" className={'inline-block font-montserrat text-[14px] text-white bg-[#034f89] rounded-[25px] p-[15px_20px] no-underline transition-colors duration-300 hover:bg-[#67b3f6] w-[178px] h-[50px]'}>Solutions</a>
        </div>
        <div className={'mt-[40px] mb-[40px] flex justify-center items-center flex-col'}>
          <div className={'w-[432px] h-[454px] rounded-full border-2 border-[#0f0909] flex items-center justify-center relative mt-[80px]'}>
            <div className={'font-montserrat text-[48px] bg-gradient-to-r from-[#E5A003] via-[#FBC980] to-[#F89201] bg-clip-text text-transparent mb-[-190px]'}>Get in touch!</div>
            <div className={'font-montserrat text-[16px] text-white text-center w-full p-[0_20px] box-border absolute top-[37%] translate-y-[-50%]'}>
              Would you like to further discuss possibilities for your company? We love to help! You can reach us at info@nativecloud.com
            </div>
          </div>
        </div>
      </div>

      <div className={'mt-[100px] p-[20px]'}>
        <h2 className={'font-montserrat text-[28px] bg-gradient-to-r from-[#e8ffff] via-[#0167b8] to-[#e8fffe] bg-clip-text text-transparent mb-[75px] mt-[180px]'}>Our level of partnership</h2>
        <div className={'flex justify-center gap-[230px] items-center flex-wrap'}>
          <Image
            src="/img/microsoft-partner.png"
            alt="Microsoft Partner"
            width={300}
            height={100}
          />
          <Image
            src="/img/aws-partner.png"
            alt="AWS Partner"
            width={200}
            height={250}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
