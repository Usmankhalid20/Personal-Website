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

export default function ProjectCard({ project, index }) {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group relative bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative h-56 overflow-hidden">
          <div className="absolute inset-0 bg-gray-900/10 dark:bg-gray-900/20 z-10 transition-opacity group-hover:opacity-0" />
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay Content */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex flex-col justify-end p-6">
            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors"
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
                  className="p-2 bg-primary-500/90 backdrop-blur-md rounded-full text-white hover:bg-primary-600 transition-colors"
                  aria-label="Live Demo"
                >
                  <FiExternalLink className="text-xl" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Project Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.technologies?.slice(0, 4).map((tech, i) => (
            <span 
              key={i} 
              className="inline-flex items-center px-2 py-1 bg-gray-50 dark:bg-[#1a1a1a] rounded text-xs font-medium text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-800"
            >
              {techIcons[tech] && <span className="mr-1.5 text-sm">{techIcons[tech]}</span>}
              {tech}
            </span>
          ))}
          {project.technologies?.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 bg-gray-50 dark:bg-[#1a1a1a] rounded text-xs font-medium text-gray-500 border border-gray-200 dark:border-gray-800">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
