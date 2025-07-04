import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiTypescript, SiBootstrap, SiMongodb, SiGit } from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';

export default function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="text-blue-500" />, level: 80 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" />, level: 65 },
    { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, level: 75 },
    { name: 'TypeScript', icon: <SiTypescript className="text-blue-600" />, level: 70 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-600" />, level: 70 },
    { name: 'Git', icon: <SiGit className="text-orange-600" />, level: 80 },
    { name: 'HTML5', icon: <DiHtml5 className="text-orange-500" />, level: 90 },
    { name: 'CSS3', icon: <DiCss3 className="text-blue-500" />, level: 85 },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" />, level: 80 },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
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
            My Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies I've worked with and my proficiency level
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-4">
                <FaReact className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              Frontend Development
            </h3>
            
            {skills.filter(skill => 
              ['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Bootstrap'].includes(skill.name)
            ).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{skill.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full mr-4">
                <FaNodeJs className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              Backend Development
            </h3>
            
            {skills.filter(skill => 
              ['Node.js', 'Express.js', 'MongoDB', 'Git'].includes(skill.name)
            ).map((skill, index) => (
              <div key={index} className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <span className="text-xl mr-3">{skill.icon}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-green-500 to-blue-500 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}

            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mt-8 mb-4">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {['REST APIs', 'JWT', 'Redux', 'Context API', 'Responsive Design', 'UI/UX Principles'].map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}