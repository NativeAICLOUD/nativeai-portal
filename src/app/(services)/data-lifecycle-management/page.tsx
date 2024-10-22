import Image from 'next/image';

import { AzureHero, Team } from '@/ImagePath';
import { Each } from '@/app/components/helpers/Each';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';
import MyAccordion from '@/app/components/controls/Accordion';

const ListData = [
  {
    title: "Can I enjoy DLM services if I am not on the (Azure) Cloud yet?",
    desc: "That doesn’t matter. Whether you have hundreds of data records or even billions. If there are actionable insights to be found within your data, we are ready to help!"
  },
  {
    title: "How much data do I need to have?",
    desc: "That doesn’t matter. Whether you have hundreds of data records or even billions. If there are actionable insights to be found within your data, we are ready to help!"
  },
  {
    title: "Is a Data solution expensive?",
    desc: "That doesn’t matter. Whether you have hundreds of data records or even billions. If there are actionable insights to be found within your data, we are ready to help!"
  },
  {
    title: "Before starting with DLM, do I need to have knowledge or experience with data?",
    desc: "That doesn’t matter. Whether you have hundreds of data records or even billions. If there are actionable insights to be found within your data, we are ready to help!"
  },
];

const cards = [
  { img: '/img/directory.png', title: 'Data Deep-dive', desc: 'Are you finding yourself willing to start your data journey, but having no clue where to start? We’ve got you covered! After this Deep-dive session, you will have an idea of what a data journey could mean for your organization and what it will look like. ' },
  { img: '/img/monitor.png', title: 'Data Design or Second Opinion', desc: 'Need advice on how to get through the steps to make your data insightful? Let us help by designing your data infrastructure. Together we will inform you about all the possibilities, including which tools and costs come into play. In this way, you can make the best-informed decision for your data journey.' },
]

type TCard = typeof cards[0];

