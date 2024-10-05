import { Each } from '@/app/components/helpers/Each';
import CoomingSoon from '@/app/components/ui/CoomingSoon';
import { button } from '@/app/components/utils/tw-variants';
import { BG3Img } from '@/ImagePath';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

const workshopList = [
    { icon: 'icon-time', title: '2 hours' },
    { icon: 'icon-world', title: 'English' },
    { icon: 'icon-camera', title: 'Online' },
];
type IWorkshopList = typeof workshopList[0];

const WorkshopDetailPage = () => {
    return (
        <div className={`relative min-h-full`}>
            <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
                <Image src={BG3Img} alt="Background" className="!h-auto !-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
            </div>
            <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
                <div className="relative side pt-60 z-1 px-10 md:px-0 text-center md:text-left mb-6">
                    <h6 className='text-sm uppercase tracking-wide font-normal'>Basic</h6>
                    <h1 className={'sm:-ml-1.5 text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
                        Dive into our workshops
                    </h1>
                    <p className={'md:max-w-[600px] xl:max-w-[800px] pt-2 pb-4 text-base lg:text-lg font-normal'}>
                        Learn how to secure your Azure cloud in just 90 minutes! Join our Azure Security Workshop to discover the basics and best practices.
                    </p>

                    <ul className="mt-2 mb-6 flex gap-4 text-gray-600 text-sm">
                        <Each
                            of={workshopList}
                            render={(item: IWorkshopList) => (
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className={item.icon} width={20} height={20}>
                                        <use href={`/icons/all-icons.svg#${item.icon}`}></use>
                                    </svg>
                                    {item.title}
                                </li>
                            )}
                        />
                    </ul>

                    <CoomingSoon>
                        <span>
                            <button className={twMerge(`${button({ size: 'lg', color: 'primary', icon: 'md' })} min-w-20 border-2 border-white`)}>
                                Sign Up Now!
                            </button>
                        </span>
                    </CoomingSoon>

                    <p className='pt-16'>
                        Are you an Azure professional, CTO, administrator, system architect or otherwise interested in Azure security? Then, attend this Azure Security workshop. During this workshop, we will share practical tips and teach you how to secure your Azure cloud environment. You will be able to see a live demo and learn how to apply the concepts and techniques we discuss within your organisation.
                    </p>
                    <ul className='list-disc ml-6 pt-5 mb-16'>
                        <li>We will also discuss Azure Security benchmarks and share our best practices.</li>
                        <li>No prior knowledge is required Tailored for software-driven organisations</li>
                        <li>Free registration</li>
                    </ul>


                    <div className={'relative home-partner mt-16 xl:mt-32'}>
                        <div className={'relative max-w-9xl mx-auto bg-two-color 2xl:rounded-2xl text-white'}>
                            <Image
                                src="/img/arrow-down-1.png"
                                alt="Arrow Down"
                                width={51}
                                height={55}
                                className={'absolute top-[-30px] left-[50%] translate-x-[-50%]'}
                            />
                            <h2 className={'relative text-2xl mb-4 text-center font-semibold leading-snug pt-16 pb-4'}>
                                In this Azure Security Workshop, you will acquire several practical skills to ensure solid Azure cloud security.
                                These skills include Identity and Access Management with Azure Active Directory, implementing Multi-Factor Authentication, utilising Microsoft Defender for Cloud effectively, enhancing your Identity Secure Score, and more. Additionally, we cover regulatory compliance, such as GDPR.
                                The primary aim of the speakers is to familiarise you with Azure`s security capabilities and best practices for safeguarding your Azure cloud environment.
                                You can expect practical training from professionals with extensive experience in Azure Security for software-driven organisations.
                            </h2>
                        </div>

                        <Image src={'/img/line.png'} width={400} height={10} className="w-full my-8 max-w-8xl mx-auto" alt="Line" />

                        <div className={'max-w-9xl mx-auto mt-20 sm:mt-24 sm:pt-20 mb-20 sm:mb-28 px-5 text-center'}>
                            <h2 className={' text-native-text mb-4'}>
                                Our level of partnership
                            </h2>
                            {/* <div className={'flex items-center flex-wrap justify-around md:gap-16'}>
                                <Image
                                    src={MicrosotPartnerImg}
                                    alt="Microsoft Partner"
                                    className="max-w-[200px] sm:max-w-[300px] lg:max-w-[400px]"
                                    placeholder={'blur'}
                                />
                                <Image
                                    src={AWSPartnerImg}
                                    alt="AWS Partner"
                                    className="max-w-[100px] sm:max-w-[200px] lg:max-w-[300px]"
                                    placeholder={'blur'}
                                />
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkshopDetailPage