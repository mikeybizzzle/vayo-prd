import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import PriceComparison from '@/components/PriceComparison';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import TrustBadges from '@/components/TrustBadges';
import FAQ from '@/components/FAQ';
import UrgencyBar from '@/components/UrgencyBar';
import StickyCTA from '@/components/StickyCTA';
import BookingNotifications from '@/components/BookingNotifications';

export default function Home() {
  return (
    <>
      <UrgencyBar />
      <main className="min-h-screen">
        <Hero />
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <div id="destinations">
          <PriceComparison />
        </div>
        <div id="benefits">
          <Benefits />
        </div>
        <TrustBadges />
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <StickyCTA />
      <BookingNotifications />
    </>
  );
}
