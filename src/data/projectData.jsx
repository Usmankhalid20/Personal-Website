"use client";

const projects = [
  {
    id: 'ai-trending-prompts',
    title: 'AI Trending Prompts Platform',
    subtitle: 'Next-Gen AI Prompt Gallery & Marketplace',
    description: 'A production-grade full-stack AI prompt gallery platform built with Next.js 16 App Router and React 19. Features custom Cloudinary upload streams, high-performance Redis caching layer, cookie-based JWT admin dashboard, prompt search & filtering, and a photography light-table visual identity.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Redis', 'Tailwind CSS', 'Cloudinary', 'Docker'],
    github: 'https://github.com/Usmankhalid20/trending-Prompt-',
    demo: 'https://trending-prompt-six.vercel.app',
    image: '/img/trending ai.png',
    featured: true,
    status: 'Live & Active',
    statusColor: 'green',
    category: 'Full Stack & AI',
    highlights: [
      'Next.js 16 App Router & React 19',
      'Redis Caching & High Throughput',
      'Cloudinary Stream Uploads',
      'JWT Protected Admin Portal'
    ]
  },
  {
    id: 'kitchen-hearth',
    title: 'Kitchen Hearth - AI Recipe Assistant',
    subtitle: 'Instant AI Recipe Generation & Smart Kitchen Suite',
    description: 'Next-generation culinary platform turning fridge ingredients into restaurant-quality recipes. Features instant AI recipe generation, dynamic ingredient inputs, step-by-step cooking instructions, nutritional breakdowns, and interactive meal planning.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'AI API'],
    github: 'https://github.com/Usmankhalid20/Frontend-kitchen-hearth',
    demo: 'https://kitchen-hearth.vercel.app/',
    image: '/img/recipe.png',
    featured: true,
    status: 'Live & Active',
    statusColor: 'green',
    category: 'Full Stack & AI',
    highlights: [
      'Ingredient-to-Recipe AI Generator',
      'Step-by-Step Interactive Guides',
      'Nutritional & Meal Breakdown',
      'Sleek Modern Culinary Design'
    ]
  },
  {
    id: 'bpo-leads-management',
    title: 'Medicare Quote Experts & Lead Portal',
    subtitle: 'Compliant Lead Capture & Plan Comparison Suite',
    description: 'Production-ready Medicare quote request and lead capture management portal for BPO call centers. Features dynamic quote forms, real-time input validation, compliance disclosures, insurance provider comparison, and enterprise CRM/lead routing integration.',
    technologies: ['React', 'Next.js', 'Node.js', 'Express', 'Tailwind CSS', 'MongoDB'],
    github: 'https://github.com/Usmankhalid20/BPO-Leads-Management',
    demo: 'https://bpo-leads-management.vercel.app',
    image: '/img/BPO.png',
    featured: true,
    status: 'Live & Active',
    statusColor: 'green',
    category: 'Full Stack & Enterprise',
    highlights: [
      'Compliant Medicare Lead Capture',
      'Real-Time Dynamic Form Validation',
      'Plan Comparison & FAQ Accordion',
      'Enterprise Lead Pipeline Integration'
    ]
  },
  {
    id: 'tissot-gamma-3d',
    title: 'TISSOT PRX Powermatic 80 - 3D Experience',
    subtitle: 'Interactive 3D Horology & Mechanical Engineering',
    description: 'High-precision interactive 3D product showcase for the TISSOT PRX Powermatic 80 timepiece. Features exploded mechanical assembly visualization, interactive component inspection (gear train, balance spring, escapement), custom WebGL shaders, and smooth dark-mode scroll animations.',
    technologies: ['React', 'Three.js', 'WebGL', 'Framer Motion', 'Tailwind CSS', 'JavaScript'],
    github: 'https://github.com/Usmankhalid20/3D-websie',
    demo: 'https://tissot-gamma.vercel.app/',
    image: '/img/3d website .png',
    featured: true,
    status: 'Live & Active',
    statusColor: 'green',
    category: '3D & Interactive UI',
    highlights: [
      'Exploded Mechanical 3D Watch View',
      'Interactive Gear Train Inspection',
      'Custom WebGL & Shader Effects',
      'Cinematic Dark Mode Visuals'
    ]
  },
  {
    id: 'note-app-mern',
    title: 'MERN Note Vault',
    subtitle: 'Full-Stack Note Management System',
    description: 'A comprehensive note-taking application built with the MERN stack. Features drag-and-drop note organization, JWT user authentication, MongoDB document storage, and responsive dark/light modes.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS'],
    github: 'https://github.com/Usmankhalid20/Note-APP-MERN-Stack',
    demo: 'https://github.com/Usmankhalid20/Note-APP-MERN-Stack',
    image: '/img/noteApp.PNG',
    featured: false,
    status: 'Completed',
    statusColor: 'blue',
    category: 'Full Stack',
    highlights: [
      'Drag-and-Drop Card Layout',
      'JWT Authentication',
      'MongoDB Document Store'
    ]
  },
  {
    id: 'crud-operations-engine',
    title: 'RESTful CRUD Engine',
    subtitle: 'High-Performance Data Operations Demo',
    description: 'A robust demonstration of CRUD operations engineered with a React client interface, Express REST backend architecture, and MongoDB data validation pipelines.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    github: 'https://github.com/Usmankhalid20/Crud-Operation',
    demo: 'https://github.com/Usmankhalid20/Crud-Operation',
    image: '/img/crudOperation.PNG',
    featured: false,
    status: 'Completed',
    statusColor: 'gray',
    category: 'Full Stack',
    highlights: [
      'Validated REST Endpoints',
      'Express & Mongoose Schema'
    ]
  },
  {
    id: 'netflix-clone',
    title: 'StreamFlix Cinema UI',
    subtitle: 'Pixel-Perfect Streaming Web App',
    description: 'Responsive frontend clone of modern streaming web apps, featuring hero movie banners, dynamic media catalog carousels, and smooth micro-interactions.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'React'],
    github: 'https://github.com/Usmankhalid20/Netflix-Clone',
    demo: 'https://github.com/Usmankhalid20/Netflix-Clone',
    image: '/img/netifix.PNG',
    featured: false,
    status: 'Completed',
    statusColor: 'gray',
    category: 'Frontend',
    highlights: [
      'Responsive Grid Layouts',
      'Custom Video Player Styling'
    ]
  },
  {
    id: 'multi-function-suite',
    title: 'Multi-Utility Productivity Suite',
    subtitle: 'All-In-One Web Tool Collection',
    description: 'Unified web productivity application bundling weather widgets, interactive calculators, and active task management into a single cohesive interface.',
    technologies: ['React', 'JavaScript', 'CSS', 'API Integration'],
    github: 'https://github.com/Usmankhalid20/Multi-Function-Website',
    demo: 'https://github.com/Usmankhalid20/Multi-Function-Website',
    image: '/img/fullWebsite.PNG',
    featured: false,
    status: 'Completed',
    statusColor: 'gray',
    category: 'Web Application',
    highlights: [
      'Live Weather API Sync',
      'Interactive Tooling Dashboard'
    ]
  }
];

export default projects;
