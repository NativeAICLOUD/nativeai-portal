import React from 'react';
import Image from 'next/image';
import styles from './HomePartner.module.css';

const HomePartner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.greenSection}>
        <Image 
          src="/arrow-down-1.png" 
          alt="Arrow Down" 
          width={51} 
          height={55} 
          className={styles.arrowIcon} 
        />
        <div className={styles.optText}>
          Opt for a secure and scalable cloud solution
        </div>
        <div className={styles.buttonsContainer}>
          <a href="/azure" className={`${styles.button} ${styles.azure}`}>Going to Azure</a>
          <a href="/accelerate-azure" className={`${styles.button} ${styles.accelerateAzure}`}>Accelerate with Azure</a>
          <a href="/managed-services" className={`${styles.button} ${styles.managedServices}`}>Managed Services</a>
          <a href="/cloud-native" className={`${styles.button} ${styles.cloudNative}`}>Cloud Native Software Development</a>
          <a href="/generative-ai" className={`${styles.button} ${styles.generativeAI}`}>Generative AI</a>
          <a href="/data-lifecycle" className={`${styles.button} ${styles.dataLifecycle}`}>Data Lifecycle Management</a>
          <a href="/cloud-migrations" className={`${styles.button} ${styles.cloudMigrations}`}>Cloud Migrations</a>
          <a href="/solutions" className={`${styles.button} ${styles.solutions}`}>Solutions</a>
        </div>
        <div className={styles.getInTouch}>
          <div className={styles.circle}>
            <div className={styles.getInTouchText}>Get in touch!</div>
            <div className={styles.contactInfo}>
              Would you like to further discuss possibilities for your company? We love to help! You can reach us at info@nativecloud.com
            </div>
          </div>
        </div>
      </div>

      <div className={styles.partnershipSection}>
        <h2 className={styles.partnershipText}>Our level of partnership</h2>
        <div className={styles.partnershipLogos}>
          <Image 
            src="/microsoft-partner.png" 
            alt="Microsoft Partner" 
            width={300} 
            height={100} 
          />
          <Image 
            src="/aws-partner.png" 
            alt="AWS Partner" 
            width={200} 
            height={250} 
          />
        </div>
      </div>
    </div>
  );
};

export default HomePartner;
