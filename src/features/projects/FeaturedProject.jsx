"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript, SiNextdotjs, SiGraphql } from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

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

export default function FeaturedProject({ project }) {
  if (!project) return null;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 group relative bg-white dark:bg-[#111] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-xl flex flex-col lg:flex-row transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
    >
      {/* Large Image Section */}
      <div className="lg:w-3/5 relative h-64 sm:h-80 lg:h-auto overflow-hidden">
        <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 z-10 transition-opacity group-hover:opacity-0" />
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 z-20">
          <span className="px-4 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md text-sm font-semibold text-gray-900 dark:text-white rounded-full shadow-sm">
            {project.category || 'Featured'}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="lg:w-2/5 p-8 md:p-12 flex flex-col justify-center relative z-20">
        <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors text-scale-project">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies?.map((tech, i) => (
            <span 
              key={i} 
              className="inline-flex items-center px-3 py-1.5 bg-gray-50 dark:bg-[#1a1a1a] rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-800"
            >
              {techIcons[tech] && <span className="mr-2 text-base">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="GitHub Repository"
            >
              <FiGithub className="text-xl" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-semibold"
            >
              View Project <FiExternalLink className="ml-2 text-xl" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
