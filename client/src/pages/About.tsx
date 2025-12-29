import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Target, 
  Heart, 
  Shield, 
  Users,
  Award,
  Globe,
  TrendingUp
} from "lucide-react";

const team = [
  {
    name: "James Mitchell",
    role: "Founder & CEO",
    bio: "Former NFL scout with 20+ years in sports management",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Dr. Sarah Chen",
    role: "Director of Athlete Development",
    bio: "Sports psychologist specializing in performance optimization",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
  },
  {
    name: "Marcus Williams",
    role: "Head of College Relations",
    bio: "Former D1 coach with connections to 200+ programs",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "Media & Communications",
    bio: "Emmy-winning sports journalist and brand strategist",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop",
  },
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    description: "We pursue the highest standards in everything we do, from athlete development to placement outcomes.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Our love for sports drives us to go above and beyond for every athlete we represent.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "We operate with complete transparency and always put our athletes' best interests first.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We build lasting relationships and support our athletes throughout their entire careers.",
  },
];

const milestones = [
  { year: "2009", event: "Founded in Los Angeles with a vision to transform sports recruiting" },
  { year: "2012", event: "Expanded to cover all major collegiate sports programs" },
  { year: "2015", event: "Launched international athlete placement program" },
  { year: "2018", event: "Reached 300+ successful placements milestone" },
  { year: "2021", event: "Opened East Coast operations in New York" },
  { year: "2024", event: "Celebrating 500+ athletes placed with 95% success rate" },
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              About Us
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase mt-2 mb-6" data-testid="text-about-title">
              Building Champions<br />
              <span className="text-primary">Since 2009</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-description">
              Elite Sports Recruiting was founded with a simple mission: to bridge the gap between talented athletes and the opportunities they deserve. What started as a small operation has grown into one of the most trusted names in sports recruitment.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
                Our Story
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-6" data-testid="text-story-title">
                From Passion to Purpose
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Our founder, James Mitchell, spent two decades as an NFL scout before realizing that countless talented athletes were slipping through the cracks of the recruitment system. Many had the skills but lacked the connections, guidance, or resources to showcase their abilities to the right people.
                </p>
                <p>
                  Elite Sports Recruiting was born from this realization. We assembled a team of former coaches, scouts, sports psychologists, and media professionals who shared a common goal: to level the playing field and give every deserving athlete a fair shot at success.
                </p>
                <p>
                  Today, we've helped over 500 athletes achieve their dreams, from securing full scholarships at prestigious universities to signing professional contracts. But for us, it's never just about the numbers—it's about the lives we change and the families we impact.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=600&h=700&fit=crop"
                alt="Team meeting"
                className="rounded-md w-full object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-md">
                <div className="font-heading text-4xl font-bold text-primary-foreground">15+</div>
                <div className="font-subheading text-primary-foreground/80 uppercase text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Our Values
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-values-title">
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6" data-testid={`card-value-${index}`}>
                <CardContent className="p-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 mb-4">
                    <value.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold uppercase mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Our Journey
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-timeline-title">
              Key Milestones
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-background/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  data-testid={`milestone-${index}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-background/10 p-6 rounded-md">
                      <span className="font-heading text-2xl font-bold text-primary">{milestone.year}</span>
                      <p className="text-background/80 mt-2">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Meet The Team
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-team-title">
              Leadership Team
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Industry veterans dedicated to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden group" data-testid={`card-team-${index}`}>
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 text-center">
                  <h3 className="font-heading text-lg font-bold uppercase">{member.name}</h3>
                  <p className="text-primary font-subheading font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center" data-testid="stat-awards">
              <Award className="h-10 w-10 text-primary mb-3" />
              <div className="font-heading text-3xl font-bold">12</div>
              <div className="text-muted-foreground">Industry Awards</div>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-countries">
              <Globe className="h-10 w-10 text-primary mb-3" />
              <div className="font-heading text-3xl font-bold">25+</div>
              <div className="text-muted-foreground">Countries Served</div>
            </div>
            <div className="flex flex-col items-center" data-testid="stat-growth">
              <TrendingUp className="h-10 w-10 text-primary mb-3" />
              <div className="font-heading text-3xl font-bold">40%</div>
              <div className="text-muted-foreground">Year-over-Year Growth</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
