"use client";
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import projects from '../../data/projectData.jsx';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

export default function Work() {
  const featuredProject = projects[0];
  const regularProjects = projects.slice(1);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-scale-section">
            Featured <span className="text-primary-600 dark:text-primary-400">Projects</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, featuring full-stack applications and experimental designs.
          </p>
        </motion.div>

        {/* Featured Project (Index 0) */}
        {featuredProject && (
          <FeaturedProject project={featuredProject} />
        )}

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Usmankhalid20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 border-2 border-gray-200 dark:border-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-100 dark:hover:bg-gray-900 transition-all duration-300 group"
          >
            <FiGithub className="mr-2 text-xl group-hover:scale-110 transition-transform" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}