import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const companySizeOptions = [
  '1-10',
  '11-50',
  '51-200',
  '201-500',
  '500+'
];

const CTASection: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companySize, setCompanySize] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after showing success
      setTimeout(() => {
        setName('');
        setEmail('');
        setCompanySize('');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <Section background="gradient" className="pb-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Workflow?
          </h2>
          
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of teams who have already streamlined their sales process and boosted revenue with Technix-CRM.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <CheckCircle className="text-primary-600 w-5 h-5 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">No credit card required</h3>
                <p className="text-gray-600">Start your 14-day trial without any payment information.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="text-primary-600 w-5 h-5 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Full feature access</h3>
                <p className="text-gray-600">Test all Growth plan features during your trial period.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <CheckCircle className="text-primary-600 w-5 h-5 mr-3 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900">Cancel anytime</h3>
                <p className="text-gray-600">No obligations or long-term contracts.</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Soc-badge-2.svg/1200px-Soc-badge-2.svg.png" alt="SOC 2 Certified" className="h-10" />
            <img src="https://seeklogo.com/images/G/gdpr-ready-logo-3640DBF463-seeklogo.com.png" alt="GDPR Ready" className="h-10" />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600 w-8 h-8" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">Thank you!</h3>
              <p className="text-gray-600">
                We've received your request. A member of our team will be in touch shortly to help you get started.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Start Your Free Trial</h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                    placeholder="john@company.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Size
                  </label>
                  <select
                    id="companySize"
                    value={companySize}
                    onChange={(e) => setCompanySize(e.target.value)}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-coral-500 focus:border-coral-500 transition-colors"
                  >
                    <option value="" disabled>Select company size</option>
                    {companySizeOptions.map((size) => (
                      <option key={size} value={size}>{size} employees</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Start Free Trial'
                )}
              </Button>
              
              <p className="text-xs text-gray-500 mt-4 text-center">
                By signing up, you agree to our{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">Terms of Service</a>{' '}
                and{' '}
                <a href="#" className="text-primary-600 hover:text-primary-700">Privacy Policy</a>.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </Section>
  );
};

export default CTASection;