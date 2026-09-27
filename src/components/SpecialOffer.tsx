import React from 'react';
import { Phone, Users, Clock, Sparkles, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

export const SpecialOffer: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 relative overflow-hidden bg-gradient-to-br from-[#800C0C] via-[#9B1313] to-[#680909] text-white">
      {/* Decorative Arabic geometric pattern overlay */}
      <div className="absolute inset-0 arabian-pattern opacity-25 pointer-events-none" />

      {/* Decorative Warm Glows */}
      <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#DC2626]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#F4C400]/15 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-[#480707] rounded-3xl p-8 sm:p-12 shadow-2xl border-2 border-red-700/80 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#350404] border border-[#F4C400]/60 text-[#F4C400] font-black text-xs mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>Dine-In • Takeaway • Family Feast</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Hungry for Mandi & Shawaya?
            </h2>

            <p className="text-base sm:text-lg text-red-100 leading-relaxed max-w-xl mb-4 font-normal">
              Bring your family and friends and enjoy authentic Arabian flavours at Yamama Shawaya.
            </p>

            <div className="mb-6 p-4 rounded-2xl bg-[#360404] border border-[#F4C400]/70 flex items-center justify-between gap-4 max-w-md w-full shadow-md">
              <div>
                <div className="text-xs font-bold text-[#F4C400] uppercase tracking-wider">Today's Special Combo</div>
                <div className="text-sm font-black text-white">Shawaya + Bishawari Rice</div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-red-300 font-semibold block">Starting from</span>
                <span className="text-lg font-black text-[#F4C400] font-mono">₹ 180</span>
              </div>
            </div>

            {/* Key perks */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md mb-8">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-red-100">
                <div className="w-8 h-8 rounded-full bg-[#360404] border border-[#F4C400]/60 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4 text-[#F4C400]" />
                </div>
                <span>Family Majlis Seating</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold text-red-100">
                <div className="w-8 h-8 rounded-full bg-[#360404] border border-[#F4C400]/60 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#F4C400]" />
                </div>
                <span>Quick Hot Parcel Pack</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Phone className="w-4 h-4 fill-current" />
                <span>Call to Order: {RESTAURANT_INFO.phone1Display}</span>
              </a>

              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Yamama Shawaya, I would like to order a Mandi / Shawaya combo.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3.5 rounded-full shadow-lg transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900 bg-neutral-900 aspect-square sm:aspect-4/3 lg:aspect-square">
              <img
                src={IMAGES.shawayaDish}
                alt="Arabian Shawaya and Mandi Feast at Yamama Shawaya Angadipuram"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 bg-[#3E0606]/95 backdrop-blur-md p-3.5 rounded-2xl border border-red-700/80 text-white flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#F4C400]">Dine-in or Takeaway</div>
                  <div className="text-sm font-black text-white">Angadipuram Town</div>
                </div>
                <span className="text-[11px] font-bold bg-[#F4C400] text-[#171717] px-2.5 py-1 rounded-lg">
                  Hot & Fresh
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
