
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Sun, Moon } from 'lucide-react';
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Consultancy from './pages/Consultancy.tsx';
import Contact from './pages/Contact.tsx';
import Projects from './pages/Projects.tsx';
import EventOperations from './pages/EventOperations.tsx';
import EquipmentSales from './pages/EquipmentSales.tsx';
import { NAV_LINKS } from './constants.tsx';

const Logo: React.FC<{ theme: string }> = ({ theme }) => (
  <div className="flex items-center group cursor-pointer">
    <div className="relative mr-4 shrink-0 transition-all duration-500 group-hover:scale-105">
      <svg 
        viewBox="0 0 60 60" 
        className="w-12 h-12 relative z-10 drop-shadow-[0_0_12px_rgba(239,68,68,0.4)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M30 8L52 18L30 28L8 18L30 8Z" 
          stroke="#EF4444" 
          strokeWidth="3" 
          strokeLinejoin="round" 
          className="transition-all duration-700 group-hover:translate-y-[-2px]"
        />
        <path 
          d="M30 18L52 28L30 38L8 28L30 18Z" 
          stroke="#EF4444" 
          strokeWidth="2.5" 
          strokeLinejoin="round"
          className="opacity-80 transition-all duration-700 group-hover:translate-y-[-1px]"
        />
        <path 
          d="M30 28L52 38L30 48L8 38L30 28Z" 
          fill="#EF4444" 
          className="transition-all duration-700 group-hover:fill-red-500"
        />
      </svg>
      <div className="absolute inset-0 bg-red-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
    </div>
    
    <div className={`h-10 w-[2px] mr-5 opacity-90 rounded-full transition-colors duration-500 ${theme === 'dark' ? 'bg-white' : 'bg-slate-900'}`}></div>
    
    <div className="flex flex-col justify-center leading-none">
      <div className="flex items-baseline">
        <span className={`text-2xl md:text-3xl font-extrabold tracking-tighter transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Media</span>
        <span className={`text-2xl md:text-3xl font-semibold tracking-tighter transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Tech</span>
        <span className={`text-2xl md:text-3xl font-light tracking-tighter ml-1.5 opacity-90 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-700'}`}>Solutions</span>
      </div>
      <span className="text-[10px] md:text-[12px] font-bold tracking-tight text-red-500 mt-1.5 leading-none transition-colors duration-300 group-hover:text-red-400">
        Empowering Media Through Technology
      </span>
    </div>
  </div>
);

const Navbar: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
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
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? (theme === 'dark' ? 'bg-slate-950/95 backdrop-blur-xl border-b border-slate-900 shadow-2xl' : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg') : 'bg-transparent'} py-3`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/">
            <Logo theme={theme} />
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {NAV_LINKS.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    onMouseEnter={() => setDropdownOpen(true)}
                    className={`flex items-center text-xs font-bold uppercase tracking-[0.2em] transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-red-500' : 'text-slate-600 hover:text-red-600'}`}
                  >
                    {link.name} <ChevronDown className={`ml-1 w-3 h-3 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : link.external ? (
                  <a href={link.path} target="_blank" rel="noopener noreferrer" className={`text-xs font-bold uppercase tracking-[0.2em] transition-colors ${theme === 'dark' ? 'text-slate-300 hover:text-red-500' : 'text-slate-600 hover:text-red-600'}`}>
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.path} className={`text-xs font-bold transition-colors uppercase tracking-[0.2em] ${location.pathname === link.path ? 'text-red-500' : (theme === 'dark' ? 'text-slate-300 hover:text-red-500' : 'text-slate-600 hover:text-red-600')}`}>
                    {link.name}
                  </Link>
                )}

                {link.dropdown && (
                  <div 
                    onMouseLeave={() => setDropdownOpen(false)}
                    className={`absolute left-0 mt-3 w-56 rounded-2xl shadow-2xl p-2 transition-all duration-300 ${dropdownOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'} ${theme === 'dark' ? 'bg-slate-900 border border-slate-800' : 'bg-white border border-slate-100'}`}
                  >
                    {link.dropdown.map((sub) => (
                      <Link key={sub.name} to={sub.path} className={`block px-4 py-3 text-sm font-semibold rounded-xl transition-all ${theme === 'dark' ? 'text-slate-400 hover:bg-slate-800 hover:text-red-500' : 'text-slate-600 hover:bg-slate-50 hover:text-red-600'}`}>
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900 text-yellow-500 hover:bg-slate-800' : 'bg-slate-100 text-slate-900 hover:bg-slate-200'}`}
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <Link to="/contact" className="bg-red-600 hover:bg-red-500 text-white px-7 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all shadow-xl shadow-red-900/40 hover:-translate-y-0.5">
              Contact
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'text-yellow-500' : 'text-slate-900'}`}
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className={theme === 'dark' ? 'text-slate-300' : 'text-slate-900'}>
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      <div className={`lg:hidden absolute w-full transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} ${theme === 'dark' ? 'bg-slate-950 border-b border-slate-900' : 'bg-white border-b border-slate-200'}`}>
        <div className="px-6 pt-4 pb-12 space-y-2">
          {NAV_LINKS.map((link) => (
            <div key={link.name} className="flex flex-col">
              {link.dropdown ? (
                <>
                  <div className="py-2 text-xs font-black text-red-600 uppercase tracking-widest mb-2 mt-4">{link.name}</div>
                  {link.dropdown.map((sub) => (
                    <Link key={sub.name} to={sub.path} className={`block py-3 text-lg font-bold ${theme === 'dark' ? 'text-slate-300 hover:text-red-500' : 'text-slate-600 hover:text-red-600'}`}>
                      {sub.name}
                    </Link>
                  ))}
                </>
              ) : (
                <Link to={link.path} className={`block py-4 text-xl font-bold border-b ${theme === 'dark' ? 'text-slate-100 border-slate-900' : 'text-slate-900 border-slate-100'}`}>
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <Link to="/contact" className="block w-full text-center bg-red-600 py-5 rounded-2xl text-white font-black text-xl mt-8">
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

const Footer: React.FC<{ theme: string }> = ({ theme }) => (
  <footer className={`pt-24 pb-12 border-t transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-2">
          <Link to="/" className="inline-block mb-8 transition-transform hover:scale-[1.02]">
            <Logo theme={theme} />
          </Link>
          <p className={`text-lg leading-relaxed max-w-md transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            MediaTech Solutions is a specialist technology company focused on creating impactful and cost-effective meetings, events, and content, that solve today's challenges.
          </p>
          <div className="flex space-x-5 mt-10">
            {[Linkedin, Twitter, Facebook].map((Icon, idx) => (
              <a key={idx} href="#" className={`p-4 rounded-2xl transition-all border shadow-lg ${theme === 'dark' ? 'bg-slate-900 text-slate-400 hover:text-red-500 hover:bg-slate-800 border-slate-800' : 'bg-white text-slate-600 hover:text-red-600 border-slate-200'}`}>
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className={`font-black uppercase tracking-[0.2em] text-xs mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Services</h4>
          <ul className={`space-y-4 font-medium transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            <li><Link to="/consultancy" className="hover:text-red-500 transition-colors">Consultancy & Design</Link></li>
            <li><Link to="/event-ops" className="hover:text-red-500 transition-colors">Event Operations</Link></li>
            <li><Link to="/equipment" className="hover:text-red-500 transition-colors">Equipment Sales</Link></li>
            <li><Link to="/projects" className="hover:text-red-500 transition-colors">Our Projects</Link></li>
          </ul>
        </div>

        <div>
          <h4 className={`font-black uppercase tracking-[0.2em] text-xs mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
          <ul className={`space-y-6 transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            <li className="flex items-start space-x-4 group">
              <MapPin className="text-red-500 shrink-0 w-5 h-5 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">1 Reid Avenue, Westmead NSW 2145</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <Phone className="text-red-500 shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm">+61 (0)401 533 665</span>
            </li>
            <li className="flex items-center space-x-4 group">
              <Mail className="text-red-500 shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-sm break-all">support@mail.mediatechsolutions.live</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className={`border-t pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.3em] transition-colors duration-500 ${theme === 'dark' ? 'border-slate-900 text-slate-500' : 'border-slate-200 text-slate-400'}`}>
        <p>&copy; {new Date().getFullYear()} MediaTech Solutions. Precision Engineered.</p>
        <div className="flex space-x-8 mt-6 md:mt-0">
          <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

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
      <div className={`flex flex-col min-h-screen transition-colors duration-500 selection:bg-red-500/30 selection:text-red-200 ${theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-slate-50 text-slate-900'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home theme={theme} />} />
            <Route path="/about" element={<About theme={theme} />} />
            <Route path="/consultancy" element={<Consultancy theme={theme} />} />
            <Route path="/contact" element={<Contact theme={theme} />} />
            <Route path="/projects" element={<Projects theme={theme} />} />
            <Route path="/event-ops" element={<EventOperations theme={theme} />} />
            <Route path="/equipment" element={<EquipmentSales theme={theme} />} />
          </Routes>
        </main>
        <Footer theme={theme} />
      </div>
    </Router>
  );
};

export default App;
