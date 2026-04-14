import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cursor from './components/Cursor';
import About from './components/About';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Training from './components/Training';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Cursor />
      <Navbar />

      <main className="relative">
        <div className="absolute inset-0 dot-grid pointer-events-none"></div>
        
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Experience />
        <Training />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
