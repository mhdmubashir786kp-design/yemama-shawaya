import React from 'react';
import { Phone, MapPin, Clock, ArrowUp, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { Logo } from './Logo';
import { RESTAURANT_INFO } from '../data/restaurantData';

import { PageRoute } from './Navbar';

interface FooterProps {
  onNavigate?: (page: PageRoute, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks: { label: string; page: PageRoute; href: string; isDedicated?: boolean }[] = [
    { label: 'Home', page: 'home', href: '#home', isDedicated: true },
    { label: 'Menu & Rate Card', page: 'menu', href: '#menu', isDedicated: true },
    { label: 'About Us', page: 'about', href: '#about', isDedicated: true },
    { label: 'Why Us', page: 'home', href: '#why-us' },
    { label: 'Gallery', page: 'home', href: '#gallery' },
    { label: 'Reviews', page: 'home', href: '#reviews' },
    { label: 'Location & Map', page: 'home', href: '#location' },
    { label: 'Contact & Orders', page: 'home', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent, item: typeof footerLinks[0]) => {
    e.preventDefault();
    if (onNavigate) {
      if (item.isDedicated) {
        onNavigate(item.page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        onNavigate('home', item.href);
      }
    } else {
      window.location.hash = item.href;
    }
  };

  return (
    <footer className="bg-[#260303] text-white pt-16 pb-12 border-t-4 border-[#DC2626] relative overflow-hidden">
      {/* Decorative dark background pattern */}
      <div className="absolute inset-0 arabian-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-red-950">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo variant="footer" showSubtitle={false} />
            <p className="mt-4 text-sm text-red-200 leading-relaxed max-w-sm font-normal">
              Authentic Mandi, Shawaya & Arabian flavours in Angadipuram. Prepared with traditional Arabian recipes and served with genuine Malabar warmth.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yamama Shawaya Instagram"
                className="w-10 h-10 rounded-full bg-[#3B0505] hover:bg-[#F4C400] hover:text-[#171717] text-red-200 flex items-center justify-center transition-colors border border-red-900"
              >
                <Instagram className="w-5 h-5" />
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yamama Shawaya Facebook"
                className="w-10 h-10 rounded-full bg-[#3B0505] hover:bg-[#F4C400] hover:text-[#171717] text-red-200 flex items-center justify-center transition-colors border border-red-900"
              >
                <Facebook className="w-5 h-5" />
              </a>

              {/* WhatsApp */}
              <a
                href={`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encodeURIComponent(RESTAURANT_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Yamama Shawaya WhatsApp"
                className="w-10 h-10 rounded-full bg-[#3B0505] hover:bg-emerald-600 hover:text-white text-red-200 flex items-center justify-center transition-colors border border-red-900"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4C400] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link)}
                    className="text-sm text-red-200 hover:text-[#F4C400] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <span className="text-[#F4C400] text-xs">›</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-[#F4C400] mb-4">
              Direct Contact
            </h4>
            <ul className="space-y-3 text-sm text-red-200">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C400] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone1Raw}`} className="hover:text-[#F4C400] font-bold text-white">
                  {RESTAURANT_INFO.phone1Display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F4C400] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone2Raw}`} className="hover:text-[#F4C400] font-bold text-white">
                  {RESTAURANT_INFO.phone2Display}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F4C400] shrink-0 mt-0.5" />
                <span>Angadipuram, Malappuram, Kerala</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F4C400] shrink-0" />
                <span>Open 11:30 AM – 11:30 PM Daily</span>
              </li>
            </ul>
          </div>

          {/* Halal & Dine-in Callout */}
          <div className="lg:col-span-2 flex flex-col justify-between">
            <div className="p-4 rounded-2xl bg-[#380404] border border-red-900">
              <div className="text-xs font-bold text-[#F4C400] mb-1">100% HALAL CERTIFIED</div>
              <p className="text-[11px] text-red-200 leading-normal">
                Dedicated family dining section & clean takeaway packaging.
              </p>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="mt-4 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#380404] hover:bg-[#F4C400] hover:text-[#171717] text-red-200 font-bold text-xs transition-colors self-start w-full sm:w-auto border border-red-900 cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location tag */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-red-300">
          <p>© 2026 Yamama Shawaya. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-red-300">
            <span>Angadipuram, Malappuram, Kerala, India</span>
            <span>•</span>
            <span className="text-[#F4C400] font-bold">Authentic Arabian Hospitality</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
