import Image from 'next/image';

import { Constants } from '@/Constants';
import { AzureHero, BGGroupLogo, BGNativeWhite, FrameMail } from '@/ImagePath';
import { Link } from 'react-transition-progress/next';
import { Each } from '../../components/helpers/Each';
import { button } from '../../components/utils/tw-variants';

const cards = [
  { img: '/img/Isolation_1.png', link: '', title: 'Cloud Design', desc: 'The cloud design ticket is the first step in the process. This is where you hop on. You receive a scalable, robust, and compliant Azure design for your application, monthly Azure costs, migration path, task list, and the hours required for your migration to Azure. After the cloud design, you decide if the proposed design fits your organization`s needs and if NativeCloud is the right partner to collaborate with. No strings attached, this is where you can hop off but you might want to see more.' },
  { img: '/img/Isolation_2.png', link: '', title: 'CSP Onboarding', desc: 'Together with your team, we will ensure a flawless migration of your current application and workloads to your own CSP tenant. If you already have a Microsoft tenant we can move your existing Azure environment through an automated process. If you have an Enterprise Agreement we can import your EA as a benefit from the Azure Expert MSP partner status.' },
  { img: '/img/Isolation_3.png', link: '', title: 'Governance and security', desc: 'Your customers demand a secure, compliant, and efficient environment for their applications. When hosting your application on a cloud platform, governance becomes even more critical and you want to manage this from the start of your journey. We call this shift left in the process. Good cloud governance results in guardrails that keep the company on a safe path throughout that journey. One of the reasons why we make this a mandatory part of our onboard practices and have fully automated the management of it.' },
]

type TCard = typeof cards[0];

const AzurePage = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0">
        <div className="overlay relative w-full h-[calc(100vh-10rem)] before:absolute before:bg-azure-bg-opacity before:size-full before:top-0 before:z-1">
          <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-[85%] sm:object-top" fill={true} quality={100} />
        </div>
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='center right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-28 sm:pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-service-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
              Going to Azure
            </h1>
            <p className={'md:max-w-[580px] pt-3 pb-16 text-base lg:text-lg font-normal'}>
              Are you planning or considering migrating to Microsoft Azure? We have the solution.
              <br /><br />
              Bring together people, processes, and products to continuously deliver value to customers and coworkers.
            </p>
            <p className={'md:max-w-[640px] xl:max-w-[940px] pb-16 text-base lg:text-lg font-normal'}>
              <b>How Native Cloud helps you migrate</b><br />
              To facilitate your migration to Azure, we have developed a roadmap for software-driven organizations containing processes, tooling, automation, and best practices. It doesn`t matter if you want to migrate to Azure and come from a private data center, or if you want to convert an on-premises hosted legacy application to a full SaaS application. This roadmap gives you the tools you need for a comfortable cloud journey.
            </p>
          </div>
        </div>
      </div>

      <div className="migrate-to-azure gap-16 flex flex-wrap md:flex-nowrap items-center relative max-w-9xl p-6 xl:pl-8 xl:py-0 xl:pr-12 mx-auto bg-main-card text-white xl:rounded-xl">
        <Image
          src={FrameMail}
          alt="Mail"
          width={344}
          height={374}
          className='-my-12 sm:-my-6 max-w-72 sm:max-w-sm mx-auto'
        />
        <div className="content relative py-4 inline-flex flex-col">
          <h2 className="text-2xl mb-8">Why migrate to Azure?</h2>
          <p>Migrating to Microsoft Azure may involve moving your application as it is now developed, or modifying the code to better handle cloud native resources. Even when you do a lift and shift to Azure, you still significantly improve your environment. In fact, you provide your environment with a better place to `live` and you can almost immediately start focusing on publishing and improving your solution. This is instead of managing your infrastructure.</p>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6'}>

        <p className={'pt-24 pb-10 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>The transition to Azure</b><br />
          Depending on your current situation and wishes, we will work with you to see if we can optimize your infrastructure with, for example, containers, Kubernetes, PaaS, and other cloud-native resources in Azure. The latter usually involves modifying part of your code, but it will undoubtedly result in lower costs and increase your efficiency and flexibility.
          Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy. These steps depend on your current IT environment, application architecture, and organizational goals.
        </p>

        <div className={'flex text-center sm:text-left flex-col sm:flex-row flex-wrap justify-around px-6 xl:px-0 gap-16 sm:gap-6 mt-16 mb-24'}>
          <Each
            of={cards}
            render={(item: TCard) => (
              <Card
                img={item.img}
                title={item.title}
                desc={item.desc}
                link={item.link} />
            )}
          />
        </div>

        <p className={'pb-20 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Migration</b><br />
          After the cloud design has been approved we will create a project plan that will accommodate the migration process. The phasing and prioritization are set up in careful collaboration with all the stakeholders. Our project managers will have a feedback cycle in rhythm with the duration of the project. They are measured on time, material, and customer satisfaction. To ensure a good handover is necessary to the internal business of our customers, knowledge transfer is always part of the project cycle.1
        </p>
      </div>

      <div className="why-to-azure relative max-w-9xl px-6 sm:px-16 py-8 sm:py-[70px] mx-auto bg-[#232F3E] text-white xl:rounded-xl mb-8 sm:mb-16">
        <Image
          src={BGNativeWhite}
          alt="Native logo"
          className={'absolute bottom-[-600px] right-[-150px]'}
        />
        <div className="relative gap-6 flex flex-col">
          <h2 className="text-2xl">Why migrate to Azure?</h2>
          <p className="max-w-4xl">We can imagine that it is a lot to take in and if you are still not sure Azure is the right direction and you want to hop on the cloudify train, do visit our online workshops and knowledge base. We discuss cloud trends and latest cloud technology and how this will benefit your business and application infrastructure. We have over a 1000 visitors each year on our workshops and they are given by certified Microsoft trainers and MVPs.</p>
          <Link href={Constants.PAGES.ACCELERATE_AZURE} className={`${button({ size: 'lg', color: 'blue', icon: 'md' })} whitespace-nowrap w-full max-w-sm lg:w-auto lg:max-w-fit rounded-lg border border-solid border-native-btn`}>
            Accelerate with Azure
            <svg className={`icon-arrow-right text-white`} width={30} height={20}>
              <use href={`/icons/all-icons.svg#icon-arrow-right`}></use>
            </svg>
          </Link>
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