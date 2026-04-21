'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import property from '@/data/property.json';

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = property.image_urls;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        setIsOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, images.length]);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const nextImage = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <>
      <section className="py-6 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Mobile view - single image */}
        <div className="md:hidden relative">
          <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg cursor-pointer" onClick={() => openLightbox(0)}>
            <Image
              src={images[0]}
              alt={`${property.title} - Image 1`}
              fill
              loading="lazy"
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <button
            onClick={() => openLightbox(0)}
            className="absolute bottom-4 right-4 bg-white px-5 py-2.5 rounded-full shadow-xl text-sm font-semibold hover:bg-gray-50 transition-all hover:scale-105 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Show all photos</span>
          </button>
        </div>

        {/* Desktop view - grid layout with improved styling */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-3 h-[500px] relative">
          {/* Main large image - left side spanning 2 rows */}
          <div className="col-span-2 row-span-2 overflow-hidden rounded-l-2xl shadow-md relative cursor-pointer" onClick={() => openLightbox(0)}>
            <Image
              src={images[0]}
              alt={`${property.title} - Image 1`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Top right - 2 images */}
          <div className="overflow-hidden shadow-md relative cursor-pointer" onClick={() => openLightbox(1)}>
            <Image
              src={images[1]}
              alt={`${property.title} - Image 2`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="overflow-hidden rounded-tr-2xl shadow-md relative cursor-pointer" onClick={() => openLightbox(2)}>
            <Image
              src={images[2]}
              alt={`${property.title} - Image 3`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Bottom right - 2 images */}
          <div className="overflow-hidden shadow-md relative cursor-pointer" onClick={() => openLightbox(3)}>
            <Image
              src={images[3]}
              alt={`${property.title} - Image 4`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>
          <div className="overflow-hidden rounded-br-2xl shadow-md relative cursor-pointer" onClick={() => openLightbox(4)}>
            <Image
              src={images[4]}
              alt={`${property.title} - Image 5`}
              fill
              loading="lazy"
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
          </div>

          {/* Show all photos button - improved design */}
          <button
            onClick={() => openLightbox(0)}
            className="absolute bottom-4 right-4 bg-white hover:bg-gray-50 px-5 py-2.5 rounded-full shadow-xl text-sm font-semibold transition-all hover:scale-105 flex items-center gap-2 border border-gray-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Show all {images.length} photos</span>
          </button>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center backdrop-blur-sm">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 backdrop-blur-md"
            aria-label="Close gallery"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={prevImage}
            className="absolute left-6 text-white hover:text-gray-300 transition-all z-10 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-md hover:scale-110"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Main image */}
          <div className="max-w-7xl max-h-[90vh] mx-auto px-20">
            <Image
              src={images[selectedIndex]}
              alt={`${property.title} - Image ${selectedIndex + 1}`}
              width={1600}
              height={1200}
              loading="lazy"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            />
          </div>

          {/* Next button */}
          <button
            onClick={nextImage}
            className="absolute right-6 text-white hover:text-gray-300 transition-all z-10 bg-white/10 hover:bg-white/20 rounded-full p-4 backdrop-blur-md hover:scale-110"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Image counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-sm font-semibold bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
