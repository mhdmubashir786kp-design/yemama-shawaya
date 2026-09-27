import React from 'react';
import { Star, MessageSquareQuote, CheckCircle, ExternalLink } from 'lucide-react';
import { REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 sm:py-24 bg-[#650C0C] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Rating Hero Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-14">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3B0505] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
              <MessageSquareQuote className="w-3.5 h-3.5 text-[#F4C400]" />
              <span>Customer Feedback</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              What Our Customers Say
            </h2>

            <p className="text-base sm:text-lg text-red-100 font-normal max-w-xl">
              Real dining experiences from our guests in Angadipuram and across Malappuram who love our authentic Mandi and Shawaya.
            </p>
          </div>

          {/* Aggregate Rating Highlight Box */}
          <div className="lg:col-span-5 bg-[#4A0707] rounded-3xl p-6 sm:p-7 border border-red-700/80 shadow-md flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-[#F4C400] text-[#171717] flex flex-col items-center justify-center font-black shadow-sm">
                <span className="text-2xl leading-none">{RESTAURANT_INFO.rating}</span>
                <span className="text-[10px] uppercase font-bold tracking-widest mt-0.5">Rating</span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-[#F4C400] mb-1">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <Star className="w-5 h-5 fill-current text-amber-200" />
                </div>
                <div className="text-sm font-extrabold text-white">
                  {RESTAURANT_INFO.reviewCount} Ratings
                </div>
                <div className="text-xs text-red-200">
                  Google & Verified Local Diners
                </div>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=Yamama+Shawaya+Angadipuram+Malappuram"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-bold text-white bg-[#360404] hover:bg-[#2B0303] px-3.5 py-2 rounded-xl border border-red-800 transition-colors shadow-2xs"
            >
              <span>View On Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#F4C400]" />
            </a>
          </div>
        </div>

        {/* 4 Featured Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#4F0808] p-6 rounded-3xl border border-red-800/80 hover:border-[#F4C400] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars & Dish tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-[#F4C400]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  {rev.favoriteDish && (
                    <span className="text-[10px] font-bold bg-[#380505] text-[#F4C400] border border-[#F4C400]/40 px-2 py-0.5 rounded-full">
                      {rev.favoriteDish}
                    </span>
                  )}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-red-100 italic leading-relaxed mb-6 font-normal">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verified Badge */}
              <div className="pt-4 border-t border-red-800/60 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-white">{rev.name}</div>
                  <div className="text-[10px] text-red-300">{rev.date}</div>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                  <CheckCircle className="w-3 h-3" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
