import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Settings, 
  ShoppingCart, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Shield,
  Clock
} from 'lucide-react';

interface WhatWeDoProps {
  theme?: string;
}

const WhatWeDo: React.FC<WhatWeDoProps> = () => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBhAq3GnlBOqOB50rFk-8m6mP9dd51IlFHqc3lQ1LDt91sSq4jUVlgAklAOJBfeu9eYMapuaXa3LdzIN5kF2sk9NBHuMpXPf3kzpXReGOvDbUVLg83nfAcGx029hqakmMkg5RpuVmnDycFaNYSgmz6b5o_qHH-VY_FT6pktgq6Sz54hT186rrZ1fo7DTY5afE7KqifKTvQqWk6LS7C3_oi7Cz-LS8jHRyfVMERYuxIioaDirMBiTQVYSti912ytKvXjDEAXZVm3Aac";

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center px-8 md:px-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImageUrl} 
            alt="Professional Broadcast Studio" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-surface-container-highest rounded-full border border-outline-variant/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Live Infrastructure</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-none uppercase">
            Engineering the <br/>
            <span className="text-gradient">Future of Media</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-xl leading-relaxed font-light">
            From global live streams to bespoke AI-driven workflows, we deliver the precision and technical mastery required for high-stakes broadcast environments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-8 md:px-20 py-32 space-y-32">
        {/* Service Area 1: Event Operations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="text-secondary font-black text-6xl opacity-20">01</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">Event Operations</h2>
            <p className="text-on-surface-variant text-lg font-light">High-stakes technical management and live streaming solutions designed for zero-failure environments. We manage the entire signal chain from source to screen.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold tracking-tight">Multi-Platform Global Streaming</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold tracking-tight">Technical Show Management</span>
              </li>
              <li className="flex items-center gap-4 text-on-surface">
                <CheckCircle2 className="text-primary" size={24} />
                <span className="font-bold tracking-tight">Redundant Signal Routing</span>
              </li>
            </ul>
            <Link to="/event-ops" className="inline-block border border-outline-variant/40 hover:bg-surface-variant/30 px-8 py-3 rounded-xl transition-all font-bold tracking-tight text-on-surface">
              Explore Event Solutions
            </Link>
          </div>
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all"></div>
            <div className="relative rounded-2xl overflow-hidden aspect-video border border-outline-variant/10">
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuADGGL4Tx6Ygi2IhPiAZOJmad0CJz-uWerd5CHPDY_lhyreJT0lgdIKOPmpLJABwzgz6LBIT2wlBKCPXDAXZ0vDDmPgDLrVVipTll1Tcmzc04Zg00lL4-oWqcFLsrBVHKqb9BgFVRG8P9JECs5UgzAFXPuwN8qyTtUlJSQe4CV3QMWM0s56YebDJtAUwL34EsnEfQzfcNw3ayBdJzx78RplJm20ypGOBJeyxLHuaUaGuQjzDXeq1tTmnvP27j9WCw8CrGrF0GToof0" 
                alt="Live Production Console" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 bg-slate-950/60 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <div className="text-xs uppercase font-bold tracking-widest text-primary mb-1">Live Status</div>
                <div className="text-sm font-bold text-white">Latency: 140ms | Signal: Stable</div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Area 2: Consultancy & Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant/10">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQD4po1fmKHDv8ZBqiuAQ9h-eFNWoyyxvuuuDNj44kE3fQJBNuohvTRghlvo00WVqKd3YvS6yzelIjvZkAniKCX5RMShoCACuveSx4sSUOzxVr9c73txgtmIcG6eT2uxuZIRjcbrSbOkek5Yf2-eonRd3IGMW3RUGPcLB-TsARSBU22CKTzJD9AnMnQwt5g4z3yCXaz-tNYk3vsB52-SxFldzukltsuGPZYhIyLCu762zLwRWDb3GJTTKf8qB156OX0DkFBYHbbJY" 
                  alt="Technical Blueprint" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden border border-outline-variant/10 mt-12">
                <img 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9iGdQ6BC89huIYWr0ZV6QRHr3oV1ebXobEuCjqw20wA79CUaMaO1GcZd_mBiw9f8e-Ei9p_w76bnpl2OCOCVCeO42LTHOe_Ti9h22AunzM3jEdOb8jLif61NqH9C9Q54pBGFRmsAJWTE_U-xJ4VlSckqfq1LLslrirGCmy-vskuygcJMeKjP2afGsQQ6nQVjjvpTMc1NOq6lQKjlAqMAp98FBgqrPnATmb0_Vg68T_iLoxMwKVt08qS2AEDvplPU9KIzPgv3Yhu0" 
                  alt="Server Rack" 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 order-1 lg:order-2 space-y-8 lg:pl-12">
            <div className="text-secondary font-black text-6xl opacity-20">02</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-on-surface">Consultancy & Design</h2>
            <p className="text-on-surface-variant text-lg font-light">Bespoke AV infrastructure and AI-integrated workflows. We design the systems that power the next generation of content creators.</p>
            <div className="grid grid-cols-1 gap-6">
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-colors">
                <h4 className="text-primary font-bold mb-2 tracking-tight">AI Content Workflows</h4>
                <p className="text-sm text-on-surface-variant">Automating production pipelines with integrated machine learning models for real-time metadata.</p>
              </div>
              <div className="p-6 bg-surface-container-low rounded-2xl border border-outline-variant/10 hover:border-primary/40 transition-colors">
                <h4 className="text-primary font-bold mb-2 tracking-tight">Infrastructure Audits</h4>
                <p className="text-sm text-on-surface-variant">Technical evaluation of existing setups to identify bottlenecks and security vulnerabilities.</p>
              </div>
            </div>
            <Link to="/consultancy" className="inline-flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest hover:text-primary transition-colors">
              View Design Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Service Area 3: Equipment Sales */}
        <div className="bg-surface-container-low rounded-3xl p-12 relative overflow-hidden border border-outline-variant/10">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyzHr_N_fy3meyZopYAiDLxVcRzCDzIrlUpPKkNtxOOq2hzOlncQl6GlpRyJrcH5_40HP2pu9NVTPsIn8IgYwBWyH6YIz25ac51BDmbq1TrFqOpO2sYaOBM2WEAYrvuyNNCv4piQEnWVIMKk-YNfAkX6TCTpnM6yi1XRCEJRjwZO1UNmVerLBo7BBJFBD2Sdl3MGucYMDNCnGapvoEcUDY7gjMFmgkQw9gFeOz9AsZFPILunrqOb6iFhHfYMpiDCwaGIjwhTngDwA" 
              alt="Camera Lens" 
              className="w-full h-full object-cover" 
              referrerPolicy="no-referrer"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="text-secondary font-black text-6xl opacity-20 mb-4">03</div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6 text-on-surface">Equipment Sales</h2>
            <p className="text-on-surface-variant text-lg mb-12 font-light">Access premium hardware from the industry's leading manufacturers. We don't just sell equipment; we provide vetted solutions that we use in our own productions.</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-black text-on-surface">4K+</span>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">Acquisition</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-black text-on-surface">SMPTE</span>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">Standards</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-2xl font-black text-on-surface">24/7</span>
                <span className="text-xs uppercase tracking-widest text-secondary font-bold">Support</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link to="/equipment" className="bg-on-surface text-background px-8 py-3 rounded-xl font-bold tracking-tight hover:bg-primary transition-colors">
                Browse Inventory
              </Link>
              <Link to="/contact" className="bg-surface-container-highest/50 backdrop-blur-md text-on-surface px-8 py-3 rounded-xl font-bold tracking-tight border border-outline-variant/20 hover:border-primary transition-all">
                Technical Sales Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs / CTA */}
      <section className="py-32 px-8 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-screen-xl mx-auto text-center space-y-12">
          <h2 className="text-5xl font-black tracking-tighter text-on-surface uppercase">Ready to <span className="text-primary">Signal?</span></h2>
          <p className="text-xl text-on-surface-variant max-w-2xl mx-auto font-light leading-relaxed">
            Whether you're planning a global hybrid event or building a state-of-the-art studio, our engineers are ready to deploy.
          </p>
          <div className="flex justify-center items-center gap-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-outline-variant/30"></div>
            <Link to="/contact" className="btn-primary-gradient text-on-primary-container text-lg font-black px-12 py-5 rounded-full shadow-[0_0_40px_rgba(239,68,68,0.2)] hover:scale-105 active:scale-95 transition-all">
              INITIATE CONSULTATION
            </Link>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-outline-variant/30"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
