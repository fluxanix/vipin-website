import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const bulletPoints = [
  { icon: '🔥', text: 'Fast 1-Day Delivery' },
  { icon: '🎯', text: '100% Google Ads Friendly Designs' },
  { icon: '📱', text: 'Direct WhatsApp Support' },
  { icon: '💰', text: 'Affordable Packages' },
  { icon: '⭐', text: 'Satisfied Clients Across World' },
  { icon: '🌐', text: 'Global Reach & Support' },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="why-choose-us" className="relative w-full py-12 sm:py-20 px-4 sm:px-6 md:px-12 bg-background overflow-hidden">
      {/* Cosmic grid and glow background */}
      <div className="absolute inset-0 cosmic-grid opacity-20 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full z-0">
        <div className="w-full h-full opacity-10 bg-primary blur-[60px] sm:blur-[120px]"></div>
      </div>
      <div className="relative max-w-2xl sm:max-w-5xl mx-auto z-10 space-y-6 sm:space-y-10">
        <div className="text-center space-y-2 sm:space-y-3 max-w-xl sm:max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground drop-shadow-lg">
            Why Choose Us?
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Here's what makes us stand out:
          </p>
        </div>
        <div className="cosmic-glow bg-card/90 backdrop-blur-md border border-border rounded-2xl shadow-2xl p-5 sm:p-8 md:p-12 transition-all duration-1000">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-8 md:gap-y-10">
            {/* Bullet points */}
            {bulletPoints.map((point, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg font-semibold transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                <span className="text-2xl sm:text-3xl md:text-4xl drop-shadow-sm">{point.icon}</span>
                <span className="text-foreground whitespace-nowrap">{point.text}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center pt-6 sm:pt-10">
            <a
              href="https://wa.me/918588009505"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg shadow-lg transition-colors mt-4 sm:mt-6"
            >
              Get Started Now
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs; 