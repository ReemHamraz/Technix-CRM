import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { pricingPlans } from '../../data/pricing';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';

const PricingSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <Section id="pricing" background="light">
      <SectionTitle
        title="Plans for Every Stage"
        center
      />
      
      <div className="flex justify-center mb-10">
        <div className="bg-white rounded-full p-1 border border-gray-200 shadow-sm inline-flex">
          <button
            onClick={() => setIsAnnual(false)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              !isAnnual 
                ? 'bg-primary-600 text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              isAnnual 
                ? 'bg-primary-600 text-white' 
                : 'text-gray-600 hover:text-gray-800'
            }`}
          >
            Annual
            <span className="ml-1 text-xs font-normal">
              (Save 20%)
            </span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <motion.div
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`bg-white rounded-xl border ${
              plan.popular 
                ? 'border-coral-500 shadow-lg relative' 
                : 'border-gray-200 shadow-sm'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 inset-x-0 flex justify-center">
                <span className="bg-coral-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="p-6 md:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <div className="mb-6">
                {plan.price.monthly === 0 && plan.price.annually === 0 ? (
                  <div className="text-3xl font-bold text-gray-900">Custom</div>
                ) : (
                  <>
                    <div className="text-4xl font-bold text-gray-900">
                      ${isAnnual ? plan.price.annually / 12 : plan.price.monthly}
                      <span className="text-base font-normal text-gray-600">/mo</span>
                    </div>
                    {isAnnual && (
                      <div className="text-sm text-gray-600 mt-1">
                        Billed yearly (${plan.price.annually})
                      </div>
                    )}
                  </>
                )}
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="text-primary-600 w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                variant={plan.popular ? 'primary' : 'outline'}
                className="w-full"
              >
                {plan.cta}
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-white rounded-lg shadow-md overflow-hidden"
      >
        <div className="p-6 md:p-8 bg-gray-50 border-b border-gray-200">
          <h3 className="text-xl font-semibold text-gray-900">Compare Plan Features</h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-600">Feature</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Starter</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600 bg-coral-50">Growth</th>
                <th className="px-6 py-4 text-center text-sm font-medium text-gray-600">Enterprise</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800">Team members</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Up to 5</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 bg-coral-50">Up to 15</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800">Contacts</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">1,000</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 bg-coral-50">10,000</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">Unlimited</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800">Advanced automation</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 bg-coral-50">
                  <Check className="w-5 h-5 text-primary-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-primary-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800">API access</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 bg-coral-50">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-primary-600 mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm text-gray-800">Premium support</td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600 bg-coral-50">
                  <Check className="w-5 h-5 text-primary-600 mx-auto" />
                </td>
                <td className="px-6 py-4 text-center text-sm text-gray-600">
                  <Check className="w-5 h-5 text-primary-600 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </Section>
  );
};

export default PricingSection;