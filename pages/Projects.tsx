
import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

interface ProjectsProps {
  theme?: string;
}

const Projects: React.FC<ProjectsProps> = ({ theme = 'dark' }) => {
  const projects = [
    { 
      title: 'Global Tech Summit 2024', 
      cat: 'Hybrid Events', 
      img: 'https://drive.google.com/thumbnail?id=1X1PeBst97n_WAB_8pqsjj38iucxMpl66&sz=w800-h600',
      desc: 'End-to-end technical management for a global audience of 50,000+.'
    },
    { 
      title: 'Prime Audio Podcast Studio', 
      cat: 'AV Design', 
      img: 'https://drive.google.com/thumbnail?id=1XQZ8I-FyP-EWbCa9VsGvcefZ2IlnHPVW&sz=w800-h600',
      desc: 'Bespoke acoustic treatment and high-fidelity signal chain integration.'
    },
    { 
      title: '24/7 News Stream Network', 
      cat: 'Broadcast', 
      img: 'https://drive.google.com/thumbnail?id=1TfuEor86kBf8Q_hFRggnDMKASnVkijst&sz=w800-h600',
      desc: 'High-availability infrastructure for continuous global broadcasting.'
    },
    { 
      title: 'Corporate Boardroom UX', 
      cat: 'Video Conferencing', 
      img: 'https://drive.google.com/thumbnail?id=1D_q8wmv275iw2cDCmrgZ2KP0-5usB_M9&sz=w800-h600',
      desc: 'Intuitive touch-control systems for executive collaboration spaces.'
    },
    { 
      title: 'Music Producer Suite', 
      cat: 'Acoustic & AV', 
      img: 'https://drive.google.com/thumbnail?id=1dgHz8-asPWsddpAeqzSzCNHw39Y-H11y&sz=w800-h600',
      desc: 'Hybrid digital-analog studio environment with zero-latency monitoring.'
    },
    { 
      title: 'Educational Webinar Suite', 
      cat: 'Infrastructure', 
      img: 'https://drive.google.com/thumbnail?id=189NMflUGwxoGhk6bNfP2FrBvq9Fa5x43&sz=w800-h600',
      desc: 'Scalable cloud-based media delivery for institutional learning.'
    },
  ];

  return (
    <div className={`pt-24 min-h-screen transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <section className={`py-20 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-white border-b border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={`text-6xl font-black mb-6 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
            Our <span className="text-red-600">Projects</span>
          </h1>
          <p className={`text-xl max-w-2xl leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
            From world-class recording studios to international summit broadcasts, we turn technical complexity into seamless experiences.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-red-500' : 'bg-white border-slate-200 shadow-sm hover:shadow-xl hover:border-red-500/50'}`}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={p.img} 
                    alt={p.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-8 relative">
                   <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                      <ExternalLink className="text-white" size={20} />
                   </div>
                   <div className="flex items-center space-x-2 text-red-500 mb-3">
                      <Tag size={14} />
                      <span className="text-xs font-bold uppercase tracking-widest">{p.cat}</span>
                   </div>
                   <h3 className={`text-2xl font-black mb-2 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
                    {p.title}
                   </h3>
                   <p className={`text-sm leading-relaxed transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
                    {p.desc}
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
