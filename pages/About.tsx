
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

interface AboutProps {
  theme?: string;
}

const About: React.FC<AboutProps> = ({ theme = 'dark' }) => {
  const welcomeImageUrl = "https://drive.google.com/thumbnail?id=115wkrjjXJlk3ykzifLRYzlnkoWp0fRro&sz=w1920-h1080";

  return (
    <div className="pt-24 transition-colors duration-500">
      {/* Header */}
      <section className={`py-20 relative overflow-hidden border-b transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
        <div className={`absolute inset-0 bg-[size:32px_32px] ${theme === 'dark' ? 'bg-grid-white/[0.02]' : 'bg-grid-black/[0.02]'}`}></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h1 className={`text-5xl md:text-7xl font-black mb-6 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>About MediaTech</h1>
          <p className="text-xl text-red-500 font-bold uppercase tracking-widest">Empowering Vision through Technology</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className={`text-3xl font-bold mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>WELCOME</h2>
              <p className={`text-lg mb-6 leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                At MediaTech we are dedicated to helping you create impactful and cost-effective meetings, events, and content. We specialize in designing, setting up, and operating IT and AV systems that empower businesses to produce high-quality virtual and hybrid events, podcasts, broadcasts, and live streams.
              </p>
              <p className={`text-lg mb-8 leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>
                With extensive experience in IT and AV, we understand the challenges businesses face today. We blend technical expertise with creative insight to deliver solutions that not only meet your needs but elevate your content and operations to new heights.
              </p>
              <div className={`p-6 rounded-2xl border-l-4 border-red-500 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900' : 'bg-slate-50'}`}>
                <p className={`font-medium italic transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-800'}`}>
                  "Our mission is to equip businesses with affordable, cutting-edge technology and comprehensive support, ensuring your success in the ever-evolving digital landscape."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={welcomeImageUrl} 
                alt="MediaTech Infrastructure and Support" 
                className={`rounded-3xl shadow-2xl border w-full h-auto object-cover max-h-[700px] transition-colors duration-500 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 p-8 rounded-2xl hidden md:block shadow-2xl">
                <p className="text-3xl font-black text-white">20+</p>
                <p className="text-white/80 font-bold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Exploration */}
      <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900/50' : 'bg-slate-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-4xl font-bold text-center mb-16 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>WHAT WE DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { path: "/event-ops", title: "Event Operations", desc: "Virtual and Hybrid Meetings and Live Streaming Events managed by experts" },
              { path: "/consultancy", title: "Consultancy and Design", desc: "Hardware and software systems design to tackle Media Technology Challenges" },
              { path: "/equipment", title: "Equipment Sales", desc: "Innovative Audio Visual and Live Streaming Equipment Sales for high-tier production" }
            ].map((s, idx) => (
              <Link key={idx} to={s.path} className={`group p-10 rounded-2xl border transition-all ${theme === 'dark' ? 'bg-slate-950 border-slate-800 hover:border-red-500' : 'bg-white border-slate-200 hover:border-red-500 shadow-sm'}`}>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{s.title}</h3>
                <p className={`mb-6 transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{s.desc}</p>
                <span className="text-red-500 group-hover:translate-x-2 inline-block transition-transform">Learn more &rarr;</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className={`py-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-transparent' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-bold tracking-tighter text-sm uppercase mb-2">Testimonials</h2>
            <h3 className={`text-4xl font-black transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>What our clients say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className={`p-8 rounded-xl border transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-slate-50 border-slate-200 shadow-sm'}`}>
                <div className="mb-4">
                   <Users className="text-red-500" size={24} />
                </div>
                <p className={`italic mb-6 leading-relaxed text-sm transition-colors duration-500 ${theme === 'dark' ? 'text-slate-300' : 'text-slate-600'}`}>"{t.text}"</p>
                <div className={`pt-4 border-t transition-colors duration-500 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
                  <h4 className={`font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{t.name}</h4>
                  <p className="text-xs text-slate-500">Satisfied Client</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn More CTA */}
      <section className="py-24 bg-red-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 uppercase tracking-tighter">Learn More</h2>
          <p className="text-white/80 text-xl mb-10">Get in touch with our friendly representatives today to discuss your next media project.</p>
          <Link to="/contact" className={`px-10 py-5 rounded-full font-black text-xl transition-all inline-flex items-center ${theme === 'dark' ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-slate-900 hover:bg-slate-50 shadow-2xl'}`}>
            Get in touch <ArrowRight className="ml-3" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
