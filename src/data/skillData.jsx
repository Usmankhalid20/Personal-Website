"use client";
import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiExpress, SiTypescript, SiMongodb, SiRedux, SiFigma, SiPostman, SiVite, SiNextdotjs, SiGraphql, SiFirebase } from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: 'React', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'Tailwind', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Redux', icon: <SiRedux className="text-[#764ABC]" /> },
      { name: 'HTML5', icon: <DiHtml5 className="text-[#E34F26]" /> },
      { name: 'CSS3', icon: <DiCss3 className="text-[#1572B6]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'Firebase', icon: <SiFirebase className="text-[#FFCA28]" /> },
      { name: 'GraphQL', icon: <SiGraphql className="text-[#E10098]" /> },
    ]
  },
  {
    title: "Tools & Design",
    skills: [
      { name: 'Git', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
    ]
  }
];
