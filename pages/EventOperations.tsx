
import React from 'react';
import { Users, Globe, Trophy, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventOpsProps {
  theme?: string;
}

const EventOperations: React.FC<EventOpsProps> = ({ theme = 'dark' }) => {
  const eventOpsImageUrl = "https://drive.google.com/thumbnail?id=1X1PeBst97n_WAB_8pqsjj38iucxMpl66&sz=w1920-h1080";

  return (
    <div className={`pt-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <section className={`py-20 border-b transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={`text-6xl font-black mb-6 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
            Event <span className="text-red-600">Operations</span>
          </h1>
          <p className={`text-xl max-w-2xl transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Virtual and Hybrid Meetings and Live Streaming Events, powered by rock-solid technical management.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-24">
             <div className={`rounded-2xl overflow-hidden border shadow-2xl relative group transition-colors duration-500 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                <img src={eventOpsImageUrl} alt="Event Operations Control Room" className="w-full h-auto object-cover max-h-[600px] transition-transform duration-700 group-hover:scale-105" />
             </div>
             <div>
                <h2 className={`text-4xl font-bold mb-8 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Flawless execution of high-stakes live events.</h2>
                <p className={`text-lg mb-6 leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                   In the world of live streaming and hybrid meetings, there is no second take. MediaTech provides the operational excellence required to ensure your audience receives a professional, engaging, and uninterrupted experience.
                </p>
                <div className="space-y-4">
                   {[
                      "End-to-end technical management",
                      "Multi-camera live switching & production",
                      "Remote guest integration",
                      "Interactive audience engagement",
                      "Outdoor Event Livestream",
                      "Full technical rehearsal & dry-runs"
                   ].map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 font-medium">
                         <div className={`w-6 h-6 rounded flex items-center justify-center ${theme === 'dark' ? 'bg-red-600/20 text-red-500' : 'bg-red-100 text-red-600'}`}>
                            <Trophy size={14} />
                         </div>
                         <span className={theme === 'dark' ? 'text-white' : 'text-slate-900'}>{item}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Globe size={32} />, title: 'Hybrid Convergence', desc: 'Bridge the gap between physical and remote participants with crystal clear audio and low-latency feeds.' },
              { icon: <Users size={32} />, title: 'Attendee Engagement', desc: 'Leverage real-time Q&A, polling, and interactive features that make your virtual event dynamic.' },
              { icon: <Calendar size={32} />, title: 'Project Management', desc: 'Dedicated event directors and technicians who handle pre-planning to post-event teardown.' }
            ].map((card, idx) => (
              <div key={idx} className={`p-8 rounded-2xl border transition-all hover:-translate-y-1 ${theme === 'dark' ? 'bg-slate-900 border-slate-800 hover:border-red-500/30' : 'bg-white border-slate-200 shadow-sm hover:border-red-500/30 shadow-slate-200'}`}>
                <div className="text-red-500 mb-6">{card.icon}</div>
                <h3 className={`text-xl font-bold mb-4 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>{card.title}</h3>
                <p className={`text-sm leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-red-600 text-center">
         <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-4xl font-black text-white mb-8">Planning an event?</h2>
            <Link to="/contact" className={`inline-block px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-2xl ${theme === 'dark' ? 'bg-slate-950 text-white hover:bg-slate-900' : 'bg-white text-slate-950 hover:bg-slate-50'}`}>
               Get an Event Quote
            </Link>
         </div>
      </section>
    </div>
  );
};

export default EventOperations;
