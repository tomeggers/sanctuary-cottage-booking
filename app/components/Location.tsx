import content from '@/data/content.json';
import property from '@/data/property.json';

export default function Location() {
  const { location } = content;
  const paragraphs = location.body.split('\n\n');

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          {/* Location Badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600/10 rounded-full border border-amber-600/20">
              <svg className="w-4 h-4 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-semibold text-amber-900 uppercase tracking-wider">{property.location}</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-stone-900">
            {location.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Description */}
          <div className="space-y-5">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed text-lg">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Right Column - Highlights */}
          <div className="space-y-4">
            {location.highlights.map((highlight, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-amber-100 shadow-sm hover:shadow-lg hover:border-amber-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-amber-700 text-sm mb-1.5 uppercase tracking-wide">
                      {highlight.label}
                    </div>
                    <div className="text-gray-900 font-medium text-lg">{highlight.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map with improved styling */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d173.229!3d-41.4025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s!2s169+White+Road%2C+Hope+7020%2C+New+Zealand!5e0!3m2!1sen!2snz!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Sanctuary Cottage — 169 White Road, Hope, Tasman"
          />
        </div>
      </div>
    </section>
  );
}
