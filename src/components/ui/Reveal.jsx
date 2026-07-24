"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '../../lib/animations';

export default function Reveal({ 
  children, 
  width = "100%", 
  className = "", 
  delay = 0,
  variant = fadeUp
}) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }} className={className}>
      <motion.div
        variants={variant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
