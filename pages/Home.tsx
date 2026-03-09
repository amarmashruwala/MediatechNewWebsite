
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Globe, Zap } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

interface HomeProps {
  theme?: string;
}

const Home: React.FC<HomeProps> = ({ theme = 'dark' }) => {
  const heroImageUrl = "https://drive.google.com/thumbnail?id=1dgHz8-asPWsddpAeqzSzCNHw39Y-H11y&sz=w1280-h720";

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className={`absolute top-0 -left-4 w-96 h-96 bg-red-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob transition-opacity duration-700 ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>
        <div className={`absolute top-0 -right-4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000 transition-opacity duration-700 ${theme === 'dark' ? 'opacity-20' : 'opacity-10'}`}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className={`inline-flex items-center space-x-2 border px-3 py-1 rounded-full text-sm font-semibold mb-6 transition-colors duration-500 ${theme === 'dark' ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-red-50 border-red-100 text-red-600'}`}>
              <Zap size={14} className="fill-current" />
              <span>Innovation in Media Technology</span>
            </div>
            <h1 className={`text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-6 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
              Sydney's <span className="text-gradient">Audio Visual</span> & Livestream Experts
            </h1>
            <p className={`text-xl mb-10 leading-relaxed max-w-xl transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              From high-end AI Media Systems to seamless Livestream Events, we bridge the gap between Technology, Content Distribution and Audience Engagement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all shadow-xl shadow-red-900/40 flex items-center justify-center">
                Start a Project <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link to="/about" className={`px-8 py-4 border rounded-xl font-bold text-lg transition-all flex items-center justify-center ${theme === 'dark' ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-800' : 'bg-white hover:bg-slate-50 text-slate-900 border-slate-200 shadow-sm'}`}>
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-red-400 rounded-2xl blur opacity-25"></div>
            <div className={`relative border rounded-2xl overflow-hidden shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
              <img 
                src={heroImageUrl} 
                alt="MediaTech Solutions Studio Setup" 
                className="w-full h-auto min-h-[400px] object-cover opacity-90 brightness-110"
                loading="lazy"
                decoding="async"
              />
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent ${theme === 'dark' ? 'from-slate-950' : 'from-white/40'}`}></div>
              <div className={`absolute bottom-6 left-6 right-6 p-6 backdrop-blur-md rounded-xl border transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900/80 border-white/5' : 'bg-white/80 border-slate-200 shadow-xl'}`}>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                    <Monitor className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className={`font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Advanced Broadcast Systems</h3>
                    <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Next-gen infrastructure for global reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className={`py-24 relative transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className={`text-3xl md:text-5xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Comprehensive Solutions</h2>
            <p className={`text-lg transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>What we bring to the table</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <Globe size={32} className="text-red-500" />, 
                title: 'Event Operations', 
                desc: 'Flawless execution of Virtual and Hybrid Meetings and high-impact Live Streaming Events',
                path: '/event-ops'
              },
              { 
                icon: <Monitor size={32} className="text-red-500" />, 
                title: 'Consultancy and Design', 
                desc: 'On Premise and Cloud system design and Deployment to tackle complex Media Technology Challenges',
                path: '/consultancy'
              },
              { 
                icon: <Zap size={32} className="text-red-500" />, 
                title: 'Equipment Sales', 
                desc: 'Providing innovative Audio Visual and Live Streaming equipment for professional set-ups',
                path: '/equipment'
              }
            ].map((service, idx) => (
              <div key={idx} className={`group p-8 rounded-2xl border transition-all hover:-translate-y-2 ${theme === 'dark' ? 'bg-slate-900/50 border-slate-800 hover:border-red-500/50' : 'bg-white border-slate-200 shadow-sm hover:border-red-500/30'}`}>
                <div className="mb-6">{service.icon}</div>
                <h3 className={`text-2xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{service.title}</h3>
                <p className={`mb-8 leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.desc}
                </p>
                <Link to={service.path} className="flex items-center text-red-500 font-bold group-hover:translate-x-2 transition-transform">
                  Explore <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900/30' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <h2 className={`text-4xl font-bold mb-4 italic transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>"Transforming how the world communicates"</h2>
              <p className={`text-xl transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Trusted by global innovators and creative leaders.</p>
            </div>
            <Link to="/contact" className="mt-8 md:mt-0 px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-lg transition-all">
              Join our Clients
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border relative overflow-hidden transition-all ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-50 border-slate-200'}`}>
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl"></div>
                <p className={`text-lg italic mb-6 relative transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>"{t.text}"</p>
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${theme === 'dark' ? 'bg-slate-800 text-red-500' : 'bg-red-100 text-red-600'}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                    <div className="flex text-yellow-500 text-xs">
                      {[...Array(5)].map((_, i) => <Zap key={i} size={10} className="fill-current" />)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-red-600 opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className={`text-4xl md:text-6xl font-black mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Ready to Elevate Your Media Communication?</h2>
          <p className={`text-xl mb-12 transition-colors ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
            Whether you need a full turn-key broadcast system or a bespoke hybrid event set-up, we are here to design your success.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link to="/contact" className={`px-10 py-5 rounded-xl font-black text-xl transition-all shadow-2xl ${theme === 'dark' ? 'bg-white text-slate-950 hover:bg-slate-200' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
              Connect With Us
            </Link>
            <Link to="/projects" className={`px-10 py-5 border rounded-xl font-bold text-xl transition-all ${theme === 'dark' ? 'bg-slate-950 text-white border-slate-800 hover:bg-slate-900' : 'bg-white text-slate-950 border-slate-200 hover:bg-slate-50 shadow-sm'}`}>
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
