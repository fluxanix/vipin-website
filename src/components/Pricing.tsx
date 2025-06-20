
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses and startups looking to establish their digital presence",
      features: [
        "Custom website design",
        "Responsive development",
        "Basic SEO optimization",
        "Contact form integration",
        "3 months support",
        "2 revision rounds"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false,
      timeline: "2-3 weeks delivery"
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "project",
      description: "Ideal for growing businesses that need advanced functionality and integrations",
      features: [
        "Everything in Starter",
        "Custom web application",
        "Database integration",
        "User authentication",
        "Payment processing",
        "Advanced SEO & analytics",
        "6 months support",
        "Unlimited revisions"
      ],
      buttonText: "Start Project",
      buttonVariant: "default",
      popular: true,
      timeline: "4-6 weeks delivery"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "quote",
      description: "For large organizations requiring complex solutions and ongoing partnerships",
      features: [
        "Everything in Professional",
        "Multi-platform development",
        "Custom integrations",
        "Dedicated project manager",
        "Priority support",
        "Training & documentation",
        "12 months support",
        "Ongoing maintenance"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
      popular: false,
      timeline: "6-12 weeks delivery"
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-20 px-6 md:px-12 bg-card">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Investment plans for every business
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose the package that fits your needs. All projects include our quality guarantee.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`p-8 rounded-2xl border flex flex-col h-full ${
                plan.popular 
                  ? "border-primary/50 cosmic-glow bg-background relative" 
                  : "border-border bg-background"
              } transition-all duration-300 hover:border-primary/30 hover:shadow-lg`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm rounded-full font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="mb-auto">
                <h3 className="text-2xl font-bold tracking-tight mb-2 text-foreground">{plan.name}</h3>
                
                <div className="mb-4">
                  <div className="text-4xl font-bold tracking-tight text-foreground">{plan.price}</div>
                  <div className="text-sm text-muted-foreground">{plan.period}</div>
                </div>
                
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={12} className="text-primary" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-muted/50 mb-6">
                  <div className="text-sm text-muted-foreground">Timeline:</div>
                  <div className="font-semibold text-foreground">{plan.timeline}</div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className={
                    plan.buttonVariant === "default" 
                      ? "w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12" 
                      : "w-full border-border text-foreground hover:bg-muted h-12"
                  }
                  variant={plan.buttonVariant as "default" | "outline"}
                >
                  {plan.buttonText}
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional info */}
        {/* <div className="text-center space-y-4 pt-12 border-t border-border">
          <p className="text-muted-foreground">
            All packages include free consultation • 30-day money-back guarantee
          </p>
          <div className="flex justify-center">
            <Button variant="ghost" className="text-primary hover:text-primary/80">
              Compare all features →
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Pricing;
