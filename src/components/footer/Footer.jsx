"use client";

import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.partners}>
        <Image src="/microsoft.png" alt="Microsoft Azure" width={273} height={39} />
        <Image src="/aws.png" alt="AWS" width={81} height={48} />
      </div>
      <hr className={styles.separator} />
      <div className={styles.content}>
        <div className={styles.section}>
          <h3>Solutions</h3>
          <ul>
            <li>Azure Cloudify</li>
            <li>Managed Services</li>
            <li>Cloud Native Software Development</li>
            <li>Data Lifecycle Management</li>
            <li>CSP Enterprise</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>Workshops</h3>
          <ul>
            <li>Azure Fundamentals for ISVs</li>
            <li>Azure Cost Management</li>
            <li>DevOps on Azure</li>
            <li>Azure Kubernetes Services (AKS)</li>
            <li>Application Insights</li>
            <li>Workshop Data & AI security</li>
          </ul>
        </div>
        <div className={styles.section}>
          <h3>About Native Cloud</h3>
          <ul>
            <li>Knowledge Base</li>
            <li>Certifications</li>
          </ul>
          <button className={styles.button}>Get in Touch</button>
        </div>
      </div>
      <div className={styles.newsletter}>
        <h3>Stay up to date by subscribing to our Newsletter!</h3>
        <div className={styles.newsletterForm}>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <button>Sign Up</button>
        </div>
        <label>
          <input type="checkbox" /> Accept native.cloud <a href="#">privacy policy</a>.
        </label>
      </div>
      <div className={styles.social}>
        <span>Follow us</span>
        <Image src="/icon-instagram.png" alt="Instagram" width={20} height={20} />
        <Image src="/icon-facebook.png" alt="Facebook" width={20} height={20} />
        <Image src="/icon-linkedin.png" alt="LinkedIn" width={20} height={20} />
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerInfo}>
          <p>NATIVE CLOUD © Copyright 2024 | <a href="#">Terms and Conditions</a> | <a href="#">Privacy statement</a></p>
        </div>
        <Image className={styles.logo} src="/logo-vertical.png" alt="Native Cloud" width={200} height={103} />
        <p className={styles.contactInfo}>+389 70 226 432 </p>
        <p className={styles.contactInfo1}> info@nativecloud.com </p>
      </div>
    </footer>
  );
};

export default Footer;
