import Navbar from '@/components/layout/navigation/Navbar';
import Footer from '@/components/layout/footer/Footer';
import HeroSection from '@/components/features/home/HeroSection';
import FeaturedProducts from '@/components/features/home/FeaturedProducts';
import AboutSection from '@/components/features/home/AboutSection';
import TestimonialsSection from '@/components/features/home/TestimonialsSection';
import CTASection from '@/components/features/home/CTASection';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-light/10 to-pink-light/20 dark:from-pink-dark/5 dark:via-pink-dark/10 dark:to-pink-dark/15">
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
