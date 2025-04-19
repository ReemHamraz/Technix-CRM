import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'gradient';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
}) => {
  const backgroundStyles = {
    white: 'bg-white',
    light: 'bg-gray-50',
    gradient: 'bg-gradient-to-b from-white to-gray-50',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgroundStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;