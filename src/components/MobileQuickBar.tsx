import React from 'react';
import { Phone, MessageCircle, Home, Utensils, Info } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { PageRoute } from './Navbar';

interface MobileQuickBarProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  activePage,
  onNavigate,
}) => {
  return (
    <aside
      aria-label="Mobile Navigation & Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#360404]/98 backdrop-blur-md border-t border-red-900/90 px-3 py-2 shadow-[0_-4px_25px_rgba(0,0,0,0.6)]"
    >
      <div className="flex items-center justify-between gap-1.5 max-w-lg mx-auto">
        {/* Home */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors cursor-pointer ${
            activePage === 'home'
              ? 'text-[#F4C400] bg-white/10 font-bold'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <Home className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-tight">Home</span>
        </button>

        {/* Menu Page */}
        <button
          type="button"
          onClick={() => {
            onNavigate('menu');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors cursor-pointer ${
            activePage === 'menu'
              ? 'text-[#F4C400] bg-white/10 font-bold'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <Utensils className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-tight">Menu</span>
        </button>

        {/* About Page */}
        <button
          type="button"
          onClick={() => {
            onNavigate('about');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`flex flex-col items-center justify-center py-1 px-2.5 rounded-xl transition-colors cursor-pointer ${
            activePage === 'about'
              ? 'text-[#F4C400] bg-white/10 font-bold'
              : 'text-red-200 hover:text-white'
          }`}
        >
          <Info className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] leading-tight">About</span>
        </button>

        {/* Quick Call */}
        <a
          href={`tel:${RESTAURANT_INFO.phone1Raw}`}
          className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-[#F4C400] text-[#171717] font-black text-xs shadow-xs shrink-0"
        >
          <Phone className="w-3.5 h-3.5 fill-current" />
          <span>Call</span>
        </a>

        {/* Quick WhatsApp */}
        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
            RESTAURANT_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 py-2 px-3 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-xs shrink-0"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
