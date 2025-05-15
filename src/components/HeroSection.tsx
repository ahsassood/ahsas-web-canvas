import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center pt-16 pb-24 section-container relative">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/src/resources/a2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3
        }}
      />
      
      {/* Content */}
      <div className="w-full max-w-4xl relative z-10">
        <div className={`transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-cyan mb-6 font-mono">Hi, my name is</p>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <AnimatedText 
              text="Ahsas." 
              className="text-navy-dark block"
              delay={300}
            />
            <AnimatedText 
              text="I build things for the web." 
              className="text-navy/70 block mt-2"
              delay={1500}
              speed={70}
            />
          </h1>
          
          <p className="text-lg text-navy/60 max-w-2xl mb-12 animate-fade-in" style={{animationDelay: '2.5s', opacity: 0, animationFillMode: 'forwards'}}>
            I'm a full-stack web developer specializing in building exceptional digital experiences.
            Currently focused on building accessible, user-friendly applications with modern web technologies for social good.
          </p>

          <div className="animate-fade-in" style={{animationDelay: '3s', opacity: 0, animationFillMode: 'forwards'}}>
            <a 
              href="#projects" 
              className="btn btn-outline group"
            >
              View My Work
              <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
