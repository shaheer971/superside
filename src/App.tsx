import { useState, useEffect, lazy, Suspense } from 'react';
import { Badge } from "@/components/ui/badge";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { 
  Chrome, 
  CheckCircle2,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';
import { cn } from "@/lib/utils";
import { AnimatedBorder } from "@/components/ui/animated-border";

// Lazy load components that are not immediately visible
const GlowingEffectDemo = lazy(() => import("@/components/ui/glowing-effect-demo").then(mod => ({ default: mod.GlowingEffectDemo })));
const FAQSection = lazy(() => import("./components/FAQSection"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="w-full h-[400px] flex items-center justify-center">
    <div className="animate-pulse bg-muted rounded-lg w-full h-full"></div>
  </div>
);

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
      <div className="fixed w-full z-50 flex justify-center top-4">
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
          <img src="hero.png" alt="Hero Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/40 "></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={cn(
              "group inline-flex rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800 mb-6",
              isLoaded ? 'animate-fade-in animate-delay-2' : 'opacity-0'
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
          {/* <div className="text-center mb-16">
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
          </div> */}

          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
          </div> */}

          <div className="mt-20">
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
            <Suspense fallback={<LoadingFallback />}>
              <GlowingEffectDemo />
            </Suspense>
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
              <AnimatedBorder key={index} isPopular={plan.popular}>
                <div className={cn(
                  "p-6 h-full rounded-xl",
                  plan.popular ? "bg-gradient-to-tr from-indigo-600 via-purple-600 to-purple-700" : "bg-background"
                )}>
                  {plan.popular && (
                    <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">Most Popular</Badge>
                  )}
                  <h3 className={cn(
                    "text-2xl font-bold mb-2",
                    plan.popular ? "text-white" : "text-foreground"
                  )}>{plan.name}</h3>
                  <div className="mb-6">
                    <span className={cn(
                      "text-4xl font-bold",
                      plan.popular ? "text-white" : "text-foreground"
                    )}>${plan.price}</span>
                    <span className={cn(
                      plan.popular ? "text-white/70" : "text-muted-foreground"
                    )}>/month</span>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircle2 className={cn(
                          "w-5 h-5 mr-2",
                          plan.popular ? "text-white" : "text-primary"
                        )} />
                        <span className={cn(
                          plan.popular ? "text-white" : "text-foreground"
                        )}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <ShimmerButton 
                    background={plan.popular ? "white" : "hsl(var(--primary))"}
                    className={`w-full ${
                      plan.popular 
                        ? 'text-primary hover:text-primary border-2 border-white/20' 
                        : 'text-primary-foreground hover:text-primary-foreground'
                    }`}
                  >
                    Get Started
                  </ShimmerButton>
                </div>
              </AnimatedBorder>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/50 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center mb-16">
            <div className="inline-flex rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 mb-6">
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about SuperSide
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Suspense fallback={<LoadingFallback />}>
              <FAQSection faqs={faqs} />
            </Suspense>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-purple-700 p-8 md:p-12">
            {/* Animated background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-30 animate-shimmer-slide" style={{ '--speed': '3s' } as React.CSSProperties} />
            
            <div className="relative flex flex-col items-center justify-center text-center space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
                Ready to Supercharge Your Productivity?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Join thousands of users who have transformed their workflow with SuperSide.
              </p>
              <ShimmerButton 
                background="white"
                className="text-primary hover:text-primary/90 border-2 border-white/20"
              >
                Add to Chrome — It's Free
              </ShimmerButton>
            </div>
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