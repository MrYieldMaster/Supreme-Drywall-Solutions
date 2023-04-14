import React from 'react';
import styles from "./contactUs.module.css";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to your backend)
  };

  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ContactUs;