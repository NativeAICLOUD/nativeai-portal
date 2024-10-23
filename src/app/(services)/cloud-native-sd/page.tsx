import Image from 'next/image';

import { AzureHero, Team } from '@/ImagePath';
import { Each } from '@/app/components/helpers/Each';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';


const cards = [
  { title: 'Faster deployment', desc: 'Cloud-native software development allows developers to quickly deploy applications and services with minimal set-up and configuration. This helps to reduce time and to save costs associated with manual deployments.' },
  { title: 'Scalability', desc: 'Cloud-native software solutions are highly scalable. This means it can be adjusted depending on changing demand. Organizations can quickly add extra users or features without consequences for the manual configuration.' },
  { title: 'Continuous integration and delivery', desc: 'Cloud-native software solutions are designed for continuous integration and continuous delivery. This enables developers to quickly move applications/services from development to production with ease.' },
  { title: 'Cost-effectiveness', desc: 'Cloud-native solutions are way more cost-effective than traditional software solutions, requiring less overhead and maintenance.' },
  { title: 'Improved security', desc: 'Cloud-native solutions are designed for effective security, to provide tools and processes for organizations that are needed to protect data and applications.' },
]

type TCard = typeof cards[0];

const CloudNativeSD = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0">
        <div className="overlay relative w-full h-[calc(100vh-10rem)] before:absolute before:bg-azure-bg-opacity before:size-full before:top-0 before:z-1">
          <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-[85%] sm:object-top" fill={true} quality={100} />
        </div>
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-28 sm:pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 xl:pb-16 leading-none font-bold bg-service-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[900px]'}>
              Cloud-Native Software Development
            </h1>
            <p className={'md:max-w-xl xl:max-w-2xl pb-16 text-base lg:text-lg font-normal'}>
              Our scrum-based cloud-native software development provides a decent minimum viable product (MVP) solution, a solution that is easy to deliver and quick to expand.
            </p>
          </div>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl sm:px-2 md:px-4 lg:px-6 sm:pt-28'}>

        <div className="azure mb-10 gap-8 xl:gap-32 flex flex-wrap lg:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 mx-auto text-black xl:rounded-xl">
          <Image
            src={Team}
            alt="Team"
            className={'relative object-cover w-full mx-auto sm:mx-0 aspect-box max-w-[480px] max-h-[280px] max-h-sm'}
          />
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <p className="max-w-3xl">
              Cloud-native software development is an approach to creating and running applications specifically designed to benefit from the perks of cloud infrastructure. It uses modern technologies like containers, microservices, serverless computing, and DevOps to build and manage applications. On top of that, cloud-native software development enables further modernization of your software development practice.
            </p>

            <div className="lists">
              <p className="max-w-3xl">
                The goal of cloud-native software development is to create applications that are more: <br />
                Agile
              </p>
              <ul className="ml-6 list-disc">
                <li>Resilient</li>
                <li>Scalable</li>
              </ul>
            </div>
          </div>
        </div>

        <p className={'pb-16 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Benefits of cloud application development</b><br />
          Not every software company is the same. Some prefer to focus solely on software development, without having to think about things such as infrastructure and hosting. While others prefer to do as much as possible themselves and only spar with our Azure experts when complex challenges arise. That is why we have developed three service plans. Based on the wishes, needs, and experiences of our customers. From minimal to full support. With each plan, you get free access to our customer portal. This offers management information and ensures that developers and administrators have all the insights and tools they need to continuously improve the Azure environment.
        </p>

        <p className={'pb-16 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b>Why NativeCloud?</b><br />
          NativeCloud helps customers with the modernization and improvement of applications. Step by step we support you in becoming more cloud native. We help you to implement the best practices with the use of agile and continuous delivery. All this, working alongside the customer’s architects and development teams.
        </p>

        <h1 className={'text-2xl sm:text-3.5xl pb-6 leading-none font-bold bg-h2-native-linear bg-clip-text text-transparent text-center'}>
          Why should you consider Cloud-Native Software Development?
        </h1>

        <div className={'text-center sm:text-left grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 xl:px-0 gap-8 md:gap-16 mt-16 mb-14 sm:mb-24'}>
          <Each
            of={cards}
            render={({ title, desc }: TCard) => (
              <div className={'flex flex-col'}>
                <h3 className="text-2xl mt-4 mb-5">{title}</h3>
                <p className='text-sm sm:text-base'>
                  {desc}
                </p>
              </div>
            )}
          />
        </div>

        <div className="azure mb-8 sm:mb-20 gap-8 xl:gap-32 md:ml-auto flex flex-wrap-reverse lg:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 text-black xl:rounded-xl">
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl  bg-h2-native-linear bg-clip-text text-transparent">Is cloud-native software development something for me?</h2>
            <p className="max-w-3xl">It is especially interesting for software organizations that face challenges in getting their application to become cloud-native. For those organizations that are eager to stay relevant in the future. Regardless of the current use of a private or public cloud, we can help you to migrate to Azure. In addition, for those organizations that are currently already working with Azure, we provide support to optimize the performance of your application development.</p>
          </div>
          <Image
            src={Team}
            alt="Team"
            className={'relative object-cover w-full mx-auto sm:mx-0 aspect-box max-w-[480px] max-h-[280px] max-h-sm'}
          />
        </div>
      </div>

      <ContactUsFooter />
    </div>
  )
};

export default CloudNativeSD;