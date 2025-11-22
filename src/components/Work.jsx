import { motion } from 'framer-motion';
import projects from '../Data/data.jsx';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

export default function Work() {
  const techIcons = {
    'React': <FaReact className="text-blue-500" />,
    'React Native': <TbBrandReactNative className="text-blue-400" />,
    'Node.js': <FaNodeJs className="text-green-500" />,
    'TypeScript': <SiTypescript className="text-blue-600" />,
    'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
    'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
    'MongoDB': <SiMongodb className="text-green-600" />,
    'Firebase': <SiFirebase className="text-orange-500" />,
    'GraphQL': <SiGraphql className="text-pink-600" />,
    'Figma': <FaFigma className="text-purple-500" />
  };

  return (
    <section id="work" className="py-24 px-6 sm:px-12 bg-secondary-50 dark:bg-secondary-900 transition-colors duration-300 relative">
      {/* Background Decoration */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-200 dark:via-secondary-700 to-transparent" />

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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-accent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            A selection of my recent work, featuring full-stack applications and experimental designs.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-secondary-800 rounded-2xl overflow-hidden border border-secondary-100 dark:border-secondary-700 shadow-lg hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col"
            >
              {/* Project Image with Parallax Hover */}
              {project.image && (
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-secondary-900/10 dark:bg-secondary-900/20 z-10 transition-opacity group-hover:opacity-0" />
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/90 via-secondary-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-secondary-900 transition-colors"
                            aria-label="GitHub"
                          >
                            <FiGithub className="text-xl" />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-primary-500/80 backdrop-blur-md rounded-full text-white hover:bg-accent transition-colors"
                            aria-label="Live Demo"
                          >
                            <FiExternalLink className="text-xl" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-secondary-900/90 backdrop-blur-md text-xs font-semibold text-secondary-900 dark:text-white rounded-full shadow-sm">
                      {project.category || 'Web App'}
                    </span>
                  </div>
                </div>
              )}

              {/* Project Content */}
              <div className="p-6 flex-1 flex flex-col relative z-30 bg-white dark:bg-secondary-800">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 dark:text-secondary-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies?.slice(0, 4).map((tech, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center px-2.5 py-1 bg-secondary-100 dark:bg-secondary-700/50 rounded-md text-xs font-medium text-secondary-600 dark:text-secondary-300 border border-secondary-200 dark:border-secondary-700"
                      >
                        {techIcons[tech] && <span className="mr-1.5 text-sm">{techIcons[tech]}</span>}
                        {tech}
                      </span>
                    ))}
                    {project.technologies?.length > 4 && (
                      <span className="inline-flex items-center px-2.5 py-1 bg-secondary-50 dark:bg-secondary-800 rounded-md text-xs font-medium text-secondary-500 dark:text-secondary-400 border border-secondary-200 dark:border-secondary-700">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/Usmankhalid20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border border-secondary-200 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 font-medium rounded-xl hover:bg-secondary-50 dark:hover:bg-secondary-800 hover:border-secondary-300 dark:hover:border-secondary-600 transition-all duration-300 group"
          >
            <FiGithub className="mr-2 text-xl group-hover:scale-110 transition-transform" />
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}