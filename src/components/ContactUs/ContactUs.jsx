import React, {useRef} from 'react';
import styles from "./contactUs.module.css";
import emailjs from 'emailjs-com';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("sendEmail() called")

    emailjs.sendForm('service_mwj0sc2', 'template_hk2keeu', form.current, 'wdwgiMWOkl5muL-Cw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className={styles.contact}>
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.</p>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};


export default ContactUs;