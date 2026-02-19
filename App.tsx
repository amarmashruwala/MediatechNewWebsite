
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Consultancy from './pages/Consultancy';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import EventOperations from './pages/EventOperations';
import EquipmentSales from './pages/EquipmentSales';
import { NAV_LINKS } from './constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-lg border-b border-slate-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20">
              <span className="text-white font-black text-xl italic">M</span>
            </div>
            <span className="text-xl font-bold tracking-tight text-white">MediaTech <span className="text-red-500 font-light">Solutions</span></span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className="flex items-center text-sm font-medium text-slate-300 hover:text-red-500 transition-colors"
                  >
                    {link.name} <ChevronDown className="ml-1 w-4 h-4" />
                  </button>
                ) : link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-300 hover:text-red-500 transition-colors">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-red-500' : 'text-slate-300 hover:text-red-500'}`}>
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div 
                    onMouseLeave={() => setDropdownOpen(false)}
                    className={`absolute left-0 mt-2 w-56 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 transition-all duration-200 ${dropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}
                  >
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className="block px-4 py-2.5 text-sm text-slate-300 hover:bg-slate-800 hover:text-red-500 rounded-lg transition-colors">
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link to="/contact" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-red-900/30">
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-slate-900 border-b border-slate-800 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.dropdown ? (
                <>
                  <div className="px-3 py-2 text-base font-semibold text-slate-500 uppercase tracking-wider">{link.name}</div>
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className="block px-3 py-2 rounded-md text-base text-slate-300 hover:bg-slate-800 hover:text-red-500">
                      {sub.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link to={link.path} className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-red-500">
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="flex items-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl italic">M</span>
            </div>
            <span className="text-xl font-bold text-white">MediaTech Solutions</span>
          </Link>
          <p className="text-slate-400 text-lg leading-relaxed max-w-md">
            MediaTech Solutions is a specialist technology company focused on creating impactful and cost-effective meetings, events, and content, that solve today's challenges.
          </p>
          <div className="flex space-x-5 mt-8">
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-all">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-all">
              <Twitter size={20} />
            </a>
            <a href="https://www.facebook.com/AVStreamingTech" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-900 rounded-full text-slate-400 hover:text-red-500 hover:bg-slate-800 transition-all">
              <Facebook size={20} />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="text-white font-bold mb-6">Services</h4>
          <ul className="space-y-4 text-slate-400">
            <li><Link to="/consultancy" className="hover:text-red-500 transition-colors">Consultancy & Design</Link></li>
            <li><Link to="/event-ops" className="hover:text-red-500 transition-colors">Event Operations</Link></li>
            <li><Link to="/equipment" className="hover:text-red-500 transition-colors">Equipment Sales</Link></li>
            <li><Link to="/projects" className="hover:text-red-500 transition-colors">Our Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Contact</h4>
          <ul className="space-y-4 text-slate-400">
            <li className="flex items-start space-x-3">
              <MapPin className="text-red-500 shrink-0 w-5 h-5" />
              <span>1 Reid Avenue, Westmead NSW 2145</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-red-500 shrink-0 w-5 h-5" />
              <span>+61 (0)401 533 665</span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-red-500 shrink-0 w-5 h-5" />
              <span className="break-all">support@mail.mediatechsolutions.live</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} MediaTech Solutions. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-slate-300">Privacy Policy</a>
          <a href="#" className="hover:text-slate-300">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen selection:bg-red-500/30 selection:text-red-200">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/consultancy" element={<Consultancy />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/event-ops" element={<EventOperations />} />
            <Route path="/equipment" element={<EquipmentSales />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
