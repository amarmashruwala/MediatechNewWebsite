
import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Linkedin, Youtube, Facebook, Sun, Moon, Loader2, Layers, ArrowUp } from 'lucide-react';

const Home = lazy(() => import('./pages/Home.tsx'));
const About = lazy(() => import('./pages/About.tsx'));
const Consultancy = lazy(() => import('./pages/Consultancy.tsx'));
const Contact = lazy(() => import('./pages/Contact.tsx'));
const Projects = lazy(() => import('./pages/Projects.tsx'));
const EventOperations = lazy(() => import('./pages/EventOperations.tsx'));
const EquipmentSales = lazy(() => import('./pages/EquipmentSales.tsx'));
const WhatWeDo = lazy(() => import('./pages/WhatWeDo.tsx'));
import { NAV_LINKS } from './constants.tsx';

const Logo: React.FC = () => (
  <div className="flex items-center gap-3">
    <div className="w-10 h-10 bg-slate-900/80 rounded-xl flex items-center justify-center border border-slate-800 shadow-lg">
      <Layers className="text-primary" size={24} />
    </div>
    <div className="h-8 w-[1px] bg-slate-800/50 mx-1"></div>
    <div className="flex flex-col justify-center">
      <div className="text-xl font-black tracking-tight text-slate-50 leading-tight">
        MediaTech Solutions
      </div>
      <div className="text-[8px] font-black tracking-[0.25em] text-primary uppercase">
        Audio Visual & Content Systems
      </div>
    </div>
  </div>
);

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-950/40 backdrop-blur-xl shadow-[0_8px_32px_rgba(59,130,246,0.08)]">
      <div className="flex justify-between items-center px-8 py-4 max-w-screen-2xl mx-auto">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <Logo />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 font-sans text-sm font-bold tracking-tight">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="relative group">
              {link.external ? (
                <a 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-slate-50 transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                <>
                  <Link 
                    to={link.path} 
                    className={`flex items-center gap-1 transition-colors ${location.pathname === link.path ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'text-slate-300 hover:text-slate-50'}`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />}
                  </Link>
                  
                  {link.dropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-xl p-4 min-w-[200px] shadow-2xl">
                        {link.dropdown.map((sub) => (
                          <Link 
                            key={sub.name}
                            to={sub.path}
                            className="block py-2 px-4 text-xs text-slate-400 hover:text-blue-400 hover:bg-slate-800/50 rounded-lg transition-all"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-300 hover:text-slate-50 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link to="/contact" className="hidden sm:block bg-gradient-to-br from-primary-container to-primary text-on-primary-container px-6 py-2.5 rounded-xl font-bold text-sm tracking-tight scale-95 active:scale-90 transition-transform">
            Request Quote
          </Link>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-50">
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full transition-all duration-500 overflow-hidden bg-slate-900/95 backdrop-blur-xl ${isOpen ? 'max-h-screen border-b border-slate-800' : 'max-h-0'}`}>
        <div className="px-8 py-8 space-y-6">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="space-y-4">
              {link.external ? (
                <a 
                  href={link.path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-lg font-bold tracking-tight text-slate-300"
                >
                  {link.name}
                </a>
              ) : (
                <>
                  <Link 
                    to={link.path} 
                    className={`block text-lg font-bold tracking-tight ${location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'}`}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-3 border-l border-slate-800">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name}
                          to={sub.path}
                          className="block text-sm font-medium text-slate-500 hover:text-blue-400"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          ))}
          <div className="pt-4 flex justify-between items-center">
            <span className="text-slate-400 text-sm font-bold uppercase tracking-widest">Theme</span>
            <button 
              onClick={toggleTheme}
              className="p-3 bg-slate-800 rounded-xl text-slate-300"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          <Link to="/contact" className="block w-full text-center bg-gradient-to-br from-primary-container to-primary text-on-primary-container py-4 rounded-xl font-bold">
            Request Quote
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC<{ theme: string }> = ({ theme }) => (
  <footer className="bg-slate-950 border-t border-slate-900/50 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
      {/* Brand Section */}
      <div className="md:col-span-5 space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
            <Layers className="text-primary" size={28} />
          </div>
          <div className="h-10 w-[1px] bg-outline-variant/30 mx-2"></div>
          <div>
            <div className="text-2xl font-black text-slate-50 tracking-tight">MediaTech Solutions</div>
            <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary">Audio Visual & Content Systems</div>
          </div>
        </div>
        
        <p className="text-on-surface-variant text-sm leading-relaxed max-w-md font-light">
          MediaTech Solutions is a specialist technology company focused on creating impactful and cost-effective meetings, events, and content, that solve today's challenges.
        </p>

        <div className="flex gap-4">
          <a href="#" className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10">
            <Linkedin size={20} />
          </a>
          <a 
            href="https://www.youtube.com/@mediatechtube" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
          >
            <Youtube size={20} />
          </a>
          <a 
            href="https://www.facebook.com/AVStreamingTech" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-12 h-12 bg-surface-container rounded-xl flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors border border-outline-variant/10"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div className="md:col-span-3 space-y-8">
        <h5 className="text-slate-50 font-black text-xs uppercase tracking-[0.3em]">Services</h5>
        <ul className="space-y-4">
          <li><Link to="/consultancy" className="text-on-surface-variant hover:text-primary text-sm transition-colors font-medium">Consultancy & Design</Link></li>
          <li><Link to="/event-ops" className="text-on-surface-variant hover:text-primary text-sm transition-colors font-medium">Event Operations</Link></li>
          <li><Link to="/equipment" className="text-on-surface-variant hover:text-primary text-sm transition-colors font-medium">Equipment Sales</Link></li>
          <li><Link to="/projects" className="text-on-surface-variant hover:text-primary text-sm transition-colors font-medium">Our Projects</Link></li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className="md:col-span-4 space-y-8">
        <h5 className="text-slate-50 font-black text-xs uppercase tracking-[0.3em]">Contact</h5>
        <ul className="space-y-6">
          <li className="flex gap-4">
            <MapPin className="text-primary shrink-0" size={20} />
            <span className="text-on-surface-variant text-sm leading-relaxed font-medium">
              1 Reid Avenue, Westmead NSW 2145
            </span>
          </li>
          <li className="flex gap-4">
            <Phone className="text-primary shrink-0" size={20} />
            <span className="text-on-surface-variant text-sm font-medium">
              +61 (0)401 533 665
            </span>
          </li>
          <li className="flex gap-4">
            <Mail className="text-primary shrink-0" size={20} />
            <span className="text-on-surface-variant text-sm font-medium break-all">
              support@mail.mediatechsolutions.live
            </span>
          </li>
        </ul>
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant/60">
        &copy; {new Date().getFullYear()} MediaTech Solutions. All Rights Reserved.
      </p>
      <div className="flex gap-6">
        <span className="text-primary font-black text-[10px] tracking-[0.3em] uppercase animate-pulse">System Status: Nominal</span>
      </div>
    </div>
  </footer>
);

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (around 400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case page is already scrolled
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-4 rounded-full bg-gradient-to-br from-primary-container to-primary text-on-primary-container shadow-2xl border border-outline-variant/30 hover:scale-110 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] active:scale-95 transition-all duration-300 flex items-center justify-center cursor-pointer ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp size={20} className="stroke-[3]" />
    </button>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className={`flex flex-col min-h-screen transition-colors duration-500 selection:bg-blue-500/30 selection:text-blue-200 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="flex items-center justify-center min-h-[60vh]">
              <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home theme={theme} />} />
              <Route path="/about" element={<About theme={theme} />} />
              <Route path="/consultancy" element={<Consultancy theme={theme} />} />
              <Route path="/contact" element={<Contact theme={theme} />} />
              <Route path="/projects" element={<Projects theme={theme} />} />
              <Route path="/event-ops" element={<EventOperations theme={theme} />} />
              <Route path="/equipment" element={<EquipmentSales theme={theme} />} />
              <Route path="/what-we-do" element={<WhatWeDo theme={theme} />} />
            </Routes>
          </Suspense>
        </main>
        <Footer theme={theme} />
        <BackToTop />
      </div>
    </Router>
  );
};


export default App;
