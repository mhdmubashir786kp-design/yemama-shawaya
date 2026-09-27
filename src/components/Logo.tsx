import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface LogoProps {
  variant?: 'header' | 'footer' | 'large';
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'header',
  className = '',
  showSubtitle = true,
}) => {
  return (
    <div className={`flex items-center gap-3 group select-none ${className}`}>
      {/* Dedicated Logo Emblem Area */}
      <div
        className={`relative flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${
          variant === 'large'
            ? 'w-16 h-16 sm:w-20 sm:h-20'
            : variant === 'footer'
            ? 'w-12 h-12 sm:w-14 sm:h-14'
            : 'w-10 h-10 sm:w-12 sm:h-12'
        }`}
      >
        <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#F4C400] shadow-md bg-[#FFF9E6] flex items-center justify-center ring-2 ring-red-950/40">
          <img
            src={RESTAURANT_INFO.logoAsset}
            alt="Yamama Shawaya Logo Emblem"
            className="w-full h-full object-cover"
            loading="eager"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              const parent = e.currentTarget.parentElement;
              if (parent) {
                parent.innerHTML = `
                  <div class="w-full h-full flex flex-col items-center justify-center bg-[#F4C400] text-[#171717] font-black text-xs">
                    <span class="tracking-tighter font-extrabold text-sm leading-none">YS</span>
                    <span class="text-[8px] uppercase tracking-widest font-bold">Yamama</span>
                  </div>
                `;
              }
            }}
          />
        </div>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black tracking-tight leading-none text-white ${
              variant === 'large'
                ? 'text-2xl sm:text-3xl'
                : 'text-xl sm:text-2xl'
            }`}
          >
            Yamama
          </span>
          <span className="font-extrabold uppercase tracking-wider text-xs sm:text-sm px-2 py-0.5 rounded-md bg-[#F4C400] text-[#171717] shadow-xs">
            Shawaya
          </span>
        </div>

        {showSubtitle && (
          <span className="text-[10px] sm:text-xs font-semibold tracking-wide mt-0.5 text-red-200">
            Mandi & Arabian Cuisine • Angadipuram
          </span>
        )}
      </div>
    </div>
  );
};
