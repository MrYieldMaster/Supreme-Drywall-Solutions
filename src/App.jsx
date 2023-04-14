import React from 'react';
import ThemeProvider from './contexts/ThemeProvider';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Slideshow from './components/Slideshow/Slideshow';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <ThemeProvider>
      <div>
        <Navbar  />
        <Hero />
        <About />
        <Slideshow />
        <ContactUs />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;


