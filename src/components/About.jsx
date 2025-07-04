import { motion } from 'framer-motion';
import { FaCode, FaServer, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiExpress } from 'react-icons/si';

export default function About() {
  const techStack = [
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" }
  ];

  return (
    <section 
      id="about" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </motion.div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                <FaCode className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                I'm Usman
              </h3>
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              I'm a passionate MERN Stack Developer with 1 year of experience building full-stack web applications. I specialize in creating clean, responsive, and user-friendly solutions that solve real-world problems. My approach combines technical excellence with thoughtful design to deliver exceptional digital experiences.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Continuously learning and adapting to new technologies is my passion. I thrive in collaborative environments where I can contribute my skills while expanding my knowledge to build better and more efficient applications.
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center mb-6">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-full mr-4">
                <FaServer className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                My Tech Stack
              </h3>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="text-3xl mb-2">{tech.icon}</div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}