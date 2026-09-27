import React from 'react';
import { Drumstick, Sparkles, Flame, Heart, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const points = [
    {
      icon: Drumstick,
      emoji: '🍗',
      title: 'Authentic Arabian Taste',
      description:
        'Time-honored recipes spiced with traditional Yemeni cardamom, dried black limes, and aromatic Arabian marinades.',
      highlight: 'Traditional Spices',
    },
    {
      icon: Sparkles,
      emoji: '🍚',
      title: 'Fresh & Aromatic Mandi',
      description:
        'Finest aged long-grain basmati rice gently slow-steamed to absorb delicate aromas and tender meat drippings.',
      highlight: 'Slow-Cooked Daily',
    },
    {
      icon: Flame,
      emoji: '🔥',
      title: 'Delicious Shawaya & Grills',
      description:
        'Rotisserie golden roasted chicken and charcoal grills crisped on the exterior while staying exceptionally juicy inside.',
      highlight: 'Charcoal Smoked',
    },
    {
      icon: Heart,
      emoji: '❤️',
      title: 'Made For Food Lovers',
      description:
        'Generous portion sizes, warm Malabar hospitality, and pure dining joy tailored for families and gathering with friends.',
      highlight: 'Generous Portions',
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-[#660C0C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3B0505] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>The Yamama Difference</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Why Yamama Shawaya?
          </h2>

          <p className="text-base sm:text-lg text-red-100 font-normal">
            We are committed to delivering authentic Arabian culinary traditions right to Angadipuram.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="group p-6 rounded-3xl bg-[#500808] border border-red-800/80 hover:border-[#F4C400] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#380404] border border-[#F4C400]/50 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                      <span>{pt.emoji}</span>
                    </div>

                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#171717] bg-[#F4C400] px-2.5 py-1 rounded-full">
                      {pt.highlight}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-2 leading-snug">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-red-200 leading-relaxed font-normal">
                    {pt.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-red-800/60 flex items-center gap-1.5 text-xs font-bold text-[#F4C400]">
                  <Icon className="w-3.5 h-3.5" />
                  <span>Yamama Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
