import React, { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types/restaurant';

export const GallerySection: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const categories = ['All', 'Mandi', 'Shawaya', 'Grills', 'Ambiance', 'Starters', 'Desserts', 'Drinks'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (selectedFilter === 'All') return true;
    return item.category === selectedFilter;
  });

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(
        (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  const activeItem: GalleryItem | null =
    selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-[#5D0B0B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3B0505] border border-[#F4C400]/40 text-[#F4C400] font-bold text-xs mb-3 shadow-xs">
            <Camera className="w-3.5 h-3.5 text-[#F4C400]" />
            <span>Visual Showcase</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            A Taste Worth Seeing
          </h2>

          <p className="text-base sm:text-lg text-red-100 font-normal">
            Take a look at our dishes, sizzling rotisserie shawaya, and cozy dining atmosphere.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const isActive = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFilter(cat)}
                  className={`px-4 py-2 text-xs font-bold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F4C400] text-[#171717] shadow-sm font-black'
                      : 'bg-[#3B0505] text-red-200 hover:text-white border border-red-800'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer bg-neutral-900 border-2 border-red-800/80 hover:border-[#F4C400] shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover overlay with dish title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="self-end p-2 rounded-full bg-white/20 backdrop-blur-xs">
                  <Eye className="w-4 h-4 text-white" />
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#F4C400]">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-black leading-tight mt-0.5">{item.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            type="button"
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-700 shadow-2xl flex flex-col"
          >
            <img
              src={activeItem.image}
              alt={activeItem.title}
              className="max-h-[70vh] w-auto object-contain"
            />
            <div className="p-4 bg-neutral-900 text-white flex items-center justify-between border-t border-neutral-800">
              <div>
                <span className="text-xs font-bold text-[#F4C400] uppercase tracking-wider">
                  {activeItem.category}
                </span>
                <h3 className="text-base font-bold">{activeItem.title}</h3>
              </div>
              <span className="text-xs text-neutral-400 font-mono">
                {selectedImageIndex! + 1} / {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
