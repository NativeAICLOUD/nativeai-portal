import { BG3Img } from '@/ImagePath';
import Image from 'next/image';

const WorkshopDetailPage = () => {
    return (
        <div className={`relative min-h-full`}>
            <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
                <Image src={BG3Img} alt="Background" className="!h-auto !-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
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
            </div>
        </div>
    )
}

export default WorkshopDetailPage