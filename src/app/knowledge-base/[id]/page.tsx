import RelatedArticles from '@/app/components/partials/RelatedArticles';
import { BG5Img, BGGroupLogo } from '@/ImagePath';
import { getBlogPosts, getSinglePost } from '@/lib/blogsPosts';
import { formatDistanceToNow } from 'date-fns';
import { shuffle, take } from 'lodash';
import Image from 'next/image';
import { redirect } from 'next/navigation';

const KnowledgeBaseDetailPage = async ({ params }: any) => {
    const post = await getSinglePost(+params?.id);

    if (!post.id) {
        redirect('/not-found')
    }

      const posts = await getBlogPosts();
    
    return (
        <div className={`relative min-h-full pt-28`}>
            <div className="feature-image relative w-full h-60 sm:aspect-thumbnail">
                <Image src={post.image} alt="Background" fill={true} objectFit="cover" quality={100} />
            </div>
            <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
                <Image src={BG5Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
                <Image src={BGGroupLogo} alt="Design Element" layout="fill" objectFit="contain" objectPosition='center right' quality={100} />
            </div>
            <div className={'relative mx-auto max-w-[954px] px-2 sm:px-4 md:px-6 2xl:px-0 [&>p]:py-2'}>

                <h6 className="opacity-60 text-xs mb-1 pt-6 pb-2">{post.date ? formatDistanceToNow(new Date(post.date || ''), { addSuffix: true }) : ''}</h6>

                <h2 className="text-gray-800 font-black text-4xl leading-tight mb-4">{post.title || ''}</h2>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit veritatis ullam omnis temporibus alias quos dicta quaerat maxime repellat minus facere saepe architecto obcaecati, possimus, est libero eius doloribus.</p>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit veritatis ullam omnis temporibus alias quos dicta quaerat maxime repellat minus facere saepe architecto obcaecati, possimus, est libero eius doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi similique obcaecati voluptas in incidunt nesciunt dolor, debitis asperiores quia quo qui. Iste, distinctio recusandae quasi quisquam magni eveniet sequi?</p>
                
                <Image src={post.image} alt="Background" width={500} height={250} className="w-full object-cover aspect-postimg my-4 rounded-14" quality={100} />
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit veritatis ullam omnis temporibus alias quos dicta quaerat maxime repellat minus facere saepe architecto obcaecati, possimus, est libero eius doloribus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid animi similique obcaecati voluptas in incidunt nesciunt dolor, debitis asperiores quia quo qui. Iste, distinctio recusandae quasi quisquam magni eveniet sequi?</p>
              
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit fugit veritatis ullam omnis temporibus alias quos dicta quaerat maxime repellat minus facere saepe architecto obcaecati, possimus, est libero eius doloribus.</p>

            </div>

            <div className="related-articles pb-32 pt-16 px-2 max-w-8xl mx-auto">
                <RelatedArticles posts={take(shuffle(posts), 3)} />
            </div>
        </div>
    );
};

export default KnowledgeBaseDetailPage;