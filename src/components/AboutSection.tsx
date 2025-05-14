
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
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
    <section id="about" className="section-container">
      <div 
        ref={sectionRef} 
        className="grid md:grid-cols-2 gap-12 opacity-0 translate-y-10 transition-all duration-700"
      >
        <div>
          <h2 className="section-title">About Me</h2>
          <div className="space-y-4 text-navy/80">
            <p>
              Hello! I'm Ahsas, a passionate web developer with a keen interest in creating responsive, 
              user-friendly applications. My journey in web development began during my college years 
              when I built my first website for a local business.
            </p>
            <p>
              Since then, I've been continuously expanding my skills and knowledge in various technologies 
              and frameworks. I enjoy solving complex problems and turning ideas into reality through clean, 
              efficient code.
            </p>
            <p>
              When I'm not coding, you can find me exploring new hiking trails, reading about the latest 
              tech trends, or experimenting with new recipes in the kitchen.
            </p>
          </div>
        </div>
        
        <div className="flex items-center justify-center">
          <div className="relative group">
            <div className="w-64 h-64 bg-cyan/20 rounded-md absolute -right-4 -bottom-4 group-hover:-right-2 group-hover:-bottom-2 transition-all duration-300"></div>
            <div className="w-64 h-64 relative rounded-md overflow-hidden border-2 border-cyan">
              {/* Placeholder for profile image */}
              <div className="w-full h-full bg-navy-light flex items-center justify-center text-cyan">
                <span className="font-mono">Profile Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
