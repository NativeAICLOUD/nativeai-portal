import Image from 'next/image';

import { AzureHero, BG3Img, BGGroupLogo, BGNativeWhite, FrameMail, LaptopImg, SolutionHeader } from '@/ImagePath';
import { Link } from 'react-transition-progress/next';
import { twMerge } from 'tailwind-merge';
import { Each } from '../../components/helpers/Each';
import { button } from '../../components/utils/tw-variants';
import { Constants } from '@/Constants';

const cards = [
  { img: '/img/Isolation_1.png', link: '', title: 'Cloud Design', desc: 'The cloud design ticket is the first step in the process. This is where you hop on. You receive a scalable, robust, and compliant Azure design for your application, monthly Azure costs, migration path, task list, and the hours required for your migration to Azure. After the cloud design, you decide if the proposed design fits your organization`s needs and if Intercept is the right partner to collaborate with. No strings attached, this is where you can hop off but you might want to see more.' },
  { img: '/img/Isolation_2.png', link: '', title: 'CSP Onboarding', desc: 'Together with your team, we will ensure a flawless migration of your current application and workloads to your own CSP tenant. If you already have a Microsoft tenant we can move your existing Azure environment through an automated process. If you have an Enterprise Agreement we can import your EA as a benefit from the Azure Expert MSP partner status.' },
  { img: '/img/Isolation_3.png', link: '', title: 'Governance and security', desc: 'Your customers demand a secure, compliant, and efficient environment for their applications. When hosting your application on a cloud platform, governance becomes even more critical and you want to manage this from the start of your journey. We call this shift left in the process. Good cloud governance results in guardrails that keep the company on a safe path throughout that journey. One of the reasons why we make this a mandatory part of our onboard practices and have fully automated the management of it.' },
]

type TCard = typeof cards[0];

