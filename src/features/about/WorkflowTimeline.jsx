"use client";
import { motion } from 'framer-motion';

export default function WorkflowTimeline({ workflow }) {
  return (
    <div className="mt-20">
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        My Development <span className="text-primary-600 dark:text-primary-400">Process</span>
      </motion.h3>

      <div className="relative">
        {/* Desktop Horizontal Line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gray-200 dark:bg-gray-800 -translate-y-1/2" />
        
        {/* Mobile Vertical Line */}
        <div className="md:hidden absolute top-0 bottom-0 left-[23px] w-px bg-gray-200 dark:bg-gray-800" />

        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-4 relative z-10">
          {workflow.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex md:flex-col items-center md:items-center relative"
            >
              <div className="w-12 h-12 rounded-full bg-white dark:bg-[#111] border-4 border-gray-100 dark:border-gray-900 shadow-sm flex items-center justify-center text-primary-500 z-10 shrink-0 md:mb-6">
                <span className="text-sm font-bold">{`0${index + 1}`}</span>
              </div>
              
              <div className="ml-6 md:ml-0 md:text-center flex-1">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[200px] mx-auto">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
