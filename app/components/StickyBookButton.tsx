'use client';

import { useEffect, useState } from 'react';

export default function StickyBookButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~80% of viewport height (past hero)
      const scrolled = window.scrollY;
      const showThreshold = window.innerHeight * 0.8;

      // Hide when near the booking section so it doesn't overlap
      const bookSection = document.getElementById('book');
      const nearBookSection = bookSection
        ? scrolled + window.innerHeight >= bookSection.offsetTop + 100
        : false;

      setVisible(scrolled > showThreshold && !nearBookSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href="#book"
        className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-6 py-3 rounded-full font-semibold text-sm md:text-base shadow-xl shadow-amber-600/40 hover:shadow-2xl hover:scale-105 transition-all duration-300 backdrop-blur-sm border border-white/20"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <span>Book Your Stay</span>
        <span className="hidden md:inline text-amber-100 font-normal">— $180/night</span>
      </a>
    </div>
  );
}
