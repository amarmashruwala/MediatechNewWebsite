
import React from 'react';
import { Star, Zap, Shield, Heart, ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EquipmentProps {
  theme?: string;
}

const EquipmentSales: React.FC<EquipmentProps> = () => {
  const equipmentImageUrl = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1200";

  return (
    <div className="pt-20">
      {/* Header Section */}
      <section className="relative py-32 overflow-hidden bg-surface-container-lowest">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,#ff5451,transparent_50%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[1px] bg-tertiary"></span>
            <span className="text-tertiary font-bold text-xs tracking-[0.3em] uppercase">Premium Hardware</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-on-surface mb-8">
            Equipment <span className="text-gradient">Sales</span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-3xl font-light leading-relaxed">
            Direct access to industry-leading broadcast hardware and innovative audio-visual systems. We source only the most reliable gear for mission-critical operations.
          </p>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-tertiary/20 blur-3xl rounded-full opacity-20"></div>
              <img 
                src={equipmentImageUrl} 
                alt="Professional Media Equipment" 
                className="relative z-10 rounded-2xl shadow-2xl border border-outline-variant/30 w-full h-auto object-cover aspect-video"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            
            <div>
              <h2 className="text-xs font-bold text-tertiary tracking-[0.3em] uppercase mb-6">Curated Solutions</h2>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-8 leading-tight">
                Only the Best Gear for <span className="italic text-tertiary">Superior Results.</span>
              </h3>
              <p className="text-xl text-on-surface-variant mb-12 leading-relaxed font-light">
                We don't just sell boxes; we sell curated solutions. As consultants, we know which equipment performs under pressure. Our inventory includes cutting-edge technology for studios, newsrooms, and corporate meeting spaces.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <Star size={20} />, title: 'Premium Brands', desc: 'Direct partnerships with Tier-1 manufacturers.' },
                  { icon: <Zap size={20} />, title: 'Latest Tech', desc: 'Early access to new AV and broadcast gear.' },
                  { icon: <Shield size={20} />, title: 'Warranty Support', desc: 'Official local support and maintenance.' },
                  { icon: <Heart size={20} />, title: 'Post-Sale Care', desc: 'Training and configuration assistance.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-tertiary/10 rounded-lg flex items-center justify-center shrink-0">
                      <div className="text-tertiary">{item.icon}</div>
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface mb-1">{item.title}</h4>
                      <p className="text-sm text-on-surface-variant font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bespoke Sourcing Section */}
      <section className="py-32 bg-surface-container-lowest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-surface-container-high p-16 rounded-3xl border border-outline-variant/30 shadow-2xl relative overflow-hidden text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-tertiary/5 blur-3xl rounded-full -mr-32 -mt-32"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-tertiary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                <ShoppingCart className="text-tertiary" size={40} />
              </div>
              <h3 className="text-4xl md:text-5xl font-black tracking-tight text-on-surface mb-6">Bespoke Equipment Sourcing</h3>
              <p className="text-xl text-on-surface-variant mb-12 font-light leading-relaxed">
                Looking for a specific set of PTZ cameras or a custom media server? Our procurement team can source any high-end media tech you need, anywhere in the world.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-tertiary text-on-tertiary px-12 py-6 rounded-xl font-black text-xl shadow-2xl shadow-tertiary/20 hover:scale-105 transition-all">
                Request Inventory List <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentSales;
