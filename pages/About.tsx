
import React from 'react';
import { Link } from 'react-router-dom';
import { Users, ArrowRight, CheckCircle2, Award, Target } from 'lucide-react';

interface AboutProps {
  theme?: string;
}

const About: React.FC<AboutProps> = () => {
  const welcomeImageUrl = "https://pub-5bd76d672dfa4584acbd1864caf984e9.r2.dev/img_2155-kgbRwb1YfpJbOFH6.webp";

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
            <span className="text-primary font-bold text-xs tracking-[0.3em] uppercase">Our Story</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            About <span className="text-gradient">MediaTech</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            Sydney's premier destination for high-end media technology, architecting the future of immersive communication through precision engineering and AI-driven workflows.
          </p>
        </div>
      </section>

      {/* Core Mission Section */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-30"></div>
              <img 
                src={welcomeImageUrl} 
                alt="MediaTech Infrastructure" 
                className="relative z-10 rounded-2xl shadow-2xl border border-outline-variant/30 w-full h-auto object-cover aspect-[4/3]"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute -bottom-10 -right-10 bg-surface-container-highest p-10 rounded-2xl shadow-2xl border border-outline-variant/30 hidden md:block">
                <div className="text-5xl font-black text-primary mb-2">20+</div>
                <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">Years of Excellence</div>
              </div>
            </div>
            
            <div>
              <h2 className="text-xs font-bold text-secondary tracking-[0.3em] uppercase mb-6">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-8 leading-tight">
                Empowering Vision Through <span className="italic">Advanced Technology.</span>
              </h3>
              <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed font-light">
                <p>
                  At MediaTech Solutions, we are dedicated to helping you create impactful and cost-effective meetings, events, and content. We specialize in designing, setting up, and operating IT and AV systems that empower businesses to produce high-quality virtual and hybrid events.
                </p>
                <p>
                  With extensive experience in IT and AV, we understand the challenges businesses face today. We blend technical expertise with creative insight to deliver solutions that not only meet your needs but elevate your content and operations to new heights.
                </p>
              </div>
              
              <div className="mt-12 grid grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Target className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Precision</h4>
                    <p className="text-sm text-on-surface-variant">Zero-latency execution for mission-critical events.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Award className="text-secondary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-on-surface mb-1">Innovation</h4>
                    <p className="text-sm text-on-surface-variant">Pioneering AI-driven media workflows.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-xs font-bold text-primary tracking-[0.3em] uppercase mb-4">Our Values</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface">The MediaTech Standard</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Client-Centric", desc: "Your vision is our blueprint. We architect solutions that align perfectly with your strategic goals." },
              { title: "Technical Mastery", desc: "Deep expertise in both legacy AV and cutting-edge digital media infrastructure." },
              { title: "Reliability", desc: "Redundant systems and expert operators ensure your message is always delivered." }
            ].map((value, idx) => (
              <div key={idx} className="p-10 bg-surface-container rounded-xl border border-outline-variant/20 hover:border-primary/50 transition-colors">
                <CheckCircle2 className="text-primary mb-6" size={32} />
                <h4 className="text-2xl font-bold text-on-surface mb-4">{value.title}</h4>
                <p className="text-on-surface-variant leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-on-surface mb-8">
            Experience the Future of Media
          </h2>
          <p className="text-xl text-on-surface-variant mb-12 font-light">
            Ready to transform your communication infrastructure? Let's build something extraordinary together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-3 btn-primary-gradient text-on-primary-container px-12 py-6 rounded-xl font-black text-xl shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
            Get in Touch <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
