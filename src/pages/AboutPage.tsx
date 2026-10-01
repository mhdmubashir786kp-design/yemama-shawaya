import React from 'react';
import {
  Sparkles,
  Flame,
  MapPin,
  Clock,
  Phone,
  ShieldCheck,
  HeartHandshake,
  Utensils,
  Award,
  Users,
  CheckCircle2,
  Navigation,
  MessageCircle,
  Star,
  Quote,
} from 'lucide-react';
import { RESTAURANT_INFO, IMAGES, REVIEWS } from '../data/restaurantData';

interface AboutPageProps {
  onNavigateHome: () => void;
  onNavigateMenu: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onNavigateMenu,
}) => {
  // Check if restaurant is open right now based on Indian Standard Time
  const isOpenNow = true; // Open 12:00 PM to 11:30 PM daily

  const milestones = [
    {
      icon: Flame,
      title: 'Traditional Charcoal Rotisserie',
      desc: 'Our whole chickens are marinated in traditional Arabian herbs for 12 hours and roasted slowly on rotating spits until blistered, crisp, and succulent.',
    },
    {
      icon: Utensils,
      title: 'Fragrant Bishawari Rice',
      desc: 'Premium extra-long basmati rice cooked gently in natural chicken stock, infused with whole cinnamon, green cardamom, and caramelized aromatics.',
    },
    {
      icon: Sparkles,
      title: 'Artisanal Bene Tibi Mojitos',
      desc: 'Handcrafted mocktails featuring muddled garden mint, zesty lime, and real fruit nectars in 10 vibrant flavors to pair with hearty grills.',
    },
    {
      icon: Users,
      title: 'Family Majlis & Hospitality',
      desc: 'Comfortable family seating booths with privacy, courteous staff, and warm Kerala hospitality that treats every diner like family.',
    },
  ];

  return (
    <div className="bg-[#580B0B] text-white min-h-screen">
      {/* Hero Header */}
      <section className="relative bg-gradient-to-b from-[#420606] via-[#520909] to-[#580B0B] pt-10 pb-16 sm:pt-14 sm:pb-20 border-b border-red-900/80 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#DC2626]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[#F4C400]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-red-300 mb-4">
            <button
              onClick={onNavigateHome}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </button>
            <span>/</span>
            <span className="text-[#F4C400] font-bold">About Yamama Shawaya</span>
          </div>

          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#360404] border border-[#F4C400]/40 text-[#F4C400] font-black text-xs uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Angadipuram's Destination for Arabian Dining</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Our Story & Passion for Authentic Flavours
            </h1>
            <p className="mt-4 text-base sm:text-xl text-red-100 font-normal leading-relaxed">
              Yamama Shawaya was founded with a singular motto: <strong className="text-[#F4C400] font-bold">"Refill Your Energy"</strong> with genuine Arabian rotisserie shawaya, fragrant long-grain mandi rice, and refreshing beverages right here in Angadipuram, Malappuram.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onNavigateMenu}
                className="px-6 py-3.5 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-sm rounded-2xl shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center gap-2"
              >
                <Utensils className="w-4 h-4" />
                <span>Explore Full Menu & Prices</span>
              </button>
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="px-6 py-3.5 bg-[#3B0505] hover:bg-white/10 text-white font-bold text-sm rounded-2xl border border-red-700/80 transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#F4C400]" />
                <span>Call {RESTAURANT_INFO.phone1Display}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Story & Heritage Grid */}
      <section className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Ambiance Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-red-900 bg-neutral-900">
              <img
                src={IMAGES.diningAmbiance}
                alt="Yamama Shawaya Restaurant Dining Hall in Angadipuram"
                className="w-full h-[400px] sm:h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-2 text-xs font-black text-[#F4C400] uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4" />
                  <span>Oradampalam, Angadipuram</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Spacious Family Dining & Takeaway
                </h3>
                <p className="text-xs text-red-200 mt-1">
                  Air-conditioned seating, cozy booth majlis, and fast takeaway packing.
                </p>
              </div>
            </div>

            {/* Floating Review Badge */}
            <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-[#3B0505] p-4 rounded-2xl border-2 border-[#F4C400] shadow-2xl flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F4C400] text-[#171717] flex items-center justify-center font-black text-lg">
                ★ 4.0
              </div>
              <div>
                <span className="text-xs font-black text-white block">
                  217+ Verified Reviews
                </span>
                <span className="text-[11px] text-red-200">
                  Rated by food lovers across Malappuram
                </span>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3F0707] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>Authentic Arabian Culinary Tradition</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-snug">
              Bringing the Gulf's Favorite Feast to Malappuram
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-base text-red-100 font-normal leading-relaxed">
              <p>
                Located along Calicut Road in <strong>Oradampalam, Angadipuram</strong>, Yamama Shawaya has grown into a cherished destination for Mandi and Shawaya enthusiasts from Perintalmanna, Tirurkad, and across Malappuram district.
              </p>
              <p>
                Our culinary philosophy centers on fresh, uncompromising quality: we never use frozen chicken or pre-made spice mixes. Every morning, our chefs grind fresh coriander, toasted black limes (loomi), crushed cardamom pods, and Yemeni spice blends to marinate whole birds for slow roasting.
              </p>
              <p>
                Whether you dine in our family Majlis or pick up a takeaway parcel for your dinner at home, our mission is to ensure every bite delivers the authentic smoky crunch and rich basmati fragrance of the Middle East.
              </p>
            </div>

            {/* Quick badges */}
            <div className="mt-8 grid grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-[#4A0707] border border-red-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span className="font-bold">100% Halal Certified</span>
              </div>
              <div className="p-3 rounded-xl bg-[#4A0707] border border-red-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span className="font-bold">Family Dining Majlis</span>
              </div>
              <div className="p-3 rounded-xl bg-[#4A0707] border border-red-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span className="font-bold">Fast Takeaway Counter</span>
              </div>
              <div className="p-3 rounded-xl bg-[#4A0707] border border-red-800 flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span className="font-bold">Party Bulk Orders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Culinary Craft Pillars */}
      <section className="py-16 bg-[#4A0707] border-y border-red-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider block mb-2">
              What Sets Yamama Shawaya Apart
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Crafted with Care, Fire & Passion
            </h2>
            <p className="mt-2 text-sm sm:text-base text-red-200">
              Each recipe has been perfected to balance juicy meat, crisp roasted skin, aromatic spices, and chilled mocktails.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {milestones.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#3D0606] p-6 rounded-3xl border border-red-800/80 hover:border-[#F4C400] shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#590C0C] border border-[#F4C400]/40 flex items-center justify-center text-[#F4C400] mb-4 shadow-xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-red-200 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Hours & Operating Information Table */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Hours & Status Card */}
          <div className="lg:col-span-7 bg-[#470707] rounded-3xl p-6 sm:p-8 border border-red-800 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-red-800/80 gap-3">
              <div>
                <h3 className="text-xl font-black text-white flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F4C400]" />
                  <span>Business Hours & Timings</span>
                </h3>
                <p className="text-xs text-red-200 mt-1">
                  Open 7 days a week for lunch, evening snacks, and late-night dinner.
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500 text-emerald-300 text-xs font-black self-start sm:self-auto">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Open Today until 11:30 PM</span>
              </div>
            </div>

            {/* Schedule Rows */}
            <div className="mt-6 space-y-2.5 text-xs sm:text-sm">
              {RESTAURANT_INFO.schedule.map((slot) => {
                const isFriday = slot.day === 'Friday';
                return (
                  <div
                    key={slot.day}
                    className={`flex items-center justify-between py-2.5 px-4 rounded-xl ${
                      isFriday ? 'bg-[#560909] border border-[#F4C400]/40' : 'bg-[#3A0505]'
                    }`}
                  >
                    <span className="font-bold text-white flex items-center gap-2">
                      <span>{slot.day}</span>
                      {isFriday && (
                        <span className="text-[10px] text-[#F4C400] font-normal">
                          (Opens after Jum'ah)
                        </span>
                      )}
                    </span>
                    <span className="font-mono font-semibold text-red-200">
                      {slot.hours}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 pt-4 border-t border-red-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-red-300">
              <span>* Special timings may apply on festival days.</span>
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="text-[#F4C400] font-bold hover:underline"
              >
                Call to confirm availability ›
              </a>
            </div>
          </div>

          {/* Right: Address & Quick Actions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#470707] rounded-3xl p-6 sm:p-8 border border-red-800 shadow-xl">
              <h3 className="text-xl font-black text-white flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-[#F4C400]" />
                <span>Our Address & Landmark</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-red-100">
                <div>
                  <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider block">
                    Full Registered Address:
                  </span>
                  <p className="font-semibold text-white mt-0.5 leading-relaxed">
                    {RESTAURANT_INFO.fullAddress}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider block">
                    Key Landmark:
                  </span>
                  <p className="text-white mt-0.5 font-medium">
                    {RESTAURANT_INFO.landmark}
                  </p>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-red-300 uppercase tracking-wider block">
                    Serving Regions:
                  </span>
                  <p className="text-white mt-0.5">
                    Angadipuram, Perintalmanna, Tirurkad, Cherukara, and surrounding Malappuram towns.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-red-800/80 flex flex-col sm:flex-row gap-3">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-xs py-3 px-4 rounded-xl shadow-xs"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions</span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#3A0505] hover:bg-white/10 text-white font-bold text-xs py-3 px-4 rounded-xl border border-red-700"
                >
                  <Phone className="w-4 h-4 text-[#F4C400]" />
                  <span>Call {RESTAURANT_INFO.phone1Display}</span>
                </a>
              </div>
            </div>

            {/* Catering & Bulk Orders Card */}
            <div className="bg-[#3D0606] p-6 rounded-3xl border border-[#F4C400]/50 shadow-md">
              <h4 className="text-base font-black text-[#F4C400] flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                <span>Catering & Party Platters</span>
              </h4>
              <p className="text-xs text-red-200 mt-1 leading-relaxed">
                Hosting a birthday, family reunion, or corporate get-together? We prepare full mandi trays, shawaya combos, and customized mocktail stations with prior notice.
              </p>
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hi Yamama Shawaya, I would like to enquire about party catering / bulk order.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-emerald-200 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Enquire via WhatsApp ›</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Voices / Verified Ratings */}
      <section className="py-16 bg-[#4A0707] border-t border-red-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider block mb-1">
              Guest Testimonials
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              Loved by Foodies in Angadipuram
            </h2>
            <div className="flex items-center justify-center gap-2 mt-2">
              <div className="flex text-[#F4C400]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-bold text-red-200">
                4.0 / 5 Rating • 217+ Reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-[#3B0505] p-6 rounded-3xl border border-red-800/80 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex text-[#F4C400]">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[10px] text-red-300 font-semibold">
                      {review.source}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-red-100 italic leading-relaxed mb-4">
                    "{review.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-red-800/60">
                  <div className="w-8 h-8 rounded-full bg-[#F4C400] text-[#171717] font-black text-xs flex items-center justify-center">
                    {review.avatarLetter}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white">{review.name}</h4>
                    <span className="text-[10px] text-red-300">{review.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map Embed */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden border-2 border-red-800 shadow-2xl bg-[#3A0505]">
          <div className="p-6 bg-[#4A0707] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-black text-white flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F4C400]" />
                <span>Visit Us at Yamama Shawaya Angadipuram</span>
              </h3>
              <p className="text-xs text-red-200 mt-0.5">
                Convenient roadside parking on Calicut Road, Oradampalam.
              </p>
            </div>

            <a
              href={RESTAURANT_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-xs px-5 py-3 rounded-xl shadow-xs transition-transform hover:scale-105"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps</span>
            </a>
          </div>

          <div className="relative w-full h-[360px] sm:h-[420px] bg-neutral-900">
            <iframe
              title="Yamama Shawaya Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3917.487569116817!2d76.1877461!3d10.9828099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7cb45d4750c17%3A0x6b24bb09a25b331f!2sYamama%20Shawaya!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full filter saturate-150 contrast-105"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
