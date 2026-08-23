"use client";
import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiSearch, FiX, FiLayers, FiCode } from 'react-icons/fi';
import projects from '../../data/projectData.jsx';
import FeaturedProject from './FeaturedProject';
import ProjectCard from './ProjectCard';

export default function Work() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories dynamically
  const categories = useMemo(() => {
    const cats = ['All'];
    projects.forEach((p) => {
      if (p.category && !cats.includes(p.category)) {
        cats.push(p.category);
      }
    });
    return cats;
  }, []);

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.technologies?.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Featured project is always project index 0 (AI Trending Prompts) unless user is searching/filtering
  const featuredProject = projects[0];
  
  // Show featured project banner when active category is 'All' and search query is empty
  const showFeaturedSection = activeCategory === 'All' && searchQuery.trim() === '';
  
  // Grid projects exclude featured project when featured section is displayed
  const gridProjects = showFeaturedSection
    ? filteredProjects.filter((p) => p.id !== featuredProject?.id)
    : filteredProjects;

  return (
    <section id="work" className="py-28 px-6 sm:px-12 bg-gray-50/50 dark:bg-[#0a0a0c] transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-500/10 dark:bg-primary-400/10 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-widest mb-4 border border-primary-500/20">
            <FiLayers className="text-sm" />
            <span>Case Studies & Systems</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white tracking-tight">
            Featured <span className="bg-gradient-to-r from-primary-600 to-amber-500 bg-clip-text text-transparent">Work & Live Apps</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A curated portfolio of production-grade full-stack applications, active live platforms, and high-performance backend systems.
          </p>
        </motion.div>

        {/* Featured Flagship Project Banner */}
        {showFeaturedSection && featuredProject && (
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-6">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Flagship Active Project
              </h3>
            </div>
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Filters & Search Toolbar */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 bg-white/70 dark:bg-[#121218]/80 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-gray-200/80 dark:border-gray-800/80 shadow-md"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = cat === 'All' 
                ? projects.length 
                : projects.filter(p => p.category === cat).length;

              const isActive = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25 scale-[1.02]'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`px-1.5 py-0.5 rounded-md text-[10px] font-bold ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-200 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Keyword Search Input */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-base" />
            <input
              type="text"
              placeholder="Search by title or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2 bg-gray-100/80 dark:bg-white/5 rounded-xl text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 border border-transparent focus:border-primary-500/50 focus:bg-white dark:focus:bg-[#181820] outline-none transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-white"
              >
                <FiX className="text-sm" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Regular Projects Grid */}
        <AnimatePresence mode="wait">
          {gridProjects.length > 0 ? (
            <motion.div
              key={activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {gridProjects.map((project, index) => (
                <ProjectCard key={project.id || index} project={project} index={index} />
              ))}
            </motion.div>
          ) : (
            /* Empty State */
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white/40 dark:bg-[#121218]/40 rounded-3xl border border-dashed border-gray-300 dark:border-gray-800"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400">
                <FiCode className="text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                No Projects Found
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto mb-6">
                No projects matched "{searchQuery}" in category "{activeCategory}". Try clearing your filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-5 py-2.5 bg-primary-600 hover:bg-primary-500 text-white rounded-xl text-xs font-semibold transition-all shadow-md"
              >
                Reset All Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* GitHub Showcase Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Usmankhalid20?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-white dark:bg-[#14141c] border-2 border-gray-200 dark:border-gray-800/80 text-gray-900 dark:text-white font-bold text-sm sm:text-base rounded-2xl hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 group"
          >
            <FiGithub className="mr-3 text-xl group-hover:scale-110 text-gray-700 dark:text-gray-300 group-hover:text-primary-500 transition-all" />
            <span>Explore All Open-Source Repositories</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}