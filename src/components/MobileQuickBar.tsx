import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside
      aria-label="Quick contact actions"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#360404]/95 backdrop-blur-md border-t border-red-900 p-2.5 px-4 shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={`tel:${RESTAURANT_INFO.phone1Raw}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-[#F4C400] text-[#171717] font-black text-xs sm:text-sm shadow-md"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span>Call 097473 62102</span>
        </a>

        <a
          href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
            RESTAURANT_INFO.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-2xl bg-emerald-600 text-white font-extrabold text-xs sm:text-sm shadow-md"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
