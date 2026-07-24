"use client";
import { motion } from 'framer-motion';
import { skillCategories } from '../../data/skillData';

export default function Skills() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Technical <span className="text-primary-600 dark:text-primary-400">Arsenal</span>
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I use to build scalable applications.
          </p>
        </motion.div>

        {/* Categorized Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={categoryVariants}
              className="bg-gray-50 dark:bg-[#0a0a0a] rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full bg-gray-300 dark:bg-gray-700" />
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center p-4 rounded-xl bg-white dark:bg-[#111] border border-gray-100 dark:border-gray-800 transition-colors hover:border-gray-200 dark:hover:border-gray-700"
                  >
                    <div className="text-2xl mb-2 text-gray-700 dark:text-gray-300">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}