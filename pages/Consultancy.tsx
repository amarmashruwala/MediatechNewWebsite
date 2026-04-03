
import React from 'react';
import { Monitor, Video, Mic2, Server, CheckCircle2, ArrowRight } from 'lucide-react';
import { CONSULTANCY_SERVICES } from '../constants.tsx';

interface ConsultancyProps {
  theme?: string;
}

const Consultancy: React.FC<ConsultancyProps> = () => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAbjK0MV29CflD1o5D27Z9XUf8UarahJkMXXefHuiHceqvpba6LI30u0AWQmJKUy0tLqs09jxPCLDkJsEzZkcWb_NThA2IDwKrkfPHsOxwSK5KsHGDFcd_i_dAZYe_NfOLhzuD6RswHzjoOPcBaJrJFhDV8FQyfZHYOvSJzsHP4jlgxFcuGjijPURZgDZvXrfNcjCLEg1F0ZoIEZBd10HVAvQ-52IaE0T8MAi_5tDElWmwPIEeoOYXvHCnGIJsi-jNKgsIzUD7wH6c";

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ff5451,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-secondary"></span>
            <span className="text-secondary font-bold text-xs tracking-[0.3em] uppercase">Expert Guidance</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Consultancy <span className="text-gradient">&</span> Design
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            We design, install, commission, and support advanced technologies in broadcast, collaboration, audiovisual, and media infrastructure. We also provide our clients with consultation services to help solve their challenges and exceed their expectations.
          </p>
        </div>
      </section>

      {/* Detailed Services Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-40">
            {Object.entries(CONSULTANCY_SERVICES).map(([key, service], idx) => {
              const serviceImages: Record<string, string> = {
                broadcast: 'https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/close-up-sound-engineer-studio-with-equipment-mnl9NJnewJTG7avP.jpg',
                videoConference: 'https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/black-manager-woman-talking-with-remotely-colleagues-video-call-tv-screen-presenting-new-business-partners-YNqr5MPOvoc6xz23.jpg',
                audioVisual: 'https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/sound-studio-with-sound-board-sound-board-Yyv7BDnqpPS4kq79.jpg',
                infrastructure: 'https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/pexels-field-engineer-147254-442150-A1awEj7Wn3ul1WxQ.jpg'
              };
              const imageUrl = serviceImages[key] || `https://picsum.photos/seed/mediatech_${key}/1200/800`;
              
              return (
                <div key={key} className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
                        {key === 'broadcast' && <Monitor className="text-primary" size={32} />}
                        {key === 'videoConference' && <Video className="text-primary" size={32} />}
                        {key === 'audioVisual' && <Mic2 className="text-primary" size={32} />}
                        {key === 'infrastructure' && <Server className="text-primary" size={32} />}
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black tracking-tight text-on-surface">{service.title}</h2>
                    </div>
                    <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-light">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center gap-3 p-4 bg-surface-container rounded-xl border border-outline-variant/20">
                          <CheckCircle2 className="text-primary shrink-0" size={20} />
                          <span className="text-on-surface font-medium text-sm">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
                    <img 
                      src={imageUrl} 
                      alt={service.title} 
                      className="relative z-10 rounded-2xl shadow-2xl border border-outline-variant/30 w-full h-auto object-cover aspect-video"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">Our Methodology</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">How We Deliver Excellence</h3>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consult', desc: 'Analyzing your current workflow and defining strategic goals.' },
              { step: '02', title: 'Design', desc: 'Bespoke blueprinting of hardware and software stacks.' },
              { step: '03', title: 'Implement', desc: 'On-site installation and commission by expert engineers.' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and 24/7 managed services.' }
            ].map((s, i) => (
              <div key={i} className="relative p-10 bg-surface-container rounded-xl border border-outline-variant/20 hover:border-secondary/50 transition-all group">
                <span className="text-7xl font-black absolute top-4 right-6 text-on-surface/5 group-hover:text-secondary/10 transition-colors">{s.step}</span>
                <h4 className="text-2xl font-bold text-on-surface mb-4 relative z-10">{s.title}</h4>
                <p className="text-on-surface-variant leading-relaxed relative z-10 font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mb-8">
            Ready to Design Your Future?
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 font-light">
            Let's architect a media infrastructure that scales with your ambition.
          </p>
          <button className="inline-flex items-center gap-3 btn-primary-gradient text-on-primary-container px-12 py-6 rounded-xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
            Start a Consultation <ArrowRight size={24} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default Consultancy;
