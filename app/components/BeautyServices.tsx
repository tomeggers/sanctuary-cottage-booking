export default function BeautyServices() {
  const services = [
    {
      title: 'Facials',
      description:
        'Rejuvenating facial treatments tailored to your skin type — the perfect way to unwind after a day exploring the region.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Cosmetic Tattooing',
      description:
        'Wake up looking your best every day with professional cosmetic tattooing — brows, lips, and more.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'Beauty Treatments',
      description:
        'From lashes to waxing, enjoy a full menu of beauty treatments without leaving the comfort of the cottage.',
      icon: (
        <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-100 rounded-full border border-rose-200">
            <svg className="w-4 h-4 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <span className="text-sm font-semibold text-rose-700 uppercase tracking-wider">In-Home Pampering</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-stone-900">
          Pamper Yourself During Your Stay
        </h2>
        <p className="text-center text-gray-600 text-xl mb-16 max-w-3xl mx-auto leading-relaxed">
          Your host Viktoria is a qualified beauty therapist. Book an in-home pamper session and
          enjoy professional treatments without leaving the cottage.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-gradient-to-br from-gray-50 to-rose-50/30 rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:border-rose-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-rose-100 to-pink-100 text-rose-600 mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-bold text-2xl mb-3 text-stone-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://beautybyviktoria.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-rose-600/30 hover:shadow-xl hover:shadow-rose-600/40 hover:scale-105"
          >
            <span>View Treatments & Book</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
