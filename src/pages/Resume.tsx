
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileDown, ExternalLink, Calendar, Building, MapPin, GraduationCap, Trophy, Award, Linkedin, Github, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Resume = () => {
  const downloadResume = () => {
    // Create a link to download the resume
    const link = document.createElement('a');
    link.href = '/lovable-uploads/365e8ee9-fa16-4964-87d2-cf34ad211857.png';
    link.download = 'Rishabh_Dev_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-portfolio-dark-bg bg-[url('/stars-pattern.png')] bg-repeat text-white">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#9b87f5]">My Resume</h1>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" onClick={downloadResume}>
            <FileDown size={18} className="mr-2" />
            Download Resume
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
                  <Phone size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-400">+91-9334471822</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a href="mailto:rishabhdev2026@gmail.com" className="text-[#9b87f5] hover:underline">rishabhdev2026@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Linkedin size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">LinkedIn</h3>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#9b87f5] hover:underline">LinkedIn Profile</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Github size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">GitHub</h3>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-[#9b87f5] hover:underline">GitHub Profile</a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Technical Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">JavaScript</span>
                      <span className="text-[#9b87f5]">90%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '90%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">React.js</span>
                      <span className="text-[#9b87f5]">85%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Python</span>
                      <span className="text-[#9b87f5]">80%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Django</span>
                      <span className="text-[#9b87f5]">75%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">MongoDB</span>
                      <span className="text-[#9b87f5]">70%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Node.js</span>
                      <span className="text-[#9b87f5]">75%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div className="h-full bg-[#9b87f5] rounded-full" style={{ width: '75%' }}></div>
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
                <CardTitle className="text-[#9b87f5]">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">Bachelor of Engineering</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">BMS INSTITUTE OF TECHNOLOGY AND MANAGEMENT • 2022 - 2026</p>
                  <p className="text-gray-400">
                    CGPA: 8.58
                  </p>
                </div>

                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">Higher Secondary</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">CBSE Board • 2019 - 2021</p>
                  <p className="text-gray-400">
                    Percentage: 86%
                  </p>
                </div>

                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex items-center gap-2 mb-2">
                    <GraduationCap size={18} className="text-[#9b87f5]" />
                    <h3 className="text-xl font-semibold">Secondary</h3>
                  </div>
                  <p className="text-[#9b87f5] mb-1">CBSE Board • 2019</p>
                  <p className="text-gray-400">
                    Percentage: 88%
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Projects</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={18} className="text-[#9b87f5]" />
                      <h3 className="text-xl font-semibold">Blood Bank Management System</h3>
                    </div>
                  </div>
                  <p className="text-[#9b87f5] mb-1">JavaScript, HTML, CSS, Django, Python</p>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>Designed a responsive web application to manage blood donation processes, real-time inventory tracking, and request management</li>
                    <li>Implemented secure authentication mechanisms for users and administrators</li>
                    <li>Enabled users to track donation history and visualize reports, improving coordination among donors, recipients, and blood banks</li>
                  </ul>
                </div>
                
                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={18} className="text-[#9b87f5]" />
                      <h3 className="text-xl font-semibold">Sorting Visualizer</h3>
                    </div>
                  </div>
                  <p className="text-[#9b87f5] mb-1">JavaScript, HTML, CSS</p>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>Visualizes Merge Sort, Quick Sort, Heap Sort, and Bubble Sort with animated comparisons and swaps</li>
                    <li>Allows users to select algorithms and control the speed of visualization</li>
                  </ul>
                </div>

                <div className="border-l-2 border-[#9b87f5] pl-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2 mb-2">
                      <Building size={18} className="text-[#9b87f5]" />
                      <h3 className="text-xl font-semibold">PersonalDoctor</h3>
                    </div>
                  </div>
                  <p className="text-[#9b87f5] mb-1">JavaScript, CSS, HTML, Bootstrap, MongoDB, Node.js, Express.js</p>
                  <ul className="text-gray-400 list-disc pl-5 space-y-1">
                    <li>Developed a telemedicine platform connecting rural patients with certified doctors via chat, audio, and video calls</li>
                    <li>Integrated ChatGPT API to provide medicine usage explanations and enhance user experience</li>
                    <li>Implemented a seamless doctor-patient rating system to ensure affordable healthcare through competitive pricing</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-900 border-gray-800 text-white">
              <CardHeader>
                <CardTitle className="text-[#9b87f5]">Courses and Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Award size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Data Structures and Algorithms</h3>
                    <p className="text-gray-400">Apna College</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Advanced Web development</h3>
                    <p className="text-gray-400">Udemy</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Award size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Python for Data Science</h3>
                    <p className="text-gray-400">Infosys Spring-Board</p>
                  </div>
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
                    <h3 className="font-medium">LeetCode Master</h3>
                    <p className="text-gray-400">Solved 350+ problems on LeetCode, ranking in the top 20% globally.</p>
                    <a href="https://leetcode.com/RISHABH467/" target="_blank" rel="noopener noreferrer" className="text-[#9b87f5] flex items-center gap-1 text-sm hover:underline mt-1">
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">GeeksforGeeks Contributor</h3>
                    <p className="text-gray-400">Completed 100+ challenges on GeeksforGeeks, improving problem-solving efficiency.</p>
                    <a href="https://auth.geeksforgeeks.org/user/rishabhdemjsc" target="_blank" rel="noopener noreferrer" className="text-[#9b87f5] flex items-center gap-1 text-sm hover:underline mt-1">
                      View Profile <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Trophy size={20} className="text-[#9b87f5] mt-1" />
                  <div>
                    <h3 className="font-medium">Hackathon Participant</h3>
                    <p className="text-gray-400">Participated in multiple hackathons and competitive coding events.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB]" size="lg" onClick={downloadResume}>
            <FileDown size={18} className="mr-2" />
            Download Full Resume
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resume;
