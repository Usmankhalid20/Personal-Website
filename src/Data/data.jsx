import NoteApp from '../assets/img/noteApp.PNG'
import FoodWebsite from '../assets/img/foodWebsite.PNG'
import Crud from '../assets/img/crudOperation.PNG'
import Personal from '../assets/img/personalWebsites.PNG'
import Netflix from '../assets/img/netifix.PNG'
import FullWebsite from '../assets/img/fullWebsite.PNG'
const projects = [
  {
    title: 'Note App',
    description: 'A full-featured note-taking application built with MERN stack (MongoDB, Express, React, Node.js) with CRUD functionality and user authentication.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Usmankhalid20/Note-APP-MERN-Stack',
    demo: 'https://note-app-demo.com',
    image: NoteApp,
    featured: true,
    category: 'Full Stack'
  },
  {
    title: 'Food Website',
    description: 'Interactive food ordering platform with menu browsing, cart functionality, and admin dashboard built with MERN stack.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    github: 'https://github.com/Usmankhalid20/Food-Recipe-Website',
    demo: 'https://food-website-demo.com',
    image: FoodWebsite,
    featured: true,
    category: 'E-Commerce'
  },
  {
    title: 'CRUD Operations App',
    description: 'A demonstration of Create, Read, Update, Delete operations with React frontend and Node.js backend.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/Usmankhalid20/Crud-Operation',
    demo: 'https://crud-app-demo.com',
    image: Crud,
    category: 'Full Stack'
  },
  {
    title: 'Personal Portfolio',
    description: 'Professional portfolio website showcasing my projects and skills, built with React and modern CSS.',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/Usmankhalid20/Personal-Website',
    demo: 'https://yourportfolio.com',
    image: Personal,
    category: 'Web Development'
  },
  {
    title: 'Netflix Clone',
    description: 'Frontend clone of Netflix streaming platform with responsive design and movie browsing interface.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Usmankhalid20/Netflix-Clone',
    demo: 'https://netflix-clone-demo.com',
    image: Netflix,
    category: 'Frontend'
  },
  {
    title: 'Multi-Function Website',
    description: 'All-in-one platform featuring multiple tools including calculator, weather app, and todo list in a single interface.',
    technologies: ['React', 'CSS', 'API Integration'],
    github: 'https://github.com/Usmankhalid20/Multi-Function-Website',
    demo: 'https://multi-function-demo.com',
    image: FullWebsite,
    category: 'Web Application'
  }
];

export default projects;