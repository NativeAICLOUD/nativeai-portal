"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './CloudServicesSection.module.css';

const services = [
  { src: '/Cloud.png', title: 'Cloud Solutions & Services' },
  { src: '/Layer_1.png', title: 'Platform Development' },
  { src: '/Layer_2.png', title: 'SaaS app development' },
  { src: '/Layer_3.png', title: 'End-to-end business solutions' },
  { src: '/Layer_4.png', title: 'App modernization' },
  { src: '/Layer_5.png', title: 'Enterprise application development' },
  { src: '/Layer_6.png', title: 'Digital transformation services' },
  { src: '/DevOps.png', title: 'Cloud & DevOps' },
  { src: '/Layer_8.png', title: 'UI/UX design' },
  { src: '/Layer_9.png', title: 'Cloud Migrations' }
];

const CloudServicesSection = () => {
  const [description, setDescription] = useState([]);

  useEffect(() => {
    fetch('/description.json')
      .then(response => response.json())
      .then(data => setDescription(data.description));
  }, []);

  const topRowServices = services.slice(0, 5);
  const bottomRowServices = services.slice(5);

  return (
    <section className={styles.cloudServicesSection}>
      <div className={styles.descriptionSection}>
        {description.length > 0 && (
          <p className={styles.centeredText} dangerouslySetInnerHTML={{ __html: description[0] }} />
        )}
        {description.slice(1).map((text, index) => (
          <p key={index} className={styles.descriptionText} dangerouslySetInnerHTML={{ __html: text }} />
        ))}
      </div>
      <h2 className={styles.cloudDescription}>A Complete Range of End-to-End Azure and AWS Cloud Services</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.row}>
          {topRowServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={`${styles.iconWrapper} ${styles[`icon-${service.src.split('/').pop().split('.').shift()}`]}`}>
                <div className={styles.iconCircle}></div>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={service.src === '/Cloud.png' ? 93 : service.src === '/Layer_1.png' ? 95 : service.src === '/Layer_2.png' ? 89 : service.src === '/Layer_3.png' ? 89 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 88 : service.src === '/Layer_6.png' ? 101 : service.src === '/DevOps.png' ? 77 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 140 : 50}
                  height={service.src === '/Cloud.png' ? 68 : service.src === '/Layer_1.png' ? 90 : service.src === '/Layer_2.png' ? 81 : service.src === '/Layer_3.png' ? 67 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 89 : service.src === '/Layer_6.png' ? 79 : service.src === '/DevOps.png' ? 74 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 112 : 50}
                />
              </div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
        <div className={styles.row}>
          {bottomRowServices.map((service, index) => (
            <div key={index} className={styles.serviceItem}>
              <div className={`${styles.iconWrapper} ${styles[`icon-${service.src.split('/').pop().split('.').shift()}`]}`}>
                <div className={styles.iconCircle}></div>
                <Image
                  src={service.src}
                  alt={service.title}
                  width={service.src === '/Cloud.png' ? 93 : service.src === '/Layer_1.png' ? 95 : service.src === '/Layer_2.png' ? 89 : service.src === '/Layer_3.png' ? 89 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 88 : service.src === '/Layer_6.png' ? 101 : service.src === '/DevOps.png' ? 77 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 140 : 50}
                  height={service.src === '/Cloud.png' ? 68 : service.src === '/Layer_1.png' ? 90 : service.src === '/Layer_2.png' ? 81 : service.src === '/Layer_3.png' ? 67 : service.src === '/Layer_4.png' ? 77 : service.src === '/Layer_5.png' ? 89 : service.src === '/Layer_6.png' ? 79 : service.src === '/DevOps.png' ? 74 : service.src === '/Layer_8.png' ? 90 : service.src === '/Layer_9.png' ? 112 : 50}
                />
              </div>
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CloudServicesSection;
