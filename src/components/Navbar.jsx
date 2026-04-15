import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#certs', label: 'Certifications' },
  { href: '/#experience', label: 'Experience' },
  { href: '/#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog', isRoute: true }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
      <div className="flex justify-between items-center px-4 sm:px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" onClick={closeMenu} className="text-xl font-black tracking-tighter text-cyan-400 font-headline">Hello World</Link>
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => {
            const isActive = link.isRoute && location.pathname.startsWith(link.href);
            return link.isRoute ? (
              <Link key={link.href} className={`font-medium transition-colors duration-300 font-label text-sm uppercase tracking-wider ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-400 hover:text-cyan-300'}`} to={link.href}>{link.label}</Link>
            ) : (
              <a key={link.href} className="text-slate-400 font-medium hover:text-cyan-300 transition-colors duration-300 font-label text-sm uppercase tracking-wider" href={link.href}>{link.label}</a>
            );
          })}
          <a href="/resume.pdf" download="Resume_Rafli_Abdul_Bayhaqqy.pdf" className="bg-primary-container text-on-primary-container px-6 py-2 rounded-xl font-headline font-bold text-sm hover:scale-95 duration-200 ease-in-out transition-all flex items-center justify-center">Resume</a>
        </div>
        <button
          type="button"
          className="md:hidden text-cyan-400 w-11 h-11 rounded-lg border border-cyan-400/20 flex items-center justify-center active:scale-95 transition-all"
          onClick={() => setIsMenuOpen((current) => !current)}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
        </button>
      </div>
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden border-t border-white/5 bg-slate-950/95 transition-[max-height,opacity] duration-300 ${
          isMenuOpen ? 'max-h-[520px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-5 pt-2 space-y-2">
          {navLinks.map((link) => {
            const isActive = link.isRoute && location.pathname.startsWith(link.href);
            return link.isRoute ? (
              <Link
                key={link.href}
                to={link.href}
                onClick={closeMenu}
                className={`block rounded-lg px-4 py-3 font-label text-sm uppercase tracking-wider hover:bg-surface-container-high transition-colors ${isActive ? 'text-cyan-400 bg-surface-container font-bold' : 'text-slate-200 active:bg-surface-container-highest'}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="block rounded-lg px-4 py-3 text-slate-200 font-label text-sm uppercase tracking-wider hover:bg-surface-container-high active:bg-surface-container-highest transition-colors"
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="/resume.pdf"
            download="Resume_Rafli_Abdul_Bayhaqqy.pdf"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center rounded-lg bg-primary-container px-4 py-3 font-headline font-bold text-on-primary-container"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
