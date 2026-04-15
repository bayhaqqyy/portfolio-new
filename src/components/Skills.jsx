import React from 'react';

const Skills = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto bg-surface-container-low/30" id="skills">
      <div className="text-center mb-16">
        <h2 className="font-headline text-3xl sm:text-4xl font-black mb-4">Tech Infrastructure Stack</h2>
        <p className="font-label text-slate-400">Core competencies in modern systems engineering</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full">
        {/* Main Skill Card */}
        <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-surface-container-highest to-surface p-5 sm:p-8 rounded-3xl border border-primary/20 flex flex-col justify-between relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50 transition-all duration-300">
          <div className="absolute -right-12 -top-12 w-48 h-48 bg-primary/5 blur-3xl rounded-full transition-all group-hover:scale-150"></div>
          <div>
            <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-xl">
              <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
            </div>
            <h3 className="font-headline text-2xl font-bold mb-4">Platform &amp; Container</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant font-label text-xs text-on-surface">OpenShift</span>
              <span className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant font-label text-xs text-on-surface">Kubernetes</span>
              <span className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant font-label text-xs text-on-surface">Docker</span>
              <span className="px-4 py-2 bg-surface-container rounded-lg border border-outline-variant font-label text-xs text-on-surface">Podman</span>
            </div>
          </div>
          <p className="mt-8 text-on-surface-variant text-sm leading-relaxed">
            Expertise in managing enterprise-grade Kubernetes distros, implementing CI/CD pipelines, and microservices lifecycle management.
          </p>
        </div>
        {/* Network Card */}
        <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 hover:shadow-xl hover:border-secondary/30 transition-all duration-300 cursor-default">
          <span className="material-symbols-outlined text-secondary text-2xl mb-4">router</span>
          <h4 className="font-headline font-bold mb-2">Network</h4>
          <p className="text-xs text-on-surface-variant font-label">VLAN, Load Balancing, Firewall Policy</p>
        </div>
        {/* Automation Card */}
        <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 hover:shadow-xl hover:border-cyan-400/30 transition-all duration-300 cursor-default">
          <span className="material-symbols-outlined text-cyan-400 text-2xl mb-4">settings_suggest</span>
          <h4 className="font-headline font-bold mb-2">Automation</h4>
          <p className="text-xs text-on-surface-variant font-label">Ansible, Terraform, Bash Scripting, Python</p>
        </div>
        {/* OS Card */}
        <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 hover:shadow-xl hover:border-violet-400/30 transition-all duration-300 cursor-default">
          <span className="material-symbols-outlined text-violet-400 text-2xl mb-4">terminal</span>
          <h4 className="font-headline font-bold mb-2">OS</h4>
          <p className="text-xs text-on-surface-variant font-label">RHEL, CentOS, Ubuntu, Debian Core</p>
        </div>
        {/* Monitoring Card */}
        <div className="bg-surface-container-high p-6 rounded-3xl border border-outline-variant/10 hover:-translate-y-2 hover:shadow-xl hover:border-primary/30 transition-all duration-300 cursor-default">
          <span className="material-symbols-outlined text-primary text-2xl mb-4">monitoring</span>
          <h4 className="font-headline font-bold mb-2">Monitoring</h4>
          <p className="text-xs text-on-surface-variant font-label">Prometheus, Grafana, ELK Stack, Zabbix</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
