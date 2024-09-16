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
      <div className={'relative mx-auto max-w-9xl'}>
        <div className="top flex items-start justify-between pt-36">
          <div className="side pt-28">
            <h1 className={'text-6xl pb-6 leading-none font-bold bg-solution-text-linear bg-clip-text text-transparent max-w-[800px]'}>
              The best cloud Solutions for your organization
            </h1>
            <p className={'max-w-[800px] pt-3 pb-16 text-lg font-normal'}>
              Regardless of your current infrastructure, we empower you to get the most out of your cloud experience. Find our top 3 solutions below and let us help you along your cloud journey.
            </p>
            <div className={'flex items-center gap-6'}>
              <Image src={MSP} alt="Microsoft Solutions Partner" className={'max-w-56 shadow-partner rounded-md'} />
              <Image src={KCSP} alt="Kubernetes Certified Service Provider" className={'max-w-56 shadow-partner rounded-md'} />
              <Image src={KTP} alt="Kubernetes Training Partner" className={'max-w-56 shadow-partner rounded-md'} />
            </div>
          </div>

          <Image
            src={SolutionHeader}
            alt="Solutions Image"
            priority
            className={'max-w-xl object-contain'}
          />
        </div>

        <div className={'flex justify-around gap-6 mt-16 mb-24'}>
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
      <Image src={img} alt={title} className='h-full max-h-[110px] object-contain' width={160} height={110} />
      <div className={'serviceText w-full max-w-[467px]'}>
        <h3 className="text-2xl mt-4">{title}</h3>
        <p className='my-5 text-sm sm:text-base min-h-[140px]'>
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

export default SolutionsPage;