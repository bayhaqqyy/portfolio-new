import React from 'react';

const experiences = [
  {
    id: 1,
    role: "Software and Infrastructure Engineer",
    company: "PT. Ivatama Technology",
    period: "Sep 2025 — Sekarang",
    current: true,
    responsibilities: [
      "Melakukan maintenance dan upgrade berkala pada cluster Red Hat OpenShift Container Platform (RHOCP) untuk memastikan stabilitas, keamanan, dan performa sistem.",
      "Menyusun laporan Preventive Maintenance (PM) dan Corrective Maintenance (CM).",
      "Melakukan installasi dan konfigurasi cluster OpenShift Container Platform (OCP) serta ACM.",
      "Melakukan maintenance dan pengelolaan platform GitOps, Google Kubernetes Engine (GKE), serta Advanced Cluster Management (ACM)."
    ]
  },
  {
    id: 2,
    role: "Software and Infrastructure Engineer",
    company: "PT. Mitra Inti Bersama",
    period: "Jun 2025 — Sep 2025",
    current: false,
    responsibilities: [
      "Melakukan maintenance dan upgrade pada cluster OpenShift (RHOCP) secara berkala.",
      "Membuat laporan Preventive dan Corrective Maintenance (PM & CM) untuk kebutuhan client.",
      "Maintenance dan upgrade OS RHEL, termasuk patching dan troubleshooting sistem.",
      "Menangani L2 support untuk infrastruktur jaringan, khususnya F5 dan Fortigate."
    ]
  },
  {
    id: 3,
    role: "Sysadmin & Assistant Trainer",
    company: "PT. Integrasi Data Nusantara",
    period: "Jul 2024 — Jun 2025",
    current: false,
    responsibilities: [
      "Menjadi assistant trainer untuk kelas Kubernetes, DevOps, Linux Sysadmin, VMware, dan Proxmox.",
      "Mengelola armada Server IDN untuk instalasi, maintenance, dan migrasi server.",
      "Menangani project freelance untuk instalasi dan troubleshooting server.",
      "Menjadi trainer pada berbagai bootcamp dan event IDN."
    ]
  },
  {
    id: 4,
    role: "DevOps Internship",
    company: "PT. Solusi Teknologi Nusantara",
    period: "Okt 2023 — Apr 2024",
    current: false,
    responsibilities: [
      "Menerapkan pipeline CI/CD otomatis menggunakan GitLab.",
      "Memantau dan melakukan troubleshooting server menggunakan Prometheus dan Grafana.",
      "Menerapkan Docker untuk deployment perangkat lunak berbasis kontainer.",
      "Menganalisis kode dan menyusun laporan tinjauan teknis untuk pengembangan perangkat lunak."
    ]
  }
];

const Experience = () => {
  return (
    <section className="py-24 px-8 max-w-4xl mx-auto" id="experience">
      <div className="text-center mb-16">
        <h2 className="font-headline text-4xl font-black mb-4">Professional Experience</h2>
        <p className="font-label text-slate-400">Jejak karir dan pengalaman di bidang infrastruktur</p>
      </div>
      <div className="relative border-l border-outline-variant/30 pl-8 ml-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="mb-12 relative group">
            <div className="absolute -left-[41px] top-1">
              {exp.current && (
                <div className="w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-20 absolute"></div>
              )}
              <div className={`w-5 h-5 rounded-full border-4 border-background relative z-10 transition-colors ${exp.current ? 'bg-cyan-400' : 'bg-outline-variant group-hover:bg-cyan-400/50'}`}></div>
            </div>
            <div className={`font-label text-xs mb-2 uppercase tracking-widest ${exp.current ? 'text-cyan-400' : 'text-slate-500'}`}>{exp.period}</div>
            <h4 className="font-headline text-xl font-bold">{exp.role}</h4>
            <p className="text-on-surface-variant font-medium mb-4">{exp.company}</p>
            <ul className="space-y-2 text-sm text-slate-400 leading-relaxed list-disc list-outside ml-4 marker:text-cyan-400/50">
              {exp.responsibilities.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
