export default function CTA() {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/20 backdrop-blur-md rounded-full border border-amber-500/30">
            <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-semibold text-amber-100 uppercase tracking-wider">Ready to Book?</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Your Sanctuary Awaits
        </h2>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
          Experience the perfect countryside escape for you and your dog
        </p>

        {/* Rating display - enhanced */}
        <div className="mb-10 inline-flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/20">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-amber-400 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <div className="h-6 w-px bg-white/20" />
          <span className="text-xl font-bold">4.95 / 5</span>
          <span className="text-white/70">from 436 reviews</span>
        </div>

        {/* CTA Button */}
        <div className="mb-8">
          <a
            href="#book"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl shadow-amber-900/50 hover:shadow-3xl hover:scale-105"
          >
            <span>Book Your Stay Now</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Alternative booking info */}
        <div className="text-sm text-white/60 mb-8">
          <p className="mb-2">Book direct and save — no platform fees</p>
          <p>
            Also available on{' '}
            <a
              href="https://www.airbnb.co.nz/rooms/18438033"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 underline hover:text-amber-400 transition-colors duration-200"
            >
              Airbnb
            </a>
          </p>
        </div>

        {/* Features list */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-8 border-t border-white/10">
          {[
            { icon: '💰', text: 'No Hidden Fees' },
            { icon: '🐕', text: 'Dog Friendly' },
            { icon: '🌿', text: 'Private & Peaceful' },
            { icon: '⭐', text: '4.95 Star Rated' },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <span className="text-3xl">{feature.icon}</span>
              <span className="text-sm text-white/80">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Decorative divider */}
        <div className="mt-16 flex items-center justify-center gap-4">
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <svg className="w-6 h-6 text-white/20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <div className="h-px w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>
      </div>
    </section>
  );
}
