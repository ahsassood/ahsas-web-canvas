
import React, { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'languages';
};

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Angular', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Javascript', level: 85, category: 'frontend' },
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  
  // Backend
  { name: 'Java', level: 65, category: 'backend' },
  { name: 'Spring Boot', level: 65, category: 'backend' },
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express', level: 80, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'MongoDB', level: 75, category: 'backend' },
  { name: 'SQL', level: 70, category: 'backend' },
  
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'CI/CD', level: 75, category: 'tools' },
  
  // Languages
  { name: 'Java', level: 100, category: 'languages' },
  { name: 'C++', level: 100, category: 'languages' },
  { name: 'JavaScript', level: 95, category: 'languages' },
  { name: 'TypeScript', level: 95, category: 'languages' },
  { name: 'Python', level: 70, category: 'languages' },
];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');
  const [displayedSkills, setDisplayedSkills] = useState<Skill[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'tools', label: 'DevOps & Tools' },
    { id: 'languages', label: 'Languages' },
  ];
  
  useEffect(() => {
    const filtered = skills.filter(skill => skill.category === activeCategory);
    setDisplayedSkills(filtered);
  }, [activeCategory]);
  
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
    <section id="skills" className="section-container bg-avy-light py-24">
      <div 
        ref={sectionRef} 
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title text-white">Skills &amp; Technologies</h2>
        
        <div className="mb-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 py-2 rounded-full transition-all duration-300",
                activeCategory === category.id 
                  ? "bg-cyan text-navy font-medium"
                  : "bg-navy text-white hover:bg-navy-dark"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{skill.name}</span>
                <span className="text-cyan font-mono">{skill.level}%</span>
              </div>
              <div className="h-2 bg-navy rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan origin-left transition-transform duration-1000"
                  style={{ 
                    transform: `scaleX(${skill.level / 100})`,
                    transitionDelay: `${index * 100 + 200}ms` 
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
