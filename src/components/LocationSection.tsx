import React from 'react';
import { MapPin, Navigation, Phone, Clock, Car, ExternalLink } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Yamama Shawaya Angadipuram Malappuram Kerala'
  )}`;

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#5A0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3B0505] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
            <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Find Our Restaurant</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Visit Yamama Shawaya
          </h2>

          <p className="text-base sm:text-lg text-red-100 font-normal">
            Conveniently located in Angadipuram, Malappuram. Join us for an unforgettable dining experience or quick takeaway.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#4A0707] p-7 sm:p-9 rounded-3xl border border-red-800/80 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              {/* Address Item */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#360404] border border-[#F4C400]/60 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#F4C400]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-red-300 mb-1">
                    Address & Location
                  </h3>
                  <p className="text-lg font-black text-white leading-snug">
                    {RESTAURANT_INFO.name}
                  </p>
                  <p className="text-sm text-red-100 mt-1 font-medium leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                  <p className="text-xs text-[#F4C400] mt-1 font-semibold">
                    📍 {RESTAURANT_INFO.landmark}
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#360404] border border-[#F4C400]/60 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#F4C400]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-red-300 mb-1">
                    Operating Hours
                  </h3>
                  <p className="text-base font-black text-white">
                    {RESTAURANT_INFO.openingHours}
                  </p>
                  <p className="text-xs text-red-200 mt-1">
                    Open all 7 days for Dine-In, Parcel & Takeaway
                  </p>
                </div>
              </div>

              {/* Direct Phones */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#360404] border border-[#F4C400]/60 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#F4C400]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-red-300 mb-1">
                    Hotline Orders
                  </h3>
                  <div className="text-base font-black text-white flex flex-wrap gap-2 mt-0.5">
                    <a href={`tel:${RESTAURANT_INFO.phone1Raw}`} className="hover:text-[#F4C400] transition-colors underline decoration-[#F4C400]/40">
                      {RESTAURANT_INFO.phone1Display}
                    </a>
                    <span>/</span>
                    <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="hover:text-[#F4C400] transition-colors underline decoration-[#F4C400]/40">
                      {RESTAURANT_INFO.phone2Display}
                    </a>
                  </div>
                </div>
              </div>

              {/* Parking Facility Note */}
              <div className="p-3.5 rounded-2xl bg-[#380505] border border-red-800 flex items-center gap-3 text-xs text-red-100">
                <Car className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>Roadside parking available with easy accessibility in Angadipuram.</span>
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="mt-8 pt-6 border-t border-red-800/80 flex flex-col sm:flex-row gap-3">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-sm py-3.5 px-5 rounded-2xl shadow-md transition-all duration-200"
              >
                <Navigation className="w-4 h-4 fill-current" />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-sm py-3.5 px-5 rounded-2xl transition-all duration-200 border border-white/20"
              >
                <Phone className="w-4 h-4 fill-current text-[#F4C400]" />
                <span>Call Restaurant</span>
              </a>
            </div>
          </div>

          {/* Right Map Embed & Preview */}
          <div className="lg:col-span-7 bg-[#4A0707] rounded-3xl overflow-hidden border-4 border-red-900 shadow-xl min-h-[380px] flex flex-col">
            <div className="p-4 bg-[#380404] border-b border-red-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-bold text-red-200">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span>Live Location Map • Angadipuram</span>
              </div>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#F4C400] hover:underline flex items-center gap-1 font-bold"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex-1 w-full h-full relative">
              <iframe
                title="Yamama Shawaya Location Map Angadipuram"
                src="https://maps.google.com/maps?q=Yamama%20Shawaya%20Angadipuram%20Malappuram%20Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
