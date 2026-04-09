import Hero from './components/Hero';
import Gallery from './components/Gallery';
import PropertyOverview from './components/PropertyOverview';
import DogFriendly from './components/DogFriendly';
import Amenities from './components/Amenities';
import BeautyServices from './components/BeautyServices';
import Location from './components/Location';
import Reviews from './components/Reviews';
import AvailabilityCalendar from './components/AvailabilityCalendar';
import ScrollReveal from './components/ScrollReveal';

export default function Home() {
  return (
    <main>
      <Hero />
      <ScrollReveal>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal>
        <PropertyOverview />
      </ScrollReveal>
      <ScrollReveal>
        <DogFriendly />
      </ScrollReveal>
      <ScrollReveal>
        <Amenities />
      </ScrollReveal>
      <ScrollReveal>
        <BeautyServices />
      </ScrollReveal>
      <ScrollReveal>
        <Location />
      </ScrollReveal>
      <ScrollReveal>
        <Reviews />
      </ScrollReveal>
      <ScrollReveal>
        <AvailabilityCalendar />
      </ScrollReveal>
    </main>
  );
}
