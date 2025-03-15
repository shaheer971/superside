import { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Chrome, 
  Calendar, 
  CheckCircle2, 
  //Clock, 
  Layout, 
  Brain, 
  Sparkles,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from "@/lib/utils";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Smart Tab Management",
      description: "Transform tab groups into tasks and open project-related tabs with a single click."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Integrated Calendar",
      description: "Plan events and deadlines with daily, weekly, and monthly calendar views."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Powered Prioritization",
      description: "Let AI help you prioritize tasks and optimize your workflow."
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Productivity Insights",
      description: "Track your progress and maintain productivity streaks."
    }
  ];

  const plans = [
    {
      name: "Free",
      price: "0",
      features: [
        "Basic tab management",
        "Simple to-do list",
        "Daily calendar view",
        "Limited task history"
      ]
    },
    {
      name: "Pro",
      price: "9.99",
      features: [
        "Advanced tab grouping",
        "AI task prioritization",
        "Full calendar features",
        "Productivity analytics",
        "Unlimited task history",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Team",
      price: "19.99",
      features: [
        "Everything in Pro",
        "Team collaboration",
        "Shared workspaces",
        "Admin controls",
        "API access",
        "Custom integrations"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does SuperSide improve my productivity?",
      answer: "SuperSide combines tab management, task organization, and calendar planning in one seamless sidebar. With AI-powered prioritization and productivity tracking, you'll stay focused and accomplish more."
    },
    {
      question: "Can I sync SuperSide across devices?",
      answer: "Yes! SuperSide syncs across all your Chrome browsers when you're signed in, ensuring your tasks, tabs, and calendar are always up to date."
    },
    {
      question: "Is my data secure with SuperSide?",
      answer: "Absolutely. We use industry-standard encryption and never store sensitive data. Your privacy and security are our top priorities."
    },
    {
      question: "How does the AI prioritization work?",
      answer: "Our AI analyzes your task patterns, deadlines, and work habits to suggest optimal task ordering and help you maintain peak productivity throughout the day."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navbar */}
      <div className="fixed w-full z-50 flex justify-center top-2">
        <nav className={`mx-4 transition-all duration-300 max-w-6xl w-full rounded-full ${
          isScrolled ? 'py-2 px-6 floating-navbar bg-background/80 border shadow-sm' : 'py-4 px-8'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Chrome className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold">SuperSide</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-sm font-medium nav-link hover:text-primary transition-colors">Features</a>
              <a href="#pricing" className="text-sm font-medium nav-link hover:text-primary transition-colors">Pricing</a>
              <a href="#faq" className="text-sm font-medium nav-link hover:text-primary transition-colors">FAQ</a>
              <ShimmerButton 
                background="hsl(var(--primary))"
                className="text-primary-foreground"
              >
                Add to Chrome
              </ShimmerButton>
            </div>

            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-4" /> : <Menu className="w-6 h-4" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 pt-20">
          <div className="container mx-auto px-4 flex flex-col space-y-6 items-center">
            <a href="#features" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#pricing" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="#faq" className="text-lg font-medium" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <ShimmerButton 
              background="hsl(var(--primary))"
              className="text-primary-foreground w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              Add to Chrome
            </ShimmerButton>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 hero-blur overflow-hidden relative">
        <div className="absolute inset-0 z-0">
          <img src="/hero.png" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40 "></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={cn(
              "group inline-flex rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-6",
              isLoaded ? 'animate-fade-in animate-delay-1' : 'opacity-0'
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ Supercharge Your Browser</span>
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
          <h1 
            className={`text-4xl md:text-6xl font-bold mb-6 leading-tight px-4 md:px-80 ${
              isLoaded ? 'animate-fade-in animate-delay-2' : 'opacity-0'
            }`}
          >
            Your All-in-One <span className="text-primary">Productivity Sidebar</span>
          </h1>
          <p 
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 px-4 ${
              isLoaded ? 'animate-fade-in animate-delay-3' : 'opacity-0'
            }`}
          >
            Combine task management, tab organization, and calendar planning in one sleek interface—right inside Chrome.
          </p>
          <div 
            className={`flex flex-col md:flex-row items-center justify-center gap-4 ${
              isLoaded ? 'animate-scale-in animate-delay-3' : 'opacity-0'
            }`}
          >
            <ShimmerButton 
              background="hsl(var(--primary))"
              className="w-full md:w-auto text-primary-foreground"
            >
              Add to Chrome <span className="ml-2">—</span> It's Free
            </ShimmerButton>
            <button 
              className="w-full md:w-auto px-6 py-3 border border-primary/20 hover:border-primary/30 text-foreground rounded-full flex items-center justify-center transition-all hover:bg-primary/5"
            >
              Watch Demo <ChevronRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="group inline-flex rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-6">
              <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Features</span>
                <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedShinyText>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Stay Productive
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              SuperSide combines powerful features to help you work smarter, not harder.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden rounded-xl border border-black/5 bg-neutral-100 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:border-white/5 dark:bg-neutral-900"
              >
                <div className="absolute inset-0 z-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/[0.07] to-transparent dark:via-white/[0.07] [--shimmer-width:50%] animate-shiny-text" />
                </div>
                <div className="relative z-10">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-semibold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Start free and upgrade as you grow. No credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`p-6 ${plan.popular ? 'border-primary' : ''}`}>
                {plan.popular && (
                  <Badge className="mb-4">Most Popular</Badge>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-primary mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <ShimmerButton 
                  background={plan.popular ? "hsl(var(--primary))" : "transparent"}
                  className={`w-full ${plan.popular ? 'text-primary-foreground' : 'border-2 border-primary/20 hover:border-primary/40'}`}
                >
                  Get Started
                </ShimmerButton>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about SuperSide
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Supercharge Your Productivity?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Join thousands of users who have transformed their workflow with SuperSide.
            </p>
            <ShimmerButton 
              background="white"
              className="text-primary"
            >
              Add to Chrome — It's Free
            </ShimmerButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Chrome className="w-6 h-6 text-primary" />
                <span className="font-bold">SuperSide</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your all-in-one productivity sidebar for Chrome.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="text-muted-foreground hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="text-muted-foreground hover:text-foreground">Pricing</a></li>
                <li><a href="#faq" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">About</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Blog</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-foreground">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} SuperSide. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;