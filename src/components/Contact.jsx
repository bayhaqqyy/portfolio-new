import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="contact">
      <div className="grid md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-headline text-5xl font-black mb-8 leading-tight">Ready to optimize your <span className="text-primary italic">Infrastructure?</span></h2>
          <p className="text-on-surface-variant text-lg mb-12">I'm currently open to consultations for architecture reviews, system migrations, or enterprise training sessions.</p>
          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <div className="text-xs font-label text-slate-500">EMAIL ME</div>
                <div className="font-headline font-bold">hi@rafli.dev</div>
              </div>
            </div>
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 bg-surface-container-highest rounded-xl flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <div className="text-xs font-label text-slate-500">LOCATION</div>
                <div className="font-headline font-bold">Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-surface-container/40 backdrop-blur-xl p-8 rounded-3xl border border-outline-variant/20 shadow-2xl">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-slate-400 px-1">NAME</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface" placeholder="John Doe" type="text" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-label font-bold text-slate-400 px-1">EMAIL</label>
                <input className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface" placeholder="john@example.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label font-bold text-slate-400 px-1">SUBJECT</label>
              <select className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface appearance-none">
                <option>Infrastructure Consulting</option>
                <option>Training Inquiry</option>
                <option>Employment Opportunity</option>
                <option>Others</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-label font-bold text-slate-400 px-1">MESSAGE</label>
              <textarea className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all outline-none text-on-surface resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
            </div>
            <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-headline font-black rounded-xl hover:scale-[0.98] transition-all shadow-[0_10px_20px_rgba(70,241,197,0.1)]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
