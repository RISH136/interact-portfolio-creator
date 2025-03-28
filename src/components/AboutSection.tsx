
import React from 'react';
import { GraduationCap, Award, Code, BrainCircuit } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-portfolio-light-blue/20 p-6 rounded-lg border border-portfolio-light-blue">
              <p className="text-lg mb-4">
                I'm a Computer Science student with a passion for web development and problem-solving. 
                Currently pursuing my degree in Computer Science, I'm constantly exploring new technologies 
                and building projects that challenge me to grow as a developer.
              </p>
              <p className="text-lg mb-4">
                My journey in programming began when I was introduced to web development during my freshman year.
                Since then, I've been developing my skills in both frontend and backend technologies,
                and I love creating applications that are not only functional but also provide great user experiences.
              </p>
              <p className="text-lg">
                Beyond coding, I enjoy solving algorithmic problems on platforms like LeetCode and GeeksForGeeks,
                which has significantly improved my analytical thinking and problem-solving abilities.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                <GraduationCap className="text-portfolio-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p>Bachelor of Science in Computer Science</p>
                <p className="text-gray-600">University of Technology, 2020-2024</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                <Code className="text-portfolio-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Development</h3>
                <p>Full-Stack Web Developer</p>
                <p className="text-gray-600">Specializing in React and Node.js</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                <BrainCircuit className="text-portfolio-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Problem Solving</h3>
                <p>Algorithmic Problem Solver</p>
                <p className="text-gray-600">LeetCode & GeeksForGeeks Enthusiast</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-portfolio-blue/10 p-3 rounded-lg">
                <Award className="text-portfolio-blue h-8 w-8" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                <p>Hackathon Winner, 2023</p>
                <p className="text-gray-600">Top 5% on Competitive Programming Sites</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
