
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  theme?: string;
}

const Contact: React.FC<ContactProps> = () => {
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
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ff5451,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-primary"></span>
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Get in Touch</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Let's <span className="text-gradient">Connect</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            Have a vision you want to bring to life? Our consultants and engineers are ready to discuss your next big media technology move.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-20">
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-8">
              {[
                { icon: <Phone size={24} />, title: 'Call Us', value: '+61 (0)401 533 665', label: 'Direct Line' },
                { icon: <Mail size={24} />, title: 'Email Us', value: contactEmail, label: 'Support & Inquiries' },
                { icon: <MapPin size={24} />, title: 'Visit Us', value: '1 Reid Avenue, Westmead NSW 2145', label: 'Sydney HQ' }
              ].map((item, idx) => (
                <div key={idx} className="group p-10 bg-surface-container rounded-xl border border-outline-variant/20 hover:border-primary/50 transition-all">
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-primary tracking-widest uppercase mb-2">{item.label}</p>
                  <h3 className="text-2xl font-bold text-on-surface mb-2">{item.title}</h3>
                  <p className="text-on-surface-variant font-light break-all">{item.value}</p>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <div className="bg-surface-container-high p-12 rounded-2xl border border-outline-variant/30 shadow-2xl">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="text-primary" size={48} />
                    </div>
                    <h2 className="text-4xl font-black text-on-surface mb-4">Message Sent!</h2>
                    <p className="text-on-surface-variant text-lg font-light">
                      Opening your email client... If it doesn't open, please contact us directly at <span className="text-primary font-bold">{contactEmail}</span>.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Your Name</label>
                        <input 
                          required name="name" type="text" placeholder="John Doe"
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-6 py-5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Email Address</label>
                        <input 
                          required name="email" type="email" placeholder="john@company.com"
                          className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-6 py-5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all placeholder:text-on-surface-variant/30"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Service Interested In</label>
                      <select name="service" className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-6 py-5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all appearance-none cursor-pointer">
                        <option>Consultancy & Design</option>
                        <option>Event Operations</option>
                        <option>Equipment Sales</option>
                        <option>Other / General Inquiry</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Message</label>
                      <textarea 
                        name="message" required rows={5} placeholder="Tell us about your project requirements..."
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl px-6 py-5 text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none placeholder:text-on-surface-variant/30"
                      ></textarea>
                    </div>
                    <button 
                      type="submit"
                      className="w-full btn-primary-gradient text-on-primary-container font-black text-xl py-6 rounded-xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Send Inquiry</span>
                      <Send size={24} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative h-[600px] rounded-3xl overflow-hidden border border-outline-variant/30 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.507386766432!2d150.9856511!3d-33.8118086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a304495c25e3%3A0xc638f3829b537c3d!2s1%20Reid%20Ave%2C%20Westmead%20NSW%202145!5e0!3m2!1sen!2sau!4v1709100000000!5m2!1sen!2sau" 
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9) brightness(0.8)' }} 
              allowFullScreen={true} loading="lazy" title="MediaTech Solutions Location"
            ></iframe>
            
            <div className="absolute top-10 left-10 p-10 bg-surface-container-highest/90 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl max-w-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                  <MapPin className="text-on-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-on-surface">Sydney HQ</h4>
                  <p className="text-primary font-bold text-xs uppercase tracking-widest">MediaTech Solutions</p>
                </div>
              </div>
              <p className="text-on-surface-variant leading-relaxed mb-8 font-light">
                1 Reid Avenue, Westmead NSW 2145, Australia
              </p>
              <a 
                href="https://maps.google.com/?q=1+Reid+Avenue+Westmead+NSW+2145" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest hover:gap-4 transition-all"
              >
                Get Directions <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
