"use client";
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCheckCircle, FiZap, FiStar } from 'react-icons/fi';
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
import { FiCpu } from 'react-icons/fi';

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

export default function FeaturedProject({ project }) {
  if (!project) return null;

  const isLive = project.status?.toLowerCase().includes('live');

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mb-16 group relative bg-white/80 dark:bg-[#111116]/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-gray-200/80 dark:border-gray-800/80 shadow-2xl flex flex-col lg:flex-row transition-all duration-300 hover:shadow-primary-500/10 hover:border-primary-500/30"
    >
      {/* Glow background accent */}
      <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary-500/20 transition-all duration-500" />

      {/* Media & Image Showcase */}
      <div className="lg:w-7/12 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-gray-900/5 dark:bg-black/40">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity duration-300" />
        
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Top Badges */}
        <div className="absolute top-5 left-5 right-5 z-20 flex justify-between items-center gap-2 flex-wrap">
          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 bg-black/65 backdrop-blur-md text-xs font-semibold text-white rounded-full border border-white/10 shadow-lg">
            {isLive ? (
              <>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-emerald-400 font-bold uppercase tracking-wider">{project.status || 'Live System'}</span>
              </>
            ) : (
              <>
                <FiCheckCircle className="text-blue-400" />
                <span className="text-gray-300">{project.status || 'Completed'}</span>
              </>
            )}
          </div>

          {/* Category Pill */}
          <span className="px-3.5 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md text-xs font-bold text-gray-900 dark:text-white rounded-full border border-gray-200/50 dark:border-gray-700/50 shadow-sm flex items-center gap-1.5">
            <FiStar className="text-amber-400 fill-amber-400 text-xs" />
            {project.category || 'Flagship Case Study'}
          </span>
        </div>

        {/* Subtitle Bar Overlay at Bottom of Image */}
        {project.subtitle && (
          <div className="absolute bottom-5 left-5 right-5 z-20 hidden sm:block">
            <span className="text-xs font-medium uppercase tracking-widest text-gray-300/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-md border border-white/10">
              {project.subtitle}
            </span>
          </div>
        )}
      </div>

      {/* Content & Details Section */}
      <div className="lg:w-5/12 p-8 md:p-10 flex flex-col justify-between relative z-20">
        <div>
          {/* Header Title */}
          <div className="mb-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors tracking-tight">
              {project.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Key Highlights Chips */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5 flex items-center gap-1.5">
                <FiZap className="text-amber-500" /> Key Features & Architecture
              </h4>
              <ul className="grid grid-cols-1 gap-1.5 text-xs text-gray-700 dark:text-gray-300">
                {project.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 bg-gray-50 dark:bg-white/5 px-2.5 py-1 rounded-md border border-gray-100 dark:border-white/5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech Stack */}
          <div className="mb-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-2.5">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center px-2.5 py-1 bg-gray-100 dark:bg-[#1a1a22] rounded-lg text-xs font-semibold text-gray-800 dark:text-gray-200 border border-gray-200/80 dark:border-gray-800 transition-all hover:border-primary-500/40"
                >
                  {techIcons[tech] && <span className="mr-1.5 text-sm">{techIcons[tech]}</span>}
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 pt-4 border-t border-gray-100 dark:border-gray-800/80 mt-auto">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl text-gray-700 dark:text-gray-200 transition-all hover:scale-105"
              aria-label="GitHub Repository"
              title="View Source Code on GitHub"
            >
              <FiGithub className="text-xl" />
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center px-5 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 text-sm group/btn"
            >
              <span>Explore Live System</span>
              <FiExternalLink className="ml-2 text-lg group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

