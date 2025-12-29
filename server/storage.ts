import { 
  type User, 
  type InsertUser,
  type AthleteApplication,
  type InsertAthleteApplication,
  type BlogPost,
  type InsertBlogPost,
  type NewsletterSubscription,
  type InsertNewsletterSubscription,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createAthleteApplication(application: InsertAthleteApplication): Promise<AthleteApplication>;
  getAthleteApplications(): Promise<AthleteApplication[]>;
  
  getBlogPosts(): Promise<BlogPost[]>;
  getBlogPost(id: string): Promise<BlogPost | undefined>;
  getFeaturedPost(): Promise<BlogPost | undefined>;
  
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
}

const initialBlogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Complete Guide to College Athletic Recruitment in 2024",
    excerpt: "Everything you need to know about navigating the college recruitment process, from initial contact to signing day. Updated with the latest NCAA regulations and best practices.",
    content: "Full article content here...",
    category: "Recruiting Tips",
    author: "James Mitchell",
    date: "December 15, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&h=600&fit=crop",
    featured: "true",
  },
  {
    id: "2",
    title: "How Sarah Williams Earned Her Soccer Scholarship",
    excerpt: "From local league standout to LA Galaxy Academy signee—the story of dedication, strategy, and the right connections.",
    content: "Full article content here...",
    category: "Success Stories",
    author: "Emily Rodriguez",
    date: "December 10, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&h=400&fit=crop",
    featured: "false",
  },
  {
    id: "3",
    title: "5 Training Mistakes That Cost Athletes Scholarships",
    excerpt: "Avoid these common pitfalls that can derail your recruitment potential and limit your athletic career options.",
    content: "Full article content here...",
    category: "Training",
    author: "Dr. Sarah Chen",
    date: "December 5, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop",
    featured: "false",
  },
  {
    id: "4",
    title: "NCAA Transfer Portal: What Athletes Need to Know",
    excerpt: "Understanding the new rules and opportunities in the transfer portal landscape for student-athletes.",
    content: "Full article content here...",
    category: "Industry News",
    author: "Marcus Williams",
    date: "November 28, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?w=600&h=400&fit=crop",
    featured: "false",
  },
  {
    id: "5",
    title: "Building Your Athletic Highlight Reel: A Step-by-Step Guide",
    excerpt: "Learn what coaches and scouts are looking for in highlight videos and how to create one that stands out.",
    content: "Full article content here...",
    category: "Recruiting Tips",
    author: "Emily Rodriguez",
    date: "November 20, 2024",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1485395037613-e83d5c1f5290?w=600&h=400&fit=crop",
    featured: "false",
  },
  {
    id: "6",
    title: "The Mental Game: Sports Psychology for Young Athletes",
    excerpt: "How developing mental toughness can be the difference between good and great performance on the field.",
    content: "Full article content here...",
    category: "Training",
    author: "Dr. Sarah Chen",
    date: "November 15, 2024",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&h=400&fit=crop",
    featured: "false",
  },
  {
    id: "7",
    title: "Top 10 D1 Programs for Basketball Recruits in 2024",
    excerpt: "A comprehensive look at the best Division I basketball programs for aspiring college players this year.",
    content: "Full article content here...",
    category: "College Sports",
    author: "James Mitchell",
    date: "November 8, 2024",
    readTime: "11 min read",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=400&fit=crop",
    featured: "false",
  },
];

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private athleteApplications: Map<string, AthleteApplication>;
  private blogPosts: Map<string, BlogPost>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;

  constructor() {
    this.users = new Map();
    this.athleteApplications = new Map();
    this.blogPosts = new Map();
    this.newsletterSubscriptions = new Map();
    
    initialBlogPosts.forEach(post => {
      this.blogPosts.set(post.id, post);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAthleteApplication(application: InsertAthleteApplication): Promise<AthleteApplication> {
    const id = randomUUID();
    const athleteApplication: AthleteApplication = { ...application, id };
    this.athleteApplications.set(id, athleteApplication);
    return athleteApplication;
  }

  async getAthleteApplications(): Promise<AthleteApplication[]> {
    return Array.from(this.athleteApplications.values());
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }

  async getBlogPost(id: string): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }

  async getFeaturedPost(): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(post => post.featured === "true");
  }

  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const existing = Array.from(this.newsletterSubscriptions.values()).find(
      s => s.email === subscription.email
    );
    if (existing) {
      return existing;
    }
    const id = randomUUID();
    const newsletterSubscription: NewsletterSubscription = { ...subscription, id };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }
}

export const storage = new MemStorage();
