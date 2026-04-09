import content from '@/data/content.json';

export default function DogFriendly() {
  const icons = [
    // Fence/shield icon
    (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    // Running/field icon
    (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 14v3m5-3v3m5-3v3" />
      </svg>
    ),
    // Divider/separation icon
    (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />
      </svg>
    ),
    // Tree/nature icon
    (
      <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 16v5" />
      </svg>
    )
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 rounded-full border border-amber-600/20">
            <svg className="w-4 h-4 text-amber-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
            <span className="text-sm font-semibold text-amber-900 uppercase tracking-wider">Dog-Friendly Paradise</span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 text-center">
          {content.dog_friendly.heading}
        </h2>

        {/* Intro paragraph */}
        <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-16">
          {content.dog_friendly.intro}
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {content.dog_friendly.features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-amber-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon with gradient background */}
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 text-amber-700 mb-5 group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-stone-900 mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Improved Paw Print Feature - Much Better Design */}
        <div className="relative mt-16 py-12 px-8 bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl shadow-xl overflow-hidden">
          {/* Decorative Pattern Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4">
              <PawPrintIcon size="w-20 h-20" />
            </div>
            <div className="absolute top-12 right-8">
              <PawPrintIcon size="w-16 h-16" rotation="rotate-12" />
            </div>
            <div className="absolute bottom-8 left-1/4">
              <PawPrintIcon size="w-14 h-14" rotation="-rotate-6" />
            </div>
            <div className="absolute bottom-4 right-1/3">
              <PawPrintIcon size="w-24 h-24" rotation="rotate-45" />
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex-shrink-0">
                <DogFaceIcon size="w-16 h-16 md:w-20 md:h-20" color="text-white" />
              </div>
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Your Dog Will Love It Here</h3>
                <p className="text-amber-50 text-lg">Wide open spaces, secure fencing, and endless adventures</p>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white/20 backdrop-blur-sm border-2 border-white/40 rounded-2xl px-6 py-3">
                <p className="text-white font-bold text-lg">No Pet Fees</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple friendly dog face icon
function DogFaceIcon({ size = "w-16 h-16", color = "text-white" }: { size?: string; color?: string }) {
  return (
    <svg className={`${size} ${color}`} viewBox="0 0 64 64" fill="currentColor">
      {/* Head */}
      <ellipse cx="32" cy="34" rx="18" ry="16" />
      {/* Left ear - floppy */}
      <ellipse cx="14" cy="20" rx="7" ry="12" transform="rotate(-15 14 20)" />
      {/* Right ear - floppy */}
      <ellipse cx="50" cy="20" rx="7" ry="12" transform="rotate(15 50 20)" />
      {/* Inner ear shading */}
      <ellipse cx="14" cy="21" rx="4" ry="8" transform="rotate(-15 14 21)" opacity="0.3" fill="black" />
      <ellipse cx="50" cy="21" rx="4" ry="8" transform="rotate(15 50 21)" opacity="0.3" fill="black" />
      {/* Eyes */}
      <circle cx="25" cy="31" r="3" fill="white" />
      <circle cx="39" cy="31" r="3" fill="white" />
      <circle cx="25.5" cy="31.5" r="1.8" fill="black" />
      <circle cx="39.5" cy="31.5" r="1.8" fill="black" />
      {/* Eye shine */}
      <circle cx="26.5" cy="30" r="0.7" fill="white" />
      <circle cx="40.5" cy="30" r="0.7" fill="white" />
      {/* Nose */}
      <ellipse cx="32" cy="38" rx="4" ry="2.8" fill="black" opacity="0.8" />
      {/* Mouth */}
      <path d="M32 40.5 Q28 44 26 43" stroke="black" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
      <path d="M32 40.5 Q36 44 38 43" stroke="black" strokeWidth="1.2" fill="none" opacity="0.5" strokeLinecap="round" />
      {/* Tongue */}
      <ellipse cx="32" cy="44" rx="2.5" ry="3" fill="#e87e7e" />
    </svg>
  );
}

// Clean paw print for decorative backgrounds
function PawPrintIcon({ size = "w-16 h-16", color = "text-white", rotation = "" }: { size?: string; color?: string; rotation?: string }) {
  return (
    <svg className={`${size} ${color} ${rotation}`} viewBox="0 0 64 64" fill="currentColor">
      {/* Toe pads */}
      <ellipse cx="20" cy="14" rx="6" ry="7.5" />
      <ellipse cx="35" cy="10" rx="6" ry="7" />
      <ellipse cx="48" cy="16" rx="5.5" ry="7" />
      <ellipse cx="11" cy="26" rx="5.5" ry="7" />
      {/* Main pad */}
      <path d="M22 48c-3-5-5-9-3-14 2-4 6-6 11-6 5 0 9 2 11 6 2 5 0 9-3 14-2 3-5 5-8 5s-6-2-8-5z" />
    </svg>
  );
}
