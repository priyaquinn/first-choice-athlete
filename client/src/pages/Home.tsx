import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Users, 
  Trophy, 
  Target, 
  Clock, 
  ChevronRight,
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const stats = [
  { value: "500+", label: "Athletes Placed", icon: Users },
  { value: "150+", label: "Partner Schools", icon: Trophy },
  { value: "95%", label: "Success Rate", icon: Target },
  { value: "15+", label: "Years Experience", icon: Clock },
];

const athletes = [
  {
    name: "Marcus Johnson",
    sport: "Basketball",
    achievement: "Full scholarship to Duke University",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=500&fit=crop",
  },
  {
    name: "Sarah Williams",
    sport: "Soccer",
    achievement: "Signed with LA Galaxy Academy",
    image: "https://images.unsplash.com/photo-1551958219-acbc608c6377?w=400&h=500&fit=crop",
  },
  {
    name: "David Chen",
    sport: "Swimming",
    achievement: "NCAA Division I Stanford",
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=500&fit=crop",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "We evaluate your athletic abilities, academic standing, and career goals to create a personalized roadmap.",
  },
  {
    step: "02",
    title: "Profile Development",
    description: "Our team builds a compelling athlete profile including highlight reels, statistics, and recommendations.",
  },
  {
    step: "03",
    title: "Strategic Outreach",
    description: "We connect you with coaches, scouts, and programs that align with your abilities and aspirations.",
  },
  {
    step: "04",
    title: "Negotiation & Placement",
    description: "We guide you through offers, negotiations, and ensure you secure the best opportunity for your future.",
  },
];

const testimonials = [
  {
    quote: "First Choice Athlete changed my life. They saw potential in me when no one else did and helped me secure a full ride to my dream school.",
    name: "Michael Torres",
    role: "Football, University of Michigan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    quote: "The team's dedication and expertise are unmatched. They treated my daughter like family throughout the entire process.",
    name: "Jennifer Adams",
    role: "Parent of recruited swimmer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461896836934- voices.jpg?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <span className="inline-block font-subheading text-primary font-bold uppercase tracking-widest mb-4" data-testid="text-hero-tagline">
            Your Path to Athletic Excellence
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white uppercase leading-tight mb-6" data-testid="text-hero-title">
            Where Champions<br />
            <span className="text-primary">Are Made</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-description">
            First Choice Athlete connects exceptional athletes with top-tier universities and professional teams worldwide. Let us help you achieve your dreams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/careers">
              <Button size="lg" className="font-subheading font-bold uppercase text-lg px-8 backdrop-blur-md" data-testid="button-hero-start">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                size="lg" 
                variant="outline" 
                className="font-subheading font-bold uppercase text-lg px-8 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
                data-testid="button-hero-services"
              >
                Our Services
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-8 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-item-${index}`}>
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-foreground/80" />
                <div className="font-heading text-3xl sm:text-4xl font-bold text-primary-foreground mb-1">
                  {stat.value}
                </div>
                <div className="font-subheading text-primary-foreground/80 uppercase text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Success Stories
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-section-athletes-title">
              Featured Athletes
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet some of the talented athletes we've helped achieve their dreams through strategic placement and dedicated support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {athletes.map((athlete, index) => (
              <Card key={index} className="group overflow-hidden hover-elevate" data-testid={`card-athlete-${index}`}>
                <div className="aspect-[4/5] relative overflow-hidden">
                  <img
                    src={athlete.image}
                    alt={athlete.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <span className="inline-block bg-primary px-3 py-1 rounded-md text-sm font-subheading font-bold uppercase mb-3">
                      {athlete.sport}
                    </span>
                    <h3 className="font-heading text-2xl font-bold uppercase mb-1">
                      {athlete.name}
                    </h3>
                    <p className="text-white/80 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      {athlete.achievement}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/about">
              <Button variant="outline" className="font-subheading font-bold uppercase" data-testid="button-view-all-stories">
                View All Success Stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              How It Works
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-section-process-title">
              Our Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A proven four-step approach to help you transition from promising athlete to recruited champion.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative" data-testid={`process-step-${index}`}>
                <div className="mb-4">
                  <span className="font-heading text-6xl font-bold text-primary/20">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold uppercase mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2">
                    <ArrowRight className="h-6 w-6 text-primary/30" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Testimonials
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-section-testimonials-title">
              What Our Athletes Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8" data-testid={`card-testimonial-${index}`}>
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <blockquote className="text-lg leading-relaxed mb-6">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-subheading font-bold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-primary-foreground mb-4" data-testid="text-cta-title">
            Ready to Take Your Career to the Next Level?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Join hundreds of athletes who have successfully transitioned to college and professional sports with our help.
          </p>
          <Link href="/careers">
            <Button 
              size="lg" 
              variant="secondary" 
              className="font-subheading font-bold uppercase text-lg px-8"
              data-testid="button-cta-apply"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
