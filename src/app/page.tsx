import Navbar from '@/components/layout/navigation/Navbar';
import Footer from '@/components/layout/footer/Footer';
import HeroSection from '@/components/features/home/HeroSection';
import FeaturedProducts from '@/components/features/home/FeaturedProducts';
import AboutSection from '@/components/features/home/AboutSection';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';
import CTASection from '@/components/features/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        <AboutSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
