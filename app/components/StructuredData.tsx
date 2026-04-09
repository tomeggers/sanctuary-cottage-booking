export default function StructuredData() {
  const lodgingBusiness = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://sanctuarycottage.co.nz/#lodging",
    name: "Sanctuary Cottage",
    description:
      "Dog-friendly holiday cottage on 5 acres in Hope, Tasman, New Zealand. Private hot tub, fenced paddock, pond views, king bed. 10-15 minutes from Nelson and Richmond.",
    url: "https://sanctuarycottage.co.nz",
    image: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-18438033/original/9d834119-0081-4c25-92ee-787421de4190.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-18438033/original/462f5542-a188-4ff5-80e3-8a6b22018b05.jpeg",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-18438033/original/5e21f1d1-543c-41f6-89d1-72d1070428a1.jpeg",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hope",
      addressRegion: "Tasman",
      postalCode: "7020",
      addressCountry: "NZ",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -41.4025,
      longitude: 173.2290,
    },
    priceRange: "$180 NZD",
    currenciesAccepted: "NZD",
    checkinTime: "14:00",
    checkoutTime: "10:00",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private Hot Tub", value: true },
      { "@type": "LocationFeatureSpecification", name: "King Bed", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
      { "@type": "LocationFeatureSpecification", name: "Kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Pond Views", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dog Friendly", value: true },
      { "@type": "LocationFeatureSpecification", name: "Fenced Paddock", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "Washing Machine", value: true },
      { "@type": "LocationFeatureSpecification", name: "Garden Views", value: true },
    ],
    numberOfRooms: 1,
    petsAllowed: true,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.95",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "436",
    },
    founder: { "@type": "Person", name: "Viktoria" },
  };

  const vacationRental = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "@id": "https://sanctuarycottage.co.nz/#rental",
    name: "Sanctuary Cottage — Holiday Cottage in Hope, Tasman",
    description:
      "Peaceful 1-bedroom holiday cottage on a 5-acre hobby farm near Nelson and Richmond. Dog-friendly with fenced paddock, private hot tub, pond views. $180/night with no hidden fees.",
    url: "https://sanctuarycottage.co.nz",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hope",
      addressRegion: "Tasman",
      addressCountry: "NZ",
    },
    geo: { "@type": "GeoCoordinates", latitude: -41.4025, longitude: 173.2290 },
    numberOfBedrooms: 1,
    numberOfBathroomsTotal: 1,
    occupancy: { "@type": "QuantitativeValue", value: 2 },
    floorSize: { "@type": "QuantitativeValue", value: 60, unitCode: "MTK" },
    accommodationCategory: "Cottage",
    petsAllowed: true,
    tourBookingPage: "https://sanctuarycottage.co.nz/#book",
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Is Sanctuary Cottage dog friendly?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Sanctuary Cottage is extremely dog friendly. The guest area is fully fenced and separate, and there is a dedicated fenced paddock where your dog can run off-leash in complete safety. There is no pet fee.",
        },
      },
      {
        "@type": "Question",
        name: "How far is Sanctuary Cottage from Nelson?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sanctuary Cottage is located in Hope, Tasman, approximately 10-15 minutes drive from both Nelson city centre and Richmond. Wakefield is about 18 minutes away and Brightwater 10 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Does Sanctuary Cottage have a hot tub?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the cottage has a private hot tub available year-round. It's perfect for relaxing under the stars after a day exploring the Nelson Tasman region.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Sanctuary Cottage cost per night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sanctuary Cottage is $180 NZD per night with no hidden fees. There are no cleaning fees, no service fees, no booking fees, and no pet fees. The price you see is the price you pay.",
        },
      },
      {
        "@type": "Question",
        name: "How many guests can stay at Sanctuary Cottage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sanctuary Cottage sleeps 2 guests in a cozy attic-style bedroom with a king bed. It's ideal for couples or solo travellers seeking a peaceful countryside retreat.",
        },
      },
      {
        "@type": "Question",
        name: "Is the property fenced for dogs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the entire guest area is fully fenced and separate from the main property. There is also a dedicated fenced paddock exercise area where dogs can run freely and safely.",
        },
      },
      {
        "@type": "Question",
        name: "What is there to do near Sanctuary Cottage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sanctuary Cottage is perfectly positioned for exploring the Nelson Tasman region. Nearby attractions include Nelson wineries, the Great Taste Trail for cycling, Abel Tasman National Park, Tahunanui Beach, Richmond shops and cafes, Wakefield village, and Nelson Lakes. The cottage is also ideal as a base for the Tasman's Great Taste Trail.",
        },
      },
      {
        "@type": "Question",
        name: "Is there a kitchen at Sanctuary Cottage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the cottage has a fully equipped kitchen with a fridge, microwave, bench oven, electric fry pan, toaster, kettle, and all crockery and cookware you need. There is also a separate dining area.",
        },
      },
      {
        "@type": "Question",
        name: "Can I book Sanctuary Cottage directly without Airbnb fees?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Booking directly through our website means no Airbnb service fees, no booking fees, and no hidden charges. You save money compared to booking through third-party platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Is Sanctuary Cottage close to Abel Tasman National Park?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sanctuary Cottage is located in Hope, Tasman, approximately 1 hour from the Abel Tasman National Park entrance at Marahau. It makes a comfortable base for day trips to the park while enjoying a peaceful countryside retreat in the evenings.",
        },
      },
    ],
  };

  const beautySalon = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "@id": "https://beautybyviktoria.com/#salon",
    name: "Beauty by Viktoria",
    url: "https://beautybyviktoria.com",
    description:
      "In-home beauty treatments for Sanctuary Cottage guests — facials, cosmetic tattooing, and more.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hope",
      addressRegion: "Tasman",
      addressCountry: "NZ",
    },
    founder: { "@type": "Person", name: "Viktoria" },
  };

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Holiday Cottages Tasman", item: "https://sanctuarycottage.co.nz" },
      { "@type": "ListItem", position: 2, name: "Hope, Tasman", item: "https://sanctuarycottage.co.nz" },
      { "@type": "ListItem", position: 3, name: "Sanctuary Cottage", item: "https://sanctuarycottage.co.nz" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(vacationRental) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(beautySalon) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
    </>
  );
}
