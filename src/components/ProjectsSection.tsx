
import React, { useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  demoLink: string;
  repoLink: string;
  tags: string[];
  features: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Personal Assistant",
    description: "A sophisticated personal assistant application using NLP and machine learning to help users manage their daily tasks and schedule.",
    longDescription: "This AI assistant application uses advanced natural language processing and machine learning models to understand and respond to user requests. It features voice recognition, contextual understanding, and intelligent task management. The assistant can schedule appointments, set reminders, send messages, provide weather updates, and learn from user interactions to become more personalized over time.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "TensorFlow.js", "Node.js", "WebSpeech API", "TypeScript", "Redux"],
    features: [
      "Voice and text interaction with natural language understanding",
      "Contextual awareness and conversation memory",
      "Calendar and task management with smart suggestions",
      "Personalized responses based on user preferences",
      "Cross-platform synchronization",
      "Offline functionality with local processing"
    ]
  },
  {
    id: 2,
    title: "Real-time Collaboration Platform",
    description: "A comprehensive platform enabling teams to collaborate on documents, designs, and code in real-time with robust version control.",
    longDescription: "This collaboration platform brings together document editing, design tools, and code collaboration in one seamless environment. Teams can work simultaneously on projects with real-time updates visible to all participants. The platform includes version control, branching options, commenting, and approval workflows. Advanced conflict resolution algorithms ensure smooth collaboration even with multiple concurrent edits.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "WebSockets", "GraphQL", "MongoDB", "Redis", "Docker"],
    features: [
      "Real-time document, design, and code editing",
      "Advanced version control with branching and merging",
      "Commenting and annotation tools",
      "Project management with task tracking",
      "Customizable workspace layouts",
      "Integration with popular development and design tools"
    ]
  },
  {
    id: 3,
    title: "Blockchain-based Supply Chain Tracker",
    description: "A transparent supply chain management system using blockchain technology to track products from origin to consumer.",
    longDescription: "This supply chain tracking application leverages blockchain technology to create an immutable record of a product's journey from manufacturer to consumer. Each transaction and transfer of goods is recorded as a block in the chain, ensuring transparency and preventing fraud. The system includes QR code scanning, IoT device integration for automatic updates, and a consumer-facing portal where end users can verify the authenticity and journey of their purchases.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "Solidity", "Ethereum", "Node.js", "Express", "Web3.js"],
    features: [
      "Immutable blockchain record of product journeys",
      "QR code and RFID integration for tracking",
      "IoT device support for automated checkpoints",
      "Manufacturer and supplier portals",
      "Consumer verification interface",
      "Analytics dashboard for supply chain optimization"
    ]
  },
  {
    id: 4,
    title: "AR Interior Design Visualizer",
    description: "An augmented reality application that allows users to visualize furniture and decor in their space before purchasing.",
    longDescription: "This AR application helps users make confident interior design decisions by allowing them to place virtual furniture and decor items in their real-world space using their smartphone camera. Users can browse thousands of products from partnered retailers, adjust colors and materials in real-time, and see how items look in different lighting conditions. The app includes measurement tools to ensure proper sizing and a recommendation engine that suggests complementary pieces based on selected items.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React Native", "ARKit", "ARCore", "Three.js", "WebXR", "Firebase"],
    features: [
      "Real-time furniture and decor visualization in AR",
      "Accurate measurements and scaling",
      "Product catalog with thousands of items",
      "Material and color customization",
      "Room scanning and layout detection",
      "Design sharing and collaboration"
    ]
  },
  {
    id: 5,
    title: "Health and Fitness Tracker",
    description: "A comprehensive health platform integrating workout tracking, nutrition planning, and health metrics monitoring with AI-powered insights.",
    longDescription: "This health and fitness application provides users with a holistic view of their wellbeing by tracking physical activity, nutrition, sleep, and other health metrics. The platform uses machine learning to analyze patterns and provide personalized recommendations for improvement. Features include workout planning with video guides, meal planning with nutritional analysis, integration with wearable devices, and social challenges to keep users motivated.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "Node.js", "PostgreSQL", "TensorFlow", "WebRTC", "GraphQL"],
    features: [
      "Comprehensive activity and workout tracking",
      "Nutrition logging with macro and micronutrient analysis",
      "Sleep and recovery monitoring",
      "Personalized AI-generated fitness recommendations",
      "Wearable device integration",
      "Community challenges and social motivation"
    ]
  },
  {
    id: 6,
    title: "Financial Portfolio Manager",
    description: "A sophisticated financial tool for tracking investments, analyzing performance, and optimizing portfolio allocation across multiple asset classes.",
    longDescription: "This financial portfolio manager gives investors a comprehensive view of their financial assets across stocks, bonds, cryptocurrencies, real estate, and more. The application provides real-time data, historical performance tracking, and advanced analytics to help users make informed investment decisions. Features include portfolio rebalancing recommendations, tax optimization strategies, risk assessment tools, and scenario planning to simulate market conditions.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL", "Redis", "Financial APIs"],
    features: [
      "Multi-asset portfolio tracking and visualization",
      "Real-time market data integration",
      "Performance analytics and benchmarking",
      "Tax optimization strategies",
      "Risk assessment and scenario modeling",
      "Customizable alerts and notifications"
    ]
  }
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 bg-portfolio-dark-bg bg-[url('/stars-pattern.png')] bg-repeat text-white">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-white">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="aspect-video bg-gray-200 relative overflow-hidden">
                <img 
                  src={project.imageSrc} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-portfolio-purple/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink size={20} className="text-portfolio-purple" />
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github size={20} className="text-portfolio-purple" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="skill-badge">{tag}</span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-sm text-gray-400">+{project.tags.length - 4} more</span>
                  )}
                </div>
                <Button 
                  variant="ghost" 
                  className="text-portfolio-purple hover:text-portfolio-light-blue hover:bg-portfolio-purple/10 p-0 flex items-center"
                  onClick={() => setSelectedProject(project)}
                >
                  View Details <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        {selectedProject && (
          <DialogContent className="max-w-3xl bg-[#1E2235] text-white border border-[#2A2F42]">
            <DialogHeader>
              <DialogTitle className="text-2xl text-white">{selectedProject.title}</DialogTitle>
              <DialogDescription className="text-lg text-gray-300 mt-2">
                {selectedProject.longDescription}
              </DialogDescription>
            </DialogHeader>
            
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2 text-white">Key Features:</h4>
              <ul className="space-y-1 list-disc pl-5 text-gray-300">
                {selectedProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2 text-white">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag) => (
                  <span key={tag} className="skill-badge">{tag}</span>
                ))}
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <Button 
                onClick={() => window.open(selectedProject.demoLink, '_blank')}
                className="bg-portfolio-purple hover:bg-portfolio-dark-purple"
              >
                Live Demo <ExternalLink size={16} className="ml-2" />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.open(selectedProject.repoLink, '_blank')}
                className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10"
              >
                View Code <Github size={16} className="ml-2" />
              </Button>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default ProjectsSection;
