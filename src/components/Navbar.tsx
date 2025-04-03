
import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, FolderKanban, FileText, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#home', icon: <Home size={18} /> },
    { name: 'About', href: '/#about', icon: <User size={18} /> },
    { name: 'Projects', href: '/#projects', icon: <FolderKanban size={18} /> },
    { name: 'Resume', href: '/resume', icon: <FileText size={18} /> },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full transition-all duration-300 z-50',
        isScrolled ? 'bg-portfolio-dark-bg/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#9b87f5]">
          Rd<span className="text-white">.</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.href} 
                  className="text-white hover:text-[#9b87f5] transition-colors duration-300 flex items-center gap-2"
                >
                  {link.icon}
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2 text-white bg-[#9b87f5]/20 px-3 py-1 rounded-full">
            <Heart className="h-4 w-4 text-[#9b87f5] fill-[#9b87f5]" />
            <span>1</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-portfolio-dark-bg/95 shadow-lg">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-[#9b87f5]/20 hover:text-[#9b87f5] rounded-md transition-colors duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
