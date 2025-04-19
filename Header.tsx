import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '../ui/Button';
import ThemeToggle from '../ui/ThemeToggle';
import { useThemeStore } from '../../store/themeStore';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useThemeStore();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
              Technix<span className="text-coral-500">-CRM</span>
            </h1>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              <li>
                <a href="#features" className="text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#categories" className="text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" onClick={() => console.log('Login clicked')}>Login</Button>
              <Button onClick={() => console.log('Free Trial clicked')}>Free Trial</Button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800"
          >
            <div className="container mx-auto px-4">
              <ul className="py-4 space-y-4">
                <li>
                  <a 
                    href="#features" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a 
                    href="#categories" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a 
                    href="#how-it-works" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    How It Works
                  </a>
                </li>
                <li>
                  <a 
                    href="#pricing" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a 
                    href="#testimonials" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-coral-500 dark:hover:text-coral-400"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Success Stories
                  </a>
                </li>
                <li className="pt-4 border-t border-gray-200 dark:border-gray-800">
                  <div className="flex flex-col space-y-3">
                    <Button variant="ghost" className="w-full" onClick={() => console.log('Login clicked')}>
                      Login
                    </Button>
                    <Button className="w-full" onClick={() => console.log('Free Trial clicked')}>
                      Free Trial
                    </Button>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;