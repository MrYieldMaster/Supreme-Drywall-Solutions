import React from 'react';
import styles from './hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Supreme Drywall Solutions</h1>
        <p className={styles.heroSubtitle}>Quality drywall services for your home</p>
        <a href="https://example.com" target="_blank" rel="noopener noreferrer">
        <button className={styles.ctaButton}>Get an Estimate</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
