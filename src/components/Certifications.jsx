import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const certsData = [
  {
    id: 'rhce',
    title: 'RHCE',
    subtitle: 'Red Hat Certified Engineer',
    category: 'Linux',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbuSQF7cKMEDinEF5AfCy_R6yuoFkCae8YkTHtGCogoDU_y1cNncpNQeL1esoseVfQ2hgTEiAyPqmFa4FnhEuPZ8i6iJCrgEh9FQMlTKiGucfSd6hJxm_kfhM1f3gYGLMfCDLMq8qqJyw_Z8BKnvJ2I8Yjx2YkU7LMRwLeMdtwoEvEsGbEMeD97pGOt0rWyCKvigFPgEQMjMpEr1gui-nxblTZuu5EVDdbOH87bc9XsGAY3A4Vr_txnG8ZaanVxFZ9SQ61B-3ieQZ',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary hover:text-on-primary',
    bgOverlay: 'bg-primary/5',
    link: 'https://www.credly.com/'
  },
  {
    id: 'rhcoa',
    title: 'RHCOA',
    subtitle: 'Red Hat Certified OpenShift Administrator',
    category: 'Cloud',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLi5dlVZexAjmpWy397xS0_LR45AV-2Nm6vCguYBff0nDIUX9SzitQ8waZ0gyMc8ebSTlRN9ESwqdg4IocNFJJt3W7v4OU7gw-IENdv2b7bwPl0ejCjsTnkcfiGw6XpotWsc1QulWAachi3cLDJF4DroU62jnmTXXgyX7-kW1m6_ErUKZM6nAVaskqhPps9nDgdhg8NmscRECFqrEY-M18mSvtNpE9zhgA-MttF4H-VijKXopz24-c2ljiiRRxEYAIckU9hV9Mvur-',
    hoverBorder: 'hover:border-secondary/50',
    hoverBg: 'hover:bg-secondary hover:text-on-secondary',
    bgOverlay: 'bg-secondary/5',
    link: 'https://www.credly.com/'
  },
  {
    id: 'mtcre',
    title: 'MTCRE',
    subtitle: 'MikroTik Certified Routing Engineer',
    category: 'Network',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCNyE8lu2WU3cRHC4giDKJJip94AKuqrfD5Ncr6bIRSntPBurSmE2pWvBk_kvAs0iDP9cGHfaP7P2huy3Tm3lda7WwQWWl9KHlMz1bqd74TPFwRGjq7eBXRymO0D-ccUPPf1rEc0DQMmF0FdDrPnFBCkHUju_d9V4vv6KiW-daveJ2yPsae_f-UogNdphVCY-lLPXb5-5P-dc2arTqWFV2bPwt4ykzvuDmZk2fGft3HH42fVnQY-eJJUQYnfVzeFAVNe3pgFRemdn-',
    hoverBorder: 'hover:border-cyan-400/50',
    hoverBg: 'hover:bg-cyan-400 hover:text-slate-950',
    bgOverlay: 'bg-cyan-400/5',
    link: 'https://mikrotik.com/training/'
  },
  {
    id: 'rhcsa',
    title: 'RHCSA',
    subtitle: 'Red Hat Certified System Administrator',
    category: 'Linux',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrbuSQF7cKMEDinEF5AfCy_R6yuoFkCae8YkTHtGCogoDU_y1cNncpNQeL1esoseVfQ2hgTEiAyPqmFa4FnhEuPZ8i6iJCrgEh9FQMlTKiGucfSd6hJxm_kfhM1f3gYGLMfCDLMq8qqJyw_Z8BKnvJ2I8Yjx2YkU7LMRwLeMdtwoEvEsGbEMeD97pGOt0rWyCKvigFPgEQMjMpEr1gui-nxblTZuu5EVDdbOH87bc9XsGAY3A4Vr_txnG8ZaanVxFZ9SQ61B-3ieQZ',
    hoverBorder: 'hover:border-primary/50',
    hoverBg: 'hover:bg-primary hover:text-on-primary',
    bgOverlay: 'bg-primary/5',
    link: 'https://www.credly.com/'
  },
  {
    id: 'alibaba',
    title: 'ACA',
    subtitle: 'Alibaba Cloud Certified Associate Database',
    category: 'Cloud',
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLi5dlVZexAjmpWy397xS0_LR45AV-2Nm6vCguYBff0nDIUX9SzitQ8waZ0gyMc8ebSTlRN9ESwqdg4IocNFJJt3W7v4OU7gw-IENdv2b7bwPl0ejCjsTnkcfiGw6XpotWsc1QulWAachi3cLDJF4DroU62jnmTXXgyX7-kW1m6_ErUKZM6nAVaskqhPps9nDgdhg8NmscRECFqrEY-M18mSvtNpE9zhgA-MttF4H-VijKXopz24-c2ljiiRRxEYAIckU9hV9Mvur-',
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
    imgSrc: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCNyE8lu2WU3cRHC4giDKJJip94AKuqrfD5Ncr6bIRSntPBurSmE2pWvBk_kvAs0iDP9cGHfaP7P2huy3Tm3lda7WwQWWl9KHlMz1bqd74TPFwRGjq7eBXRymO0D-ccUPPf1rEc0DQMmF0FdDrPnFBCkHUju_d9V4vv6KiW-daveJ2yPsae_f-UogNdphVCY-lLPXb5-5P-dc2arTqWFV2bPwt4ykzvuDmZk2fGft3HH42fVnQY-eJJUQYnfVzeFAVNe3pgFRemdn-',
    hoverBorder: 'hover:border-cyan-400/50',
    hoverBg: 'hover:bg-cyan-400 hover:text-slate-950',
    bgOverlay: 'bg-cyan-400/5',
    link: 'https://mikrotik.com/training/'
  }
];

const Certifications = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const categories = ['All', 'Cloud', 'Linux', 'Network'];

  const filteredCerts = certsData.filter(cert => activeFilter === 'All' || cert.category === activeFilter);

  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="certs">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline text-4xl font-black mb-4">Professional Certifications</h2>
          <p className="font-label text-slate-400">Validated industry expertise and proficiency</p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-lg font-label text-xs font-bold transition-all ${
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
              <div className="h-32 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
                <img alt={cert.title} className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" src={cert.imgSrc} />
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
