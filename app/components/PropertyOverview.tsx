import content from '@/data/content.json';
import property from '@/data/property.json';

export default function PropertyOverview() {
  const paragraphs = content.property_description.body.split('\n\n');

  const stats = [
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      label: 'Guests',
      value: property.guest_capacity
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Bedrooms',
      value: property.bedrooms
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 21h18M3 7v1a3 3 0 003 3h12a3 3 0 003-3V7m-18 0V5a2 2 0 012-2h14a2 2 0 012 2v2M3 7h18" />
        </svg>
      ),
      label: 'Beds',
      value: property.beds
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      ),
      label: 'Bathrooms',
      value: property.bathrooms
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-10">
          {content.property_description.heading}
        </h2>

        {/* Description paragraphs */}
        <div className="space-y-6 mb-16">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-xl text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Stats grid - Improved design with consistent styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 text-center border border-amber-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="text-amber-600 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>

              {/* Value */}
              <div className="text-4xl font-bold text-stone-900 mb-1">
                {stat.value}
              </div>

              {/* Label */}
              <div className="text-sm font-semibold text-stone-600 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
