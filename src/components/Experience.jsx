import React from 'react';

const Experience = () => {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-black mb-4">Professional Journey</h2>
        <p className="font-label text-slate-400">Experience through the infrastructure timeline</p>
      </div>
      <div className="relative border-l border-outline-variant/30 pl-8 ml-4">
        {/* Item 1 (Current) */}
        <div className="mb-12 relative">
          <div className="absolute -left-[41px] top-1">
            <div className="w-5 h-5 rounded-full bg-primary animate-ping opacity-20 absolute"></div>
            <div className="w-5 h-5 rounded-full bg-primary border-4 border-background relative z-10"></div>
          </div>
          <div className="font-label text-xs text-primary mb-2 uppercase tracking-widest">2021 — PRESENT</div>
          <h4 className="font-headline text-xl font-bold">Senior System Engineer</h4>
          <p className="text-on-surface-variant font-medium mb-4">PT. XYZ Technology</p>
          <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-inside">
            <li>Leading the transition from legacy VMs to OpenShift-based microservices architecture.</li>
            <li>Implemented automated disaster recovery protocols reducing RTO by 60%.</li>
            <li>Managing high-availability Redis and PostgreSQL clusters for finance clients.</li>
          </ul>
        </div>
        {/* Item 2 */}
        <div className="mb-12 relative">
          <div className="absolute -left-[41px] top-1">
            <div className="w-5 h-5 rounded-full bg-outline-variant border-4 border-background relative z-10"></div>
          </div>
          <div className="font-label text-xs text-slate-500 mb-2 uppercase tracking-widest">2018 — 2021</div>
          <h4 className="font-headline text-xl font-bold">Infrastructure Administrator</h4>
          <p className="text-on-surface-variant font-medium mb-4">DataCore Solutions</p>
          <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-inside">
            <li>Managed multi-site Linux server deployments across 3 regions.</li>
            <li>Designed and deployed network monitoring solutions using Prometheus &amp; Grafana.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
