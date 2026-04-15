import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Certifications from '../components/Certifications';
import Experience from '../components/Experience';
import Training from '../components/Training';
import Contact from '../components/Contact';

const HomePage = () => {
  return (
    <>
      <div className="absolute inset-0 dot-grid pointer-events-none"></div>
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Training />
      <Contact />
    </>
  );
};

export default HomePage;
