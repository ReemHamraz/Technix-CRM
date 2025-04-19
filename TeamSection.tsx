import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { teamMembers } from '../../data/team';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

const TeamSection: React.FC = () => {
  return (
    <Section id="team" background="white">
      <SectionTitle
        title="Built by Experts, Trusted by You"
        center
      />
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden group"
          >
            <div className="aspect-square overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-primary-600 font-medium mb-2">{member.role}</p>
              <p className="text-gray-600 mb-4">{member.bio}</p>
              
              <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 bg-primary-50 rounded-lg p-8 text-center"
      >
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Growing Team</h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          We're always looking for talented individuals to join our mission of transforming how businesses manage customer relationships.
        </p>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#"
          className="inline-flex items-center justify-center font-medium transition-all duration-200 rounded-md bg-primary-600 text-white hover:bg-primary-700 shadow-sm hover:shadow text-base py-2 px-4"
        >
          View Open Positions
        </motion.a>
      </motion.div>
    </Section>
  );
};

export default TeamSection;