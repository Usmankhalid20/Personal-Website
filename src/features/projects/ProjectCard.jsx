"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaFigma } from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiMongodb, 
  SiFirebase, 
  SiTypescript, 
  SiNextdotjs, 
  SiGraphql,
  SiRedis,
  SiExpress,
  SiCloudinary,
  SiDocker,
  SiRedux,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiThreedotjs,
  SiFramer,
  SiWebgl,
  SiOpenai
} from 'react-icons/si';
import { TbBrandReactNative } from 'react-icons/tb';

const techIcons = {
  'Next.js': <SiNextdotjs className="text-black dark:text-white" />,
  'React': <FaReact className="text-blue-400" />,
  'TypeScript': <SiTypescript className="text-blue-500" />,
  'Node.js': <FaNodeJs className="text-green-500" />,
  'Express': <SiExpress className="text-gray-700 dark:text-gray-300" />,
  'MongoDB': <SiMongodb className="text-emerald-500" />,
  'Redis': <SiRedis className="text-red-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
  'Cloudinary': <SiCloudinary className="text-blue-400" />,
  'Docker': <SiDocker className="text-sky-500" />,
  'Redux': <SiRedux className="text-purple-500" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'HTML': <SiHtml5 className="text-orange-500" />,
  'CSS': <SiCss3 className="text-blue-500" />,
  'Firebase': <SiFirebase className="text-amber-500" />,
  'GraphQL': <SiGraphql className="text-pink-500" />,
  'Figma': <FaFigma className="text-purple-400" />,
  'React Native': <TbBrandReactNative className="text-blue-400" />,
  'Three.js': <SiThreedotjs className="text-gray-900 dark:text-white" />,
  'WebGL': <SiWebgl className="text-red-600" />,
  'Framer Motion': <SiFramer className="text-pink-500" />,
  'AI API': <SiOpenai className="text-emerald-400" />
};

export default function ProjectCard({ project, index }) {
  if (!project) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white/70 dark:bg-[#111116]/80 backdrop-blur-lg rounded-2xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 shadow-lg hover:shadow-2xl hover:border-primary-500/30 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Top Image Showcase */}
      <div className="relative h-52 overflow-hidden bg-gray-900/10 dark:bg-black/40">
        {project.image ? (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-900/20 to-gray-900/40 text-gray-500">
            <FiFolder className="text-4xl" />
          </div>
        )}
        
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300 z-10" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between gap-2">
          {project.category && (
            <span className="px-2.5 py-1 bg-black/60 backdrop-blur-md text-[11px] font-bold text-white rounded-md border border-white/10 shadow-sm">
              {project.category}
            </span>
          )}

          {project.status && (
            <span className={`px-2.5 py-1 backdrop-blur-md text-[11px] font-semibold rounded-md border shadow-sm ${
              project.status.toLowerCase().includes('live') 
                ? 'bg-emerald-950/70 text-emerald-300 border-emerald-500/30' 
                : 'bg-gray-900/70 text-gray-300 border-gray-700/40'
            }`}>
              {project.status}
            </span>
          )}
        </div>

        {/* Hover Action Buttons */}
        <div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 p-4 bg-black/40 backdrop-blur-[2px]">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full text-gray-900 dark:text-white hover:bg-primary-600 hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 shadow-lg"
              aria-label="GitHub"
              title="View Repository"
            >
              <FiGithub className="text-xl" />
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-600 text-white rounded-full hover:bg-primary-500 transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 delay-75 shadow-lg shadow-primary-600/30"
              aria-label="Live Demo"
              title="Live Link / Source"
            >
              <FiExternalLink className="text-xl" />
            </a>
          )}
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Title & Subtitle */}
          <div className="mb-2">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
              {project.title}
            </h3>
            {project.subtitle && (
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium block">
                {project.subtitle}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
        </div>
        
        {/* Tech Stack Pills */}
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.technologies?.slice(0, 4).map((tech, i) => (
              <span 
                key={i} 
                className="inline-flex items-center px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded text-[11px] font-medium text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-800"
              >
                {techIcons[tech] && <span className="mr-1 text-xs">{techIcons[tech]}</span>}
                {tech}
              </span>
            ))}
            {project.technologies?.length > 4 && (
              <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 dark:bg-white/5 rounded text-[11px] font-medium text-gray-500 dark:text-gray-400 border border-gray-200/60 dark:border-gray-800">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

