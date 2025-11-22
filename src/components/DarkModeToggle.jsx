import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon } from 'react-icons/fa';

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    // Update the document class and localStorage
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDark]);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <motion.button
      onClick={toggleDarkMode}
      className="relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 flex items-center px-1 shadow-inner"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle dark mode"
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-white dark:bg-gray-900 shadow-md flex items-center justify-center"
        animate={{
          x: isDark ? 28 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30
        }}
      >
        {/* Icon inside the circle */}
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 1 : 0,
            rotate: isDark ? 0 : 180,
            opacity: isDark ? 1 : 0
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <FaMoon className="text-yellow-400 text-xs" />
        </motion.div>
        
        <motion.div
          initial={false}
          animate={{
            scale: isDark ? 0 : 1,
            rotate: isDark ? 180 : 0,
            opacity: isDark ? 0 : 1
          }}
          transition={{ duration: 0.2 }}
          className="absolute"
        >
          <FaSun className="text-yellow-500 text-xs" />
        </motion.div>
      </motion.div>

      {/* Background Icons (optional decorative) */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <FaSun className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-30' : 'opacity-50'} text-yellow-600`} />
        <FaMoon className={`text-xs transition-opacity duration-300 ${isDark ? 'opacity-50' : 'opacity-30'} text-blue-400`} />
      </div>
    </motion.button>
  );
}
