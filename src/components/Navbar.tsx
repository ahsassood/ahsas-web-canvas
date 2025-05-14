
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'About', path: '#about' },
    { name: 'Skills', path: '#skills' },
    { name: 'Projects', path: '#projects' },
    { name: 'Resume', path: '#resume' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '#contact' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-navy hover:text-cyan transition-colors">
          <span className="text-cyan">A</span>hsas
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.path}
              className="nav-link"
            >
              <span className="text-cyan mr-1">{index + 1}.</span> {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-navy hover:text-cyan transition-colors" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed top-[72px] left-0 right-0 bg-navy/95 backdrop-blur-md transition-transform duration-300 transform md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col items-center py-8">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.path} 
              className="py-4 text-lg font-medium text-white hover:text-cyan transition-colors"
              onClick={toggleMenu}
            >
              <span className="text-cyan mr-1">{index + 1}.</span> {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-outline mt-6" onClick={toggleMenu}>
            Get In Touch
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
