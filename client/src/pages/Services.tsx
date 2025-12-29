import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  GraduationCap, 
  Video, 
  BarChart3, 
  Users, 
  Mic, 
  FileText,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: BarChart3,
    title: "Athlete Evaluation",
    description: "Comprehensive assessment of your athletic abilities, academic standing, and career potential.",
    features: [
      "In-depth skills assessment",
      "Performance analytics",
      "Academic review",
      "Goal setting session",
      "Market positioning analysis",
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
  },
  {
    icon: Video,
    title: "Highlight Production",
    description: "Professional-quality video content that showcases your best moments to scouts and coaches.",
    features: [
      "Professional video editing",
      "Custom highlight reels",
      "Game footage analysis",
      "Social media optimized clips",
      "Ongoing content updates",
    ],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "College Placement",
    description: "Strategic connections with NCAA Division I, II, III, and NAIA programs across the country.",
    features: [
      "Program matching",
      "Coach outreach campaigns",
      "Campus visit coordination",
      "Application assistance",
      "Scholarship negotiation",
    ],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Pro Scouting Network",
    description: "Access to our extensive network of professional scouts, agents, and team representatives.",
    features: [
      "Scout introductions",
      "Pro day preparation",
      "Contract guidance",
      "Agent vetting",
      "Career pathway planning",
    ],
    image: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=600&h=400&fit=crop",
  },
  {
    icon: Mic,
    title: "Media Training",
    description: "Build your personal brand and learn to handle interviews, social media, and public appearances.",
    features: [
      "Interview preparation",
      "Social media strategy",
      "Brand development",
      "Public speaking coaching",
      "Crisis management",
    ],
    image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff?w=600&h=400&fit=crop",
  },
  {
    icon: FileText,
    title: "Career Counseling",
    description: "Holistic guidance for life during and after sports, including education and career transitions.",
    features: [
      "Life skills coaching",
      "Financial planning basics",
      "Post-career preparation",
      "Mental performance support",
      "Network building",
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
  },
];

const faqs = [
  {
    question: "How do I know if I'm ready for recruitment services?",
    answer: "If you're a dedicated athlete with competitive experience and aspirations to play at the college or professional level, you're likely a good fit for our services. We work with athletes at various stages, from high school freshmen to transfer students and international prospects.",
  },
  {
    question: "What sports do you cover?",
    answer: "We specialize in all major collegiate and professional sports including football, basketball, baseball, soccer, swimming, track & field, volleyball, golf, tennis, and more. If you don't see your sport listed, reach out—we likely have connections in your field.",
  },
  {
    question: "How long does the placement process typically take?",
    answer: "The timeline varies based on your current level, target programs, and sport seasonality. College placements typically take 6-18 months for optimal results, while professional connections can develop over 1-3 years of relationship building.",
  },
  {
    question: "What makes Elite Sports different from other recruiting services?",
    answer: "Our team consists of former scouts, coaches, and sports industry professionals with direct relationships at hundreds of programs. We don't just send emails—we make personal introductions and advocate directly for our athletes.",
  },
  {
    question: "Do you guarantee placement?",
    answer: "While we can't guarantee specific outcomes, our 95% success rate speaks for itself. We work tirelessly to find the right fit for every athlete we represent, and we're transparent about expectations throughout the process.",
  },
  {
    question: "What are your fees?",
    answer: "Our pricing varies based on the scope of services needed. We offer individual services as well as comprehensive packages. Contact us for a personalized consultation and quote based on your specific needs and goals.",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              What We Offer
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase mt-2 mb-6" data-testid="text-services-title">
              Comprehensive<br />
              <span className="text-primary">Recruiting Services</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-services-description">
              From initial evaluation to final placement, we provide end-to-end support to help you achieve your athletic dreams.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                data-testid={`service-section-${index}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 mb-4">
                    <service.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-heading text-3xl font-bold uppercase mb-4">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/careers">
                    <Button className="font-subheading font-bold uppercase" data-testid={`button-service-learn-more-${index}`}>
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-md w-full object-cover aspect-[3/2]"
                    />
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-md flex items-center justify-center">
                      <service.icon className="h-10 w-10 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
                FAQ
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-faq-title">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Get answers to the most common questions about our recruiting services and process.
              </p>
              <Link href="/careers">
                <Button variant="outline" className="font-subheading font-bold uppercase" data-testid="button-contact-us">
                  Still Have Questions? Contact Us
                </Button>
              </Link>
            </div>
            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card rounded-md px-6 border"
                    data-testid={`accordion-faq-${index}`}
                  >
                    <AccordionTrigger className="font-subheading font-bold text-left hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-primary-foreground mb-4" data-testid="text-services-cta-title">
            Ready to Start Your Journey?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 text-lg">
            Take the first step toward your athletic dreams. Schedule a free consultation with our team today.
          </p>
          <Link href="/careers">
            <Button 
              size="lg" 
              variant="secondary" 
              className="font-subheading font-bold uppercase text-lg px-8"
              data-testid="button-services-cta"
            >
              Schedule Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
