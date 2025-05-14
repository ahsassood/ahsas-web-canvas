
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
};

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'How to Build Accessible React Components',
    excerpt: 'Learn best practices for creating web components that everyone can use, regardless of ability.',
    date: 'May 10, 2023',
    categories: ['React', 'Accessibility'],
  },
  {
    id: '2',
    title: 'Understanding TypeScript Generics',
    excerpt: 'A deep dive into TypeScript generics and how they can make your code more reusable.',
    date: 'April 2, 2023',
    categories: ['TypeScript', 'Programming'],
  },
  {
    id: '3',
    title: 'Setting Up a Modern Frontend Development Workflow',
    excerpt: 'Tips and tools to improve your development process and boost productivity.',
    date: 'March 15, 2023',
    categories: ['Tooling', 'Productivity'],
  },
];

const BlogSection = () => {
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
    <section className="section-container">
      <div 
        ref={sectionRef} 
        className="opacity-0 translate-y-10 transition-all duration-700"
      >
        <div className="flex justify-between items-center mb-12">
          <h2 className="section-title">Latest from the Blog</h2>
          <Link 
            to="/blog" 
            className="group flex items-center text-navy hover:text-cyan transition-colors"
          >
            View all posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
            >
              <div className="p-6">
                <div className="flex items-center text-sm text-navy/60 mb-3">
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-navy animate-underline">
                  {post.title}
                </h3>
                
                <p className="text-navy/70 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {post.categories.map(category => (
                    <span 
                      key={category}
                      className="text-xs font-mono px-2 py-1 rounded-full bg-cyan/10 text-cyan"
                    >
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
