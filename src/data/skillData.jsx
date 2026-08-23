"use client";
import React from 'react';
import { FaReact, FaNodeJs, FaJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { 
  SiTailwindcss, 
  SiExpress, 
  SiTypescript, 
  SiMongodb, 
  SiRedux, 
  SiFigma, 
  SiPostman, 
  SiVite, 
  SiNextdotjs, 
  SiPostgresql,
  SiDocker,
  SiGithubactions,
  SiJsonwebtokens,
  SiCloudinary,
  SiPnpm,
  SiOpenai,
  SiSocketdotio,
  SiSass
} from 'react-icons/si';
import { DiHtml5, DiCss3 } from 'react-icons/di';
import { TbLayersIntersect, TbLayout } from 'react-icons/tb';

export const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: 'React.js', icon: <FaReact className="text-[#61DAFB]" /> },
      { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" /> },
      { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: 'JavaScript', icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: 'Redux Toolkit', icon: <SiRedux className="text-[#764ABC]" /> },
      { name: 'Zustand', icon: <FaReact className="text-[#764ABC]" /> },
      { name: 'HTML5 & CSS3', icon: <DiHtml5 className="text-[#E34F26]" /> },
      { name: 'SCSS', icon: <SiSass className="text-[#CC6699]" /> },
      { name: 'Responsive UI', icon: <TbLayout className="text-[#38B2AC]" /> },
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: 'Node.js', icon: <FaNodeJs className="text-[#339933]" /> },
      { name: 'Express.js', icon: <SiExpress className="text-gray-800 dark:text-gray-200" /> },
      { name: 'REST APIs', icon: <TbLayersIntersect className="text-[#006994]" /> },
      { name: 'MongoDB', icon: <SiMongodb className="text-[#47A248]" /> },
      { name: 'PostgreSQL', icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: 'JWT & Auth', icon: <SiJsonwebtokens className="text-black dark:text-white" /> },
      { name: 'OpenAI API', icon: <SiOpenai className="text-[#10A37F]" /> },
      { name: 'Socket.IO', icon: <SiSocketdotio className="text-black dark:text-white" /> },
    ]
  },
  {
    title: "DevOps, Cloud & Tools",
    skills: [
      { name: 'Docker', icon: <SiDocker className="text-[#2496ED]" /> },
      { name: 'GitHub Actions', icon: <SiGithubactions className="text-[#2088FF]" /> },
      { name: 'AWS (EC2/S3)', icon: <FaAws className="text-[#FF9900]" /> },
      { name: 'Git & GitHub', icon: <FaGitAlt className="text-[#F05032]" /> },
      { name: 'Vite', icon: <SiVite className="text-[#646CFF]" /> },
      { name: 'Postman', icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: 'Cloudinary', icon: <SiCloudinary className="text-[#3448C5]" /> },
      { name: 'npm & pnpm', icon: <SiPnpm className="text-[#F69220]" /> },
      { name: 'Figma', icon: <SiFigma className="text-[#F24E1E]" /> },
    ]
  }
];
