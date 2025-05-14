
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  liveLink?: string;
  image: string;
  featured: boolean;
  category: 'frontend' | 'fullstack' | 'backend' | 'other';
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website built with React and Tailwind CSS showcasing projects and skills.',
    technologies: ['React', 'Typescript', 'Tailwind CSS', 'Framer Motion'],
    github: '#',
    liveLink: '#',
    image: 'placeholder.svg',
    featured: true,
    category: 'frontend',
  },
  {
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for e-commerce analytics with real-time data visualization.',
    technologies: ['Next.js', 'Redux', 'Node.js', 'MongoDB', 'Recharts'],
    github: '#',
    liveLink: '#',
    image: 'placeholder.svg',
    featured: true,
    category: 'fullstack',
  },
  {
    title: 'Task Management API',
    description: 'RESTful API for task management with authentication and authorization.',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    github: '#',
    image: 'placeholder.svg',
    featured: false,
    category: 'backend',
  },
  {
    title: 'Weather App',
    description: 'A weather application that provides current weather and forecast data based on location.',
    technologies: ['React', 'OpenWeather API', 'CSS Modules'],
    github: '#',
    liveLink: '#',
    image: 'placeholder.svg',
    featured: false,
    category: 'frontend',
  },
  {
    title: 'Blog Platform',
    description: 'A full-stack blog platform with authentication, markdown support, and comment system.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'NextAuth.js'],
    github: '#',
    liveLink: '#',
    image: 'placeholder.svg',
    featured: true,
    category: 'fullstack',
  },
  {
    title: 'Real-time Chat Application',
    description: 'A chat application with real-time messaging, user presence, and message history.',
    technologies: ['React', 'Socket.io', 'Node.js', 'Express', 'MongoDB'],
    github: '#',
    liveLink: '#',
    image: 'placeholder.svg',
    featured: false,
    category: 'fullstack',
  },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'fullstack', label: 'Full Stack' },
    { value: 'backend', label: 'Backend' },
  ];
  
  useEffect(() => {
    if (filter === 'all') {
      setFilteredProjects(projects);
    } else if (filter === 'featured') {
      setFilteredProjects(projects.filter(project => project.featured));
    } else {
      setFilteredProjects(projects.filter(project => project.category === filter));
    }
  }, [filter]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" className="section-container">
      <div 
        ref={sectionRef} 
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Projects</h2>
        
        <div className="mb-12 flex flex-wrap gap-3">
          {filterOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setFilter(option.value)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                filter === option.value 
                  ? "bg-navy text-white font-medium"
                  : "bg-gray-100 text-navy hover:bg-gray-200"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="h-48 bg-navy-light relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-navy p-2 rounded-full hover:bg-navy-dark transition-colors"
                        aria-label="View Github Repository"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                    
                    {project.liveLink && (
                      <a 
                        href={project.liveLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-navy p-2 rounded-full hover:bg-navy-dark transition-colors"
                        aria-label="View Live Project"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-navy">{project.title}</h3>
                <p className="text-navy/70 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs font-mono px-2 py-1 rounded-full bg-navy/10 text-navy"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
