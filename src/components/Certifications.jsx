import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certsData = [
  {
    id: 'rhce',
    title: 'RHCE',
    subtitle: 'Red Hat Certified Engineer',
    category: 'Linux',
    imgSrc: 'https://images.credly.com/size/680x680/images/19c4e804-54fe-4857-b022-7cfd5520596c/image.png',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary hover:text-on-primary',
    bgOverlay: 'bg-primary/5',
    link: 'https://www.credly.com/earner/earned/badge/f726c575-f2ac-400a-99f5-3fbedb3cb7a2'
  },
  {
    id: 'rhcoa',
    title: 'RHCOA',
    subtitle: 'Red Hat Certified OpenShift Administrator',
    category: 'Cloud',
    imgSrc: 'https://images.credly.com/size/680x680/images/b6cf67d4-0533-495b-acfe-9d08bb50bef1/image.png',
    hoverBorder: 'hover:border-secondary/50',
    hoverBg: 'hover:bg-secondary hover:text-on-secondary',
    bgOverlay: 'bg-secondary/5',
    link: 'https://www.credly.com/earner/earned/badge/cec6d468-e0e8-4c6a-b1ff-5366b8684408'
  },
  {
    id: 'mtcre',
    title: 'MTCRE',
    subtitle: 'MikroTik Certified Routing Engineer',
    category: 'Network',
    imgSrc: 'https://raw.githubusercontent.com/bayhaqqyy/bayhaqqyy.github.io/main/assets/images/14.png',
    hoverBorder: 'hover:border-cyan-400/50',
    hoverBg: 'hover:bg-cyan-400 hover:text-slate-950',
    bgOverlay: 'bg-cyan-400/5',
    link: 'https://mikrotik.com/training/certificates/c357779c8d350cdb33ed'
  },
  {
    id: 'rhcsa',
    title: 'RHCSA',
    subtitle: 'Red Hat Certified System Administrator',
    category: 'Linux',
    imgSrc: '/rhcsa.png',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary hover:text-on-primary',
    bgOverlay: 'bg-primary/5',
    link: 'https://www.credly.com/earner/earned/badge/0632e780-f927-4933-b934-68df93a83ed5'
  },
  {
    id: 'rhcsa',
    title: 'RHCSC',
    subtitle: 'Red Hat Certified Specialist in Containers',
    category: 'Linux',
    imgSrc: 'https://images.credly.com/size/220x220/images/272f17b3-2eb9-4e5f-aa3c-66c6b137fb27/image.png',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary hover:text-on-primary',
    bgOverlay: 'bg-primary/5',
    link: 'https://www.credly.com/earner/earned/share/52d47dbd-9c65-4288-a49c-a8c1fb2efd83'
  },
  {
    id: 'alibaba',
    title: 'ACA',
    subtitle: 'Alibaba Cloud Certified Associate Database',
    category: 'Cloud',
    imgSrc: 'https://images.credly.com/size/340x340/images/6b0485d5-fcdd-4bed-aec9-ca4e78263bd3/ACA-_Cloud_Computing_Certification.png',
    hoverBorder: 'hover:border-secondary/50',
    hoverBg: 'hover:bg-secondary hover:text-on-secondary',
    bgOverlay: 'bg-secondary/5',
    link: 'https://www.alibabacloud.com/certification/'
  },
  {
    id: 'mtcna',
    title: 'MTCNA',
    subtitle: 'MikroTik Certified Network Associate',
    category: 'Network',
    imgSrc: 'https://raw.githubusercontent.com/bayhaqqyy/bayhaqqyy.github.io/main/assets/images/13.png',
    hoverBorder: 'hover:border-cyan-400/50',
    hoverBg: 'hover:bg-cyan-400 hover:text-slate-950',
    bgOverlay: 'bg-cyan-400/5',
    link: 'https://mikrotik.com/training/certificates/c331463c535cc54134bd'
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Cloud', 'Linux', 'Network'];

  const filteredCerts = certsData.filter(cert => activeFilter === 'All' || cert.category === activeFilter);

  return (
    <section className="py-24 px-4 sm:px-8 max-w-7xl mx-auto" id="certs">
      <div className="flex flex-col md:flex-row justify-between items-stretch md:items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline text-4xl font-black mb-4">Professional Certifications</h2>
          <p className="font-label text-slate-400">Validated industry expertise and proficiency</p>
        </div>
        <div className="flex gap-2 overflow-x-auto bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`flex-shrink-0 px-4 py-2 rounded-lg font-label text-xs font-bold transition-all ${
                activeFilter === cat 
                  ? 'bg-primary-container text-on-primary-container' 
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <motion.div layout className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCerts.map((cert) => (
            <motion.div 
              layout
              key={cert.id}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-surface-container p-6 rounded-3xl border border-outline-variant/20 transition-all group ${cert.hoverBorder}`}
            >
              <div className="h-40 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center overflow-hidden relative p-2">
                <img alt={cert.title} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" src={cert.imgSrc} />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity ${cert.bgOverlay}`}></div>
              </div>
              <h4 className="font-headline font-bold text-lg mb-1">{cert.title}</h4>
              <p className="text-sm text-slate-500 mb-6 font-label">{cert.subtitle}</p>
              <a href={cert.link} target="_blank" rel="noreferrer" className={`w-full py-3 bg-surface-container-highest rounded-xl font-headline font-bold text-xs flex items-center justify-center gap-2 transition-all ${cert.hoverBg}`}>
                Verify <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Certifications;
