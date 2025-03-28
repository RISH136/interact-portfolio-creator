
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#131624] py-8 text-white border-t border-[#2A2F42]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 flex items-center">
              Built with <Heart className="h-4 w-4 text-[#9b87f5] mx-2 fill-[#9b87f5]" /> by Soumyajit Behera &copy; {new Date().getFullYear()}
            </p>
          </div>
          
          <div className="flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-6">
                <li>
                  <Link to="/#home" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/#about" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/resume" className="text-gray-400 hover:text-[#9b87f5] transition-colors">
                    Resume
                  </Link>
                </li>
              </ul>
            </nav>
            
            <button 
              onClick={scrollToTop}
              className="bg-[#9b87f5] text-white p-2 rounded-full hover:bg-[#7E69AB] transition-colors"
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
