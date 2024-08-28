import Image from 'next/image';
import Link from 'next/link';

const WorkshopPage = () => {
  return (
    <div>
      <div className={`flex flex-col items-center`}>
        <div className={'relative w-[2000px] h-[1600px]'}>
          <Image
            src="/Solutions.png"
            alt="Background Frame"
            width={759}
            height={574}
            className={'absolute top-[70px] left-[1200px] w-[859px] h-[674px] z-[-1]'}
          />
          <div className={'relative text-center z-[1]'}>
            <h1 className={'font-montserrat text-[62px] bg-gradient-to-r from-[#1E1E1E] to-[#2573BA] bg-clip-text text-transparent w-[880px] h-[150px] mt-[230px] ml-[188px]'}>
              The best cloud <span>Solutions</span> for your organization
            </h1>
            <p className={'max-w-[833px] h-[107px] my-[20px] font-montserrat text-[16px] font-normal ml-[188px]'}>
              Regardless of your current infrastructure, we empower you to get the most out of your cloud experience. Find our top 3 solutions below and let us help you along your cloud journey.
            </p>
            <div className={'flex justify-center w-[1920px] h-[417px] my-[20px]'}>
              <div className={''}>
                <Image src="/MSP-Azure.png" alt="Microsoft Solutions Partner" width={762} height={95}
                  className={'absolute top-[452px] left-[240px] w-[662px] h-[90px] z-[-1]'} />
              </div>
            </div>
            <div className={'flex justify-around w-[1920px] my-[50px]'}>
              <div className={'text-center w-[367px] h-[519px] my-[20px] flex flex-col items-center'}>
                <Image src="/Isolation_1.png" alt="Going to Azure" width={160} height={110} />
                <div className={'serviceText w-[467px] h-[265px] mt-[30px]'}>
                  <h3 className="font-montserrat text-[24px] my-[20px]">Going to Azure</h3>
                  <p className='my-[20px]'>
                    Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.
                  </p>
                  <Link href="#"><button className={'py-[10px] px-[20px] bg-[#1b3b58] text-white border-none cursor-pointer rounded-[20px] transition-colors duration-300 hover:bg-[#1E1E1E]'}>Going to Azure</button></Link>
                </div>
              </div>
              <div className={'text-center w-[367px] h-[519px] my-[20px] flex flex-col items-center'}>
                <Image src="/Isolation_2.png" alt="Accelerate with Azure" width={190} height={130} />
                <div className={'serviceText w-[467px] h-[265px] mt-[30px]'}>
                  <h3 className="font-montserrat text-[24px] my-[20px]">Accelerate with Azure</h3>
                  <p className='my-[20px]'>
                    Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.
                  </p>
                  <Link href="#"><button className={'py-[10px] px-[20px] bg-[#1b3b58] text-white border-none cursor-pointer rounded-[20px] transition-colors duration-300 hover:bg-[#1E1E1E]'}>Accelerate with Azure</button></Link>
                </div>
              </div>
              <div className={'text-center w-[367px] h-[519px] my-[20px] flex flex-col items-center'}>
                <Image src="/Isolation_3.png" alt="Managed Services" width={142} height={131} />
                <div className={'serviceText w-[467px] h-[265px] mt-[30px]'}>
                  <h3 className="font-montserrat text-[24px] my-[20px]">Managed Services</h3>
                  <p className='my-[20px]'>
                    Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.
                  </p>
                  <Link href="#"><button className={'py-[10px] px-[20px] bg-[#1b3b58] text-white border-none cursor-pointer rounded-[20px] transition-colors duration-300 hover:bg-[#1E1E1E]'}>Managed Services</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;