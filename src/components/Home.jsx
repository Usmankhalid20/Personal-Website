import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaBehance, FaDownload } from "react-icons/fa";
import Resume from '../assets/resume/Usman_Khalid_CV.pdf';
import profile from '../assets/img/Profile.png';
import GravityBackground from './GravityBackground';
import SplitText from './SplitText';
import MagneticButton from './MagneticButton';
import Typewriter from './Typewriter';

export default function Home() {
  const handleDownloadCV = () => {
    const cvUrl = Resume;
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Usman_Khalid_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden"
    >
      <GravityBackground />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 mb-6 rounded-full bg-white/30 dark:bg-white/10 backdrop-blur-md border border-white/20 shadow-sm"
          >
            <span className="text-sm font-medium text-primary-700 dark:text-primary-300">
              Available for freelance work
            </span>
          </motion.div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight tracking-tight">
            <span className="block text-gray-900 dark:text-white mb-2">
              <SplitText delay={0.2}>Hi, I'm</SplitText>
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-accent">
              <SplitText delay={0.4}>Usman Khalid</SplitText>
            </span>
          </h1>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-medium mt-6 text-gray-600 dark:text-gray-300 h-12 flex items-center justify-center lg:justify-start">
             <Typewriter speed="fast" variance={0.8} cursorBlinkSpeed={1.0}>
               Full-Stack MERN Developer
             </Typewriter>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed"
          >
            Crafting digital experiences with code and creativity. I build accessible, pixel-perfect, and performant web applications.
          </motion.p>

          {/* Buttons Container */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-10"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white font-medium rounded-xl shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transition-all duration-300 w-full sm:w-auto"
              >
                Contact Me
              </Link>
            </motion.div>

            <MagneticButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleDownloadCV}
                className="cursor-pointer inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 w-full sm:w-auto group"
                style={{ borderColor: 'var(--color-accent)' }}
              >
                <FaDownload className="mr-2 group-hover:text-[var(--color-accent)] transition-colors" />
                Download CV
              </motion.button>
            </MagneticButton>
          </motion.div>

          {/* Social Icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex justify-center lg:justify-start space-x-6 mt-12"
          >
            {[
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/usman-khalid-9a2bb72b7/", label: "LinkedIn" },
              { icon: FaBehance, href: "https://www.behance.net/Usman2205", label: "Behance" },
              { icon: FaGithub, href: "https://github.com/Usmankhalid20", label: "GitHub" }
            ].map((social, index) => (
              <MagneticButton key={index}>
                <motion.a
                  whileHover={{ y: -5, scale: 1.1 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-2xl block"
                  aria-label={social.label}
                >
                  <social.icon />
                </motion.a>
              </MagneticButton>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="order-1 lg:order-2 flex justify-center relative"
        >
          {/* Glass Card Background for Image */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-secondary-500/10 rounded-full blur-3xl transform rotate-12 scale-110" />
          
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
            <svg
              className="absolute w-full h-full drop-shadow-2xl"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-primary-600)" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0.9" />
                </linearGradient>
                <clipPath id="blobClip">
                  <motion.path
                    initial={{ d: "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" }}
                    animate={{ 
                      d: [
                        "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
                        "M30.19024 125.964C54.0253 56.5814 134.865 34.7299 204.111 19.4823C265.804 -3.01116 331.86 -4.9503 390.735 24.143C451.207 54.026 487.948 117.508 497.191 184.311C505.897 247.229 474.931 304.377 436.506 354.954C393.74 411.245 346.068 472.801 275.442 476.189C199.416 479.835 131.552 432.137 85.1576 371.805C37.4835 309.81 3.8383 229.583 30.19024 125.964Z",
                        "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                      ]
                    }}
                    transition={{ 
                      duration: 10, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </clipPath>
              </defs>
              
              {/* Background Blob */}
              <motion.path
                initial={{ d: "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" }}
                animate={{ 
                  d: [
                    "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z",
                    "M30.19024 125.964C54.0253 56.5814 134.865 34.7299 204.111 19.4823C265.804 -3.01116 331.86 -4.9503 390.735 24.143C451.207 54.026 487.948 117.508 497.191 184.311C505.897 247.229 474.931 304.377 436.506 354.954C393.74 411.245 346.068 472.801 275.442 476.189C199.416 479.835 131.552 432.137 85.1576 371.805C37.4835 309.81 3.8383 229.583 30.19024 125.964Z",
                    "M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  ]
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                fill="url(#blobGradient)"
                className="transition-colors duration-300"
              />
              
              {/* Profile Image */}
              <image
                href={profile}
                // src={profile}
                x="0"
                y="0"
                width="100%"
                height="100%"
                preserveAspectRatio="xMidYMid slice"
                clipPath="url(#blobClip)"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}