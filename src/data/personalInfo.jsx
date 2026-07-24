"use client";
import React from 'react';
import { FaCode, FaReact, FaNodeJs, FaGitAlt, FaChrome, FaRocket, FaBug, FaPencilRuler, FaRegLightbulb } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostman, SiVite, SiTailwindcss, SiFigma } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

export const techStack = [
  { icon: <FaReact className="text-blue-400" />, name: "React" },
  { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-800 dark:text-gray-200" />, name: "Express" },
  { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
  { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind" },
  { icon: <SiVite className="text-yellow-400" />, name: "Vite" }
];

export const tools = [
  { icon: <VscVscode className="text-blue-500" />, name: "VS Code" },
  { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
  { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
  { icon: <FaChrome className="text-yellow-500" />, name: "Chrome" },
  { icon: <SiPostman className="text-orange-500" />, name: "Postman" }
];

export const workflow = [
  { icon: <FaRegLightbulb />, title: "Plan", desc: "Strategy & Research" },
  { icon: <FaPencilRuler />, title: "Design", desc: "UI/UX & Prototyping" },
  { icon: <FaCode />, title: "Develop", desc: "Clean & Scalable Code" },
  { icon: <FaBug />, title: "Test", desc: "Debug & Optimize" },
  { icon: <FaRocket />, title: "Deploy", desc: "Launch & Maintain" }
];
console.log("hello usman")