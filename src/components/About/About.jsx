import React from 'react';
import styles from './About.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faBuilding, faTrophy, faHandshake, faGlobe, faBullseye, faLightbulb } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <div className={styles.about}>
      <header className={styles.header}>
        <h1>About Our Business</h1>
      </header>
      
      <section className={styles.introduction}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faBullseye} className={styles.icon} />
        </div>
        <div className={styles.missionVision}>
          <h2>Our Mission and Vision</h2>
          <p>
            <strong>Mission:</strong> To provide exceptional drywall finishing services for businesses and individuals, using innovative techniques and the highest quality materials. We are dedicated to driving success through exceptional customer service, unparalleled expertise, and continuous improvement.
          </p>
          <p>
            <strong>Vision:</strong> To become the leading provider of drywall finishing services, setting the industry standard in quality and performance, while fostering a culture of collaboration, growth, and sustainability.
          </p>
        </div>
      </section>
      
      <section className={styles.history}>
        <h2>Our History and Milestones</h2>
        <ul className={styles.milestoneList}>
          <li>
            <FontAwesomeIcon icon={faRocket} />
            [2018]: Started Supreme Drywall Solutions, offering professional drywall finishing services for residential and commercial clients.
          </li>
          <li>
            <FontAwesomeIcon icon={faBuilding} />
            [2020]: Expanded our team and relocated to a state-of-the-art facility, enabling us to better serve our growing clientele.
          </li>
          <li>
            <FontAwesomeIcon icon={faTrophy} />
            [2021]: Received prestigious industry awards, including the [AWARD NAME], recognizing our commitment to excellence and innovation in drywall finishing.
          </li>
          <li>
            <FontAwesomeIcon icon={faHandshake} />
            [2022]: Established strategic partnerships with industry leaders, expanding our reach and enhancing our capabilities.
          </li>
          <li>
            <FontAwesomeIcon icon={faGlobe} />
            [2023]: Surpassed a significant milestone, serving over [1000] clients across [2] countries, cementing our reputation as a trusted and reliable partner in drywall finishing.
          </li>
        </ul>
      </section>
      
      <section className={styles.testimonials}>
        <h2>What People Say About Us</h2>
        <blockquote>
          "Working with Supreme Drywall Solutions has been a mind-blowing experience. Their expertise, dedication, and innovative solutions have transformed our home, achieving impressive results with their drywall finishing work. We couldn't be happier with our decision to choose them for our home remodel. Now we can confidently have our family and friends over. Thank you, SDS! We will be using you again in the future."
        </blockquote>
      </section>
      
      <section className={styles.cta}>
        <div className={styles.iconWrapper}>
          <FontAwesomeIcon icon={faLightbulb} className={styles.icon} />
        </div>
        <div className={styles.readyToLearn}>
          <h2>Ready to Learn More?</h2>
          <p>
            Discover the difference that Supreme Drywall Solutions can make in your home. Explore our range of services, check out our case studies, or get in touch with our team of experts to discuss your unique needs. Let us help you unlock your full potential and achieve remarkable home designs with our drywall finishing expertise.
          </p>
          <button className={styles.contactButton}>Contact Us Today!</button>
        </div>
      </section>
    </div>
  );
};

export default About;
