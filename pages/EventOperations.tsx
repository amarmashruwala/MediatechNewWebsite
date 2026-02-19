
import React from 'react';
import { Users, Globe, Video, Mic, Calendar, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventOperations: React.FC = () => {
  const eventOpsImageUrl = "https://drive.google.com/thumbnail?id=1X1PeBst97n_WAB_8pqsjj38iucxMpl66&sz=w1920-h1080";

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black text-white mb-6">Event <span className="text-red-600">Operations</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">Virtual and Hybrid Meetings and Live Streaming Events, powered by rock-solid technical management.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
             <div>
                <h2 className="text-4xl font-bold text-white mb-8">Flawless execution of high-stakes live events.</h2>
                <p className="text-lg text-slate-400 mb-6">
                   In the world of live streaming and hybrid meetings, there is no second take. MediaTech provides the operational excellence required to ensure your audience receives a professional, engaging, and uninterrupted experience.
                </p>
                <div className="space-y-4">
                   {[
                      "End-to-end event management",
                      "Multi-camera live switching & production",
                      "Remote guest integration",
                      "Interactive audience tools",
                      "Full technical rehearsal & dry-runs"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-white font-medium">
                         <div className="w-6 h-6 bg-red-600/20 rounded flex items-center justify-center text-red-500">
                            <Trophy size={14} />
                         </div>
                         <span>{item}</span>
                      </div>
                   ))}
                </div>
             </div>
             <div className="rounded-2xl overflow-hidden border border-slate-800 shadow-2xl relative group">
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img src={eventOpsImageUrl} alt="Event Operations Control Room" className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-105" />
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
                <Globe className="text-red-500 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Hybrid Convergence</h3>
                <p className="text-slate-400 text-sm">Bridge the gap between physical and remote participants with crystal clear audio and low-latency video feeds.</p>
             </div>
             <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
                <Users className="text-red-500 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Attendee Engagement</h3>
                <p className="text-slate-400 text-sm">Leverage real-time Q&A, polling, and interactive features that make your virtual event feel as dynamic as any physical stage.</p>
             </div>
             <div className="p-8 bg-slate-900 rounded-2xl border border-slate-800 hover:border-red-500/30 transition-all">
                <Calendar className="text-red-500 mb-6" size={32} />
                <h3 className="text-xl font-bold text-white mb-4">Project Management</h3>
                <p className="text-slate-400 text-sm">Dedicated event directors and technicians who handle everything from pre-planning to post-event teardown.</p>
             </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-600 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-8">Planning an event?</h2>
            <Link to="/contact" className="inline-block px-10 py-4 bg-slate-950 text-white rounded-full font-bold hover:bg-slate-900 transition-all transform hover:scale-105 shadow-2xl">
               Get an Event Quote
            </Link>
         </div>
      </section>
    </div>
  );
};

export default EventOperations;
