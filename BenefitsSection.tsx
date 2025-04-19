import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { benefits } from '../../data/benefits';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const BenefitsSection: React.FC = () => {
  return (
    <Section id="features" background="light">
      <SectionTitle 
        title="Why Teams Choose Technix"
        center
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => {
          const IconComponent = LucideIcons[benefit.icon as keyof typeof LucideIcons];
          
          return (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary-50 rounded-full flex items-center justify-center mb-4">
                  {IconComponent && <IconComponent className="text-primary-600 w-8 h-8" />}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">See the difference</h3>
            <p className="text-gray-600 mb-6">
              Our intuitive interface and smart automation transform how you manage customer relationships. Compare the before and after to see how Technix-CRM streamlines your workflow.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <span className="text-coral-500">✓</span>
                <span>80% less time spent on data entry</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-coral-500">✓</span>
                <span>45% increase in follow-up consistency</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-coral-500">✓</span>
                <span>3x faster lead qualification</span>
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 h-80 flex items-center justify-center relative">
            <img 
              src="https://images.pexels.com/photos/6476788/pexels-photo-6476788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="CRM Dashboard Comparison"
              className="object-cover h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
              <div className="p-6 text-white">
                <span className="font-semibold">Smart dashboard with real-time insights</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default BenefitsSection;