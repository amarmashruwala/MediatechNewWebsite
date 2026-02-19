
import React from 'react';
import { Link } from 'react-router-dom';
import { Target, Users, ShieldCheck, Heart, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../constants.tsx';

const About: React.FC = () => {
  const welcomeImageUrl = "https://drive.google.com/thumbnail?id=115wkrjjXJlk3ykzifLRYzlnkoWp0fRro&sz=w1920-h1080";

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-20 bg-slate-950 relative overflow-hidden border-b border-slate-900">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">About MediaTech</h1>
          <p className="text-xl text-red-500 font-bold uppercase tracking-widest">Empowering Vision through Technology</p>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">WELCOME</h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                At MediaTech we are dedicated to helping you create impactful and cost-effective meetings, events, and content. We specialize in designing, setting up, and operating IT and AV systems that empower businesses to produce high-quality virtual and hybrid events, podcasts, broadcasts, and live streams.
              </p>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                With extensive experience in IT and AV, we understand the challenges businesses face today. We blend technical expertise with creative insight to deliver solutions that not only meet your needs but elevate your content and operations to new heights.
              </p>
              <div className="p-6 bg-slate-900 rounded-2xl border-l-4 border-red-500">
                <p className="text-white font-medium italic">
                  "Our mission is to equip businesses with affordable, cutting-edge technology and comprehensive support, ensuring your success in the ever-evolving digital landscape."
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={welcomeImageUrl} 
                alt="MediaTech Infrastructure and Support" 
                className="rounded-3xl shadow-2xl border border-slate-800 w-full h-auto object-cover max-h-[700px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-red-600 p-8 rounded-2xl hidden md:block">
                <p className="text-3xl font-black text-white">20+</p>
                <p className="text-white/80 font-bold">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Exploration */}
      <section className="py-24 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16">WHAT WE DO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/consultancy" className="group p-10 bg-slate-950 rounded-2xl border border-slate-800 hover:border-red-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Consultancy and Design</h3>
              <p className="text-slate-400 mb-6">Hardware and software systems design to tackle Media Technology Challenges</p>
              <span className="text-red-500 group-hover:translate-x-2 inline-block transition-transform">Learn more &rarr;</span>
            </Link>
            <Link to="/event-ops" className="group p-10 bg-slate-950 rounded-2xl border border-slate-800 hover:border-red-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Event Operations</h3>
              <p className="text-slate-400 mb-6">Virtual and Hybrid Meetings and Live Streaming Events managed by experts</p>
              <span className="text-red-500 group-hover:translate-x-2 inline-block transition-transform">Learn more &rarr;</span>
            </Link>
            <Link to="/equipment" className="group p-10 bg-slate-950 rounded-2xl border border-slate-800 hover:border-red-500 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Equipment Sales</h3>
              <p className="text-slate-400 mb-6">Innovative Audio Visual and Live Streaming Equipment Sales for high-tier production</p>
              <span className="text-red-500 group-hover:translate-x-2 inline-block transition-transform">Learn more &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-red-500 font-bold tracking-tighter text-sm uppercase mb-2">Testimonials</h2>
            <h3 className="text-4xl font-black text-white">What our clients say</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="p-8 bg-slate-900 rounded-xl border border-slate-800">
                <div className="mb-4">
                   <Users className="text-red-500" size={24} />
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed text-sm">"{t.text}"</p>
                <div className="pt-4 border-t border-slate-800">
                  <h4 className="text-white font-bold">{t.name}</h4>
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
          <Link to="/contact" className="px-10 py-5 bg-slate-950 text-white rounded-full font-black text-xl hover:bg-slate-900 transition-all inline-flex items-center">
            Get in touch <ArrowRight className="ml-3" size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