const AzurePage = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0 before:absolute before:bg-azure-bg-opacity before:size-full before:top-0 before:z-1">
        <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-top h-[400px] sm:h-[500px] md:h-[600px]" quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='center right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-service-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
              Accelerate with Azure
            </h1>
            <p className={'md:max-w-[580px] pt-3 pb-16 text-base lg:text-lg font-normal'}>
              Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen Azure.
            </p>
            <p className={'md:max-w-[640px] xl:max-w-[940px] pb-16 text-base lg:text-lg font-normal'}>
              <b>Why you should move to cloud-native resources</b><br />

              Regardless of where your journey starts, you will have an advantage using cloud-native resources, whether you choose to go fully SaaS or not. Moving away from infrastructure services reduces complexity, creates efficiency, and results in cost savings. Integrating with value-adding cloud services allows you to improve your solutions by providing capabilities that previously would have been time and cost-intensive to develop on your own. If your application environment meets the requirements, you may even sell your application through the Microsoft Marketplace or others.
              <br /><br />
              The solution that best fits depends on your application, business goals, and customer requirements. If your organization is willing to take the next step, you can successfully move from a legacy environment to new cloud-native architectures and capture the advantages such architectures offer.
            </p>
          </div>
        </div>
      </div>

      <div className="migrate-to-azure gap-16 flex flex-wrap md:flex-nowrap items-center relative max-w-9xl py-6 pr-6 xl:py-0 xl:pr-12 mx-auto bg-main-card text-white xl:rounded-xl">
        <Image
          src={LaptopImg}
          alt="Mail"
          width={550}
          height={376}
          className="rounded-l-xl"
        />
        <div className="content relative py-4 inline-flex flex-col">
          <h2 className="text-2xl mb-8">IaaS to PaaS</h2>
          <p>Why would you want to go to PaaS?  In addition to making your environment more robust, scalable, and secure for less money, PaaS prevents you from constantly reinventing the wheel. Anyone who purchases PaaS services invests considerably less time in building and maintaining software and infrastructure workloads. You then have room to invest in development activities which provides added value and a competitive advantage.</p>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6'}>

        <p className={'pt-12 pb-10 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Refactoring your application and using AKS</b><br />
          A container is a reliable way to package and run applications in multiple environments, whether this is your own laptop, Microsoft Azure, private data center, Amazon Web Services, or a combination. A container isn’t dependent on the platform where it is deployed. So it isn’t that difficult to imagine that a lot of ISVs and software-driven companies want to leverage the power of containers and, with that, AKS.
          <br /><br />
          Intercept helps you to set up a scalable AKS environment through our managed AKS landing zone, incorporating all our best practices that include governance, security, and availability. By using this, you can also start using microservices and become more cloud-native. We’ve simplified our best practices on AKS deployment into 12 steps so that you just need to think of the basic implementation, and we will take care of everything else, including full-stack monitoring.
        </p>

        <p className={'pb-16 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Application Modernization</b><br />
          Transitioning to Azure with a legacy application is never an issue. We can deliver your application to every end user globally, but in the end, you want to transform your application on Azure and go as cloud-native as possible. Usually, this means a bit of recoding of the software as well. Research shows that this is the soundest strategy to be successful in starting function shipping and improving your application.
          We have automated scans that check your code base to see if it is fit for the cloud, and if not, what to improve. We also scan for security, obsolete code, and open-source tooling that you might want to check before going full SaaS. The result of the scans determines the amount of development needed. We have developers on board to help you speed up the process. Whether you want to go fully SaaS or as Cloud native as possible, we are here to support you. Read more about how we can help you modernize your application step by step.
        </p>

      </div>

      <div className="migrate-to-azure mb-10 gap-16 flex flex-wrap md:flex-nowrap items-center relative max-w-9xl p-6 xl:pl-8 xl:py-0 lg:pr-36 mx-auto bg-main-card text-white xl:rounded-xl">
        <div className="content relative py-4 lg:pl-8 inline-flex flex-col">
          <h2 className="text-2xl mb-8">Kickstart your Azure DevOps</h2>
          <p className="max-w-xl">Azure DevOps brings together your organization`s people, processes, and technology, and it automates your software development process. By effectively applying the DevOps principles, you can reliably deliver new software versions faster, more often, and you can respond faster to the needs of your customers and the continuously changing marketplace. Read the story about how Protomation delivers software faster and more often with Azure DevOps. Read more about the benefits of Azure DevOps here.</p>
        </div>
        <Image
          src={FrameMail}
          alt="Mail"
          width={344}
          height={374}
          className='-my-12 sm:-mt-6 pb-10 max-w-64 sm:max-w-sm ml-auto'
        />
      </div>

      <div className="why-to-azure relative max-w-9xl px-6 sm:px-16 py-8 sm:py-[70px] mx-auto bg-[#162A43] text-white xl:rounded-xl mb-8 sm:mb-16">
        <Image
          src={BGNativeWhite}
          alt="Native logo"
          className={'absolute bottom-[-600px] right-[-150px]'}
        />
        <div className="relative gap-6 flex flex-col">
          <h2 className="text-2xl">Kickstart your Azure DevOps</h2>
          <p className="max-w-3xl">Azure DevOps brings together your organization`s people, processes, and technology, and it automates your software development process. By effectively applying the DevOps principles, you can reliably deliver new software versions faster, more often, and you can respond faster to the needs of your customers and the continuously changing marketplace. Read the story about how Protomation delivers software faster and more often with Azure DevOps. Read more about the benefits of Azure DevOps here.</p>
          {/* <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'blue', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit rounded-lg border border-solid border-native-btn`}>
            Accelerate with Azure
            <svg className={`icon-arrow-right text-white`} width={30} height={20}>
              <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
            </svg>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const Card = ({ img, title, desc, link }: TCard) => {
  return (
    <div className={'flex flex-col'}>
      <Image src={img} alt={title} className='h-full max-h-[110px] mx-auto sm:mx-0 object-contain' width={160} height={110} />
      <div className={'serviceText w-full max-w-[467px]'}>
        <h3 className="text-2xl mt-4 mb-5 ">{title}</h3>
        <p className='text-sm sm:text-base'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default AzurePage;