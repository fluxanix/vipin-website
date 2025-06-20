import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The Google Ads graphics they created for us increased our click-through rate by 40%! The designs are eye-catching and perfectly optimized for conversions. Our ad spend is now much more effective and we're seeing real ROI improvements.",
      author: "Priya Sharma",
      position: "Marketing Manager",
      company: "TechVision Inc.",
      avatar: "bg-blue-500"
    },
    {
      quote: "Our YouTube channel views went up 300% after they redesigned our thumbnails. The designs are so compelling that people actually stop scrolling to click. They really understand what makes content click-worthy.",
      author: "Michael Chen",
      position: "Content Creator",
      company: "InnovateLab",
      avatar: "bg-green-500"
    },
    {
      quote: "The social media ads they designed for our Facebook and Instagram campaigns are converting like crazy. Our engagement rates doubled and we're getting quality leads consistently. The designs perfectly match our brand voice.",
      author: "Leila Rodriguez",
      position: "Digital Marketing Director",
      company: "GrowthCo",
      avatar: "bg-purple-500"
    },
    {
      quote: "As a local restaurant, we needed help with community marketing. Their local business promotion materials helped us attract more customers from our neighborhood. The flyers and business cards look professional and get results.",
      author: "Arjun Patel",
      position: "Restaurant Owner",
      company: "Spice Garden",
      avatar: "bg-orange-500"
    },
    {
      quote: "They completely redesigned our website and the difference is incredible. The UI/UX is so intuitive that our customers can find what they need instantly. Our conversion rates improved by 150% within the first month.",
      author: "Anna Williams",
      position: "E-commerce Manager",
      company: "RetailMax",
      avatar: "bg-pink-500"
    },
    {
      quote: "The web development work they did for our startup was outstanding. They built a custom platform that handles our complex requirements perfectly. The code is clean, scalable, and they delivered everything on time and budget.",
      author: "Rajesh Kumar",
      position: "CTO",
      company: "EcoTech Solutions",
      avatar: "bg-teal-500"
    }
  ];
  
  return (
    <section id="testimonials" className="w-full py-12 sm:py-20 px-4 sm:px-6 md:px-12 bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      <div className="max-w-7xl mx-auto space-y-10 sm:space-y-16 relative z-10">
        <div className="text-center space-y-3 sm:space-y-4 max-w-xl sm:max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/10 text-primary">
            Client Success Stories
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Trusted by industry leaders
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground">
            See how we've helped businesses achieve their digital transformation goals
          </p>
        </div>
        
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="p-5 sm:p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 group"
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 sm:mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-primary fill-primary" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-base sm:text-lg mb-4 sm:mb-8 text-foreground/90 italic leading-relaxed">"{testimonial.quote}"</p>
              
              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div>
                  <h4 className="font-semibold text-foreground text-sm sm:text-base">{testimonial.author}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-8 sm:pt-16 border-t border-border">
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">500+</div>
            <div className="text-xs sm:text-base text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">99%</div>
            <div className="text-xs sm:text-base text-muted-foreground">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">50+</div>
            <div className="text-xs sm:text-base text-muted-foreground">Team Experts</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-4xl font-bold text-primary mb-1 sm:mb-2">24/7</div>
            <div className="text-xs sm:text-base text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