const DataLifeCycleManagement = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0 before:absolute before:bg-azure-bg-opacity before:size-full before:xl:h-[1800px] before:top-0 before:z-1">
        <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-top h-[400px] sm:h-[500px] md:h-[600px] xl:h-[800px]" quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-28 sm:pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 xl:pb-16 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[900px]'}>
              Build and modernize intelligent apps
            </h1>
            <p className={'md:max-w-xl xl:max-w-2xl pb-16 text-base lg:text-lg font-normal'}>
              Build AI-powered, intelligent apps and enhance your critical solutions with generative AI.
            </p>
          </div>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6 sm:pt-28'}>

        <div className="azure mb-10 gap-6 sm:gap-16 xl:gap-32 flex flex-wrap md:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 mx-auto text-black xl:rounded-xl">
          <Image
            src={Team}
            alt="Team"
            className={'relative object-cover w-full mx-auto sm:mx-0 aspect-box max-w-[480px] max-h-[280px] max-h-sm'}
          />
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl">Azure OpenAI Service</h2>
            <p className="max-w-3xl">
              Build resilient apps with increased scalability and availability.
              <br /><br />
              Quickly develop generative AI experiences with a diverse set of prebuilt and curated models from OpenAI, Meta and beyond.
            </p>
          </div>
        </div>

        <p className={'pb-16 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Benefits of cloud application development</b><br />
          Not every software company is the same. Some prefer to focus solely on software development, without having to think about things such as infrastructure and hosting. While others prefer to do as much as possible themselves and only spar with our Azure experts when complex challenges arise. That is why we have developed three service plans. Based on the wishes, needs, and experiences of our customers. From minimal to full support. With each plan, you get free access to our customer portal. This offers management information and ensures that developers and administrators have all the insights and tools they need to continuously improve the Azure environment.
        </p>

        <p className="font-bold mb-3">Let us explain our way to your data journey:</p>
        <ul className="list-decimal ml-5 mb-10 [&>li]:mb-3">
          <li><b>Azure Landingzone</b>: We start with a Data Landingzone where we create all platform resources required to support your intended data design.</li>
          <li><b>Data Extraction</b>: When phase 1 is in place, we can start offloading your data sources and storing them properly.</li>
          <li><b>Data transformation and Cleaning</b>: Most of the time, your data will contain errors. We transform and clean your data and make it ready for usage.</li>
          <li><b>Data Science and Analysis</b>: After cleaning, we can start gaining useful insights.</li>
          <li><b>Data Visualisation</b>: To share these insights effectively, it needs to be visualized.</li>
        </ul>
      </div>

      <div className="flex flex-col sm:flex-row gap-6 mb-10 sm:mb-20">
        <div className={'flex-1 relative max-w-9xl mx-auto bg-[#131C28] text-white px-8 py-10 xl:rounded-lg'}>
          <h2 className='text-lg mb-4'>Why DLM?</h2>
          <p className='opacity-80'>
            Data is one of the most valuable elements of your organization. Data can show you what your situation was, what your situation is, and what it could be. The possibilities are endless. You could use DLM to make your data more accessible and insightful for your customers to serve them better. Maybe you want to utilize data to create business opportunities for your customers. Or maybe use data to improve your own business. For example, data can help you explore your customer journey (Data Science). Data can also be fundamental in predicting scenarios and outcomes (Machine Learning), even enabling your company to respond in real-time when events occur (Artificial Intelligence).
          </p>
        </div>

        <div className={'flex-1 relative max-w-9xl mx-auto bg-[#131C28] text-white px-8 py-10 xl:rounded-lg'}>
          <h2 className='text-lg mb-4'>For whom is DLM?</h2>
          <p className='opacity-80'>
            Data solutions can be for every organization in every branch. Your company can have hundreds of records or even billions. There is no maximum because our data solutions are scalable.
            <br /><br />
            Whether you are already on the (Azure) Cloud or (partly) on-premises, we can customize your data journey to suit your needs. You don’t need to have anything running in production before you make use of DLM.
          </p>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6 sm:pt-28'}>
        <div className="azure sm:mb-20 gap-6 sm:gap-16 xl:gap-32 md:ml-auto flex flex-wrap-reverse md:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 text-black xl:rounded-xl">
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl font-bold bg-workshop-text-linear bg-clip-text text-transparent">Intercepts DLM / products</h2>
            <p className="max-w-3xl">Intercept is engaged in the transformation, modernization, and acceleration of organizations through the Microsoft Azure platform. With our unique focus and expertise, we fully understand the current and future challenges that software companies are faced with.
              <br /> Intercept has assisted more than two hundred organizations in their transformation to and within the cloud. We are your guide in the world of data!</p>
          </div>
          <Image
            src={Team}
            alt="Team"
            className={'relative object-cover w-full mx-auto sm:mx-0 aspect-box max-w-[480px] max-h-[280px] max-h-sm'}
          />
        </div>

        <div className={'flex text-center sm:text-left flex-col sm:flex-row flex-wrap justify-around px-6 gap-16 sm:gap-6 mt-16 mb-16 sm:mb-24 max-w-6xl mx-auto'}>
          <Each
            of={cards}
            render={(item: TCard) => (
              <Card {...item} />
            )}
          />
        </div>
      </div>

      <div className={'flex-1 relative max-w-9xl mx-auto bg-[#131C28] text-white px-6 md:px-20 py-10 md:py-14 xl:rounded-lg mb-16 sm:mb-20'}>
        <h2 className='text-xl sm:text-2xl font-bold mb-6'>How may we help?</h2>
        <MyAccordion data={ListData} />
      </div>

      <ContactUsFooter />
    </div >
  )
};

const Card = ({ img, title, desc }: TCard) => {
  return (
    <div className={'flex flex-col'}>
      <Image src={img} alt={title} className='h-full max-h-[110px] mx-auto sm:mx-0 object-contain' width={160} height={110} />
      <div className={'serviceText w-full max-w-[467px]'}>
        <h3 className="text-2xl mt-4">{title}</h3>
        <p className='my-5 text-sm sm:text-base md:min-h-[140px]'>
          {desc}
        </p>
      </div>
    </div>
  )
}

export default DataLifeCycleManagement;