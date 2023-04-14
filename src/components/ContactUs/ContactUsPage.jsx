import React from "react";
import styles from "./ContactUsPage.module.css";
import 'font-awesome/css/font-awesome.min.css';

const ContactUsPage = () => {
    return (
      <div className={styles.contactUsPage}>
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Contact Us</h1>
        </div>
        <div className={styles.contactContent}>
          <h2>Get in Touch</h2>
          <p>
            For more information about our services, or to schedule a consultation, please contact us using the form below. We look forward to hearing from you!
          </p>
        </div>
        <div className={styles.contactOptions}>
        <h3>Contact Us on Discord and Telegram</h3>
        <div className={styles.discordTelegram}>
          <a href="https://discord.gg/your-discord-invite-link" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <i className="fa fa-discord" aria-hidden="true"></i> Join our Discord
          </a>
          <a href="https://t.me/your_telegram_group_link" target="_blank" rel="noreferrer" className={styles.socialLink}>
            <i className="fa fa-telegram" aria-hidden="true"></i> Join our Telegram
          </a>
        </div>
      </div>
        <div className={styles.addressHours}>
          <h2>Address &amp; Hours</h2>
          <p>
            Supreme Drywall Solutions, Inc. <br />
            1234 Main St, Suite 100 <br />
            Bay Area, CA 95370
          </p>
          <p>
            Monday - Friday: 6:00 AM - 5:00 PM <br />
            Saturday: 6:00 AM - 3:00 PM <br />
            Sunday: Closed
          </p>
        </div>
        <div className={styles.contactFormWrapper}>
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone</label>
              <input type="tel" name="phone" id="phone" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" />
            </div>
            <button type="submit" className={styles.button}>Send Message</button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactUsPage;