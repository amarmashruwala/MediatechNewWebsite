
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Monitor, Globe, Video, Settings, ShoppingCart, Star } from 'lucide-react';

interface HomeProps {
  theme?: string;
}

const Home: React.FC<HomeProps> = () => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuAbjK0MV29CflD1o5D27Z9XUf8UarahJkMXXefHuiHceqvpba6LI30u0AWQmJKUy0tLqs09jxPCLDkJsEzZkcWb_NThA2IDwKrkfPHsOxwSK5KsHGDFcd_i_dAZYe_NfOLhzuD6RswHzjoOPcBaJrJFhDV8FQyfZHYOvSJzsHP4jlgxFcuGjijPURZgDZvXrfNcjCLEg1F0ZoIEZBd10HVAvQ-52IaE0T8MAi_5tDElWmwPIEeoOYXvHCnGIJsi-jNKgsIzUD7wH6c";

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Professional broadcast studio console" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-10 lg:col-span-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary font-label text-xs tracking-[0.2em] uppercase font-bold">Live Transmission Active</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Sydney's Audio Visual & <span className="text-gradient">Live Streaming</span> Experts
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant max-w-2xl font-light leading-relaxed mb-10">
              From high-end AI Media Systems to seamless Livestream Events, we bridge the gap between Technology, Content Distribution and Audience Engagement.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary-gradient text-on-primary-container px-10 py-5 rounded-xl font-black text-lg shadow-xl shadow-primary-container/20 hover:scale-105 transition-transform flex items-center">
                Start a Project
              </Link>
              <Link to="/projects" className="border border-outline-variant hover:bg-surface-variant/30 text-on-surface px-10 py-5 rounded-xl font-black text-lg transition-all backdrop-blur-md">
                Our Work
              </Link>
            </div>
          </div>
        </div>
        
        {/* Subtle Neon Accents */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-primary/10 blur-[120px] rounded-full -mr-20 -mb-20"></div>
      </section>

      {/* Comprehensive Solutions: Bento Grid */}
      <section className="py-32 bg-surface-container-lowest relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <h2 className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-4">Core Competencies</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">Comprehensive Solutions</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-surface-container-low p-10 rounded-xl overflow-hidden hover:bg-surface-container transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={96} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-8">
                  <Video className="text-primary" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-on-surface">Event Operations</h4>
                <p className="text-on-surface-variant leading-relaxed">Flawless execution of Virtual and Hybrid Meetings and high-impact Live Streaming Events</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30 group-hover:border-primary/30 transition-colors">
                <Link to="/event-ops" className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
                  Explore Service <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-surface-container-high p-10 rounded-xl overflow-hidden hover:bg-surface-container-highest transition-all duration-500 md:scale-105 z-10 shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Settings size={96} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center mb-8">
                  <Monitor className="text-secondary" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-on-surface">Consultancy & Design</h4>
                <p className="text-on-surface-variant leading-relaxed">Architecting bespoke On Premise and Cloud infrastructure using AI-driven workflows. We design the future of communication systems.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30 group-hover:border-secondary/30 transition-colors">
                <Link to="/consultancy" className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest">
                  View Designs <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-surface-container-low p-10 rounded-xl overflow-hidden hover:bg-surface-container transition-all duration-500">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <ShoppingCart size={96} />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-tertiary/10 rounded-lg flex items-center justify-center mb-8">
                  <ShoppingCart className="text-tertiary" size={32} />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-on-surface">Equipment Sales</h4>
                <p className="text-on-surface-variant leading-relaxed">Direct access to industry-leading media technology hardware. Authorized partner for premium audio visual & broadcast brands.</p>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/30 group-hover:border-tertiary/30 transition-colors">
                <Link to="/equipment" className="inline-flex items-center gap-2 text-tertiary font-bold text-sm uppercase tracking-widest">
                  Browse Store <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black italic tracking-tight text-on-surface leading-tight mb-4">
                "Transforming how the world communicates"
              </h2>
              <p className="text-on-surface-variant text-lg font-medium">
                Trusted by global innovators and creative leaders.
              </p>
            </div>
            <Link to="/contact" className="border-2 border-primary text-primary hover:bg-primary hover:text-on-primary px-8 py-3 rounded-xl font-bold transition-all">
              Join our Clients
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
              <p className="text-on-surface italic mb-8 text-lg leading-relaxed">
                "MediaTech Solutions was simply amazing! Couldn't have ask for a better partner! Everything was on point! I highly recommended, you won't be disappointed!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-primary font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-on-surface">Shelina Nicholas</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
              <p className="text-on-surface italic mb-8 text-lg leading-relaxed">
                "MediaTech Solutions exceeded all expectations! Our live streaming systems perform flawlessly! Absolutely recommend their services - you'll be thrilled with the results!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-secondary font-bold text-lg">
                  B
                </div>
                <div>
                  <p className="font-bold text-on-surface">Brian Moten</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
              <p className="text-on-surface italic mb-8 text-lg leading-relaxed">
                "Their attention to detail in AV networked systems is unparalleled. They transformed our corporate communications overnight."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-tertiary font-bold text-lg">
                  S
                </div>
                <div>
                  <p className="font-bold text-on-surface">Sarah Jenkins</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-surface-container-low p-10 rounded-2xl border border-outline-variant/20 hover:border-primary/30 transition-all group">
              <p className="text-on-surface italic mb-8 text-lg leading-relaxed">
                "Seamless implementation of our 24/7 broadcast system. The technical support and consulting provided were top-notch."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-on-surface-variant font-bold text-lg">
                  D
                </div>
                <div>
                  <p className="font-bold text-on-surface">David Chen</p>
                  <div className="flex gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} className="fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Client Logos */}
          <div className="mt-24 pt-12 border-t border-outline-variant/20 flex flex-wrap justify-center md:justify-between gap-12 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            <div className="text-2xl font-black">WSTI</div>
            <div className="text-2xl font-black">GLOBAL_EVENTS</div>
            <div className="text-2xl font-black">SYDNEY_MEDIA</div>
            <div className="text-2xl font-black">STREAM_INC</div>
            <div className="text-2xl font-black">AV_PIONEER</div>
          </div>
        </div>
      </section>

      {/* Ready to Elevate: Final CTA */}
      <section className="py-32 bg-surface-container-highest relative overflow-hidden mx-6 rounded-3xl mb-32">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#ff5451,transparent_70%)] blur-[100px]"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-on-surface mb-8">
            Ready to Elevate Your Media Communication?
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-light">
            Join the industry leaders who trust MediaTech Solutions for mission-critical broadcasts and high-impact AV design.
          </p>
          <Link to="/contact" className="inline-block btn-primary-gradient text-on-primary-container px-12 py-6 rounded-xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
