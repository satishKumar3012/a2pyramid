import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X, ChevronDown } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';
import { NAVIGATION, APP_CONFIG } from '../../constants';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      Object.entries(dropdownRefs.current).forEach(([key, ref]) => {
        if (ref && !ref.contains(event.target as Node)) {
          setOpenDropdown(prev => prev === key ? null : prev);
        }
      });
    };
    
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const toggleDropdown = (id: string) => {
    setOpenDropdown(prev => prev === id ? null : id);
  };

  return (
    <motion.header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.a 
            href="/" 
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/logo.png" 
              alt={APP_CONFIG.name}
              className="h-8 w-8 lg:h-10 lg:w-10 transition-transform group-hover:rotate-12" 
            />
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
              {APP_CONFIG.name}
            </h2>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                ref={el => { dropdownRefs.current[item.id] = el; }}
              >
                {item.children ? (
                  <>
                    <button 
                      className={cn(
                        'flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                        'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400',
                        'hover:bg-gray-100 dark:hover:bg-gray-800'
                      )}
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={openDropdown === item.id}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown 
                        size={16} 
                        className={cn(
                          'transition-transform duration-200',
                          openDropdown === item.id && 'rotate-180'
                        )}
                      />
                    </button>
                    
                    {openDropdown === item.id && (
                      <motion.div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-xl shadow-large border border-gray-200 dark:border-gray-700 py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.children.map((child) => (
                          <a 
                            key={child.id}
                            href={child.href}
                            target={child.isExternal ? '_blank' : '_self'}
                            rel={child.isExternal ? 'noopener noreferrer' : undefined}
                            className="block px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                            onClick={() => setOpenDropdown(null)}
                          >
                            {child.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </>
                ) : (
                  <a 
                    href={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium rounded-lg transition-colors',
                      'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400',
                      'hover:bg-gray-100 dark:hover:bg-gray-800'
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-2"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
            
            {/* CTA Button */}
            <Button
              variant="primary"
              size="sm"
              className="hidden lg:flex"
            >
              <a href="/platforms">
                Explore Platforms
              </a>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="lg:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="py-4 space-y-2">
              {NAVIGATION.map((item) => (
                <div key={item.id}>
                  {item.children ? (
                    <>
                      <button 
                        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => toggleDropdown(`mobile-${item.id}`)}
                      >
                        {item.label}
                        <ChevronDown 
                          size={16} 
                          className={cn(
                            'transition-transform duration-200',
                            openDropdown === `mobile-${item.id}` && 'rotate-180'
                          )}
                        />
                      </button>
                      
                      {openDropdown === `mobile-${item.id}` && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <a 
                              key={child.id}
                              href={child.href}
                              target={child.isExternal ? '_blank' : '_self'}
                              rel={child.isExternal ? 'noopener noreferrer' : undefined}
                              className="block px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a 
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}
              
              <div className="px-4 pt-4">
                <Button
                  variant="primary"
                  fullWidth
                >
                  <a href="/platforms">
                    Explore Platforms
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;