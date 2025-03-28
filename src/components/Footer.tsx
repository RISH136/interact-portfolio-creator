
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600 flex items-center">
              Built with <Heart className="h-4 w-4 text-portfolio-blue mx-2 fill-portfolio-blue" /> by John Doe &copy; {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <a href="#home" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
            
            <button 
              onClick={scrollToTop}
              className="bg-portfolio-blue text-white p-2 rounded-full hover:bg-portfolio-dark-blue transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
