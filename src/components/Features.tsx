import React from 'react';
import { Code, Palette, Rocket, Shield, Zap, Users, Image, Video, Share2, MapPin, Globe } from 'lucide-react';

const Features = () => {
  const services = [
    {
      title: "Google Ads Graphics",
      description: "Eye-catching visual designs optimized for Google Ads to maximize click-through rates and conversions.",
      icon: <Image size={32} className="text-primary" />,
      features: ["Ad banner design", "Responsive layouts", "Brand consistency", "A/B testing"]
    },
    {
      title: "YouTube Thumbnails",
      description: "Compelling thumbnail designs that grab attention and increase video views and engagement rates.",
      icon: <Video size={32} className="text-primary" />,
      features: ["Click-worthy designs", "Text overlay", "Color psychology", "Channel branding"]
    },
    {
      title: "Social Media Ads (Facebook, Instagram)",
      description: "Engaging social media graphics that drive engagement and conversions across all platforms.",
      icon: <Share2 size={32} className="text-primary" />,
      features: ["Platform optimization", "Story ads", "Carousel posts", "Engagement tracking"]
    },
    {
      title: "Local Business Promotions",
      description: "Targeted marketing materials designed to attract local customers and boost community presence.",
      icon: <MapPin size={32} className="text-primary" />,
      features: ["Local SEO graphics", "Business cards", "Flyer design", "Community outreach"]
    },
    {
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      icon: <Code size={32} className="text-primary" />,
      features: ["React & Next.js", "Full-stack solutions", "API Integration", "Database design"]
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user experience and drive conversions.",
      icon: <Palette size={32} className="text-primary" />,
      features: ["User research", "Wireframing", "Prototyping", "Design systems"]
    },
  ];

  return (
    <section id="services" className="w-full py-12 sm:py-20 px-4 sm:px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16">
        {/* Section header */}
        <div className="text-center space-y-3 sm:space-y-4 max-w-xl sm:max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[42px] font-bold tracking-tight text-foreground">
            Everything you need to succeed online
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            From concept to launch, we provide comprehensive digital solutions that drive results
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-5 sm:p-8 rounded-2xl border border-border bg-background hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 sm:mb-6">
                <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-3 sm:mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-2xl font-semibold text-foreground mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6">{service.description}</p>
              </div>

              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 sm:gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-xs sm:text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center pt-8 sm:pt-12">
          <div className="inline-flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/918588009505"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-colors inline-flex items-center justify-center text-base sm:text-lg"
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
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
