import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAthleteApplicationSchema, type InsertAthleteApplication } from "@shared/schema";
import { z } from "zod";
import { 
  Users, 
  Trophy, 
  Heart, 
  Briefcase,
  MapPin,
  CheckCircle2,
  Send,
  Loader2
} from "lucide-react";

const formSchema = insertAthleteApplicationSchema.extend({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().trim().min(1, "Email is required").email("Please enter a valid email address"),
  sport: z.string().trim().min(1, "Please select a sport"),
  experience: z.string().trim().min(1, "Please select your experience level"),
});

type FormData = z.infer<typeof formSchema>;

const positions = [
  {
    title: "Scout - Basketball",
    type: "Full-time",
    location: "Los Angeles, CA",
    description: "Identify and evaluate talented basketball players for college and professional placement.",
  },
  {
    title: "Athlete Relations Manager",
    type: "Full-time",
    location: "New York, NY",
    description: "Build and maintain relationships with our roster of athletes, ensuring their needs are met throughout the recruitment process.",
  },
  {
    title: "Video Production Specialist",
    type: "Full-time",
    location: "Remote",
    description: "Create compelling highlight reels and promotional content for athlete profiles.",
  },
  {
    title: "Marketing Coordinator",
    type: "Part-time",
    location: "Los Angeles, CA",
    description: "Support our marketing initiatives including social media, events, and brand partnerships.",
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and vision coverage for you and your family.",
  },
  {
    icon: Trophy,
    title: "Performance Bonuses",
    description: "Earn bonuses based on successful athlete placements and team achievements.",
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Join a passionate team that lives and breathes sports excellence.",
  },
  {
    icon: Briefcase,
    title: "Growth Opportunities",
    description: "Clear career paths and professional development programs to advance your career.",
  },
];

const cultureImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=300&fit=crop",
];

export default function Careers() {
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      sport: "",
      experience: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: FormData) => {
      const response = await apiRequest("POST", "/api/applications", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Application Submitted!",
        description: "Thank you for your interest. We'll be in touch within 48 hours.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    submitMutation.mutate(data);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Join Our Team
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold uppercase mt-2 mb-6" data-testid="text-careers-title">
              Work With <span className="text-primary">Champions</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-careers-description">
              Whether you're an aspiring athlete seeking representation or a sports professional looking to join our team, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
                Athletes
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-6" data-testid="text-athlete-form-title">
                Start Your Journey
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below to schedule a free consultation with our recruitment team. We'll evaluate your potential and discuss how we can help you achieve your athletic goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Free initial consultation and evaluation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Personalized recruitment strategy</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Access to our network of 150+ partner schools</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Professional highlight reel production</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Ongoing support throughout your career</span>
                </div>
              </div>
            </div>
            
            <Card className="p-6" data-testid="card-athlete-application">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="John" data-testid="input-first-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name *</FormLabel>
                          <FormControl>
                            <Input placeholder="Smith" data-testid="input-last-name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email *</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" data-testid="input-email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input type="tel" placeholder="(555) 123-4567" data-testid="input-phone" {...field} value={field.value || ""} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="sport"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Primary Sport *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-sport">
                                <SelectValue placeholder="Select sport" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="basketball">Basketball</SelectItem>
                              <SelectItem value="football">Football</SelectItem>
                              <SelectItem value="soccer">Soccer</SelectItem>
                              <SelectItem value="baseball">Baseball</SelectItem>
                              <SelectItem value="swimming">Swimming</SelectItem>
                              <SelectItem value="track">Track & Field</SelectItem>
                              <SelectItem value="volleyball">Volleyball</SelectItem>
                              <SelectItem value="tennis">Tennis</SelectItem>
                              <SelectItem value="golf">Golf</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="experience"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Experience Level *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-experience">
                                <SelectValue placeholder="Select level" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="high-school">High School</SelectItem>
                              <SelectItem value="club">Club/Travel Team</SelectItem>
                              <SelectItem value="college-transfer">College Transfer</SelectItem>
                              <SelectItem value="international">International</SelectItem>
                              <SelectItem value="professional">Professional</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tell Us About Yourself</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your athletic background, achievements, and goals..."
                            rows={4}
                            data-testid="textarea-message"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full font-subheading font-bold uppercase"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit-application"
                  >
                    {submitMutation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Career Opportunities
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-positions-title">
              Open Positions
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join our team of sports industry professionals and help shape the future of athlete recruitment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className="p-6 hover-elevate" data-testid={`card-position-${index}`}>
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="font-heading text-xl uppercase">{position.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Briefcase className="h-4 w-4" />
                      {position.type}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {position.location}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <Button variant="outline" className="font-subheading" data-testid={`button-apply-${index}`}>
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Why Join Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2 mb-4" data-testid="text-benefits-title">
              Benefits & Perks
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center" data-testid={`benefit-${index}`}>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-md bg-primary/10 mb-4">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-bold uppercase mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="font-subheading text-primary font-bold uppercase tracking-widest text-sm">
              Life at Elite Sports
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase mt-2" data-testid="text-culture-title">
              Our Culture
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cultureImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-md" data-testid={`culture-image-${index}`}>
                <img
                  src={image}
                  alt={`Team culture ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
