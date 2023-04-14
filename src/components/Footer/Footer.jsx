import React from 'react';
import styles from './footer.module.css';
import 'font-awesome/css/font-awesome.min.css'


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <h4>Keep Up to-date </h4>
        <p>Sign up for our newsletter to receive updates on our services and promotions.</p>
        <button className={styles.button}>Discounts</button>
        <p>
          Supreme Drywall Solutions,  <br />
          1234 Main St, Suite 100 <br />
          Bay Area, CA 95370 ext
          <i className="fa fa-map-marker" aria-hidden="true"></i>
        </p>
        <p>
          
          Email: ContactUs@supremefinishers.com <br />
        
          Phone: (209) 328-3905 or (531) 625-4918 <br />
        </p>
      </div>
      <div className={styles.links}>
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="Home">Home</a>
            <i className="fa fa-home" aria-hidden="true"></i>
          </li>
          <li>
            <a href="About">About</a>
            <i className="fa fa-address-card" aria-hidden="true"></i>
          </li>
          <li>
            <a href="Gallery">Services</a>
            <i className="fa fa-picture-o" aria-hidden="true"></i>
          </li>
          <li>
            <a href="ContactUs">Contact</a>
            <i className="fa fa-envelope" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
      <div className={styles.social}>
        <h4>Follow Us</h4>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
          <i className="fa fa-facebook-square" aria-hidden="true"></i> Facebook
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className={styles.socialLink}>
          <i className="fa fa-instagram" aria-hidden="true"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/in/supreme-drywall-solutions" target="_blank" rel="noreferrer" className={styles.socialLink}>
          <i className="fa fa-linkedin-square" aria-hidden="true"></i> LinkedIn
        </a>
      </div>
      <div className={styles.copy}>
        <p>&copy; {new Date().getFullYear()} Supreme Drywall Solutions, Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
