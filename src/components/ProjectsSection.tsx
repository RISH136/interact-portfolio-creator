
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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, user authentication, and payment processing.",
    longDescription: "This comprehensive e-commerce platform offers a complete online shopping experience. Users can browse products, filter by categories, add items to cart, create accounts, and complete purchases with integrated payment processing. The admin dashboard allows for inventory management, order processing, and user account management.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "Stripe API"],
    features: [
      "User authentication and account management",
      "Product catalog with search and filter options",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for inventory management"
    ]
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, task assignment, and project tracking features.",
    longDescription: "This task management application helps teams organize work efficiently. It features real-time collaboration, allowing team members to see updates instantly. Users can create projects, add tasks, assign them to team members, set deadlines, and track progress. The application includes notification systems and detailed analytics to help teams optimize their workflow.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["React", "Firebase", "TypeScript", "Material UI", "Redux"],
    features: [
      "Project creation and management",
      "Task creation, assignment, and status tracking",
      "Real-time updates and collaboration",
      "Calendar view and deadline notifications",
      "Team member management",
      "Progress analytics and reporting"
    ]
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard for social media managers to monitor metrics across multiple platforms and schedule content.",
    longDescription: "This social media dashboard gives marketing professionals a unified interface for managing multiple social media accounts. It pulls data from various platforms' APIs to provide analytics on engagement, reach, and other key metrics. Users can schedule posts across platforms, monitor comments and messages, and generate comprehensive reports on campaign performance.",
    imageSrc: "/placeholder.svg",
    demoLink: "https://example.com",
    repoLink: "https://github.com",
    tags: ["Next.js", "Chart.js", "TailwindCSS", "Node.js", "PostgreSQL", "Social APIs"],
    features: [
      "Multi-platform integration (Twitter, Facebook, Instagram, LinkedIn)",
      "Analytics dashboard with customizable metrics",
      "Content scheduling and publishing",
      "Engagement monitoring and response management",
      "Automated reporting",
      "Team collaboration tools"
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
