import BlogCard from '@/components/blogCard/BlogCard';
import HomeLowerSection from '@/components/homepage/HomeLowerSection';
import CloudServicesSection from '@/components/homecloudsection/CloudServicesSection';
import HomePartner from '@/components/homepartner/HomePartner';
import { blogs } from '@/lib/data';
import Image from 'next/image';
import styles from './page.module.css';

export async function fetchBlogs() {
  try {
    const res = await fetch('http://localhost:3000/api/blog', { cache: 'no-store' });
    return res.json();
  } catch (error) {
    return [];    
  }
}

export default async function Home() {
  // const blogs = await fetchBlogs();

  return (
    <div>
      {/* New Homepage Design */}
      <div className={styles.heroSection}>
        <div className={styles.background}>
          <Image src="/BG.png" alt="Background" layout="fill" objectFit="cover" quality={100} />
          <Image src="/Group 32.png" alt="Design Element" layout="fill" objectFit="cover" quality={100} />
        </div>
        <main className={styles.main}>
          <h1>Azure & AWS Consulting Company</h1>
          <h2>Beyond Limits, Empowering Azure Clouds Solutions</h2>
          <div className={styles.buttons}>
            <a href="/azure" className={styles.primaryButton}>Going to Azure</a>
            <a href="/accelerate-azure" className={styles.secondaryButton}>Accelerate with Azure</a>
          </div>
        </main>
      </div>

      {/* Cloud Services Section */}
      <CloudServicesSection />

      {/* Existing Blog Section */}
      <HomeLowerSection />

      {/* Home Partner Section */}
      <HomePartner />
      {/*
      <div className={styles.container}>
        {blogs?.length > 0 && <h2>WebDevMania&apos;s Blog Website</h2>}
        <div className={styles.wrapper}>
          {blogs?.length > 0 
            ? blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              )) 
            : <h3 className={styles.noBlogs}>No blogs are currently in the</h3>
          }
        </div>
      </div>
      */}
    </div>
  );
}
