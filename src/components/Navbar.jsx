import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/60 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="text-xl font-black tracking-tighter text-cyan-400 font-headline">SYS_ENGINEER_PORTFOLIO</div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href="#about">About</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href="#skills">Skills</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href="#certs">Certifications</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href="#experience">Experience</a>
          <a className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href="#contact">Contact</a>
          <a href="/resume.pdf" download="Resume_Rafli_Abdul_Bayhaqqy.pdf" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-headline font-bold text-sm hover:scale-95 duration-200 ease-in-out transition-all flex items-center justify-center">Resume</a>
        </div>
        <button className="md:hidden text-cyan-400">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
