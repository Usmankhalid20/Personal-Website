import NoteApp from '../assets/img/noteApp.PNG'
import FoodWebsite from '../assets/img/foodWebsite.PNG'
import Crud from '../assets/img/crudOperation.PNG'
import Netflix from '../assets/img/netifix.PNG'
import FullWebsite from '../assets/img/fullWebsite.PNG'

const projects = [
  {
    title: 'Note App',
    description: 'A full-featured note-taking application built with MERN stack. Implemented secure user authentication with JWT, efficient data storage with MongoDB, and a responsive UI with drag-and-drop functionality for better user experience.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Usmankhalid20/Note-APP-MERN-Stack',
    demo: 'https://note-app-demo.com',
    image: NoteApp,
    featured: true,
    category: 'Full Stack'
  },
  {
    title: 'Food Website',
    description: 'Interactive food ordering platform handling complex API calls for recipe data. Designed a scalable component structure to support future feature integration and managed global state with Redux for a seamless shopping cart experience.',
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