
import React from 'react';
import { ShoppingBag, Star, Zap, Shield, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EquipmentProps {
  theme?: string;
}

const EquipmentSales: React.FC<EquipmentProps> = ({ theme = 'dark' }) => {
  const equipmentImageUrl = "https://drive.google.com/thumbnail?id=1py0CqFW5vUZr8zESRKTMwLL4cdXz9qyR&sz=w1920-h1080";

  return (
    <div className={`pt-24 transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950' : 'bg-slate-50'}`}>
      <section className={`py-20 border-b transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-950 border-slate-900' : 'bg-slate-100 border-slate-200'}`}>
        <div className="max-w-7xl mx-auto px-4">
          <h1 className={`text-6xl font-black mb-6 transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>
            Equipment <span className="text-red-600">Sales</span>
          </h1>
          <p className={`text-xl max-w-2xl transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Innovative Audio Visual and Live Streaming Equipment sourced from global industry leaders.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
              <div className="order-2 md:order-1">
                 <img src={equipmentImageUrl} alt="Professional Media Equipment" className={`rounded-3xl shadow-2xl border w-full h-auto object-cover max-h-[600px] transition-colors duration-500 ${theme === 'dark' ? 'border-slate-800' : 'border-slate-100'}`} />
              </div>
              <div className="order-1 md:order-2 flex flex-col justify-center">
                 <h2 className={`text-4xl font-bold mb-6 italic transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Only the best gear for the best results.</h2>
                 <p className={`text-lg mb-8 leading-relaxed transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-700'}`}>
                    We don't just sell boxes; we sell curated solutions. As consultants, we know which equipment performs under pressure. Our inventory includes cutting-edge technology for studios, newsrooms, and corporate meeting spaces.
                 </p>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {[
                      { icon: <Star />, title: 'Premium Brands', desc: 'Direct partnerships with Tier-1 manufacturers.' },
                      { icon: <Zap />, title: 'Latest Tech', desc: 'Early access to new AV and broadcast gear.' },
                      { icon: <Shield />, title: 'Warranty Support', desc: 'Official local support and maintenance.' },
                      { icon: <Heart />, title: 'Post-Sale Care', desc: 'Training and configuration assistance.' }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <div className="text-red-500 shrink-0">{item.icon}</div>
                        <div>
                          <h4 className={`font-bold transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-900'}`}>{item.title}</h4>
                          <p className={`text-sm transition-colors ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>

           <div className={`rounded-3xl p-12 text-center border transition-colors duration-500 ${theme === 'dark' ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200 shadow-sm'}`}>
              <ShoppingBag className="mx-auto text-red-500 mb-6" size={48} />
              <h3 className={`text-3xl font-black mb-4 italic transition-colors ${theme === 'dark' ? 'text-white' : 'text-slate-950'}`}>Bespoke Equipment Sourcing</h3>
              <p className={`text-lg mb-8 max-w-xl mx-auto transition-colors ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>Looking for a specific set of PTZ cameras or a custom media server? Our procurement team can source any high-end media tech you need.</p>
              <Link to="/contact" className={`px-8 py-4 font-bold rounded-xl transition-all inline-block ${theme === 'dark' ? 'bg-red-600 text-white hover:bg-red-700' : 'bg-slate-950 text-white hover:bg-slate-800'}`}>
                 Request Inventory List
              </Link>
           </div>
        </div>
      </section>
    </div>
  );
};

export default EquipmentSales;
