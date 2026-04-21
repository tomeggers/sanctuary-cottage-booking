import Image from "next/image";
import content from '@/data/content.json';
import property from '@/data/property.json';

export default function Hero() {
  const heroImage = property.image_urls[0];

  return (
    <section className="relative bg-stone-900">
      {/* Background Image with Modern Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={heroImage}
          alt="Sanctuary Cottage"
          fill
          priority
          className="object-cover opacity-75"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/40 to-stone-900/80" />
      </div>

      {/* Main content */}
      <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 text-center max-w-5xl mx-auto py-20">
        {/* Tagline badge */}
        <div className="mb-8 px-5 py-2.5 bg-amber-600/20 backdrop-blur-md rounded-full border border-amber-500/30 shadow-lg shadow-amber-900/20">
          <span className="text-sm uppercase tracking-widest font-semibold text-amber-100">
            {content.hero.tagline}
          </span>
        </div>

        {/* Headline with improved typography */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[1.1] text-white drop-shadow-2xl">
          {content.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 max-w-3xl font-light leading-relaxed mb-12">
          {content.hero.subheadline}
        </p>

        {/* CTA Button */}
        <a
          href="#book"
          className="group inline-flex items-center gap-3 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl shadow-amber-900/30 hover:shadow-2xl hover:shadow-amber-900/40 hover:scale-105"
        >
          <span>Book Your Stay</span>
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* Stats bar - Redesigned with better visual hierarchy */}
      <div className="relative w-full bg-stone-900/60 backdrop-blur-xl border-t border-white/10 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Rating Feature */}
          <div className="flex items-center justify-center gap-3 mb-6 pb-6 border-b border-white/10">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-white">{property.rating}</span>
            <span className="text-white/70 text-sm">({property.review_count} reviews)</span>
          </div>

          {/* Property Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
              <span className="text-white font-semibold text-lg">{property.guest_capacity}</span>
              <span className="text-white/70 text-xs uppercase tracking-wider">Guests</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <span className="text-white font-semibold text-lg">{property.bedrooms}</span>
              <span className="text-white/70 text-xs uppercase tracking-wider">Bedroom</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18" />
              </svg>
              <span className="text-white font-semibold text-lg">{property.beds}</span>
              <span className="text-white/70 text-xs uppercase tracking-wider">Bed</span>
            </div>

            <div className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
              <span className="text-white font-semibold text-lg">{property.bathrooms}</span>
              <span className="text-white/70 text-xs uppercase tracking-wider">Bathroom</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - subtle and elegant */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs uppercase tracking-wider">Scroll</span>
          <svg className="w-5 h-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
