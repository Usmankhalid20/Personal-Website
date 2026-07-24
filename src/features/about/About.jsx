"use client";
import { motion } from 'framer-motion';
import { workflow } from '../../data/personalInfo';
import WorkflowTimeline from './WorkflowTimeline';

export default function About() {
  const currentStack = [
    "React / Next.js",
    "Node.js / Express",
    "MongoDB / PostgreSQL",
    "Tailwind CSS",
    "Framer Motion",
    "Figma"
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 bg-white dark:bg-black transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-scale-section">
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Personal Story */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-8 prose prose-lg dark:prose-invert max-w-none text-gray-600 dark:text-gray-400"
          >
            <p className="text-xl md:text-2xl font-medium text-gray-900 dark:text-white leading-snug mb-8">
              I'm a full-stack developer who cares deeply about user experience, clean architecture, and the intersection of design and engineering.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">What I build</h3>
            <p className="mb-6">
              I specialize in creating dynamic web applications from the ground up. Whether it's a complex administrative dashboard, an interactive consumer-facing product, or a robust REST API, I enjoy building scalable systems that solve real problems.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">How I work</h3>
            <p className="mb-6">
              I approach development with a product-first mindset. Code is just a tool to deliver value. I prioritize maintainability, writing clean and modular code, and collaborating closely with designers and stakeholders to ensure the final product exceeds expectations.
            </p>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 mt-8">What I care about</h3>
            <p>
              Accessibility, performance, and pixel-perfect implementation. I believe that good design is invisible, and a seamless user experience is the defining factor of a successful digital product.
            </p>
          </motion.div>

          {/* Right Column: Current Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <div className="bg-gray-50 dark:bg-[#0a0a0a] p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                Current Stack
              </h3>
              <ul className="space-y-4">
                {currentStack.map((tech, index) => (
                  <li key={index} className="flex items-center text-gray-700 dark:text-gray-300 font-medium">
                    <span className="w-2 h-2 rounded-full bg-primary-500 mr-4" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Workflow Timeline */}
        <WorkflowTimeline workflow={workflow} />
      </div>
    </section>
  );
}