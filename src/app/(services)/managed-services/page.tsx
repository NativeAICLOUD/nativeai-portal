import Image from 'next/image';

import { Constants } from '@/Constants';
import { AzureHero, BGGroupLogo, BGNativeWhite, Microservices, PhoneWhite, Stack, Telephone } from '@/ImagePath';
import { button } from '@/app/components/utils/tw-variants';
import ContactUsFooter from '@/app/components/partials/ContactUsFooter';

const ManagedServices = () => {
  return (
    <div className={`relative min-h-full overflow-x-clip`}>
      <div className="absolute w-full h-full z-[-1] top-24 inset-x-0 before:absolute before:bg-azure-bg-opacity before:size-full before:top-0 before:z-1">
        <Image src={AzureHero} alt="Background" className="opacity-60 sm:opacity-100 object-cover object-top h-[400px] sm:h-[500px] md:h-[600px] xl:h-[800px]" quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='center right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-28 sm:pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-4 sm:px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 xl:pb-16 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[900px]'}>
              Managed Services
            </h1>
            <p className={'md:max-w-xl xl:max-w-2xl pb-16 text-base lg:text-lg font-normal'}>
              You want to focus on what`s most important to you and your customers: your software. We can help. How? By managing, monitoring, and maintaining your Azure environment. By responding to incidents and advising you on improvements and ways to save on Azure costs. This way we ensure that your customers have fast and secure access to their business-critical systems. And that your Azure environment is always up-and-running, secure, and cost-efficient. That`s Managed Services by Intercept.
            </p>

            <p className={'md:max-w-[640px] xl:max-w-[832px] pb-16 text-base lg:text-lg font-normal'}>
              <b>Two customer-driven service plans</b><br />
              Not every software company is the same. Some prefer to focus solely on software development, without having to think about things such as infrastructure and hosting. While others prefer to do as much as possible themselves and only spar with our Azure experts when complex challenges arise. That is why we have developed three service plans. Based on the wishes, needs, and experiences of our customers. From minimal to full support. With each plan, you get free access to our customer portal. This offers management information and ensures that developers and administrators have all the insights and tools they need to continuously improve the Azure environment.
            </p>
          </div>
        </div>
      </div>

      <div className={'mx-auto max-w-9xl px-2 sm:px-4 md:px-6 sm:pt-12'}>

        <div className="azure mb-10 gap-6 sm:gap-16 xl:gap-32 flex flex-wrap md:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 mx-auto text-black xl:rounded-xl">
          <Image
            src={Microservices}
            alt="Microservices"
            className={'relative object-contain w-full mx-auto sm:mx-0 max-w-sm sm:max-w-md'}
          />
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl">Build microservices with .NET</h2>
            <p className="max-w-3xl">
              You want to fully focus on development and innovation. That`s why we gladly take over both the management and the maintenance of your Azure environment.
              <br /><br />
              ASP.NET, the web framework for .NET, makes it easy to create the APIs that become your microservices. ASP.NET comes with built-in support for developing and deploying your microservices using Docker containers.
              .NET includes APIs to easily consume microservices from any application you build, including mobile, desktop, games, web, and more.
            </p>
          </div>
        </div>

        <div className="azure sm:mb-20 gap-6 sm:gap-16 xl:gap-32 flex flex-wrap-reverse md:flex-nowrap items-center relative max-w-7xl p-6 xl:pl-8 xl:py-0 lg:pr-8 text-black xl:rounded-xl">
          <div className="relative gap-6 flex flex-col lg:max-w-lg">
            <h2 className="text-2xl">NET side-by-side with other stacks</h2>
            <p className="max-w-3xl">The microservices architecture allows a mix of technologies between each service. You can use .NET for parts of your application without adopting it everywhere. .NET microservices can be mixed with those written in Node.js, Java, Go, or any other language.</p>
          </div>
          <Image
            src={Stack}
            alt="Stack"
          />
        </div>

        <p className={'py-12 text-base lg:text-lg font-normal px-2 xl:px-0 text-center sm:text-left'}>
          <b className="block pb-1 sm:pb-0">Free customer portal with managed services</b><br className="hidden sm:block" />
          As a specialist for ISVs, we know the challenges of software companies inside out. We transform this knowledge into new products and services, such as our customer portal that offers targeted management information for your Azure environment. When purchasing one of the service plans mentioned above, you get immediate access to the portal. You only pay the monthly rate. Adding an additional employee to the portal is free of charge. With the insights from the customer portal, we help you to maximize the possibilities of Azure.
          <br /><br />
          We are happy to show you the customer portal. Request a free demo.
        </p>
      </div>

      <ContactUsFooter />
  
    </div>
  );
};

export default ManagedServices;