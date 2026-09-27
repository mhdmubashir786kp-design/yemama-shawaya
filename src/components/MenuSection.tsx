import React, { useState, useMemo } from 'react';
import { Search, Flame, Sparkles, MessageCircle, ChevronRight, Phone, Utensils, GlassWater, Clock, Bell } from 'lucide-react';
import { MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuCategory, MenuItem } from '../types/restaurant';

interface MenuSectionProps {
  onSelectDishForEnquiry: (dish: MenuItem) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishForEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'cards' | 'rate-card'>('cards');
  const [selectedPortions, setSelectedPortions] = useState<Record<string, number>>({});

  const categories: MenuCategory[] = [
    'All',
    'Combos',
    'Shawaya',
    'Broast',
    'Bishawari Rice',
    'Mojitos (Bene Tibi)',
    'Mojitos',
    'Mandi',
    'Grills',
    'Desserts',
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory =
        activeCategory === 'All' || item.category === activeCategory;
      const matchesSearch =
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Handle portion selection on card
  const handlePortionSelect = (dishId: string, portionIndex: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedPortions((prev) => ({ ...prev, [dishId]: portionIndex }));
  };

  return (
    <section id="menu" className="py-16 sm:py-24 bg-[#580B0B] text-white relative">
      {/* Decorative subtle pattern */}
      <div className="absolute inset-0 arabian-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Title and Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#380404] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Yamama Shawaya Official Menu</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Our Food Menu
          </h2>

          <p className="text-base sm:text-lg text-red-100 font-normal">
            Discover authentic Shawaya Combos, Bishawari Rice, Arabian Broast (Coming Soon) & Refreshing Mojitos.
          </p>

          {/* View Toggle: Visual Grid vs Official Rate Card */}
          <div className="mt-6 inline-flex p-1 bg-[#3A0505] rounded-2xl border border-red-800">
            <button
              type="button"
              onClick={() => setViewMode('cards')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                viewMode === 'cards'
                  ? 'bg-[#F4C400] text-[#171717] shadow-sm font-extrabold'
                  : 'text-red-200 hover:text-white'
              }`}
            >
              🍽️ Interactive Menu
            </button>
            <button
              type="button"
              onClick={() => setViewMode('rate-card')}
              className={`px-5 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer ${
                viewMode === 'rate-card'
                  ? 'bg-[#F4C400] text-[#171717] shadow-sm font-extrabold'
                  : 'text-red-200 hover:text-white'
              }`}
            >
              📋 Official Rate Board
            </button>
          </div>
        </div>

        {/* --- OFFICIAL RATE BOARD VIEW (Red Theme matching Yamama Shawaya) --- */}
        {viewMode === 'rate-card' && (
          <div className="mb-14 max-w-5xl mx-auto bg-[#420606] border-2 border-[#F4C400] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden animate-in fade-in duration-300">
            {/* Top Board Bar */}
            <div className="relative pb-6 mb-8 border-b-2 border-red-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#F4C400] bg-[#FFF9E6] shrink-0 shadow-md">
                  <img src={RESTAURANT_INFO.logoAsset} alt="Yamama Shawaya Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white leading-none">Yamama Shawaya</h3>
                  <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider">Refill Your Energy • Angadipuram</span>
                </div>
              </div>

              <div className="text-left sm:text-right">
                <div className="text-xs font-bold text-red-200 uppercase tracking-wider">Direct Order Hotlines</div>
                <div className="text-sm sm:text-base font-black text-white flex items-center sm:justify-end gap-2 mt-0.5">
                  <Phone className="w-4 h-4 text-[#F4C400] fill-current" />
                  <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="hover:text-[#F4C400]">{RESTAURANT_INFO.phone2Display}</a>
                  <span>,</span>
                  <a href={`tel:${RESTAURANT_INFO.phone1Raw}`} className="hover:text-[#F4C400]">{RESTAURANT_INFO.phone1Display}</a>
                </div>
              </div>
            </div>

            {/* Main Menu Grid from Official Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
              {/* Left Column: Shawaya & Rice Combos */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. SHAWAYA CHICKEN WITH BISHAWARI RICE COMBO */}
                <div className="bg-[#4E0808] p-5 rounded-2xl border border-red-700/80 shadow-md hover:border-[#F4C400] transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-black bg-[#F4C400] text-[#171717] px-2 py-0.5 rounded uppercase">
                        Signature Combo
                      </span>
                      <h4 className="text-lg font-black text-white mt-1">
                        SHAWAYA CHICKEN WITH BISHAWARI RICE COMBO
                      </h4>
                      <p className="text-xs text-red-200 mt-0.5">
                        Juicy roasted chicken with aromatic spiced long-grain basmati rice
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-red-800/80 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Qurter</div>
                      <div className="text-base font-black text-white">₹ 180</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#5C0A0A] border border-[#F4C400]">
                      <div className="text-[11px] font-semibold text-[#F4C400]">Half</div>
                      <div className="text-base font-black text-[#F4C400]">₹ 340</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Full</div>
                      <div className="text-base font-black text-white">₹ 660</div>
                    </div>
                  </div>
                </div>

                {/* 2. SHAWAYA CHICKEN WITH KUBUS */}
                <div className="bg-[#4E0808] p-5 rounded-2xl border border-red-700/80 shadow-md hover:border-[#F4C400] transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-bold bg-[#380404] text-[#F4C400] border border-[#F4C400]/40 px-2 py-0.5 rounded uppercase">
                        Classic
                      </span>
                      <h4 className="text-lg font-black text-white mt-1">
                        SHAWAYA CHICKEN WITH KUBUS
                      </h4>
                      <p className="text-xs text-red-200 mt-0.5">
                        Authentic Arabian grilled chicken with fresh Kubus & garlic dip
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-red-800/80 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Qurter</div>
                      <div className="text-base font-black text-white">₹ 130</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Half</div>
                      <div className="text-base font-black text-white">₹ 240</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Full</div>
                      <div className="text-base font-black text-white">₹ 460</div>
                    </div>
                  </div>
                </div>

                {/* 3. BISHAWARI RICE ONLY */}
                <div className="bg-[#4E0808] p-5 rounded-2xl border border-red-700/80 shadow-md hover:border-[#F4C400] transition-colors">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="text-[10px] font-bold bg-[#380404] text-[#F4C400] border border-[#F4C400]/40 px-2 py-0.5 rounded uppercase">
                        Fragrant Rice
                      </span>
                      <h4 className="text-lg font-black text-white mt-1">
                        BISHAWARI RICE ONLY
                      </h4>
                      <p className="text-xs text-red-200 mt-0.5">
                        Steamed spiced basmati rice infused with aromatic saffron & roasted spices
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 pt-3 border-t border-red-800/80 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Qurter</div>
                      <div className="text-base font-black text-white">₹ 90</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Half</div>
                      <div className="text-base font-black text-white">₹ 160</div>
                    </div>
                    <div className="p-2 rounded-xl bg-[#3A0505] border border-red-700/60">
                      <div className="text-[11px] font-semibold text-red-300">Full</div>
                      <div className="text-base font-black text-white">₹ 300</div>
                    </div>
                  </div>
                </div>

                {/* 4. BROAST COMING SOON HIGHLIGHT CARD */}
                <div className="bg-gradient-to-r from-[#590C0C] via-[#750E0E] to-[#590C0C] p-5 rounded-2xl border-2 border-dashed border-[#F4C400] shadow-xl relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[#F4C400] text-[#171717] flex items-center justify-center text-2xl shrink-0 shadow-md">
                        🍗
                      </div>
                      <div>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F4C400] text-[#171717] text-[10px] font-black uppercase tracking-wider mb-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Coming Soon • ഉടൻ വരുന്നു</span>
                        </div>
                        <h4 className="text-base sm:text-lg font-black text-white">
                          CRISPY ARABIAN BROAST
                        </h4>
                        <p className="text-xs text-red-100">
                          Extra crispy pressure-fried chicken with garlic toum & fries
                        </p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        const broastItem = MENU_ITEMS.find((m) => m.category === 'Broast');
                        if (broastItem) onSelectDishForEnquiry(broastItem);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#3A0505] hover:bg-[#F4C400] text-[#F4C400] hover:text-[#171717] text-xs font-black rounded-xl border border-[#F4C400]/60 transition-all cursor-pointer self-start sm:self-center"
                    >
                      <Bell className="w-3.5 h-3.5" />
                      <span>Notify Me</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Mojitos & Bene Tibi Rate Cards */}
              <div className="lg:col-span-5 space-y-6">
                {/* MOJITOS (BENE TIBI) */}
                <div className="bg-[#4E0808] p-5 rounded-2xl border border-red-700/80 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-red-800/80 mb-3">
                    <div className="flex items-center gap-2">
                      <GlassWater className="w-5 h-5 text-[#F4C400]" />
                      <h4 className="text-base font-black text-white tracking-tight">
                        MOJITOS (BENE TIBI)
                      </h4>
                    </div>
                    <span className="text-[10px] font-bold bg-[#F4C400] text-[#171717] px-2 py-0.5 rounded">
                      Special Edition
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {[
                      { name: 'Green Apple', price: '₹ 120' },
                      { name: 'Passion Fruit', price: '₹ 120' },
                      { name: 'Watermelon', price: '₹ 120' },
                      { name: 'Blue berry', price: '₹ 120' },
                      { name: 'Strawberry', price: '₹ 120' },
                      { name: 'Blackberry', price: '₹ 120' },
                      { name: 'Mint', price: '₹ 120' },
                      { name: 'Rose', price: '₹ 120' },
                      { name: 'Mango', price: '₹ 120' },
                      { name: 'Mumbai Special', price: '₹ 220', highlight: true },
                    ].map((m, idx) => (
                      <div
                        key={idx}
                        className={`flex items-center justify-between py-1 px-2 rounded-lg ${
                          m.highlight ? 'bg-[#5F0C0C] font-bold text-[#F4C400]' : 'text-red-100 hover:bg-white/5'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#F4C400]"></span>
                          <span>{m.name}</span>
                        </span>
                        <span className="font-extrabold text-white font-mono">{m.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MOJITOS (Classic) */}
                <div className="bg-[#4E0808] p-5 rounded-2xl border border-red-700/80 shadow-md">
                  <div className="flex items-center justify-between pb-3 border-b border-red-800/80 mb-3">
                    <div className="flex items-center gap-2">
                      <GlassWater className="w-5 h-5 text-sky-400" />
                      <h4 className="text-base font-black text-white tracking-tight">
                        MOJITOS
                      </h4>
                    </div>
                    <span className="text-xs font-black text-[#171717] font-mono bg-[#F4C400] px-2 py-0.5 rounded">
                      All ₹ 80
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 text-xs text-red-100">
                    {[
                      'Mint',
                      'Water Melon',
                      'Passion Fruit',
                      'Blue',
                      'Pineapple',
                      'Green Apple',
                      'Lichi',
                      'Strawberry',
                      'Kiwi',
                    ].map((name, i) => (
                      <div key={i} className="flex items-center justify-between p-1.5 bg-[#3A0505] rounded-lg">
                        <span>{name}</span>
                        <span className="font-bold text-[#F4C400] font-mono">₹ 80</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Order CTA at bottom of Rate Board */}
            <div className="mt-8 pt-6 border-t-2 border-red-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-red-200 text-center sm:text-left">
                📦 Takeaway parcel orders and Dine-in available daily at Yamama Shawaya Angadipuram.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-xs px-5 py-3 rounded-xl shadow-xs"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call to Order</span>
                </a>
                <a
                  href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent('Hi Yamama Shawaya, I want to order Shawaya & Rice Combo from the menu.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Coming Soon Announcement Banner */}
        <div className="mb-6 p-4 rounded-2xl bg-gradient-to-r from-[#4E0808] via-[#6B0D0D] to-[#4E0808] border border-[#F4C400]/60 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-2xl shrink-0">🍗</span>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-xs font-black uppercase text-[#F4C400] tracking-wide">
                  New Addition Coming Soon!
                </span>
                <span className="text-[10px] font-black bg-[#F4C400] text-[#171717] px-2 py-0.5 rounded uppercase">
                  Broast
                </span>
              </div>
              <p className="text-xs text-red-100 mt-0.5">
                Crispy Arabian Broasted Chicken is coming soon to Yamama Shawaya Angadipuram. Stay tuned!
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setActiveCategory('Broast')}
            className="inline-flex items-center gap-1.5 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] text-xs font-black px-4 py-2 rounded-xl transition-all cursor-pointer shrink-0 shadow-xs"
          >
            <span>View Broast Preview</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Scrollable Category Tabs */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 scrollbar-none">
            <div className="flex items-center gap-1.5 p-1.5 bg-[#3B0505] rounded-2xl border border-red-900 min-w-max">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const isBroast = cat === 'Broast';
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all duration-200 cursor-pointer focus:outline-none flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#F4C400] text-[#171717] shadow-sm font-black'
                        : 'text-red-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{cat}</span>
                    {isBroast && (
                      <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-black uppercase ${
                        isActive ? 'bg-[#171717] text-[#F4C400]' : 'bg-[#F4C400] text-[#171717]'
                      }`}>
                        Soon
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-red-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search dishes, broast, rice..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-[#3B0505] border border-red-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#F4C400] text-white placeholder-red-300 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-red-300 hover:text-white font-bold"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Menu Items Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-16 bg-[#450707] rounded-3xl border border-dashed border-red-800">
            <p className="text-red-200 text-sm">No dishes found matching your selection.</p>
            <button
              type="button"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-bold text-[#171717] bg-[#F4C400] px-4 py-2 rounded-xl"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((dish) => {
              const currentPortionIdx = selectedPortions[dish.id] ?? 0;
              const activePortion = dish.portions ? dish.portions[currentPortionIdx] : null;
              const displayPrice = dish.isComingSoon
                ? 'Coming Soon'
                : activePortion
                ? `₹ ${activePortion.price}`
                : dish.price
                ? `₹ ${dish.price}`
                : dish.pricePlaceholder || '₹---';

              return (
                <div
                  key={dish.id}
                  className={`group bg-[#4C0808] rounded-3xl overflow-hidden border shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between ${
                    dish.isComingSoon
                      ? 'border-[#F4C400]/70 hover:border-[#F4C400] ring-1 ring-[#F4C400]/40'
                      : 'border-red-800/80 hover:border-[#F4C400]'
                  }`}
                >
                  {/* Food Image Container */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category and Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      <span className="text-[11px] font-bold bg-[#171717]/90 backdrop-blur-xs text-white px-2.5 py-1 rounded-md">
                        {dish.category}
                      </span>
                      {dish.isComingSoon ? (
                        <span className="text-[11px] font-black bg-[#F4C400] text-[#171717] px-2.5 py-1 rounded-md shadow-md flex items-center gap-1 animate-pulse">
                          <Sparkles className="w-3 h-3 text-[#171717]" />
                          <span>Coming Soon</span>
                        </span>
                      ) : dish.badge ? (
                        <span className="text-[11px] font-bold bg-[#F4C400] text-[#171717] px-2.5 py-1 rounded-md shadow-xs">
                          {dish.badge}
                        </span>
                      ) : null}
                    </div>

                    {dish.spiciness && (
                      <div className="absolute top-3 right-3 bg-[#330404]/90 backdrop-blur-xs px-2 py-0.5 rounded-md text-[10px] font-bold flex items-center gap-1 text-[#F4C400] shadow-xs">
                        <Flame className="w-3 h-3 text-red-500 fill-red-500" />
                        <span>{dish.spiciness}</span>
                      </div>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F4C400] transition-colors leading-snug">
                        {dish.name}
                      </h3>

                      <p className="text-xs text-red-200 line-clamp-2 mt-1.5 leading-relaxed font-normal">
                        {dish.description}
                      </p>

                      {/* Interactive Portions if available (from official card) */}
                      {!dish.isComingSoon && dish.portions && (
                        <div className="mt-3">
                          <span className="text-[10px] uppercase font-bold text-red-300 block mb-1">
                            Select Portion:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {dish.portions.map((portion, pIdx) => {
                              const isSelected = pIdx === currentPortionIdx;
                              return (
                                <button
                                  key={portion.name}
                                  type="button"
                                  onClick={(e) => handlePortionSelect(dish.id, pIdx, e)}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                                    isSelected
                                      ? 'bg-[#F4C400] text-[#171717] shadow-xs font-black'
                                      : 'bg-[#380505] text-red-100 border border-red-700/80 hover:bg-[#F4C400]/20'
                                  }`}
                                >
                                  {portion.name}: ₹{portion.price}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Coming soon teaser tag inside card */}
                      {dish.isComingSoon && (
                        <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold text-[#F4C400] bg-[#380404] px-2.5 py-1 rounded-lg border border-[#F4C400]/40">
                          <Clock className="w-3 h-3" />
                          <span>Launching Soon in Angadipuram</span>
                        </div>
                      )}
                    </div>

                    {/* Price Display & Action Button */}
                    <div className="mt-5 pt-3.5 border-t border-red-800/80 flex items-center justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-[10px] text-red-300 font-semibold uppercase tracking-wider">
                          {dish.isComingSoon ? 'Status' : activePortion ? `${activePortion.name} Price` : 'Price'}
                        </span>
                        {dish.isComingSoon ? (
                          <span className="text-sm font-black text-[#F4C400] uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-[#F4C400]" />
                            Coming Soon
                          </span>
                        ) : (
                          <span className="text-lg font-black text-[#F4C400] font-mono tracking-tight">
                            {displayPrice}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => onSelectDishForEnquiry(dish)}
                        className={`inline-flex items-center gap-1.5 text-xs font-black px-3.5 py-2.5 rounded-xl transition-all duration-200 shadow-xs cursor-pointer ${
                          dish.isComingSoon
                            ? 'bg-[#3A0505] hover:bg-[#F4C400] text-[#F4C400] hover:text-[#171717] border border-[#F4C400]/60'
                            : 'bg-[#F4C400] hover:bg-[#D9A900] text-[#171717]'
                        }`}
                      >
                        <span>{dish.isComingSoon ? 'Enquire Soon' : 'Order Now'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Direct Phone Ordering Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#440606] border border-red-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#F4C400] flex items-center justify-center shrink-0">
              <Utensils className="w-6 h-6 text-[#171717]" />
            </div>
            <div>
              <h4 className="text-base font-extrabold text-white">
                Ready to order takeaway parcel or book a table?
              </h4>
              <p className="text-xs text-red-200 mt-0.5">
                Hot Shawaya combos & fresh chilled Mojitos packed carefully for takeaway in Angadipuram.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <a
              href={`tel:${RESTAURANT_INFO.phone1Raw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xs"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>Call 097473 62102</span>
            </a>
            <a
              href={`tel:${RESTAURANT_INFO.phone2Raw}`}
              className="flex-1 md:flex-initial inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm px-6 py-3.5 rounded-2xl shadow-xs"
            >
              <Phone className="w-4 h-4 fill-current text-[#F4C400]" />
              <span>097473 62101</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
