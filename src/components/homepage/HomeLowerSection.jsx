"use client";

import React from 'react';
import Image from 'next/image';
import styles from './HomeLowerSection.module.css';

const HomeLowerSection = () => {
  return (
    <section className={styles.homeLowerSection}>
      <h2 className={styles.title}>Achieve More With NativeCloud</h2>
      <div className={styles.servicesContainer}>
        <div className={styles.serviceItem}>
          <Image src="/icon-innovate.png" alt="Innovate Faster" width={89} height={67} />
          <h3>Innovate Faster</h3>
          <p>Decrease time to market and enable continuous delivery for mission-critical apps, products, and services.</p>
        </div>
        <div className={styles.serviceItem}>
          <Image src="/icon-tasks.png" alt="Automate Release Pipeline" width={80} height={67} />
          <h3>Automate Release Pipeline</h3>
          <p>Deliver innovative products and services to market quickly by automatically managing, monitoring, and provisioning AWS resources using IaC.</p>
        </div>
        <div className={styles.serviceItem}>
          <Image src="/icon-stability.png" alt="Improve Stability" width={89} height={67} />
          <h3>Improve Stability</h3>
          <p>Align your development and ops teams around a shared code base to identify problems early in the deployment process, and improve the resiliency and security of your apps.</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.button}>Let's get started</button>
      </div>
    </section>
  );
};

export default HomeLowerSection;
