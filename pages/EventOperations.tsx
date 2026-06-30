
import React from 'react';
import { Users, Globe, Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventOpsProps {
  theme?: string;
}

const EventOperations: React.FC<EventOpsProps> = () => {
  const eventOpsImageUrl = "https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/untitled-design-2-Y4LJy55ED7Tz4ygN.webp";

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#2563eb,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-tertiary"></span>
            <span className="text-tertiary font-bold text-xs tracking-[0.3em] uppercase">Live Execution</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Event <span className="text-gradient">Operations</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            Virtual and Hybrid Meetings and Live Streaming Events, powered by rock-solid technical management. We ensure your message reaches your audience with zero compromise.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative group">
              <div className="absolute -inset-4 bg-tertiary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              <div className="relative z-10 rounded-2xl overflow-hidden border border-outline-variant/30 shadow-2xl">
                <img 
                  src={eventOpsImageUrl} 
                  alt="Event Operations Control Room" 
                  className="w-full h-auto object-cover aspect-video transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-xs font-bold text-tertiary tracking-[0.3em] uppercase mb-6">Operational Excellence</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-8 leading-tight">
                Flawless Execution of <span className="italic text-tertiary">High-Stakes Live Events.</span>
              </h3>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed font-light">
                In the world of live streaming and hybrid meetings, there is no second take. MediaTech provides the operational excellence required to ensure your audience receives a professional, engaging, and uninterrupted experience.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "End-to-end technical management",
                  "Multi-camera live production",
                  "Remote guest integration",
                  "Interactive audience engagement",
                  "Outdoor Event Livestream",
                  "Full technical rehearsals"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <CheckCircle2 size={18} className="text-tertiary shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-on-surface font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Globe size={32} />, title: 'Hybrid Convergence', desc: 'Bridge the gap between physical and remote participants with crystal clear audio and low-latency feeds.' },
              { icon: <Calendar size={32} />, title: 'Project Management', desc: 'Dedicated event directors and technicians who handle pre-planning to post-event teardown.' },
              { icon: <Users size={32} />, title: 'Attendee Engagement', desc: 'Leverage real-time Q&A, polling, and interactive features that make your virtual event dynamic.' }
            ].map((card, idx) => (
              <div key={idx} className="p-10 rounded-2xl bg-surface-container-low border border-outline-variant/30 hover:border-tertiary/30 transition-all group">
                <div className="text-tertiary mb-8 group-hover:scale-110 transition-transform origin-left">{card.icon}</div>
                <h3 className="text-2xl font-bold text-on-surface mb-4">{card.title}</h3>
                <p className="text-on-surface-variant font-light leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-tertiary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,#ffffff,transparent_50%)]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-on-tertiary mb-12 tracking-tighter">
            Planning a high-impact event?
          </h2>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-on-tertiary text-tertiary px-12 py-6 rounded-xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
            Get an Event Quote <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default EventOperations;
