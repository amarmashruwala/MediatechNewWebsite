
import React from 'react';
import { ExternalLink, Tag } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    { title: 'Global Tech Summit 2024', cat: 'Hybrid Events', img: 'https://picsum.photos/seed/p1/800/600' },
    { title: 'Prime Audio Podcast Studio', cat: 'AV Design', img: 'https://picsum.photos/seed/p2/800/600' },
    { title: '24/7 News Stream Network', cat: 'Broadcast', img: 'https://picsum.photos/seed/p3/800/600' },
    { title: 'Corporate Boardroom UX', cat: 'Video Conferencing', img: 'https://picsum.photos/seed/p4/800/600' },
    { title: 'Music Producer Suite', cat: 'Acoustic & AV', img: 'https://picsum.photos/seed/p5/800/600' },
    { title: 'Educational Webinar Suite', cat: 'Infrastructure', img: 'https://picsum.photos/seed/p6/800/600' },
  ];

  return (
    <div className="pt-24 min-h-screen">
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black text-white mb-6">Our <span className="text-red-600">Projects</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
            From world-class recording studios to international summit broadcasts, we turn technical complexity into seamless experiences.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800">
                <div className="aspect-video overflow-hidden">
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div className="p-8 relative">
                   <div className="absolute top-0 right-8 -translate-y-1/2 w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="text-white" size={20} />
                   </div>
                   <div className="flex items-center space-x-2 text-red-500 mb-3">
                      <Tag size={14} />
                      <span className="text-xs font-bold uppercase tracking-widest">{p.cat}</span>
                   </div>
                   <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
                   <p className="text-slate-400 text-sm">Full turn-key implementation and managed support.</p>
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
