
import React from 'react';
import { ExternalLink, Tag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProjectsProps {
  theme?: string;
}

const Projects: React.FC<ProjectsProps> = () => {
  const projects = [
    { 
      title: 'Corporate Innovation Summit 2024', 
      cat: 'Hybrid Events', 
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200',
      desc: 'End-to-end technical management and live multi-camera production for a global audience of 50,000+.'
    },
    { 
      title: 'Prime Audio Podcast Studio', 
      cat: 'AV Design', 
      img: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1200',
      desc: 'Bespoke acoustic treatment and high-fidelity signal chain integration.'
    },
    { 
      title: '24/7 News Stream Network', 
      cat: 'Broadcast', 
      img: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&q=80&w=1200',
      desc: 'High-availability infrastructure for continuous global broadcasting.'
    },
    { 
      title: 'Corporate Boardroom UX', 
      cat: 'Video Conferencing', 
      img: 'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&q=80&w=1200',
      desc: 'Intuitive touch-control systems for executive collaboration spaces.'
    },
    { 
      title: 'Music Producer Suite', 
      cat: 'Acoustic & AV', 
      img: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200',
      desc: 'Hybrid digital-analog studio environment with zero-latency monitoring.'
    },
    { 
      title: 'Educational Webinar Suite', 
      cat: 'Infrastructure', 
      img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200',
      desc: 'Scalable cloud-based media delivery for institutional learning.'
    },
  ];

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ff5451,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-tertiary"></span>
            <span className="text-tertiary font-bold text-xs tracking-[0.3em] uppercase">Portfolio</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Our <span className="text-gradient">Projects</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            From world-class recording studios to international summit broadcasts, we turn technical complexity into seamless experiences.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((p, i) => (
              <div key={i} className="group relative bg-surface-container-low rounded-2xl border border-outline-variant/30 overflow-hidden hover:border-tertiary/30 transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden relative">
                  <div className="absolute inset-0 bg-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-4 right-4 z-20 w-10 h-10 bg-on-tertiary text-tertiary rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    <ExternalLink size={20} />
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 text-tertiary mb-4">
                    <Tag size={14} />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em]">{p.cat}</span>
                  </div>
                  <h3 className="text-2xl font-black text-on-surface mb-3 leading-tight group-hover:text-tertiary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant font-light leading-relaxed text-sm">
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-surface-container-lowest border-t border-outline-variant/30">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-on-surface mb-8 tracking-tight">
            Have a technical challenge for us?
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 font-light">
            We thrive on complex requirements and mission-critical environments. Let's discuss your next project.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 bg-tertiary text-on-tertiary px-12 py-6 rounded-xl font-black text-xl shadow-2xl hover:scale-105 transition-all">
            Start a Conversation <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Projects;
