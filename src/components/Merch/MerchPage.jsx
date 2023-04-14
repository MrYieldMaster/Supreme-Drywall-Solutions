import React from 'react';
import styles from './MerchPage.module.css';

const MerchPage = () => {
    return (
      <div className={styles.merchPage}>
        <section className={styles.hero}>
          <h1>Taper's Merchandice</h1>
          <p>Discover our exclusive range of clothing and accessories</p>
        </section>
  
        <section className={styles.featuredItems}>
          <h2>Featured Items</h2>
          <div className={styles.itemGrid}>
            {/* Replace these placeholders with real merchandise items later */}
            <div className={styles.item}>PlaceHolder Item 1</div>
            <div className={styles.item}>Placeholder Item 2</div>
            <div className={styles.item}>Placeholder Item 3</div>
          </div>
        </section>
  
        <section className={styles.categories}>
          <h2>Categories</h2>
          <ul className={styles.categoryList}>
            <li>Shirts</li>
            <li>Hoodies</li>
            <li>Accessories</li>
          </ul>
        </section>
  
        <section className={styles.subscribe}>
          <h2>COMING SOON</h2>
          <p>Subscribe to our mailing list for the latest releases and offers</p>
          <form>
            <input type="email" placeholder="Your email address" />
            <button type="submit">Subscribe</button>
          </form>
            
        </section>
      </div>
    );
  };
  
  export default MerchPage;