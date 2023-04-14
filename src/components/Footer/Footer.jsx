import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>Keep Up to-date </h4>
        <p>
          Supreme Drywall Solutions, Inc. <br />
          1234 Main St, Suite 100 <br />
          Bay Area, CA 95370=ext
        </p>
        <p>
          Email: SupremeDrywall@Gmail.com <br />
          Phone: (209) 328-3905
        </p>
      </div>
      <div className={styles.links}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="Home">Home</a>
          </li>
          <li>
            <a href="About">About</a>
          </li>
          <li>
            <a href="Gallery">Services</a>
          </li>
          <li>
            <a href="ContactUs">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
          Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
          Instagram
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Supreme Drywall Solutions, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
