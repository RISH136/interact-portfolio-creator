
import React from 'react';
import { Badge } from '@/components/ui/badge';

const SkillsSection = () => {
  const skills = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Redux', 'Material UI'],
    backend: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL', 'RESTful APIs', 'GraphQL'],
    devtools: ['Git', 'GitHub', 'VS Code', 'Docker', 'Webpack', 'NPM', 'Postman', 'Vercel', 'Netlify'],
    languages: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  };

  const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <Badge 
            key={skill} 
            className="skill-badge"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills & Technologies</h2>
        
        <div className="bg-white rounded-xl shadow-md p-8">
          <p className="text-lg mb-8">
            I've worked with a range of technologies in the web development world.
            From frontend to backend, I'm constantly expanding my skillset to stay
            current with industry standards.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <SkillCategory title="Frontend Development" items={skills.frontend} />
              <SkillCategory title="Backend Development" items={skills.backend} />
            </div>
            <div>
              <SkillCategory title="Development Tools" items={skills.devtools} />
              <SkillCategory title="Programming Languages" items={skills.languages} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
