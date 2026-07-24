"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

export default function ExperienceTimeline({ data }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'education': return <FaGraduationCap className="text-white" size={20} />;
      case 'code': return <FaCode className="text-white" size={20} />;
      case 'work':
      default: return <FaBriefcase className="text-white" size={20} />;
    }
  };

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">
      {/* Central Line - Desktop */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />
      <motion.div 
        className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-primary-500 origin-top transform -translate-x-1/2"
        style={{ height: lineHeight }}
      />

      {/* Left Line - Mobile */}
      <div className="md:hidden absolute left-6 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />
      <motion.div 
        className="md:hidden absolute left-6 top-0 w-[2px] bg-primary-500 origin-top"
        style={{ height: lineHeight }}
      />
      
      <div className="space-y-12">
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <div key={item.id} className="relative flex flex-col md:flex-row items-center w-full">
              
              {/* Desktop Left Side */}
              <div className="hidden md:flex w-1/2 justify-end pr-16">
                {isEven && (
                  <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <TimelineCard item={item} />
                  </motion.div>
                )}
              </div>

              {/* Center Icon */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className={`absolute left-6 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 md:top-auto flex items-center justify-center w-12 h-12 rounded-xl shadow-lg z-10 border-4 border-white dark:border-[#0a0a0a] ${item.iconBg || 'bg-primary-600'}`}
              >
                {getIcon(item.icon)}
              </motion.div>

              {/* Desktop Right Side */}
              <div className="hidden md:flex w-1/2 justify-start pl-16">
                {!isEven && (
                  <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full"
                  >
                    <TimelineCard item={item} />
                  </motion.div>
                )}
              </div>

              {/* Mobile View */}
              <div className="md:hidden flex w-full pl-20 pr-4 py-4">
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full"
                >
                  <TimelineCard item={item} />
                </motion.div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimelineCard({ item }) {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#111] p-6 md:p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 hover:shadow-md transition-shadow relative overflow-hidden">
      <span className="text-sm md:text-base font-bold text-[#b8860b] dark:text-yellow-500 mb-2 block tracking-widest uppercase">
        {item.period}
      </span>
      <h3 className="text-xl md:text-2xl font-semibold text-[#1e3a8a] dark:text-blue-400 mb-1">
        {item.role}
      </h3>
      <h4 className="text-sm md:text-md text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wide">
        {item.company}
      </h4>
      
      <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
        {item.description}
      </p>
      
      {item.contributions && item.contributions.length > 0 && (
        <div className="space-y-2">
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
            {item.contributions.map((contribution, i) => (
              <li key={i}>{contribution}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
