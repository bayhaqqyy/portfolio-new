import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 px-8 overflow-hidden">
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-24 w-96 h-96 bg-secondary-container/20 blur-[120px] rounded-full"></div>
      <div className="relative group mb-8">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full animate-pulse blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
        <div className="relative w-48 h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-violet-500 overflow-hidden shadow-2xl">
          <img 
            alt="RAFLI" 
            className="w-full h-full object-cover rounded-full bg-surface" 
            src="/my-avatar.jpg" 
          />
        </div>
      </div>
      <h1 className="font-headline text-5xl md:text-8xl font-black tracking-tighter text-center mb-4">
        <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">RAFLI</span>
      </h1>
      <div className="font-label text-lg md:text-2xl text-primary mb-12 h-8 flex items-center gap-2">
        <span className="material-symbols-outlined text-cyan-400">terminal</span>
        <span>System Engineer</span>
        <span className="w-3 h-8 bg-cyan-400 animate-pulse"></span>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <button className="group relative px-8 py-4 bg-gradient-to-br from-primary to-primary-container rounded-xl font-headline font-bold text-on-primary-container flex items-center gap-3 overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(70,241,197,0.2)]">
          <span>Lihat Sertifikasi</span>
          <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">arrow_forward</span>
        </button>
        <button className="px-8 py-4 bg-transparent border border-outline-variant rounded-xl font-headline font-bold text-on-surface flex items-center gap-3 hover:bg-surface-container-low transition-all active:scale-95">
          <span className="material-symbols-outlined text-xl">download</span>
          <span>Download Resume</span>
        </button>
      </div>
    </section>
  );
};

export default Hero;
