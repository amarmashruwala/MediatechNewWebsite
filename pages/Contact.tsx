
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

interface ContactProps {
  theme?: string;
}

const Contact: React.FC<ContactProps> = ({ theme = 'dark' }) => {
  const [submitted, setSubmitted] = useState(false);
  const contactEmail = "support@mail.mediatechsolutions.live";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const service = formData.get('service');
    const message = formData.get('message');

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
    <div className={`pt-24 pb-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className={`text-5xl md:text-7xl font-black mb-8 transition-colors duration-500 ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
              Get In <span className="text-red-600">Touch</span>
            </h1>
            <p className={`text-xl transition-colors duration-500 ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Have a vision you want to bring to life? Our engineers and consultants are ready to discuss your next big media technology move.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              {[
                { icon: <Phone />, title: 'Call Us', value: '+61 (0)401 533 665' },
                { icon: <Mail />, title: 'Email Us', value: contactEmail },
                { icon: <MapPin />, title: 'Visit Us', value: '1 Reid Avenue, Westmead NSW 2145' }
              ].map((item, idx) => (
                <div key={idx} className={`p-8 rounded-3xl border transition-all hover:scale-[1.02] ${theme === 'dark' ? 'bg-slate-900 border-slate-800 shadow-2xl' : 'bg-white border-slate-200 shadow-sm hover:shadow-md'}`}>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${theme === 'dark' ? 'bg-red-600/10 text-red-500' : 'bg-red-50 text-red-600'}`}>
                    {item.icon}
                  </div>
                  <h3 className={`text-xl font-bold mb-2 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                  <p className={`font-medium break-all transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>{item.value}</p>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className={`rounded-3xl p-10 border shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
                {submitted ? (
                  <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                    <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="text-white" size={32} />
                    </div>
                    <h2 className={`text-3xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>Opening Email Client...</h2>
                    <p className={`transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>If your email client doesn't open automatically, please contact us directly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Your Name</label>
                        <input 
                          required name="name" type="text" placeholder="John Doe"
                          className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Email Address</label>
                        <input 
                          required name="email" type="email" placeholder="john@company.com"
                          className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Service Interested In</label>
                      <select name="service" className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 appearance-none ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200 text-slate-900'}`}>
                        <option>Consultancy & Design</option>
                        <option>Event Operations</option>
                        <option>Equipment Sales</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className={`text-sm font-semibold uppercase ${theme === 'dark' ? 'text-slate-400' : 'text-slate-500'}`}>Message</label>
                      <textarea 
                        name="message" required rows={5} placeholder="Tell us about your project..."
                        className={`w-full border rounded-xl px-5 py-4 transition-all focus:outline-none focus:ring-2 focus:ring-red-500/50 resize-none ${theme === 'dark' ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'}`}
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-black text-xl py-5 rounded-xl transition-all shadow-xl shadow-red-900/30 flex items-center justify-center space-x-3 active:scale-[0.98]"
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
      
      <section className="mt-20 px-4 max-w-7xl mx-auto">
        <div className={`w-full h-[500px] rounded-3xl overflow-hidden border relative shadow-2xl transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.507386766432!2d150.9856511!3d-33.8118086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a304495c25e3%3A0xc638f3829b537c3d!2s1%20Reid%20Ave%2C%20Westmead%20NSW%202145!5e0!3m2!1sen!2sau!4v1709100000000!5m2!1sen!2sau" 
            width="100%" height="100%" style={{ border: 0, filter: theme === 'dark' ? 'grayscale(0.8) contrast(1.2) invert(0.9) hue-rotate(180deg)' : 'grayscale(0.2)' }} 
            allowFullScreen={true} loading="lazy" title="MediaTech Solutions Location"
          ></iframe>
          
          <div className={`absolute top-8 left-8 p-6 backdrop-blur-lg border rounded-2xl shadow-2xl max-w-xs transition-transform hover:scale-105 ${theme === 'dark' ? 'bg-slate-950/90 border-red-500/50' : 'bg-white/95 border-red-200'}`}>
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                <MapPin className="text-white" size={20} />
              </div>
              <div>
                <p className={`font-black text-lg ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>MediaTech</p>
                <p className="text-red-500 font-bold text-xs uppercase tracking-tighter">HQ Location</p>
              </div>
            </div>
            <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`}>
              1 Reid Avenue, Westmead NSW 2145, Australia
            </p>
            <a href="https://maps.google.com/?q=1+Reid+Avenue+Westmead+NSW+2145" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-red-500 font-bold text-xs hover:text-red-400 transition-colors">
              Get Directions &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
