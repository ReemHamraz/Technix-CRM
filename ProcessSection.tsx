import React from 'react';
import { motion } from 'framer-motion';
import { processSteps } from '../../data/process';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const ProcessSection: React.FC = () => {
  return (
    <Section id="how-it-works" background="white">
      <SectionTitle 
        title="Simple Setup, Powerful Results"
        center
      />
      
      <div className="relative">
        {/* Progress line */}
        <div className="hidden md:block absolute top-1/4 left-0 right-0 h-1 bg-gray-200 translate-y-1/2 z-0">
          <div className="absolute top-0 left-0 h-full bg-primary-500 w-0 transition-all duration-1000" style={{ width: '0%' }} id="progress-line"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onViewportEnter={() => {
                const progressLine = document.getElementById('progress-line');
                if (progressLine) {
                  progressLine.style.width = `${(index + 1) * 50}%`;
                }
              }}
              className="bg-white rounded-lg border border-gray-200 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 mb-4 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-bold">
                  {step.id}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-6 bg-gray-50 rounded-lg border border-gray-100"
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/16129877/pexels-photo-16129877/free-photo-of-set-up-concept-art.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Technix-CRM Setup Process"
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">Setup in minutes, not weeks</h3>
              <p className="text-gray-600 mb-6">
                Technix-CRM's intuitive onboarding process gets you up and running quickly. No complicated setup procedures or long wait times.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">1.</span>
                  <span>Connect your existing tools with our one-click integrations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">2.</span>
                  <span>Import your contacts and data with our automated migration tool</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">3.</span>
                  <span>Customize your workflow with drag-and-drop simplicity</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-500 font-bold">4.</span>
                  <span>Start closing deals with AI-powered assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default ProcessSection;