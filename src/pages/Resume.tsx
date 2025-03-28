
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileDown, ExternalLink, Calendar, Building, MapPin, GraduationCap, Trophy, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  return (
    <div className="min-h-screen bg-portfolio-dark-bg text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5]">My Resume</h1>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]">
            <FileDown size={18} className="mr-2" />
            Download PDF
          </Button>
        </div>
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900 border-gray-800 text-white mb-6">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-gray-400">New Delhi, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ExternalLink size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Website</h3>
                    <a href="https://soumyajit.tech" className="text-[#9b87f5] hover:underline">soumyajit.tech</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Calendar size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Date of Birth</h3>
                    <p className="text-gray-400">March 15, 1999</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-[#9b87f5]">95%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '95%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React.js</span>
                      <span className="text-[#9b87f5]">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Node.js</span>
                      <span className="text-[#9b87f5]">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">TypeScript</span>
                      <span className="text-[#9b87f5]">80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Right Column - Experience and Education */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Work Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">Full Stack Developer</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">TechCorp Inc. • 2021 - Present</p>
                  <p className="text-gray-400">
                    Led development of dynamic web applications using React and Node.js. 
                    Implemented REST APIs, optimized database queries, and improved web performance.
                  </p>
                </div>
                
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Building size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">Frontend Developer Intern</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">WebSolutions • 2020 - 2021</p>
                  <p className="text-gray-400">
                    Developed user interfaces using React and CSS/SCSS.
                    Collaborated with the design team to implement responsive layouts.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">B.Tech in Computer Science</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">Indian Institute of Technology • 2017 - 2021</p>
                  <p className="text-gray-400">
                    Specialized in web technologies and machine learning.
                    Graduated with first-class honors.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Achievements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Trophy size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Hackathon Winner</h3>
                    <p className="text-gray-400">First place at National Coding Competition 2020</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">LeetCode Master</h3>
                    <p className="text-gray-400">Solved 500+ problems with high efficiency</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Open Source Contributor</h3>
                    <p className="text-gray-400">Active contributor to React ecosystem</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
