import { useState } from 'react';
import { Navbar } from './components/Navbar';
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

export default function App() {
  const [selectedDishForEnquiry, setSelectedDishForEnquiry] = useState<MenuItem | null>(null);

  const handleScrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      const navOffset = 80;
      const elementPosition = menuEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#580B0B] text-white pb-16 lg:pb-0 selection:bg-[#F4C400] selection:text-[#171717]">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onViewMenuClick={handleScrollToMenu} />
        <About />
        <MenuSection onSelectDishForEnquiry={(dish) => setSelectedDishForEnquiry(dish)} />
        <SpecialOffer />
        <WhyChooseUs />
        <GallerySection />
        <ReviewsSection />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Premium Dark Charcoal Footer */}
      <Footer />

      {/* Mobile Sticky Conversion Action Bar */}
      <MobileQuickBar />

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
