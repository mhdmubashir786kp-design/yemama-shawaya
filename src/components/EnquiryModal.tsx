import React, { useState } from 'react';
import { X, Phone, MessageCircle, Utensils, Check, Sparkles, Clock } from 'lucide-react';
import { MenuItem } from '../types/restaurant';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface EnquiryModalProps {
  dish: MenuItem | null;
  onClose: () => void;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({ dish, onClose }) => {
  if (!dish) return null;

  // Initial portion index
  const [selectedPortionIdx, setSelectedPortionIdx] = useState<number>(0);
  const [selectedLegacyPortion, setSelectedLegacyPortion] = useState<string>(
    dish.portionOptions && dish.portionOptions.length > 0 ? dish.portionOptions[0] : 'Standard Portion'
  );
  const [diningMode, setDiningMode] = useState<'Takeaway Parcel' | 'Dine-in (Restaurant)'>('Takeaway Parcel');

  // Compute active price
  const activePortion = dish.portions ? dish.portions[selectedPortionIdx] : null;
  const priceDisplay = dish.isComingSoon
    ? 'Coming Soon'
    : activePortion
    ? `₹ ${activePortion.price}`
    : dish.price
    ? `₹ ${dish.price}`
    : dish.pricePlaceholder || '₹---';

  const portionLabel = activePortion
    ? `${activePortion.name} (₹${activePortion.price})`
    : dish.portionOptions
    ? selectedLegacyPortion
    : 'Regular Serving';

  const handleWhatsAppEnquiry = () => {
    const text = dish.isComingSoon
      ? `*Broast Coming Soon Enquiry - Yamama Shawaya*\n\n*Dish:* ${dish.name}\n*Category:* Broast\n\nHi Yamama Shawaya, when will Broasted Chicken be available for order in Angadipuram? Please notify me when launched!`
      : `*New Order Enquiry - Yamama Shawaya*\n\n*Dish:* ${dish.name}\n*Portion:* ${portionLabel}\n*Price:* ${priceDisplay}\n*Mode:* ${diningMode}\n\nHi Yamama Shawaya, is this ready for ${diningMode}?`;
    const url = `https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-lg w-full bg-[#460707] text-white rounded-3xl overflow-hidden shadow-2xl border-2 border-red-700/80 flex flex-col max-h-[92vh] overflow-y-auto"
      >
        {/* Dish Hero Preview */}
        <div className="relative h-48 sm:h-52 bg-neutral-900 overflow-hidden shrink-0">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#460707] via-black/40 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-3 left-4 right-4 text-white">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F4C400]">
                {dish.category}
              </span>
              {dish.isComingSoon ? (
                <span className="text-[10px] font-black bg-[#F4C400] text-[#171717] px-2.5 py-0.5 rounded shadow-sm inline-flex items-center gap-1 animate-pulse">
                  <Sparkles className="w-3 h-3" />
                  <span>Coming Soon</span>
                </span>
              ) : dish.badge ? (
                <span className="text-[10px] font-bold bg-[#F4C400] text-[#171717] px-2 py-0.5 rounded">
                  {dish.badge}
                </span>
              ) : null}
            </div>
            <h3 className="text-xl font-black leading-tight mt-1">{dish.name}</h3>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5">
          <p className="text-xs sm:text-sm text-red-200 leading-relaxed font-normal">
            {dish.description}
          </p>

          {/* Coming soon highlight notice */}
          {dish.isComingSoon && (
            <div className="p-3.5 rounded-2xl bg-[#360404] border-2 border-dashed border-[#F4C400]/70 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#F4C400] text-[#171717] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-black text-[#F4C400] uppercase tracking-wider">
                  Broast Launching Soon!
                </div>
                <div className="text-[11px] text-red-100">
                  We are preparing authentic crispy pressure-fried Broast for our food lovers in Angadipuram. Send an enquiry on WhatsApp to be the first to know the launch date!
                </div>
              </div>
            </div>
          )}

          {/* Portions with exact Rupee prices if available */}
          {!dish.isComingSoon && dish.portions && dish.portions.length > 0 ? (
            <div>
              <label className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-2">
                Select Portion:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {dish.portions.map((portion, idx) => {
                  const isSelected = selectedPortionIdx === idx;
                  return (
                    <button
                      key={portion.name}
                      type="button"
                      onClick={() => setSelectedPortionIdx(idx)}
                      className={`p-2.5 rounded-2xl text-center border transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-[#F4C400] border-[#F4C400] text-[#171717] shadow-md font-black'
                          : 'bg-[#330404] border-red-800 text-red-100 hover:bg-[#3D0505]'
                      }`}
                    >
                      <div className="text-xs font-bold">{portion.name}</div>
                      <div className={`text-sm font-black mt-0.5 font-mono ${isSelected ? 'text-[#171717]' : 'text-[#F4C400]'}`}>
                        ₹ {portion.price}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : !dish.isComingSoon && dish.portionOptions && dish.portionOptions.length > 0 ? (
            <div>
              <label className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-2">
                Select Serving:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {dish.portionOptions.map((opt) => {
                  const isSelected = selectedLegacyPortion === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setSelectedLegacyPortion(opt)}
                      className={`py-2 px-3 rounded-xl text-xs font-bold transition-all border flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'bg-[#F4C400] border-[#F4C400] text-[#171717] shadow-xs'
                          : 'bg-[#330404] border-red-800 text-red-200 hover:bg-[#3D0505]'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#171717]" />}
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}

          {/* Dining / Takeaway Mode */}
          {!dish.isComingSoon && (
            <div>
              <label className="block text-xs font-bold text-red-200 uppercase tracking-wider mb-2">
                Dining Preference:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDiningMode('Takeaway Parcel')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    diningMode === 'Takeaway Parcel'
                      ? 'bg-[#F4C400] text-[#171717] border-[#F4C400] shadow-md font-black'
                      : 'bg-[#330404] text-red-200 border-red-800 hover:bg-[#3D0505]'
                  }`}
                >
                  <span>🥡 Takeaway Parcel</span>
                </button>

                <button
                  type="button"
                  onClick={() => setDiningMode('Dine-in (Restaurant)')}
                  className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    diningMode === 'Dine-in (Restaurant)'
                      ? 'bg-[#F4C400] text-[#171717] border-[#F4C400] shadow-md font-black'
                      : 'bg-[#330404] text-red-200 border-red-800 hover:bg-[#3D0505]'
                  }`}
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>Dine-in (Restaurant)</span>
                </button>
              </div>
            </div>
          )}

          {/* Price Summary Banner */}
          <div className="p-3.5 rounded-2xl bg-[#360404] border border-[#F4C400]/70 flex items-center justify-between">
            <span className="text-xs font-bold text-red-200">
              {dish.isComingSoon ? 'Item Status:' : 'Estimated Total:'}
            </span>
            <span className="text-xl font-black text-[#F4C400] font-mono">{priceDisplay}</span>
          </div>

          {/* Call & WhatsApp CTAs */}
          <div className="pt-2 space-y-2.5">
            <button
              type="button"
              onClick={handleWhatsAppEnquiry}
              className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm py-3.5 px-4 rounded-xl shadow-md transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>
                {dish.isComingSoon ? 'Enquire Launch Date on WhatsApp' : `Order via WhatsApp (${priceDisplay})`}
              </span>
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="inline-flex items-center justify-center gap-1.5 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-xs py-3 px-3 rounded-xl transition-all"
              >
                <Phone className="w-3.5 h-3.5 fill-current" />
                <span>Call {RESTAURANT_INFO.phone1Display}</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                className="inline-flex items-center justify-center gap-1.5 bg-[#330404] hover:bg-[#260303] text-white font-bold text-xs py-3 px-3 rounded-xl transition-all border border-red-800"
              >
                <Phone className="w-3.5 h-3.5 fill-current text-[#F4C400]" />
                <span>Call {RESTAURANT_INFO.phone2Display}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
