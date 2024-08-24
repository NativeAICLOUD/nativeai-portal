import CloudServicesSection from "./components/partials/home/CloudServicesSection";
import HomeHeader from "./components/partials/home/Header";
import HomeLowerSection from "./components/partials/home/HomeLowerSection";
import HomePartner from "./components/partials/home/homepartner";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeHeader />

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
    </main>
  );
}
