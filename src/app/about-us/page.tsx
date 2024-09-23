import Image from 'next/image';

import { Each } from '../components/helpers/Each';

import AboutHeader from '../../../public/img/about-img.png';
import { twMerge } from 'tailwind-merge';

const cards = [
  { img: '/img/msp.png', link: '', title: '3x Microsoft Most Valuable Professionals (MVP)', desc: 'MVP status is given by Microsoft to technology experts who passionately share their knowledge with the community.' },
  { img: '/img/msp.png', link: '', title: '3x Microsoft Most Valuable Professionals (MVP)', desc: 'MVP status is given by Microsoft to technology experts who passionately share their knowledge with the community.' },
  { img: '/img/msp.png', link: '', title: '3x Microsoft Most Valuable Professionals (MVP)', desc: 'MVP status is given by Microsoft to technology experts who passionately share their knowledge with the community.' },
]

type TCard = typeof cards[0];

const AboutUsPage = () => {
  return (
    <div className={`relative min-h-full before:bg-orange3-gradient before:size-full before:absolute before:inset-0 before:bg-cover`}>
      <div className={'relative mx-auto max-w-9xl px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start justify-between pt-36">
          <div className="relative side pt-28 z-1 px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-6xl pb-6 leading-none font-bold bg-solution-text-linear bg-clip-text text-transparent md:max-w-[800px]'}>
              About Native Cloud
            </h1>
            <p className={'md:max-w-[600px] xl:max-w-[800px] pt-3 pb-16 text-lg font-normal'}>
              Master Microsoft Azure in hands-on sessions. Accelerate your cloud proficiency!
            </p>

            <HeaderText className="hidden xl:block" />
          </div>

          <Image
            src={AboutHeader}
            alt="About Image"
            priority
            className={'opacity-80 md:opacity-100 absolute inset-x-0 md:relative object-contain sm:max-w-md lg:max-w-xl xl:max-w-full'}
          />
        </div>

        <HeaderText className="block xl:hidden text-center sm:text-left" />

        <div className="about-info mt-8">
          <div className={'flex flex-col md:flex-row items-center gap-6 text-center sm:text-left'}>
            <p>
              Our core focus lies in Microsoft Azure, and we`re proud to hold certification from Microsoft as an Azure Expert Managed Service Provider. We empower businesses with cutting-edge cloud services designed for maximum efficiency and reliability. Azure provides essential tools enabling organizations to securely access their critical applications and data from anywhere, swiftly and securely. Through daily design, implementation, and management of infrastructures and workloads on Azure, we have amassed invaluable knowledge and expertise on the platform.
            </p>
            <p>
              Our continuous engagement with Azure empowers us to deliver tailored solutions that optimize performance, security, and accessibility for our clients. Continuous refinement of designs and robust Managed Services have made us leaders in integrating new Azure features into customer solutions. We ensure clients leverage Azure`s latest innovations for enhanced efficiency and competitiveness. As a result of the continuous improvement of these designs and our Managed Services, we have become a leader in integrating new Azure functionalities into customer solutions.
            </p>
          </div>
        </div>

        <div className="about-cards mt-20">
          <h2 className="text-xl sm:text-2xl font-bold mx-auto xl:mx-0 px-4 sm:px-0 max-w-md sm:max-w-xl xl:max-w-full text-center xl:text-left">
            To underline this we share some achievements that we are proud of
          </h2>
          <div className={'flex flex-col sm:flex-row flex-wrap xl:flex-nowrap justify-around gap-6 mt-8 sm:mt-14 pb-20 sm:pb-24'}>
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
        </div>
      </div>
    </div>
  );
};

const Card = ({ img, title, desc, link }: TCard) => {
  return (
    <div className={'flex flex-col bg-white shadow-about rounded-lg p-4 sm:p-6 text-center'}>
      <Image src={img} alt={title} className='object-contain rounded-full border w-20 min-h-20 mx-auto mb-4' width={160} height={110} />
      <div className={'serviceText w-full max-w-[467px]'}>
        <h3 className="text-xl sm:text-2xl mt-2 sm:mt-4">{title}</h3>
        <p className='my-5 text-sm sm:text-base sm:pb-6'>
          {desc}
        </p>
      </div>
    </div>
  )
}

const HeaderText = ({ className }: { className: string }) => {
  return (
    <div className={twMerge('about-info', className || '')}>
      <h2 className="font-medium text-2xl sm:text-3xl md:text-3.5xl leading-tight">
        NativeCloud specializes in delivering <span className="text-native font-bold">smart, innovative</span>, and <span className="text-native font-bold">highly resilient cloud solutions</span> to support organizations.
      </h2>
    </div>
  )
}

export default AboutUsPage;