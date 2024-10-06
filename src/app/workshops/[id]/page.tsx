import MyAccordion from '@/app/components/controls/Accordion';
import { Each } from '@/app/components/helpers/Each';
import CoomingSoon from '@/app/components/ui/CoomingSoon';
import { button } from '@/app/components/utils/tw-variants';
import { BG3Img, BG_INVERSE, BGNativeWhite } from '@/ImagePath';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { twMerge } from 'tailwind-merge';

const workshopList = [
    { icon: 'icon-time', title: '2 hours' },
    { icon: 'icon-world', title: 'English' },
    { icon: 'icon-camera', title: 'Online' },
];
type IWorkshopList = typeof workshopList[0];


export const ListData = [
    {
        title: "Introduction to Microsoft Azure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet incidunt doloribus delectus tempore alias consequatur placeat velit beatae consequuntur qui voluptas quo iste et, enim atque. Incidunt, quisquam! Similique!"
    },
    {
        title: "Introduction to Microsoft Azure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet incidunt doloribus delectus tempore alias consequatur placeat velit beatae consequuntur qui voluptas quo iste et, enim atque. Incidunt, quisquam! Similique!"
    },
    {
        title: "Introduction to Microsoft Azure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet incidunt doloribus delectus tempore alias consequatur placeat velit beatae consequuntur qui voluptas quo iste et, enim atque. Incidunt, quisquam! Similique!"
    },
    {
        title: "Introduction to Microsoft Azure",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eveniet incidunt doloribus delectus tempore alias consequatur placeat velit beatae consequuntur qui voluptas quo iste et, enim atque. Incidunt, quisquam! Similique!"
    },
];

const WorkshopDetailPage = () => {
    return (
        <div className={`relative min-h-full`}>
            <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
                <Image src={BG3Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
            </div>
            <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
                <div className="relative side pt-52 sm:pt-60 z-1 text-center md:text-left mb-6">
                    <h6 className='text-sm uppercase tracking-wide font-normal opacity-70'>Basic</h6>
                    <h1 className={'sm:-ml-1.5 text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent'}>
                        Dive into our workshops
                    </h1>
                    <p className={'md:max-w-[600px] xl:max-w-[800px] pt-2 pb-4 text-base lg:text-lg font-normal'}>
                        Learn how to secure your Azure cloud in just 90 minutes! Join our Azure Security Workshop to discover the basics and best practices.
                    </p>

                    <ul className="mt-2 mb-6 flex justify-center md:justify-start gap-4 text-gray-600 text-sm">
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
                        Are you an Azure professional, CTO, administrator, system architect or otherwise interested in Azure security?
                        <br className="block md:hidden" /><br className="block md:hidden" />
                        Then, attend this Azure Security workshop. During this workshop, we will share practical tips and teach you how to secure your Azure cloud environment.
                        <br className="block md:hidden" /><br className="block md:hidden" />
                        You will be able to see a live demo and learn how to apply the concepts and techniques we discuss within your organisation.
                    </p>
                    <ul className='list-disc ml-6 pt-5 mb-16 text-left'>
                        <li>We will also discuss Azure Security benchmarks and share our best practices.</li>
                        <li>No prior knowledge is required Tailored for software-driven organisations</li>
                        <li>Free registration</li>
                    </ul>
                </div>
            </div>

            <div className={'relative home-partner mt-16 xl:pb-16 xl:mt-32'}>
                <Image
                    src="/img/arrow-down-1.png"
                    alt="Arrow Down"
                    width={51}
                    height={55}
                    className={'absolute top-[-30px] left-[50%] translate-x-[-50%] z-1'}
                />
                <div className={'relative px-6 lg:px-20 max-w-9xl mx-auto bg-[#232F3E] 2xl:rounded-2xl text-white overflow-hidden'}>
                    <Image
                        src={BGNativeWhite}
                        alt="Native logo"
                        className={'absolute bottom-[-600px] right-[-150px]'}
                    />
                    <div className="content relative">
                        <p className="text-center md:text-left pt-20 opacity-90">
                            In this Azure Security Workshop, you will acquire several practical skills to ensure solid Azure cloud security.
                            These skills include Identity and Access Management with Azure Active Directory, implementing Multi-Factor Authentication, utilising Microsoft Defender for Cloud effectively, enhancing your Identity Secure Score, and more. Additionally, we cover regulatory compliance, such as GDPR.
                        </p>
                        <p className="text-center md:text-left pt-6 font-medium">
                            The primary aim of the speakers is to familiarise you with Azure`s security capabilities and best practices for safeguarding your Azure cloud environment.
                            You can expect practical training from professionals with extensive experience in Azure Security for software-driven organisations.
                        </p>

                        <Image src={'/img/line.png'} width={400} height={10} className="w-full mt-14 mb-6 max-w-8xl mx-auto" alt="Line" />

                        <h2 className="text-center text-xl font-medium mb-6">Speakers</h2>

                        <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 lg:gap-28">
                            <Each
                                of={[1, 2]}
                                render={(item: number) => {
                                    return (
                                        <div className="speaker text-center">
                                            <Image
                                                src={'/img/Speaker.png'}
                                                width={240} height={240}
                                                className="inline-block size-28 rounded-full"
                                                alt="Avatar" />
                                            <h2 className="mt-3 leading-none font-medium">Name Surname</h2>
                                            <span className="opacity-70 text-sm">Azure Achitect</span>
                                        </div>
                                    );
                                }}
                            />
                        </div>

                        <Image src={'/img/line.png'} width={400} height={10} className="w-full my-12 max-w-8xl mx-auto" alt="Line" />

                        <MyAccordion data={ListData} />

                        <div className="text-center mt-12 mb-16 md:my-20">
                            <Link href={'#'} className={`${button({ size: 'lg', color: 'secondary', icon: 'md' })} whitespace-nowrap !min-w-10 !px-6`}>
                                Sign Up Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={BG3Img} alt="Background" className="!h-40 absolute w-full z-[-1] bottom-0 inset-x-0" objectFit="cover" objectPosition='top' quality={100} />
        </div>
    )
}

export default WorkshopDetailPage