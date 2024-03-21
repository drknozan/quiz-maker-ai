import ContactCard from '../components/ContactCard';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';

export default function Home() {
  return (
    <main className="bg-black">
      <HeroSection />
      <InfoSection />
      <ContactCard />
    </main>
  );
}
