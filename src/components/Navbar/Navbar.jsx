import React from 'react';
import styles from './navbar.module.css';
import logo from '../../assets/images/Logo1.png'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.navbarLogo}>
        <img src={logo} alt="SDS Logo" className={styles.logo} /> {/* Update this line */}
      </a>
      <ul className={styles.navbarItems}>
        <li className={styles.navbarItem}>
          <a href="#about" className={styles.navbarLink}>About</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#gallery" className={styles.navbarLink}>Gallery</a>
        </li>
        <li className={styles.navbarItem}>
          <a href="#contactus" className={styles.navbarLink}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;