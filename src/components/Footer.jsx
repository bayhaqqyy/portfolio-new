import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 w-full py-12 border-t border-slate-800">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto">
        <div className="mb-6 md:mb-0">
          <div className="text-lg font-bold text-slate-200 font-headline mb-1">RAFLI</div>
          <div className="text-cyan-400 font-label text-xs">SYSTEM ENGINEER</div>
        </div>
        <div className="flex gap-8 mb-6 md:mb-0">
          <a className="text-slate-500 hover:text-cyan-400 transition-all font-label text-sm uppercase tracking-widest" href="https://linkedin.com/in/rafli" target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-all font-label text-sm uppercase tracking-widest" href="https://github.com/rafli" target="_blank" rel="noreferrer">GitHub</a>
          <a className="text-slate-500 hover:text-cyan-400 transition-all font-label text-sm uppercase tracking-widest" href="mailto:hi@rafli.dev">Email</a>
        </div>
        <div className="text-slate-500 font-label text-xs">
          © 2024 System Engineer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
