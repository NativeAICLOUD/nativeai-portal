import { BG3Img, BG_INVERSE, BGGroupLogo } from '@/ImagePath';
import WorkshopCards from '../components/partials/workshop';
import Image from 'next/image';

const cards = [
  { id: 1, color: 'orange', link: '', title: 'Basic', desc: 'Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.' },
  { id: 2, color: 'red', link: '', title: 'Deep dive', desc: 'Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.' },
  { id: 3, color: 'blue', link: '', title: 'Special', desc: 'Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.' },
  { id: 4, color: 'orange-80', link: '', title: 'Basic', desc: 'Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.' },
  { id: 5, color: 'red-80', link: '', title: 'Deep dive', desc: 'Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.' },
  { id: 6, color: 'blue-80', link: '', title: 'Special', desc: 'Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.' },
  { id: 7, color: 'orange-50', link: '', title: 'Basic', desc: 'Once you`ve decided to start working with Azure, the cloud migration process begins. Several complex decisions play a role in this, so it makes sense to work according to a carefully designed migration strategy.' },
  { id: 8, color: 'red-50', link: '', title: 'Deep dive', desc: 'Improving your application and infrastructure environment is a continuous process. The first step to achieving this is already done when you have chosen the public cloud. The next step is moving to a cloud-native application.' },
  { id: 9, color: 'blue-50', link: '', title: 'Special', desc: 'Besides renewing or recoding the application, making your application more cloud-native, or helping you kickstart your application on the public cloud, we have extensive support packages available if you would like us to manage the application as well.' },
]

const WorkshopPage = () => {
  return (
    <div className={`relative min-h-full`}>
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
        <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='top right' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="relative side pt-60 z-1 px-10 md:px-0 text-center md:text-left mb-6">
          <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
            Dive into our workshops
          </h1>
          <p className={'md:max-w-[600px] xl:max-w-[800px] sm:ml-1.5 pt-2 pb-16 text-base lg:text-lg font-normal'}>
            Master Microsoft Azure in hands-on sessions. Accelerate your cloud proficiency!
          </p>
        </div>
        <WorkshopCards data={cards} />
      </div>
      <Image
        src={BG_INVERSE}
        alt="Design Element" 
        className="absolute bottom-0 left-0 w-full h-full max-w-[800px] z-[-1] object-contain object-left-bottom"
        quality={100} />
    </div>
  );
};

export default WorkshopPage;