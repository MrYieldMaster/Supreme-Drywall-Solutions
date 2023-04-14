import React from "react";
import styles from "./AboutPage.module.css";


const AboutPage = () => {
    return (
      <div className={styles.aboutPage}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>About Us</h1>
        </div>
        <div className={styles.aboutContent}>
          <h2>Our Mission and Vision</h2>
          <p>
            At Supreme Drywall Solutions, our mission is to empower homeowners and businesses by providing exceptional drywall finishing services tailored to their unique needs. We strive for success through exceptional customer service, unparalleled expertise, and continuous improvement. Our vision is to become the industry leader in drywall finishing, setting the standard for quality and performance, while fostering a culture of collaboration, growth, and sustainability.
          </p>
  
          <h2>Our Expertise in Drywall Finishing</h2>
          <p>
            Our highly skilled team of professionals is dedicated to providing top-notch drywall finishing services. We have years of experience in the industry and are well-versed in the latest techniques and technologies to ensure a flawless finish every time. Our services include:
          </p>
          <ul>
            <li>Taping and Mudding</li>
            <li>Skim Coating</li>
            <li>Texturing</li>
            <li>Custom Finishes</li>
            <li>Repairs and Patching</li>
          </ul>
  
          <h2>Why Choose Supreme Drywall Solutions</h2>
          <p>
            Our commitment to quality and customer satisfaction sets us apart from the competition. We take pride in our work, ensuring that every project is completed to the highest standards. When you choose Supreme Drywall Solutions for your drywall finishing needs, you can expect:
          </p>
          <ul>
            <li>Expert craftsmanship and attention to detail</li>
            <li>A dedicated team of professionals with years of industry experience</li>
            <li>Exceptional customer service and support</li>
            <li>Competitive pricing and transparent quotes</li>
            <li>Timely project completion with minimal disruption to your daily routine</li>
          </ul>
  
          <h2>Ready to Get Started?</h2>
          <p>
            Discover the difference that Supreme Drywall Solutions can make for your home or business. Explore our range of services, check out our portfolio, or get in touch with our team of experts to discuss your unique needs. Let us help you achieve remarkable drywall finishes that exceed your expectations. Contact us today!
          </p>
        </div>
      </div>
    );
  };
  
  export default AboutPage;