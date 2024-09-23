import Image from 'next/image';
import Link from 'next/link';

import { Each } from '../components/helpers/Each';
import { twMerge } from 'tailwind-merge';
import { button } from '../components/utils/tw-variants';

import SolutionHeader from '../../../public/img/Solutions.png';
import MSP from '../../../public/img/msp.png';
import KCSP from '../../../public/img/kcsp.png';
import KTP from '../../../public/img/ktp.png';

const cards = [
  { img: '/img/Isolation_1.png', link: '', title: 'Going to Azure', desc: 'Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.' },
  { img: '/img/Isolation_2.png', link: '', title: 'Accelerate with Azure', desc: 'Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.' },
  { img: '/img/Isolation_3.png', link: '', title: 'Managed Services', desc: 'Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.' },
]

type TCard = typeof cards[0];

const SolutionsPage = () => {
  return (
    <div className={`relative min-h-full`}>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-solution-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
              The best cloud Solutions for your organization
            </h1>
            <p className={'md:max-w-[600px] xl:max-w-[800px] pt-3 pb-16 text-base lg:text-lg font-normal'}>
              Regardless of your current infrastructure, we empower you to get the most out of your cloud experience. Find our top 3 solutions below and let us help you along your cloud journey.
            </p>
            <CardGroup className="hidden xl:flex flex-wrap" />
          </div>
          <Image
            src={SolutionHeader}
            alt="Solutions Image"
            priority
            className={'opacity-80 md:opacity-100 absolute md:relative object-contain w-full sm:max-w-md lg:max-w-xl xl:max-w-3xl'}
          />
        </div>
        <CardGroup className="xl:hidden" />

        <div className={'flex text-center sm:text-left flex-col sm:flex-row flex-wrap justify-around px-6 gap-16 sm:gap-6 mt-16 mb-24'}>
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
  );
};

const Card = ({ img, title, desc, link }: TCard) => {
  return (
    <div className={'flex flex-col'}>
      <Image src={img} alt={title} className='h-full max-h-[110px] mx-auto sm:mx-0 object-contain' width={160} height={110} />
      <div className={'serviceText w-full max-w-[467px]'}>
        <h3 className="text-2xl mt-4">{title}</h3>
        <p className='my-5 text-sm sm:text-base md:min-h-[140px]'>
          {desc}
        </p>
        <Link href={link}
          className={twMerge(`${button({ size: 'lg', color: 'primary', icon: 'md' })}`)}>
          Going to Azure
        </Link>
      </div>
    </div>
  )
}

const CardGroup = ({ className }: { className: string }) => {
  return (
    <div className={twMerge('flex items-center flex-col sm:flex-row gap-6', className || '')}>
        <Image src={MSP} alt="Microsoft Solutions Partner" className={'max-w-56 shadow-partner rounded-md'} />
        <Image src={KCSP} alt="Kubernetes Certified Service Provider" className={'max-w-56 shadow-partner rounded-md'} />
        <Image src={KTP} alt="Kubernetes Training Partner" className={'max-w-56 shadow-partner rounded-md'} />
      </div>
  )
}

export default SolutionsPage;