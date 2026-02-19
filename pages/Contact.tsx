
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="pt-24 pb-24">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-black text-white mb-8">Get In <span className="text-red-600">Touch</span></h1>
            <p className="text-xl text-slate-400">
              Have a vision you want to bring to life? Our engineers and consultants are ready to discuss your next big media technology move.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                  <Phone className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                <p className="text-slate-400 font-medium">+61 (0)401 533 665</p>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                  <Mail className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                <p className="text-slate-400">support@mail.mediatechsolutions.live</p>
              </div>

              <div className="p-8 bg-slate-900 rounded-3xl border border-slate-800 transition-transform hover:scale-[1.02]">
                <div className="w-12 h-12 bg-red-600/10 rounded-xl flex items-center justify-center mb-6">
                  <MapPin className="text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                <p className="text-slate-400">1 Reid Avenue</p>
                <p className="text-slate-400">Westmead NSW 2145</p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="bg-slate-900 rounded-3xl p-10 border border-slate-800 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="text-white" size={32} />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">Message Sent!</h2>
                    <p className="text-slate-400">Thank you for reaching out. We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 uppercase">Your Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 uppercase">Email Address</label>
                        <input 
                          required
                          type="email" 
                          placeholder="john@company.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 uppercase">Service Interested In</label>
                      <select className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none">
                        <option>Consultancy & Design</option>
                        <option>Event Operations</option>
                        <option>Equipment Sales</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 uppercase">Message</label>
                      <textarea 
                        required
                        rows={5}
                        placeholder="Tell us about your project..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-xl transition-all shadow-xl shadow-red-900/30 flex items-center justify-center space-x-3"
                    >
                      <span>Send Message</span>
                      <Send size={24} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="mt-20 px-4 max-w-7xl mx-auto">
        <div className="w-full h-96 bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative group">
          <div className="absolute inset-0 grayscale contrast-125 opacity-30">
            <img 
               src="https://picsum.photos/seed/mediatech_map/1600/600" 
               alt="Map placeholder" 
               className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-6 bg-slate-950/90 backdrop-blur border border-red-500/50 rounded-2xl text-center shadow-2xl">
              <MapPin className="text-red-500 mx-auto mb-2" size={32} />
              <p className="text-white font-bold">MediaTech Solutions</p>
              <p className="text-slate-400 text-sm">1 Reid Avenue, Westmead NSW 2145</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
