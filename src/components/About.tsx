import React from 'react';
import { Sparkles, Utensils, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { IMAGES, RESTAURANT_INFO } from '../data/restaurantData';

interface AboutProps {
  onViewFullAboutClick?: () => void;
}

export const About: React.FC<AboutProps> = ({ onViewFullAboutClick }) => {
  const features = [
    {
      icon: Sparkles,
      title: 'Authentic Flavours',
      desc: 'Traditional Arabian-inspired taste.',
      subdesc: 'Infused with Yemeni and Gulf spices, dried black limes, and natural charcoal aroma.',
    },
    {
      icon: ShieldCheck,
      title: 'Fresh Ingredients',
      desc: 'Quality ingredients prepared fresh.',
      subdesc: 'Premium long-grain basmati, fresh tender chicken, and farm-sourced produce daily.',
    },
    {
      icon: HeartHandshake,
      title: 'Made With Passion',
      desc: 'Carefully prepared for every guest.',
      subdesc: 'Slow-cooked in authentic tradition with genuine Kerala hospitality for families.',
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#6A0E0E] text-white relative overflow-hidden">
      {/* Decorative Warm Red Background Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#F4C400]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Showcase with Image & Floating Ambiance Card */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Main Image Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900/90 bg-neutral-900">
                <img
                  src={IMAGES.diningAmbiance}
                  alt="Yamama Shawaya Restaurant Dining Ambiance in Angadipuram"
                  className="w-full h-[360px] sm:h-[420px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#F4C400] mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Angadipuram, Malappuram</span>
                  </div>
                  <h4 className="text-base font-bold">Family Dining Majlis & Cozy Atmosphere</h4>
                </div>
              </div>

              {/* Secondary Overlapping Food Card */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 w-52 sm:w-64 bg-[#450707] p-3 sm:p-4 rounded-2xl shadow-2xl border border-red-700/80 hidden sm:flex items-center gap-3">
                <img
                  src={IMAGES.shawayaDish}
                  alt="Shawaya roasted chicken"
                  className="w-14 h-14 rounded-xl object-cover shrink-0 border border-[#F4C400]"
                />
                <div>
                  <span className="text-[10px] font-bold text-[#F4C400] uppercase tracking-wider block">
                    Chef Specialty
                  </span>
                  <div className="text-xs sm:text-sm font-black text-white leading-tight">
                    Juicy Shawaya Chicken
                  </div>
                  <span className="text-[10px] text-red-200">Fresh Rotisserie Grills</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Story & 3 Feature Cards */}
          <div className="lg:col-span-6 order-1 lg:order-2 flex flex-col items-start">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3F0707] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
              <Utensils className="w-3.5 h-3.5" />
              <span>Our Culinary Journey</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Welcome to Yamama Shawaya
            </h2>

            <p className="text-base sm:text-lg text-red-100 leading-relaxed mb-8 font-normal">
              Yamama Shawaya brings the rich flavours of Arabian cuisine to Angadipuram.
              From aromatic mandi rice to juicy shawaya and grilled favourites, every dish
              is prepared with care to give you a memorable dining experience.
            </p>

            {/* 3 Feature Cards */}
            <div className="grid grid-cols-1 gap-4 w-full">
              {features.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#520909] border border-red-800/80 hover:border-[#F4C400] shadow-sm hover:shadow-lg transition-all duration-300 flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#3A0505] border border-[#F4C400]/50 flex items-center justify-center shrink-0 shadow-xs">
                      <IconComponent className="w-6 h-6 text-[#F4C400]" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-black text-white">{item.title}</h3>
                        <span className="text-xs text-red-300 font-medium hidden sm:inline">
                          — {item.desc}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-red-200 mt-1 leading-normal font-normal">
                        {item.subdesc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {onViewFullAboutClick && (
              <div className="mt-8">
                <button
                  type="button"
                  onClick={onViewFullAboutClick}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-sm shadow-md transition-transform hover:scale-105 cursor-pointer"
                >
                  <span>Explore Our Full Story & Gallery</span>
                  <span className="text-base font-bold">→</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
