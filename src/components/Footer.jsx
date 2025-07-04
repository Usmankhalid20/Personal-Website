import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitter, FaDribbble } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl text-center mb-8">
            Feel free to reach out for collaborations or just a friendly hello
          </p>
          
          <div className="flex space-x-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/usman-khalid-9a2bb72b7/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              aria-label="LinkedIn"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/Usmankhalid20" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              aria-label="GitHub"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://www.instagram.com/usman399354/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              aria-label="Instagram"
            >
              <BsInstagram className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/Usmankhalid2205?s=09" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              aria-label="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
            <a 
              href="mailto:cadetusman2205@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors duration-300 text-2xl"
              aria-label="Email"
            >
              <HiOutlineMail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center pt-8 border-t border-gray-800 space-y-2">
          <p className="text-gray-500 text-sm">
            © {currentYear} Usman. All rights reserved
          </p>
          <p className="text-gray-600 text-xs">
            Designed & Built with ❤️ by Usman
          </p>
        </div>
      </div>
    </footer>
  );
}