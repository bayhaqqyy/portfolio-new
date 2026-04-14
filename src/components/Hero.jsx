import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const roles = ['System Engineer', 'Platform Engineer', 'DevOps Engineer'];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentRole = roles[roleIndex];
    
    if (isDeleting) {
      if (text === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        timer = setTimeout(() => setText(currentRole.substring(0, text.length - 1)), 50);
      }
    } else {
      if (text === currentRole) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else {
        timer = setTimeout(() => setText(currentRole.substring(0, text.length + 1)), 100);
      }
    }
    return () => clearTimeout(timer);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary-container/20 blur-[120px] rounded-full"></div>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative group mb-8"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-pulse blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-violet-500 overflow-hidden shadow-2xl">
          <img 
            alt="RAFLI ABDUL BAY HAQQY" 
            className="w-full h-full object-cover rounded-full bg-surface" 
            src="/my-avatar.jpg" 
          />
        </div>
      </motion.div>
      <motion.h1 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-center mb-4"
      >
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">RAFLI ABDUL BAY HAQQY</span>
      </motion.h1>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="font-label text-lg md:text-2xl text-primary mb-12 h-8 flex items-center gap-2"
      >
        <span className="material-symbols-outlined text-cyan-400">terminal</span>
        <div className="relative flex items-center h-full">
          <span>{text}</span>
        </div>
        <span className="w-3 h-8 bg-cyan-400 animate-pulse"></span>
      </motion.div>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex flex-col md:flex-row gap-6"
      >
        <button className="group relative px-8 py-4 bg-gradient-to-br from-primary to-primary-container rounded-xl font-headline font-bold text-on-primary-container flex items-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(70,241,197,0.2)]">
          <span>Lihat Sertifikasi</span>
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <a href="/resume.pdf" download="Resume_Rafli_Abdul_Bayhaqqy.pdf" className="px-8 py-4 bg-transparent border border-outline-variant rounded-xl font-headline font-bold text-on-surface flex items-center gap-3 hover:bg-surface-container-low transition-all active:scale-95">
          <span className="material-symbols-outlined text-xl">download</span>
          <span>Download Resume</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
