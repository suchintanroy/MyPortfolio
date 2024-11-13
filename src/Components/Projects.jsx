import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ title, tech, image, description, projectLink, demoLink }) => {
  return (
    <div className="group bg-gray-900 rounded-lg p-4 relative transition-all duration-300">
      {/* Image Container */}
      <div className="aspect-video w-full mb-4 overflow-hidden rounded-lg bg-gray-800">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover"
        />
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        <span className="text-yellow-400 text-xs uppercase tracking-wider">{tech.frontend}</span>
        <span className="text-yellow-400 text-xs">•</span>
        <span className="text-yellow-400 text-xs uppercase tracking-wider">{tech.backend}</span>
        <span className="text-yellow-400 text-xs">•</span>
        <span className="text-yellow-400 text-xs uppercase tracking-wider">{tech.database}</span>
        <span className="text-yellow-400 text-xs">•</span>
        <span className="text-yellow-400 text-xs uppercase tracking-wider">{tech.cloud}</span>
      </div>

      {/* Title */}
      <h3 className="text-white text-lg font-medium mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mb-4">
        {description}
      </p>

      {/* Dot Grid Pattern */}
      <div className="grid grid-cols-5 gap-1 mt-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-700" />
        ))}
      </div>

      {/* See Project and Live Demo Links in Horizontal Line */}
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center group/link mr-4">
          <a 
            href={projectLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 text-sm font-medium flex items-center hover:text-yellow-300 transition-colors"
          >
            See project
            <ArrowUpRight 
              size={16} 
              className="ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
            />
          </a>
        </div>
        <div className="flex items-center group/link">
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-yellow-400 text-sm font-medium flex items-center hover:text-yellow-300 transition-colors"
          >
            Live Demo
            <ArrowUpRight 
              size={16} 
              className="ml-1 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" 
            />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const portfolioItems = [
    {
      title: 'HealthCareManagement',
      tech: {
        frontend: 'React',
        backend: '.Net',
        database: 'SQL SERVER',
        cloud: 'AZURE',
      },
      description: 'A comprehensive healthcare management system designed to streamline patient care, appointment scheduling, and medical record management.',
      image: '/images/Project 1.jpg',
      projectLink: 'https://yourprojectlink.com', 
      demoLink: 'https://yourlivedemo.com'
    },
    // You can add more projects here
  ];

  return (
    <section id="project" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        {/* Centered Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            My Recent Projects
          </h2>
          <div className="flex flex-col items-center gap-3">
            <div className="h-1 w-20 bg-yellow-400"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Showcasing my latest work and achievements in web development and design
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((project) => (
            <ProjectCard 
              key={project.title}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;