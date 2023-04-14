import React from 'react';
import styles from './navbar.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo1.png'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.navbarLogo}>
        <img src={logo} alt="SDS Logo" className={styles.logo} />
      </Link>
      <ul className={styles.navbarItems}>
        <li className={styles.navbarItem}>
          <Link to="/about" className={styles.navbarLink}>About</Link>
        </li>
        <li className={styles.navbarItem}>
        <Link to="/merch" className={styles.navbarLink}>Merch</Link>
        </li>
        <li className={styles.navbarItem}>
          <a href="#contactus" className={styles.navbarLink}>Contact Us</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;