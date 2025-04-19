import React from 'react';
import {
  UserPlus,
  Database,
  Users,
  Bell,
  Workflow,
  Mail,
  BarChart2,
  Headphones,
  CreditCard
} from 'lucide-react';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import CategoryCard from '../ui/CategoryCard';

const categories = [
  {
    icon: UserPlus,
    title: 'Lead Capture',
    description: 'Capture and qualify leads from multiple channels automatically'
  },
  {
    icon: Database,
    title: 'Import Data',
    description: 'Seamlessly import and organize customer data'
  },
  {
    icon: Users,
    title: 'Task Assignment',
    description: 'Assign and track tasks across your sales team'
  },
  {
    icon: Bell,
    title: 'Follow-up Reminders',
    description: 'Never miss a follow-up with automated reminders'
  },
  {
    icon: Workflow,
    title: 'Workflow and Approvals',
    description: 'Streamline your sales process with automated workflows'
  },
  {
    icon: Mail,
    title: 'Marketing Automation',
    description: 'Automate your marketing campaigns and track results'
  },
  {
    icon: BarChart2,
    title: 'Sales Performance',
    description: 'Monitor and analyze sales team performance'
  },
  {
    icon: Headphones,
    title: 'Client Services',
    description: 'Provide exceptional customer service and support'
  },
  {
    icon: CreditCard,
    title: 'Payment Tracking',
    description: 'Track payments and manage billing efficiently'
  }
];

const CategoriesSection: React.FC = () => {
  return (
    <Section id="categories" background="light">
      <SectionTitle
        title="Comprehensive CRM Features"
        subtitle="Everything you need to manage your customer relationships effectively"
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <CategoryCard
            key={category.title}
            icon={category.icon}
            title={category.title}
            description={category.description}
            delay={index * 0.1}
          />
        ))}
      </div>
    </Section>
  );
};

export default CategoriesSection;