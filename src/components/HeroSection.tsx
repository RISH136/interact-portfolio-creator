
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h3 className="text-portfolio-blue font-medium text-xl md:text-2xl mb-2 animate-fade-in">
              Hi There! <span className="animate-float inline-block">👋</span>
            </h3>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              I'M <span className="text-[#9b87f5]">RISHABH DEV</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Full Stack Developer<span className="text-[#9b87f5]">|</span>Problem Solver
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
              I create exceptional web experiences and solve complex problems.
              I'm passionate about building software that improves lives and pushing
              the boundaries of what's possible with code.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                size="lg" 
                className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
                onClick={() => window.open('#projects', '_self')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5]/10 flex items-center gap-2"
                onClick={() => window.open('/resume', '_self')}
              >
                Resume <ArrowRight size={16} />
              </Button>
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-center">
            <img 
              src="/lovable-uploads/214cf7ff-ef23-4dc7-bdff-2a69b536c94e.png" 
              alt="Developer Illustration" 
              className="w-full max-w-md animate-float"
              style={{ animationDelay: '0.5s' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
