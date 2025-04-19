import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    let interval: number | null = null;
    
    if (isAutoplay) {
      interval = window.setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoplay]);

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleMouseEnter = () => {
    setIsAutoplay(false);
  };

  const handleMouseLeave = () => {
    setIsAutoplay(true);
  };

  return (
    <Section id="testimonials" background="gradient">
      <SectionTitle
        title="Trusted by 5,000+ Teams"
        center
      />
      
      <div 
        className="relative max-w-4xl mx-auto"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden rounded-lg bg-white shadow-lg p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col md:flex-row items-center"
            >
              <div className="mb-6 md:mb-0 md:mr-8 md:w-1/3">
                <div className="aspect-square rounded-full overflow-hidden mb-4 border-4 border-gray-100">
                  <img 
                    src={testimonials[currentIndex].image} 
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3">
                <div className="text-3xl text-coral-500 mb-4">"</div>
                <blockquote className="text-xl text-gray-800 mb-6">
                  {testimonials[currentIndex].quote}
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900">{testimonials[currentIndex].name}</span>
                  <span className="text-gray-600">{testimonials[currentIndex].title} @{testimonials[currentIndex].company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoplay(false);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-coral-500 w-6' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 p-2 rounded-full shadow-md text-gray-800 hover:bg-white transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="mt-12 flex flex-wrap justify-center items-center gap-8 opacity-60">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png" alt="Stripe" className="h-6 grayscale" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/2560px-Shopify_logo_2018.svg.png" alt="Shopify" className="h-8 grayscale" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Zoom_logo.svg/2560px-Zoom_logo.svg.png" alt="Zoom" className="h-6 grayscale" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt="Slack" className="h-8 grayscale" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png" alt="LinkedIn" className="h-8 grayscale" />
      </div>
    </Section>
  );
};

export default TestimonialsSection;