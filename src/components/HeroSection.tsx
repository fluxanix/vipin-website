import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-screen py-12 sm:py-20 px-4 sm:px-6 md:px-12 flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-30 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] md:w-[800px] h-[350px] sm:h-[600px] md:h-[800px] rounded-full">
        <div className="w-full h-full opacity-10 bg-primary blur-[80px] sm:blur-[120px]"></div>
      </div>
      
      <div className={`relative z-10 max-w-2xl sm:max-w-4xl md:max-w-6xl text-center space-y-6 sm:space-y-8 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium rounded-full bg-muted text-primary border border-border">
            <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
            🚀 Trusted by 500+ companies worldwide
          </span>
        </div>
        
        {/* Main heading */}
        <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-[86px] font-bold tracking-tighter text-balance text-foreground leading-tight">
          High Converting Graphics Ads <br />
          <span className="text-primary">That Grow Your Business</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground max-w-md sm:max-w-2xl md:max-w-3xl mx-auto text-balance leading-relaxed">
          Speacialized in Google Ads, Graphics, Fast Delivery, Lead Boosting Designs, and Web Development.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center pt-6 sm:pt-8">
          <a 
            href="https://wa.me/918588009505" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block"
            onClick={() => {
              // Google Ads conversion tracking
              if (typeof window !== 'undefined' && window.gtag) {
                window.gtag('event', 'conversion', {
                  'send_to': 'AW-17301984142/34eACMzU7vUaEI6nnbpA',
                  'value': 1.0,
                  'currency': 'INR'
                });
              }
            }}
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 gap-2">
              Start Growing today
              <ArrowRight size={20} />
            </Button>
          </a>
        </div>
        
        {/* Social proof */}
        <div className="pt-8 sm:pt-12 space-y-2 sm:space-y-4">
          <div className="flex justify-center items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-primary fill-primary" />
            ))}
            <span className="ml-2 text-muted-foreground text-xs sm:text-base">4.9/5 from 200+ reviews</span>
          </div>
        </div>
      </div>
      
      {/* Featured work preview */}
      {/* <div className={`w-full max-w-md sm:max-w-2xl md:max-w-7xl mt-10 sm:mt-20 z-10 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
        <div className="cosmic-glow relative rounded-xl overflow-hidden border border-border backdrop-blur-sm bg-card shadow-2xl">
          <div className="bg-card/90 backdrop-blur-md w-full p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2 sm:gap-0">
              <h3 className="text-lg sm:text-xl font-semibold text-foreground">Latest Project Dashboard</h3>
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <div className="h-48 sm:h-72 md:h-96 bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center space-y-2 sm:space-y-4">
                <div className="h-10 w-10 sm:h-16 sm:w-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-primary"></div>
                </div>
                <p className="text-muted-foreground text-xs sm:text-base">Interactive project showcase</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
