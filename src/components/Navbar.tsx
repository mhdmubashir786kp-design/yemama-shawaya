import React, { useState, useEffect } from 'react';
import { Phone, Menu as MenuIcon, X, ChevronDown, Clock, MapPin, Utensils } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

export type PageRoute = 'home' | 'menu' | 'about';

interface NavbarProps {
  activePage: PageRoute;
  onNavigate: (page: PageRoute, sectionId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callDropdownOpen, setCallDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' as PageRoute, href: '#home', isDedicatedPage: true },
    { label: 'Menu', page: 'menu' as PageRoute, href: '#menu', isDedicatedPage: true, badge: 'Popular' },
    { label: 'About', page: 'about' as PageRoute, href: '#about', isDedicatedPage: true },
    { label: 'Why Us', page: 'home' as PageRoute, href: '#why-us' },
    { label: 'Gallery', page: 'home' as PageRoute, href: '#gallery' },
    { label: 'Reviews', page: 'home' as PageRoute, href: '#reviews' },
    { label: 'Location', page: 'home' as PageRoute, href: '#location' },
    { label: 'Contact', page: 'home' as PageRoute, href: '#contact' },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: PageRoute,
    href: string,
    isDedicatedPage?: boolean
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (isDedicatedPage) {
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      onNavigate('home', href);
    }
  };

  return (
    <>
      {/* Top micro bar for quick location and hours */}
      <div className="bg-[#380404] text-white text-[11px] sm:text-xs py-1.5 px-4 hidden md:block border-b border-red-950">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-red-200">
              <MapPin className="w-3.5 h-3.5 text-[#F4C400]" />
              {RESTAURANT_INFO.shortAddress}
            </span>
            <span className="flex items-center gap-1.5 text-red-200">
              <Clock className="w-3.5 h-3.5 text-[#F4C400]" />
              Open Daily: {RESTAURANT_INFO.openingHours}
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-red-200">Dine-in • Takeaway • Family Majlis</span>
            <span className="text-[#F4C400] font-semibold flex items-center gap-1">
              ★ {RESTAURANT_INFO.rating} ({RESTAURANT_INFO.reviewCount} Ratings)
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar on Red Theme */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#580B0B]/95 backdrop-blur-md shadow-xl py-2.5 sm:py-3 border-b border-red-900/80'
            : 'bg-[#6D0E0E] py-4 sm:py-5 border-b border-red-900/60 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, 'home', '#home', true)}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F4C400] rounded-lg cursor-pointer"
              aria-label="Yamama Shawaya Home"
            >
              <Logo variant="header" />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive = item.isDedicatedPage && activePage === item.page;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.page, item.href, item.isDedicatedPage)}
                    className={`relative px-3.5 py-2 text-sm font-bold rounded-full transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#F4C400] text-[#171717] font-black shadow-sm ring-1 ring-[#F4C400]'
                        : 'text-red-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.badge && !isActive && (
                      <span className="ml-1 text-[9px] px-1.5 py-0.5 rounded-full bg-[#F4C400] text-[#171717] font-black uppercase">
                        {item.badge}
                      </span>
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Menu CTA & Call Now CTA with Dropdown */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct Menu Quick Button */}
              {activePage !== 'menu' && (
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('menu');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 bg-[#450707] hover:bg-[#F4C400] hover:text-[#171717] text-[#F4C400] border border-[#F4C400]/60 font-black text-xs px-3.5 py-2.5 rounded-full transition-all cursor-pointer shadow-xs"
                >
                  <Utensils className="w-3.5 h-3.5" />
                  <span>View Menu</span>
                </button>
              )}

              <div className="relative">
                <button
                  type="button"
                  onClick={() => setCallDropdownOpen(!callDropdownOpen)}
                  onBlur={() => setTimeout(() => setCallDropdownOpen(false), 200)}
                  className="flex items-center gap-2 bg-[#F4C400] hover:bg-[#D9A900] text-[#171717] font-black text-sm px-4 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#F4C400] cursor-pointer"
                  aria-expanded={callDropdownOpen}
                  aria-haspopup="true"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call Now</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      callDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Call Dropdown for both lines */}
                {callDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-[#4A0707] rounded-2xl shadow-2xl border border-red-700/60 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3.5 py-1.5 text-[11px] font-bold text-red-300 uppercase tracking-wider">
                      Direct Restaurant Lines
                    </div>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-white hover:bg-white/10 font-bold transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{RESTAURANT_INFO.phone1Display}</span>
                      <span className="ml-auto text-[10px] text-red-300 font-normal">Line 1</span>
                    </a>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                      className="flex items-center gap-2.5 px-3.5 py-2 text-sm text-white hover:bg-white/10 font-bold transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                      <span>{RESTAURANT_INFO.phone2Display}</span>
                      <span className="ml-auto text-[10px] text-red-300 font-normal">Line 2</span>
                    </a>
                    <div className="border-t border-red-800/80 my-1"></div>
                    <a
                      href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(
                        RESTAURANT_INFO.whatsappMessage
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3.5 py-2 text-sm text-emerald-300 hover:bg-emerald-950/40 font-bold transition-colors"
                    >
                      <span>💬 WhatsApp Enquiries</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile Controls: Quick Call icon & Hamburger toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                className="p-2.5 rounded-full bg-[#F4C400] text-[#171717] hover:bg-[#D9A900] transition-colors shadow-xs"
                aria-label={`Call ${RESTAURANT_INFO.phone1}`}
              >
                <Phone className="w-4 h-4 fill-current" />
              </a>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-xl text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#F4C400] cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#4A0707] border-b border-red-900 animate-in slide-in-from-top duration-200 shadow-2xl">
            <div className="px-4 pt-3 pb-6 space-y-1">
              {navItems.map((item) => {
                const isActive = item.isDedicatedPage && activePage === item.page;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.page, item.href, item.isDedicatedPage)}
                    className={`block px-4 py-2.5 text-base font-bold rounded-xl transition-colors ${
                      isActive
                        ? 'bg-[#F4C400] text-[#171717] font-black'
                        : 'text-red-100 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#F4C400] text-[#171717] font-black uppercase">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}

              <div className="pt-4 border-t border-red-900/80 mt-2 space-y-2">
                <a
                  href={`tel:${RESTAURANT_INFO.phone1Raw}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#F4C400] text-[#171717] font-black text-sm py-3 px-4 rounded-xl shadow-xs"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call {RESTAURANT_INFO.phone1Display}</span>
                </a>
                <a
                  href={`tel:${RESTAURANT_INFO.phone2Raw}`}
                  className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-bold text-sm py-2.5 px-4 rounded-xl"
                >
                  <Phone className="w-4 h-4 fill-current text-[#F4C400]" />
                  <span>Call {RESTAURANT_INFO.phone2Display}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
