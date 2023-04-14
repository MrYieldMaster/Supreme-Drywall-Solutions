import React, { useState, useEffect } from 'react'; 
import styles from './slideshow.module.css';
import Image11 from '../../assets/images/Image11.png'; 
import Image12 from '../../assets/images/Image12.jpg';
import Image13 from '../../assets/images/Image13.jpg';
import Image14 from '../../assets/images/hero.jpg';
import Image15 from '../../assets/images/Image15.jpg';
import Image16 from '../../assets/images/Image16.jpg';
import Image17 from '../../assets/images/Image17.jpg';
import Image18 from '../../assets/images/Image18.jpg';
import Image19 from '../../assets/images/Image19.jpg';
import Image20 from '../../assets/images/Image20.jpg';

const Slideshow = () => {
  const images = [
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
  ]; // Create an array with imported images

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((currentImageIndex) => currentImageIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slideshow}>
      <img
        src={images[currentImageIndex % images.length]} // Use the "images" array instead "images" variable declared above
        alt={`Project ${currentImageIndex + 1}`} // Use backticks instead of single quotes to interpolate variables
      />
    </div>
  );
};

export default Slideshow;

