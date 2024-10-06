import { SolutionHeader } from '@/ImagePath';
import Image from 'next/image';
import { Each } from '../components/helpers/Each';
import { twMerge } from 'tailwind-merge';
import { button } from '../components/utils/tw-variants';
import { Link } from 'react-transition-progress/next';

const KnowledgeBasePage = () => {
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
          </div>
          <Image
            src={SolutionHeader}
            alt="Solutions Image"
            priority
            className={'opacity-80 md:opacity-100 absolute md:relative object-contain w-full sm:max-w-md lg:max-w-xl xl:max-w-3xl'}
          />
        </div>

        <div className={'flex text-center sm:text-left flex-col sm:flex-row flex-wrap justify-around px-6 gap-16 sm:gap-6 mt-16 mb-24'}>
          <Each
            of={[]}
            render={(item: any) => (
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

const Card = ({ img, title, desc, link }: any) => {
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

export default KnowledgeBasePage;