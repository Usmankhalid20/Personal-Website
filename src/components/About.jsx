import { motion } from 'framer-motion';
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaChrome, FaRocket, FaBug, FaPencilRuler, FaRegLightbulb } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiVite, SiTailwindcss, SiFigma } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export default function About() {
  const techStack = [
    { icon: <FaReact className="text-blue-400" />, name: "React" },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
    { icon: <SiVite className="text-yellow-400" />, name: "Vite" }
  ];

  const tools = [
    { icon: <VscVscode className="text-blue-500" />, name: "VS Code" },
    { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaChrome className="text-yellow-500" />, name: "Chrome" },
    { icon: <SiPostman className="text-orange-500" />, name: "Postman" }
  ];

  const workflow = [
    { icon: <FaRegLightbulb />, title: "Plan", desc: "Strategy & Research" },
    { icon: <FaPencilRuler />, title: "Design", desc: "UI/UX & Prototyping" },
    { icon: <FaCode />, title: "Develop", desc: "Clean & Scalable Code" },
    { icon: <FaBug />, title: "Test", desc: "Debug & Optimize" },
    { icon: <FaRocket />, title: "Deploy", desc: "Launch & Maintain" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id="about" 
      className="py-24 px-6 sm:px-12 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
              About Me
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            More than just code. I'm a problem solver, designer, and lifelong learner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column: Bio & Workflow */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg mr-3 text-primary-600 dark:text-primary-400">
                  <FaCode />
                </span>
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm a passionate MERN Stack Developer with a keen eye for design. I specialize in building full-stack web applications that are not only functional but also beautiful and intuitive.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                My journey involves constant learning and adapting to the latest web technologies. I thrive in creating seamless digital experiences that solve real-world problems.
              </p>
            </motion.div>

            {/* Workflow */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-primary-500">
                My Workflow
              </h3>
              <div className="space-y-4">
                {workflow.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full mr-4 text-gray-600 dark:text-gray-300">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">{step.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Tech Stack & Tools */}
          <div className="space-y-12">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-secondary-500">
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, backgroundColor: "rgba(var(--color-primary-500), 0.1)" }}
                    className="flex flex-col items-center justify-center p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm transition-colors"
                  >
                    <div className="text-3xl mb-3">{tech.icon}</div>
                    <span className="font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pl-2 border-l-4 border-yellow-500">
                Tools I Use
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-100 dark:border-gray-700 shadow-sm"
                  >
                    <div className="text-xl mr-3">{tool.icon}</div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}