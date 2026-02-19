
import React from 'react';
import { Monitor, Video, Mic2, Server, CheckCircle2 } from 'lucide-react';
import { CONSULTANCY_SERVICES } from '../constants';

const Consultancy: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Intro */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">Consultancy <span className="text-red-600">&</span> Design</h1>
            <p className="text-xl text-slate-400 leading-relaxed">
              We design, install and commission advanced technologies in livestreaming, video conferencing and audio visual systems, as well as providing clients with consulting services to solve their challenges. Our extensive knowledge, understanding and industry experience enable us to deliver tailored solutions that meet our clients' specific needs and exceed their expectations.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-24 bg-slate-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {Object.entries(CONSULTANCY_SERVICES).map(([key, service], idx) => {
              // Custom images for specific services
              const broadcastImageUrl = "https://drive.google.com/thumbnail?id=1TfuEor86kBf8Q_hFRggnDMKASnVkijst&sz=w1920-h1080";
              const videoConferenceImageUrl = "https://drive.google.com/thumbnail?id=1D_q8wmv275iw2cDCmrgZ2KP0-5usB_M9&sz=w1920-h1080";
              const audioVisualImageUrl = "https://drive.google.com/thumbnail?id=1XQZ8I-FyP-EWbCa9VsGvcefZ2IlnHPVW&sz=w1920-h1080";
              const infrastructureImageUrl = "https://drive.google.com/thumbnail?id=189NMflUGwxoGhk6bNfP2FrBvq9Fa5x43&sz=w1920-h1080";
              
              let imageUrl = `https://picsum.photos/seed/mediatech_${key}/800/600`;
              if (key === 'broadcast') imageUrl = broadcastImageUrl;
              if (key === 'videoConference') imageUrl = videoConferenceImageUrl;
              if (key === 'audioVisual') imageUrl = audioVisualImageUrl;
              if (key === 'infrastructure') imageUrl = infrastructureImageUrl;

              return (
                <div key={key} className={`flex flex-col lg:flex-row gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="inline-block p-4 bg-red-600/10 rounded-2xl mb-6">
                      {key === 'broadcast' && <Monitor className="text-red-500" size={32} />}
                      {key === 'videoConference' && <Video className="text-red-500" size={32} />}
                      {key === 'audioVisual' && <Mic2 className="text-red-500" size={32} />}
                      {key === 'infrastructure' && <Server className="text-red-500" size={32} />}
                    </div>
                    <h2 className="text-4xl font-black text-white mb-6">{service.title}</h2>
                    <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center space-x-3 text-slate-300 font-medium p-3 bg-slate-900/50 rounded-lg border border-slate-800">
                          <CheckCircle2 className="text-red-500 shrink-0" size={18} />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-red-600/5 rounded-3xl blur-2xl"></div>
                    <img 
                      src={imageUrl} 
                      alt={service.title} 
                      className="rounded-2xl shadow-2xl relative border border-slate-800 w-full h-auto object-cover max-h-[500px]"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process CTA */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-12">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consult', desc: 'Analyzing your current workflow and defining goals.' },
              { step: '02', title: 'Design', desc: 'Bespoke blueprinting of hardware and software stacks.' },
              { step: '03', title: 'Implement', desc: 'On-site installation and commission by experts.' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 managed services.' }
            ].map((s, i) => (
              <div key={i} className="relative p-8 bg-slate-900 rounded-2xl border border-slate-800">
                <span className="text-6xl font-black text-red-600/10 absolute top-2 right-4">{s.step}</span>
                <h4 className="text-xl font-bold text-white mb-4 relative z-10">{s.title}</h4>
                <p className="text-slate-400 text-sm relative z-10 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
