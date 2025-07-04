import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaBehance, FaDownload } from "react-icons/fa";
import Resume from '../assets/resume/Usman_Khalid_CV.pdf'
export default function Home() {
  // Function to handle CV download
  const handleDownloadCV = () => {
    // Replace with your actual CV file path
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
      className="min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column - Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="block dark:text-gray-300">Hi,</span>
            <span className="block dark:text-gray-300">I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">Usman</span></span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-medium mt-4 text-gray-600 dark:text-gray-300">
              Web Developer
            </span>
          </h1>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleDownloadCV}
              className="cursor-pointer inline-flex items-center px-8 py-3 bg-gray-800 dark:bg-gray-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300"
            >
              <FaDownload className="mr-2" />
              Download CV
            </motion.button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center lg:justify-start space-x-6 mt-10">
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.linkedin.com/in/usman-khalid-9a2bb72b7/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://www.behance.net/Usman2205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
              aria-label="Behance"
            >
              <FaBehance />
            </motion.a>
            <motion.a
              whileHover={{ y: -5 }}
              href="https://github.com/Usmankhalid20"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-2xl"
              aria-label="GitHub"
            >
              <FaGithub />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column - Image */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
            <svg
              className="absolute w-full h-full"
              viewBox="0 0 479 467"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                fill="url(#blobGradient)"
                className="transition-colors duration-300"
              />
              <defs>
                <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <image
                href="assets/img/profile.png"
                x="50"
                y="60"
                width="380"
                height="380"
                className="rounded-full"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}