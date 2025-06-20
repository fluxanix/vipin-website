import React from 'react';
import HeroSection from '@/components/HeroSection';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <main>
        <HeroSection />
        <Features />
        <Testimonials />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
