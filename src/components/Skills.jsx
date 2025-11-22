import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiTypescript, SiMongodb, SiRedux, SiFigma, SiPostman, SiVite, SiNextdotjs, SiGraphql, SiFirebase } from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
        { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
        { name: 'HTML5', icon: <DiHtml5 className="text-[#E34F26]" /> },
        { name: 'CSS3', icon: <DiCss3 className="text-[#1572B6]" /> },
        { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
        { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
        { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
        { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },
      ]
    },
    {
      title: "Tools & Design",
      skills: [
        { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
        { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
        { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
        { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent">
              Technical Arsenal
            </span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A curated stack of modern technologies I use to build scalable applications.
          </p>
        </motion.div>

        {/* Categorized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="bg-white/50 dark:bg-secondary-800/50 backdrop-blur-xl rounded-3xl p-8 border border-white/20 dark:border-white/5 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold mb-8 text-secondary-800 dark:text-white flex items-center gap-3">
                <span className="w-2 h-8 rounded-full bg-gradient-to-b from-primary-500 to-accent" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/40 dark:bg-secondary-900/40 border border-white/20 dark:border-white/5 transition-all duration-200 cursor-default"
                  >
                    <div className="text-3xl mb-2 filter drop-shadow-lg">
                      {skill.icon}
                    </div>
                    <span className="text-sm font-medium text-secondary-600 dark:text-secondary-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}