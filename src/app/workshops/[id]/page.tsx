import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MyAccordion from '@/app/components/controls/Accordion';
import { Each } from '@/app/components/helpers/Each';
import { button } from '@/app/components/utils/tw-variants';
import { BG3Img, BGNativeWhite } from '@/ImagePath';
import { getWorkshopById, workshops } from '@/data/workshops';
import Image from 'next/image';
import { Link } from 'react-transition-progress/next';
import { twMerge } from 'tailwind-merge';

type PageProps = { params: Promise<{ id: string }> };

const workshopMeta = [
    { icon: 'icon-time', key: 'duration' as const },
    { icon: 'icon-world', key: 'language' as const },
    { icon: 'icon-camera', key: 'format' as const },
];

function parseId(raw: string): number | undefined {
    if (!/^\d+$/.test(raw)) return undefined;
    return Number(raw);
}

export async function generateStaticParams() {
    return workshops.map((w) => ({ id: String(w.id) }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
    const params = await props.params;
    const id = parseId(params?.id);
    const workshop = id !== undefined ? getWorkshopById(id) : undefined;
    if (!workshop) return {};
    return {
        title: `${workshop.title} | NativeCloud Workshops`,
        description: workshop.desc,
    };
}

const WorkshopDetailPage = async (props: PageProps) => {
    const params = await props.params;
    const id = parseId(params?.id);
    const workshop = id !== undefined ? getWorkshopById(id) : undefined;

    if (!workshop) notFound();

    const ListData = workshop.agenda.map((item, idx) => ({
        title: item,
        desc: workshop.agendaDetails[idx] ?? workshop.desc,
    }));

    return (
        <div className={`relative min-h-full`}>
            <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
                <Image src={BG3Img} alt="Background" fill className="!h-auto md:!-top-36 object-cover object-top" quality={100} />
            </div>
            <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
                <div className="relative side pt-52 sm:pt-60 z-1 text-center md:text-left mb-6">
                    <h6 className='text-sm uppercase tracking-wide font-normal opacity-70'>{workshop.level}</h6>
                    <h1 className={'sm:-ml-1.5 text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-workshop-text-linear bg-clip-text text-transparent'}>
                        {workshop.title}
                    </h1>
                    <p className={'md:max-w-[600px] xl:max-w-[800px] pt-2 pb-4 text-base lg:text-lg font-normal'}>
                        {workshop.desc}
                    </p>

                    <ul className="mt-2 mb-6 flex justify-center md:justify-start gap-4 text-gray-600 text-sm">
                        <Each
                            of={workshopMeta}
                            render={(item: (typeof workshopMeta)[0]) => (
                                <li className="flex items-center gap-2 text-sm">
                                    <svg className={item.icon} width={20} height={20}>
                                        <use href={`/icons/all-icons.svg#${item.icon}`}></use>
                                    </svg>
                                    {workshop[item.key]}
                                </li>
                            )}
                        />
                    </ul>

                    <Link
                        href="/schedule-call"
                        className={twMerge(`${button({ size: 'lg', color: 'primary', icon: 'md' })} min-w-20 border-2 border-white`)}
                    >
                        Sign Up Now!
                    </Link>

                    <p className='pt-16'>
                        {workshop.audience}
                        <br className="block md:hidden" /><br className="block md:hidden" />
                        <span className="hidden md:inline"> </span>
                        {workshop.intro}
                    </p>
                    <ul className='list-disc ml-6 pt-5 mb-16 text-left'>
                        {workshop.agenda.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
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
                            {workshop.closing}
                        </p>
                        <p className="text-center md:text-left pt-6 font-medium">
                            Expect practical, hands-on training from instructors with real production experience —
                            not a slide deck.
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
                                            <span className="opacity-70 text-sm">{workshop.speakerRole}</span>
                                        </div>
                                    );
                                }}
                            />
                        </div>

                        <Image src={'/img/line.png'} width={400} height={10} className="w-full my-12 max-w-8xl mx-auto" alt="Line" />

                        <MyAccordion data={ListData} />

                        <div className="text-center mt-12 mb-16 md:my-20">
                            <Link href={'/schedule-call'} className={`${button({ size: 'lg', color: 'secondary', icon: 'md' })} whitespace-nowrap !min-w-10 !px-6`}>
                                Sign Up Now!
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Image src={BG3Img} alt="Background" fill className="!h-40 absolute w-full z-[-1] bottom-0 inset-x-0 object-cover object-top" quality={100} />
        </div>
    )
}

export default WorkshopDetailPage;
