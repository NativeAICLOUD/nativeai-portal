import Image from 'next/image';

import { Constants } from '@/Constants';
import { AzureHero, AzureMockup, BGGroupLogo, BGNativeWhite, PhoneWhite, Team, Telephone } from '@/ImagePath';
import { button } from '@/app/components/utils/tw-variants';
import { Link } from 'next-view-transitions';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';

const DevOpsAzure = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0 before:absolute before:bg-azure-bg-opacity before:size-full before:top-0 before:z-1">
        <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-top h-[400px] sm:h-[500px] md:h-[600px]" quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='center right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-28 sm:pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 xl:pb-16 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[900px]'}>
              DevOps solutions on Azure
            </h1>
            <p className={'md:max-w-xl xl:max-w-2xl pb-16 text-base lg:text-lg font-normal'}>
              Azure Cloudify is the key to transforming your application. Whether you`re dealing with a legacy system, partially cloud-based applications, or a cloud-native organization, staying relevant to your target audience is essential. Azure Cloudify ensures your applications are scalable, resilient, and ready for the future.
              <br /><br />
              Accelerate your development pipeline with Azure DevOps, offering continuous integration and delivery for scalable and reliable software development.
            </p>
          </div>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6'}>

        <div className="azure mb-10 gap-6 sm:gap-16 flex flex-wrap md:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 mx-auto text-black xl:rounded-xl">
          <Image
            src={AzureMockup}
            alt="Azure Mockup"
            className={'relative object-contain w-full mx-auto sm:mx-0 max-w-sm sm:max-w-md'}
          />
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl">Going to Azure</h2>
            <p className="max-w-3xl">No matter if it is a journey from on-premises to Azure, or if you want to modify your legacy application to a full software-as-a-service application, we support every step along the way to smoothly migrate to Azure.</p>
            <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'blue', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit`}>
              Let`s go to Azure
              <svg className={`icon-arrow-right text-white`} width={30} height={20}>
                <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
              </svg>
            </Link>
          </div>
        </div>

        <div className="azure mb-20 gap-6 sm:gap-16 flex flex-wrap-reverse md:flex-nowrap items-center relative max-w-7xl md:ml-auto p-6 xl:pl-8 xl:py-0 lg:pr-8 text-black xl:rounded-xl">
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl">Accelerate with Azure</h2>
            <p className="max-w-3xl">Improving your application and infrastructure environment is a continuous process. Regardless of where your journey starts, you can take advantage of what the cloud has to offer.</p>
            <Link href={Constants.PAGES.AZURE} className={`${button({ size: 'lg', color: 'blue', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit`}>
              Accelerate on Azure
              <svg className={`icon-arrow-right text-white`} width={30} height={20}>
                <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
              </svg>
            </Link>
          </div>
          <Image
            src={Team}
            alt="Team"
          />
        </div>
      </div>

      <ContactUsFooter />

    </div>
  );
};

export default DevOpsAzure;