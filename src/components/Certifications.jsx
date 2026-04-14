import React from 'react';

const Certifications = () => {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto" id="certs">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h2 className="font-headline text-4xl font-black mb-4">Professional Certifications</h2>
          <p className="font-label text-slate-400">Validated industry expertise and proficiency</p>
        </div>
        <div className="flex gap-2 bg-surface-container-low p-1 rounded-xl border border-outline-variant/20">
          <button className="px-4 py-2 bg-primary-container text-on-primary-container rounded-lg font-label text-xs font-bold">All</button>
          <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface rounded-lg font-label text-xs font-bold transition-all">Cloud</button>
          <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface rounded-lg font-label text-xs font-bold transition-all">Linux</button>
          <button className="px-4 py-2 text-on-surface-variant hover:text-on-surface rounded-lg font-label text-xs font-bold transition-all">Network</button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cert Card 1 */}
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-primary/50 transition-all group">
          <div className="h-32 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
            <img alt="RHCSA" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Red Hat Certified System Administrator digital badge logo on a clean technical background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrbuSQF7cKMEDinEF5AfCy_R6yuoFkCae8YkTHtGCogoDU_y1cNncpNQeL1esoseVfQ2hgTEiAyPqmFa4FnhEuPZ8i6iJCrgEh9FQMlTKiGucfSd6hJxm_kfhM1f3gYGLMfCDLMq8qqJyw_Z8BKnvJ2I8Yjx2YkU7LMRwLeMdtwoEvEsGbEMeD97pGOt0rWyCKvigFPgEQMjMpEr1gui-nxblTZuu5EVDdbOH87bc9XsGAY3A4Vr_txnG8ZaanVxFZ9SQ61B-3ieQZ" />
            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="font-headline font-bold text-lg mb-1">RHCSA</h4>
          <p className="text-sm text-slate-500 mb-6 font-label">Red Hat Certified System Administrator</p>
          <button className="w-full py-3 bg-surface-container-highest rounded-xl font-headline font-bold text-xs flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all">
            Verify <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
        {/* Cert Card 2 */}
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-secondary/50 transition-all group">
          <div className="h-32 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
            <img alt="CKA" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Certified Kubernetes Administrator CKA digital certification badge in high resolution" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLi5dlVZexAjmpWy397xS0_LR45AV-2Nm6vCguYBff0nDIUX9SzitQ8waZ0gyMc8ebSTlRN9ESwqdg4IocNFJJt3W7v4OU7gw-IENdv2b7bwPl0ejCjsTnkcfiGw6XpotWsc1QulWAachi3cLDJF4DroU62jnmTXXgyX7-kW1m6_ErUKZM6nAVaskqhPps9nDgdhg8NmscRECFqrEY-M18mSvtNpE9zhgA-MttF4H-VijKXopz24-c2ljiiRRxEYAIckU9hV9Mvur-" />
            <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="font-headline font-bold text-lg mb-1">CKA</h4>
          <p className="text-sm text-slate-500 mb-6 font-label">Certified Kubernetes Administrator</p>
          <button className="w-full py-3 bg-surface-container-highest rounded-xl font-headline font-bold text-xs flex items-center justify-center gap-2 hover:bg-secondary hover:text-on-secondary transition-all">
            Verify <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
        {/* Cert Card 3 */}
        <div className="bg-surface-container p-6 rounded-3xl border border-outline-variant/20 hover:border-cyan-400/50 transition-all group">
          <div className="h-32 mb-6 bg-slate-900 rounded-2xl flex items-center justify-center p-6 overflow-hidden relative">
            <img alt="CCNA" className="h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500" data-alt="Cisco CCNA Networking certification badge representing mastery in networking fundamentals" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCNyE8lu2WU3cRHC4giDKJJip94AKuqrfD5Ncr6bIRSntPBurSmE2pWvBk_kvAs0iDP9cGHfaP7P2huy3Tm3lda7WwQWWl9KHlMz1bqd74TPFwRGjq7eBXRymO0D-ccUPPf1rEc0DQMmF0FdDrPnFBCkHUju_d9V4vv6KiW-daveJ2yPsae_f-UogNdphVCY-lLPXb5-5P-dc2arTqWFV2bPwt4ykzvuDmZk2fGft3HH42fVnQY-eJJUQYnfVzeFAVNe3pgFRemdn-" />
            <div className="absolute inset-0 bg-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <h4 className="font-headline font-bold text-lg mb-1">CCNA</h4>
          <p className="text-sm text-slate-500 mb-6 font-label">Cisco Certified Network Associate</p>
          <button className="w-full py-3 bg-surface-container-highest rounded-xl font-headline font-bold text-xs flex items-center justify-center gap-2 hover:bg-cyan-400 hover:text-slate-950 transition-all">
            Verify <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
