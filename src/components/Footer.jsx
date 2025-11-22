import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBehance, FaHeart, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import MagneticButton from './MagneticButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaGithub, 
      href: "https://github.com/Usmankhalid20", 
      label: "GitHub",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    { 
      icon: FaLinkedin, 
      href: "https://www.linkedin.com/in/usman-khalid-9a2bb72b7/", 
      label: "LinkedIn",
      color: "hover:text-blue-600 dark:hover:text-blue-400"
    },
    { 
      icon: FaBehance, 
      href: "https://www.behance.net/Usman2205", 
      label: "Behance",
      color: "hover:text-blue-500 dark:hover:text-blue-300"
    },
  ];

  const quickLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Work', to: 'work' },
    { name: 'Contact', to: 'contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-white to-gray-50 dark:from-secondary-900 dark:to-secondary-950 border-t border-gray-200 dark:border-secondary-700 transition-colors duration-300 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-accent mb-4">
              Usman Khalid
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
              Full-Stack MERN Developer crafting digital experiences with code and creativity.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.5 }}
              >
                <FaHeart className="text-red-500" />
              </motion.div>
              <span>and React</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors cursor-pointer inline-block group font-medium"
                  >
                    <span className="relative">
                      {link.name}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 dark:bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                    </span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6">
              Let's Connect
            </h4>
            
            {/* Social Links */}
            <div className="flex items-center justify-center md:justify-end gap-4 mb-6">
              {socialLinks.map((social, index) => (
                <MagneticButton key={index}>
                  <motion.a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 rounded-xl bg-white dark:bg-gray-700 shadow-md hover:shadow-xl flex items-center justify-center text-gray-700 dark:text-gray-200 ${social.color} transition-all duration-300 group`}
                    aria-label={social.label}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="text-xl group-hover:scale-110 transition-transform" />
                  </motion.a>
                </MagneticButton>
              ))}
            </div>

            {/* Email */}
            <a 
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors group font-medium"
            >
              <FaEnvelope className="group-hover:scale-110 transition-transform" />
              <span className="text-sm">Get in touch</span>
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left font-medium"
          >
            © {currentYear} Usman Khalid. All rights reserved.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400 font-medium"
          >
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg hover:shadow-xl flex items-center justify-center group"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        aria-label="Scroll to top"
      >
        <FaArrowUp className="group-hover:-translate-y-1 transition-transform" />
      </motion.button>
    </footer>
  );
}