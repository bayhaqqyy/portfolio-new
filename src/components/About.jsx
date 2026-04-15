import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto" id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-surface-container/60 backdrop-blur-xl p-5 sm:p-8 rounded-3xl border border-outline-variant/15 shadow-2xl"
        >
          <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-primary rounded-full"></span>
            System Architecture &amp; Ops
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Specializing in high-availability systems, container orchestration, and automated infrastructure. I transform complex legacy environments into modern, scalable cloud-native architectures.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-surface-container-highest rounded-2xl">
              <div className="font-headline text-3xl font-black text-cyan-400">2+</div>
              <div className="font-label text-[10px] uppercase tracking-tighter text-slate-400">Years Exp</div>
            </div>
            <div className="text-center p-4 bg-surface-container-highest rounded-2xl">
              <div className="font-headline text-3xl font-black text-cyan-400">10+</div>
              <div className="font-label text-[10px] uppercase tracking-tighter text-slate-400">Certs</div>
            </div>
            <div className="text-center p-4 bg-surface-container-highest rounded-2xl">
              <div className="font-headline text-3xl font-black text-cyan-400">10+</div>
              <div className="font-label text-[10px] uppercase tracking-tighter text-slate-400">Training</div>
            </div>
          </div>
        </motion.div>

        {/* Currently Learning (Terminal Card) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-slate-950 rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl font-label text-sm"
        >
          <div className="bg-slate-900 px-4 py-3 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-slate-500 text-xs">learning_progress.yaml</span>
          </div>
          <div className="p-5 sm:p-6 text-cyan-400/90 leading-relaxed overflow-x-auto">
            <div className="mb-2"><span className="text-violet-400">status:</span> <span className="text-primary">"active_learning"</span></div>
            <div className="mb-2"><span className="text-violet-400">focus_areas:</span></div>
            <div className="pl-4 mb-1">- <span className="text-on-surface">Openshift</span></div>
            <div className="pl-8 text-slate-500">progress: [████████░░] 80%</div>
            <div className="pl-4 mb-1">- <span className="text-on-surface">Ansible</span></div>
            <div className="pl-8 text-slate-500">progress: [██████░░░░] 65%</div>
            <div className="pl-4 mb-1">- <span className="text-on-surface">GitOps with ArgoCD</span></div>
            <div className="pl-8 text-slate-500">progress: [███████░░░] 70%</div>
            <div className="mt-4 flex items-center">
              <span className="text-primary mr-2">➜</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
