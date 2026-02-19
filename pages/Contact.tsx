
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const contactEmail = "support@mail.mediatechsolutions.live";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

    // Constructing the mailto link
    const subject = encodeURIComponent(`New Inquiry from ${name}: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}`
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    
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
                <p className="text-slate-400 break-all">{contactEmail}</p>
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
                    <h2 className="text-3xl font-bold text-white mb-4">Opening Email Client...</h2>
                    <p className="text-slate-400">Your inquiry is being prepared. If your email client doesn't open automatically, please contact us directly at {contactEmail}.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 uppercase">Your Name</label>
                        <input 
                          required
                          name="name"
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-400 uppercase">Email Address</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          placeholder="john@company.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 uppercase">Service Interested In</label>
                      <select name="service" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none">
                        <option>Consultancy & Design</option>
                        <option>Event Operations</option>
                        <option>Equipment Sales</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-400 uppercase">Message</label>
                      <textarea 
                        name="message"
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
      
      {/* Live Map Section */}
      <section className="mt-20 px-4 max-w-7xl mx-auto">
        <div className="w-full h-[500px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 relative shadow-2xl">
          {/* Real Google Maps Embed for the specific location */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.507386766432!2d150.9856511!3d-33.8118086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a304495c25e3%3A0xc638f3829b537c3d!2s1%20Reid%20Ave%2C%20Westmead%20NSW%202145!5e0!3m2!1sen!2sau!4v1709100000000!5m2!1sen!2sau" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(0.8) contrast(1.2) invert(0.9) hue-rotate(180deg)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="MediaTech Solutions Location"
            className="absolute inset-0"
          ></iframe>
          
          {/* Overlay address card */}
          <div className="absolute top-8 left-8 p-6 bg-slate-950/90 backdrop-blur-lg border border-red-500/50 rounded-2xl text-left shadow-2xl max-w-xs transition-transform hover:scale-105">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className="text-white font-black text-lg">MediaTech</p>
                <p className="text-red-500 font-bold text-xs uppercase tracking-tighter">HQ Location</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              1 Reid Avenue,<br />
              Westmead NSW 2145<br />
              Australia
            </p>
            <a 
              href="https://maps.google.com/?q=1+Reid+Avenue+Westmead+NSW+2145" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block text-red-500 font-bold text-xs hover:text-red-400 transition-colors"
            >
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
