
import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';

const ResumeSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="resume" className="section-container bg-gray-50">
      <div 
        ref={sectionRef} 
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <h2 className="section-title">Resume</h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          {/* Experience */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-navy">Work Experience</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '100ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <div className="mb-1 flex items-center">
                  <h4 className="text-lg font-bold text-navy">Senior Frontend Developer</h4>
                  <span className="ml-2 text-xs font-semibold bg-cyan/20 text-cyan px-2 py-0.5 rounded-full">Current</span>
                </div>
                <p className="text-sm text-navy/60 mb-2">TechCorp Inc. | 2021 - Present</p>
                <p className="text-navy/80">
                  Led the development of the company's flagship web application, improving performance
                  by 40% and implementing a new design system for better consistency across products.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">Web Developer</h4>
                <p className="text-sm text-navy/60 mb-2">Digital Solutions Ltd. | 2019 - 2021</p>
                <p className="text-navy/80">
                  Developed responsive websites and web applications for various clients, using
                  modern frontend frameworks and tools.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">Junior Developer</h4>
                <p className="text-sm text-navy/60 mb-2">WebStart Agency | 2017 - 2019</p>
                <p className="text-navy/80">
                  Assisted in the development of client websites, focusing on HTML, CSS and JavaScript.
                </p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-navy">Education</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">MSc in Computer Science</h4>
                <p className="text-sm text-navy/60 mb-2">Tech University | 2015 - 2017</p>
                <p className="text-navy/80">
                  Specialized in Web Technologies and Human-Computer Interaction.
                  Graduated with distinction.
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '500ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">BSc in Software Engineering</h4>
                <p className="text-sm text-navy/60 mb-2">State University | 2011 - 2015</p>
                <p className="text-navy/80">
                  Focused on software development fundamentals, database design, and web development.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center animate-fade-in" style={{animationDelay: '600ms'}}>
          <a 
            href="#" 
            className="btn btn-primary flex items-center"
            aria-label="Download resume"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume
          </a>
          
          <a 
            href="/blog" 
            className="group flex items-center text-navy hover:text-cyan transition-colors"
          >
            Check out my blog posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
