import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { SiInstagram, SiX, SiLinkedin, SiFacebook } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import logoImageInverse from "@assets/First_Choice_Athlete_2_1766981653379.png";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
];

const services = [
  "Athlete Evaluation",
  "College Placement",
  "Pro Scouting",
  "Career Counseling",
  "Media Training",
];

export function Footer() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Subscription Failed",
        description: "There was an error subscribing. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    newsletterMutation.mutate(email);
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <img src={logoImageInverse} alt="First Choice Athlete" className="h-10" />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Connecting talented athletes with top universities and professional teams worldwide. Your journey to athletic excellence starts here.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10" data-testid="link-social-instagram">
                <SiInstagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10" data-testid="link-social-x">
                <SiX className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10" data-testid="link-social-linkedin">
                <SiLinkedin className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-background/20 text-background hover:bg-background/10" data-testid="link-social-facebook">
                <SiFacebook className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg uppercase mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-background/70 hover:text-primary transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, "-")}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg uppercase mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="text-background/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold text-lg uppercase mb-6">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70">123 Sports Avenue, Los Angeles, CA 90001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-background/70">info@firstchoiceathlete.com</span>
              </li>
            </ul>
            <div>
              <p className="text-sm text-background/50 mb-3">Subscribe to our newsletter</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/10 border-background/20 text-background placeholder:text-background/50"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  type="submit"
                  className="flex-shrink-0" 
                  disabled={newsletterMutation.isPending}
                  data-testid="button-newsletter-subscribe"
                >
                  {newsletterMutation.isPending ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    "Subscribe"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © 2024 First Choice Athlete. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <span className="text-background/50 hover:text-background/70 cursor-pointer">Privacy Policy</span>
            <span className="text-background/50 hover:text-background/70 cursor-pointer">Terms of Service</span>
            <span className="text-background/50 hover:text-background/70 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
