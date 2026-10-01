import { useState, useEffect } from 'react';
import { Navbar, PageRoute } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { MenuSection } from './components/MenuSection';
import { SpecialOffer } from './components/SpecialOffer';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { MobileQuickBar } from './components/MobileQuickBar';
import { MenuItem } from './types/restaurant';

// Dedicated Pages
import { MenuPage } from './pages/MenuPage';
import { AboutPage } from './pages/AboutPage';

export default function App() {
  const [activePage, setActivePage] = useState<PageRoute>('home');
  const [selectedDishForEnquiry, setSelectedDishForEnquiry] = useState<MenuItem | null>(null);

  // Sync hash in URL with page state
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#/menu' || hash === '#menu') {
        setActivePage('menu');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/about' || hash === '#about') {
        setActivePage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#/home' || hash === '#home' || hash === '') {
        setActivePage('home');
      } else {
        // If it's a section on home like #why-us, #gallery, #reviews, #location, #contact
        setActivePage('home');
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            const navOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 100);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageRoute, sectionId?: string) => {
    setActivePage(page);

    if (page === 'menu') {
      window.location.hash = '/menu';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = '/about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (sectionId) {
        window.location.hash = sectionId;
        setTimeout(() => {
          const el = document.querySelector(sectionId);
          if (el) {
            const navOffset = 80;
            const elementPosition = el.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navOffset;
            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }
        }, 80);
      } else {
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#580B0B] text-white pb-16 lg:pb-0 selection:bg-[#F4C400] selection:text-[#171717]">
      {/* Sticky Header Navigation with active page highlighting */}
      <Navbar activePage={activePage} onNavigate={handleNavigate} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <>
            <Hero
              onViewMenuClick={() => handleNavigate('menu')}
            />
            <About
              onViewFullAboutClick={() => handleNavigate('about')}
            />
            <MenuSection
              onSelectDishForEnquiry={(dish) => setSelectedDishForEnquiry(dish)}
            />
            <SpecialOffer />
            <WhyChooseUs />
            <GallerySection />
            <ReviewsSection />
            <LocationSection />
            <ContactSection />
          </>
        )}

        {activePage === 'menu' && (
          <MenuPage
            onSelectDishForEnquiry={(dish) => setSelectedDishForEnquiry(dish)}
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {activePage === 'about' && (
          <AboutPage
            onNavigateHome={() => handleNavigate('home')}
            onNavigateMenu={() => handleNavigate('menu')}
          />
        )}
      </main>

      {/* Premium Dark Charcoal & Crimson Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Mobile Sticky Quick Navigation & Action Bar */}
      <MobileQuickBar activePage={activePage} onNavigate={handleNavigate} />

      {/* Dish Enquiry & Order Modal */}
      {selectedDishForEnquiry && (
        <EnquiryModal
          dish={selectedDishForEnquiry}
          onClose={() => setSelectedDishForEnquiry(null)}
        />
      )}
    </div>
  );
}
