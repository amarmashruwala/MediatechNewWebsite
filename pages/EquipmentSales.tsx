
import React from 'react';
import { ShoppingBag, Star, Zap, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const EquipmentSales: React.FC = () => {
  const equipmentImageUrl = "https://drive.google.com/thumbnail?id=1py0CqFW5vUZr8zESRKTMwLL4cdXz9qyR&sz=w1920-h1080";

  return (
    <div className="pt-24">
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-6xl font-black text-white mb-6">Equipment <span className="text-red-600">Sales</span></h1>
          <p className="text-xl text-slate-400 max-w-2xl">Innovative Audio Visual and Live Streaming Equipment sourced from global industry leaders.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
              <div className="order-2 md:order-1">
                 <img src={equipmentImageUrl} alt="Professional Media Equipment" className="rounded-3xl shadow-2xl border border-slate-800 w-full h-auto object-cover max-h-[600px]" />
              </div>
              <div className="order-1 md:order-2 flex flex-col justify-center">
                 <h2 className="text-4xl font-bold text-white mb-6 italic">Only the best gear for the best results.</h2>
                 <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                    We don't just sell boxes; we sell curated solutions. As consultants, we know which equipment performs under pressure. Our inventory includes cutting-edge technology for studios, newsrooms, and corporate meeting spaces.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex items-start space-x-3">
                       <Star className="text-red-500 shrink-0" />
                       <div>
                          <h4 className="text-white font-bold">Premium Brands</h4>
                          <p className="text-slate-500 text-sm">Direct partnerships with Tier-1 manufacturers.</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-3">
                       <Zap className="text-red-500 shrink-0" />
                       <div>
                          <h4 className="text-white font-bold">Latest Tech</h4>
                          <p className="text-slate-500 text-sm">Early access to new AV and broadcast gear.</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-3">
                       <Shield className="text-red-500 shrink-0" />
                       <div>
                          <h4 className="text-white font-bold">Warranty Support</h4>
                          <p className="text-slate-500 text-sm">Official local support and maintenance.</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-3">
                       <Heart className="text-red-500 shrink-0" />
                       <div>
                          <h4 className="text-white font-bold">Post-Sale Care</h4>
                          <p className="text-slate-500 text-sm">Training and configuration assistance.</p>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="bg-slate-900 rounded-3xl p-12 text-center border border-slate-800">
              <ShoppingBag className="mx-auto text-red-500 mb-6" size={48} />
              <h3 className="text-3xl font-black text-white mb-4 italic">Bespoke Equipment Sourcing</h3>
              <p className="text-slate-400 text-lg mb-8 max-w-xl mx-auto">Looking for a specific set of PTZ cameras or a custom media server? Our procurement team can source any high-end media tech you need.</p>
              <Link to="/contact" className="px-8 py-4 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all">
                 Request Inventory List
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentSales;
