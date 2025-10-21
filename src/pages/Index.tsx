
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import FeaturedJobs from '@/components/FeaturedJobs';
import HowItWorks from '@/components/HowItWorks';
import StatsSection from '@/components/StatsSection';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <StatsSection />
        <FeaturedJobs />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
