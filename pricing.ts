import { PricingPlanType } from '../utils/types';

export const pricingPlans: PricingPlanType[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: {
      monthly: 29,
      annually: 290,
    },
    description: 'Perfect for small teams just getting started',
    features: [
      'Core CRM features',
      'Up to 5 team members',
      'Basic email integration',
      '1,000 contacts',
      'Standard support',
    ],
    cta: 'Start Free Trial',
  },
  {
    id: 'growth',
    name: 'Growth',
    price: {
      monthly: 79,
      annually: 790,
    },
    description: 'Ideal for growing businesses',
    features: [
      'All Starter features',
      'Advanced automation',
      'Analytics dashboard',
      'Up to 15 team members',
      '10,000 contacts',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: {
      monthly: 0,
      annually: 0,
    },
    description: 'For large organizations with custom needs',
    features: [
      'All Growth features',
      'Unlimited team members',
      'Unlimited contacts',
      'Dedicated account manager',
      'Custom integrations',
      'API access',
      '24/7 premium support',
    ],
    cta: 'Contact Sales',
  },
];