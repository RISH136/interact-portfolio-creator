
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center bg-gradient-to-br from-white to-portfolio-light-blue/30 relative overflow-hidden pt-20"
    >
      <div className="absolute inset-0 bg-grid-pattern opacity-5 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h3 className="text-portfolio-blue font-medium text-lg md:text-xl mb-2 animate-fade-in">
            Hello, my name is
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            John Doe
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-600 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            CS Student & Web Developer
          </h2>
          <p className="text-lg text-gray-700 mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I create exceptional web experiences and solve complex problems.
            I'm passionate about building software that improves lives and pushing
            the boundaries of what's possible with code.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              size="lg" 
              className="bg-portfolio-blue hover:bg-portfolio-dark-blue text-white"
              onClick={() => window.open('#projects', '_self')}
            >
              View My Projects
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10"
              onClick={() => window.open('#contact', '_self')}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-blue animate-float"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default HeroSection;
