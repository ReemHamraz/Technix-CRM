import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const dynamicTexts = [
  "37% faster deal closure",
  "92% customer satisfaction",
  "24/7 support"
];

const HeroSection: React.FC = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setTextIndex(prevIndex => (prevIndex + 1) % dynamicTexts.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              The Foundation for Building and Retaining Customer Relationships
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Generate leads, Track prospects, Avail opportunities, Close deals and Retain clients with T-CRM.
            </motion.p>
            
            <motion.div 
              className="h-8 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-primary-600 dark:text-primary-400 font-medium flex items-center"
              >
                <span className="mr-2">✓</span> {dynamicTexts[textIndex]}
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button 
                size="lg"
                onClick={() => {
                  // Handle demo booking
                  console.log('Book demo clicked');
                }}
              >
                Book a Demo
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  // Handle case study download
                  console.log('Case study clicked');
                }}
              >
                See Case Study
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-300/30 to-coral-300/30 dark:from-primary-900/30 dark:to-coral-900/30 rounded-lg blur-3xl opacity-40 transform -rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Technix-CRM Dashboard"
                className="relative z-10 rounded-lg shadow-xl w-full"
              />
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-10 -left-10 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <div className="text-coral-500 font-bold text-lg">+32%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">Conversion Rate</div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -right-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-20"
              animate={{ 
                y: [0, 10, 0],
                rotate: [0, -2, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1
              }}
            >
              <div className="text-primary-600 dark:text-primary-400 font-bold text-lg">87%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">User Satisfaction</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;