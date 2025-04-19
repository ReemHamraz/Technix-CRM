export interface TestimonialType {
  id: number;
  quote: string;
  name: string;
  title: string;
  company: string;
  image: string;
}

export interface PricingPlanType {
  id: string;
  name: string;
  price: {
    monthly: number;
    annually: number;
  };
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface TeamMemberType {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
  };
}

export interface BenefitType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface ProcessStepType {
  id: number;
  title: string;
  description: string;
}