import React from 'react';
import { Phone, ArrowRight, Star, UtensilsCrossed, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO, IMAGES } from '../data/restaurantData';

interface HeroProps {
  onViewMenuClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewMenuClick }) => {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-[#580B0B] via-[#721010] to-[#630E0E] text-white pt-8 pb-16 lg:py-20">
      {/* Decorative Subtle Arabian Pattern Background */}
      <div className="absolute inset-0 arabian-pattern opacity-25 pointer-events-none" />

      {/* Warm Ambient Red and Gold Lighting Glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-[#F4C400]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-6 flex flex-col items-start z-10">
            {/* Small Brand Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A0505] border border-[#F4C400]/60 text-[#F4C400] font-bold text-xs sm:text-sm mb-6 shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#F4C400] animate-pulse"></span>
              <span>Mandi • Shawaya • Arabian Cuisine</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.08] mb-6">
              Authentic Mandi.{' '}
              <span className="relative inline-block text-[#F4C400]">
                <span className="relative z-10">Unforgettable Taste.</span>
                <span className="absolute left-0 bottom-1.5 w-full h-3.5 bg-red-950/60 -z-0 rounded-sm"></span>
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-red-100 leading-relaxed max-w-xl mb-8 font-normal">
              Experience delicious Arabian flavours, perfectly cooked mandi, shawaya and grilled
              specialties at Yamama Shawaya, Angadipuram.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onViewMenuClick}
                className="inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-base px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#F4C400] cursor-pointer"
              >
                <span>View Menu</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="inline-flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-base px-6 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <Phone className="w-5 h-5 text-[#F4C400] fill-current" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Social Proof & Quick Highlights Bar */}
            <div className="pt-6 border-t border-red-800/80 w-full grid grid-cols-3 gap-3">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-white font-black text-lg sm:text-xl">
                  <span>{RESTAURANT_INFO.rating}</span>
                  <div className="flex text-[#F4C400]">
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
                <span className="text-[11px] text-red-200 font-medium">
                  {RESTAURANT_INFO.reviewCount} Ratings
                </span>
              </div>

              <div className="flex flex-col border-l border-red-800/80 pl-3">
                <div className="flex items-center gap-1 text-white font-black text-lg sm:text-xl">
                  <UtensilsCrossed className="w-4 h-4 text-[#F4C400]" />
                  <span>100%</span>
                </div>
                <span className="text-[11px] text-red-200 font-medium">Halal Certified</span>
              </div>

              <div className="flex flex-col border-l border-red-800/80 pl-3">
                <div className="flex items-center gap-1 text-white font-black text-lg sm:text-xl">
                  <Sparkles className="w-4 h-4 text-[#F4C400]" />
                  <span>Fresh</span>
                </div>
                <span className="text-[11px] text-red-200 font-medium">Slow Cooked Daily</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-[#F4C400] via-[#DC2626] to-[#F4C400] opacity-35 blur-xl animate-pulse-subtle" />

              {/* Main Dish Imagery Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900/80 bg-neutral-900 aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={IMAGES.heroMandi}
                  alt="Traditional Arabian Mandi Platter with succulent roasted chicken, fragrant basmati rice, and savory garnishes at Yamama Shawaya Angadipuram"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  fetchPriority="high"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent pointer-events-none" />

                {/* Floating Bottom Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#3E0606]/90 backdrop-blur-md p-4 rounded-2xl border border-red-700/60 shadow-xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F4C400] text-[#171717] flex items-center justify-center font-black text-lg shadow-sm">
                      🍗
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-white leading-tight">
                        Authentic Arabian Mandi
                      </h4>
                      <p className="text-[11px] text-red-200">
                        Aged Basmati • Slow Pit Steamed
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-black bg-[#F4C400] text-[#171717] px-3 py-1.5 rounded-xl shadow-xs">
                    Angadipuram
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
