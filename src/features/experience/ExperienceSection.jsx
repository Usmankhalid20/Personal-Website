"use client";
import { motion } from 'framer-motion';
import ExperienceTimeline from './ExperienceTimeline';
import { experienceData } from '../../data/experienceData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 sm:px-12 bg-gray-50 dark:bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My journey and contributions in software development.
          </p>
        </motion.div>

        <ExperienceTimeline data={experienceData} />
      </div>
    </section>
  );
}
