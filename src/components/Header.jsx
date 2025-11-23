import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Work', to: 'work' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
        <RouterLink 
          to="/" 
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent"
        >
          Usman
        </RouterLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {isHomePage ? (
            navLinks.map((link) => (
              <ScrollLink
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors"
              >
                {link.name}
              </ScrollLink>
            ))
          ) : (
            <RouterLink
              to="/"
              className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors"
            >
              Home
            </RouterLink>
          )}
          
          <RouterLink
            to="/photography"
            className={`font-medium transition-colors ${
              location.pathname === '/photography' 
                ? 'text-primary-500 dark:text-primary-400' 
                : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
            }`}
          >
            Photography
          </RouterLink>

          {/* Dark Mode Toggle - Desktop */}
          <DarkModeToggle />
        </div>

        {/* Mobile Right Side - Dark Mode Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <DarkModeToggle />
          <button 
            className="text-2xl text-gray-800 dark:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-20 left-0 w-full bg-white dark:bg-black border-t border-gray-100 dark:border-gray-800 shadow-xl md:hidden">
            <div className="flex flex-col p-6 gap-4">
              {isHomePage ? (
                navLinks.map((link) => (
                  <ScrollLink
                    key={link.name}
                    to={link.to}
                    smooth={true}
                    duration={500}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors"
                  >
                    {link.name}
                  </ScrollLink>
                ))
              ) : (
                <RouterLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 font-medium cursor-pointer transition-colors"
                >
                  Home
                </RouterLink>
              )}
              <RouterLink
                to="/photography"
                onClick={() => setIsOpen(false)}
                className={`font-medium transition-colors ${
                  location.pathname === '/photography' 
                    ? 'text-primary-500 dark:text-primary-400' 
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                }`}
              >
                Photography
              </RouterLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}