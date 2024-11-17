import { BG5Img, LogoBlue } from '@/ImagePath';
import Image from 'next/image';
import KnowledgeBasePosts from '../components/partials/knowledge-base';
import { getBlogPosts } from '@/lib/blogsPosts';

const KnowledgeBasePage = async () => {

  const posts = await getBlogPosts();

  return (
    <div className={`relative min-h-full`}>
      <div className="absolute w-full h-full z-[-1] top-16 inset-x-0">
        <Image src={BG5Img} alt="Background" className="!h-auto md:!-top-36" layout="fill" objectFit="cover" objectPosition='top' quality={100} />
      </div>
      <div className={'relative mx-auto max-w-9xl px-2 sm:px-4 md:px-6 2xl:px-0'}>
        <div className="top flex items-start pt-36 gap-10">
          <div className="relative side pt-28 z-1 px-10 md:px-0 text-center md:text-left">
            <h1 className={'text-4xl md:text-5xl xl:text-6xl pb-6 leading-none font-bold bg-solution-text-linear bg-clip-text text-transparent md:max-w-[600px] xl:max-w-[800px]'}>
              Knowledge base
            </h1>
            <p className={'md:max-w-[600px] xl:max-w-[800px] pt-3 pb-16 text-base lg:text-lg font-normal'}>
              Would you also like to stay up-to-date? Check out our knowledge base full of articles, downloads, and news updates on the latest developments in our field.
            </p>
          </div>
          <Image
            src={LogoBlue}
            alt="Knowledge base image"
            priority
            className={'opacity-50 md:opacity-100 absolute md:relative object-contain w-full max-w-sm sm:max-w-md'}
          />
        </div>

        <KnowledgeBasePosts posts={posts} />
      </div>
    </div>
  );
};

export default KnowledgeBasePage;