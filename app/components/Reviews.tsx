'use client';

import { useState, useEffect } from 'react';
import content from '@/data/content.json';

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = content.reviews.highlights;

  useEffect(() => {
    // Auto-advance carousel on mobile every 5 seconds
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-100 rounded-full border border-yellow-200">
            <svg className="w-5 h-5 text-yellow-600 fill-current" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-sm font-semibold text-yellow-800 uppercase tracking-wider">Guest Reviews</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-stone-900 mb-10">
          {content.reviews.heading}
        </h2>

        {/* Rating display - Enhanced */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-8 h-8 text-yellow-400 fill-current drop-shadow-sm"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
          </div>
          <div className="text-center">
            <span className="text-6xl font-bold text-stone-900 block mb-2">
              {content.reviews.rating}
            </span>
            <p className="text-gray-600 text-lg font-medium">
              Based on {content.reviews.review_count} reviews
            </p>
          </div>
        </div>

        {/* Summary */}
        <p className="text-center text-gray-700 text-xl max-w-3xl mx-auto mb-16 leading-relaxed">
          {content.reviews.summary}
        </p>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={index} className="w-full flex-shrink-0 px-2">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-amber-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop grid - 2 columns */}
        <div className="hidden md:grid grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Extracted Review Card Component for consistency
function ReviewCard({ review }: { review: string }) {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-amber-50/30 rounded-2xl shadow-sm p-8 border border-gray-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 h-full flex flex-col">
      {/* Quote icon */}
      <svg
        className="w-10 h-10 text-amber-600/30 mb-4"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>

      {/* Review text */}
      <p className="text-gray-700 mb-6 leading-relaxed text-lg flex-grow">
        {review}
      </p>

      {/* Star rating */}
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 24 24"
          >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>
    </div>
  );
}
