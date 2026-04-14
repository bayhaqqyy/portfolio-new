import React from 'react';

const Training = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto bg-surface-container-low/20">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-secondary text-4xl">school</span>
            <h3 className="font-headline text-2xl font-bold">Training Diikuti</h3>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/15 flex justify-between items-center group hover:bg-surface-container-high transition-all">
              <div>
                <h5 className="font-headline font-bold text-sm">Advanced RH OpenShift Ops</h5>
                <p className="text-xs text-slate-500 font-label">Red Hat | 2023</p>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">check_circle</span>
            </div>
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/15 flex justify-between items-center group hover:bg-surface-container-high transition-all">
              <div>
                <h5 className="font-headline font-bold text-sm">DevOps Engineering Bootcamp</h5>
                <p className="text-xs text-slate-500 font-label">CloudNative Found. | 2022</p>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-primary transition-colors">check_circle</span>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-8">
            <span className="material-symbols-outlined text-primary text-4xl">campaign</span>
            <h3 className="font-headline text-2xl font-bold">Training Diajarkan</h3>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/15 flex justify-between items-center group hover:bg-surface-container-high transition-all">
              <div>
                <h5 className="font-headline font-bold text-sm">Linux Essentials for Devs</h5>
                <p className="text-xs text-slate-500 font-label">Corporate In-house | 24 Participants</p>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-secondary transition-colors">groups</span>
            </div>
            <div className="p-6 bg-surface-container rounded-2xl border border-outline-variant/15 flex justify-between items-center group hover:bg-surface-container-high transition-all">
              <div>
                <h5 className="font-headline font-bold text-sm">Intro to Containerization</h5>
                <p className="text-xs text-slate-500 font-label">Local Tech Community | 50+ Participants</p>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-secondary transition-colors">groups</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;
