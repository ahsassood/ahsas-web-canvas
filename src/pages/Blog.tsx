
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  categories: string[];
};

const allPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Public Health Facilities in Udaipur, Rajasthan',
    excerpt: 'Report for surveys conducted with Jean Dreze and Reetika Khera for gauging the quality of public health infrastructure.',
    date: 'November, 2020',
    categories: ['Public Health'],
  },
  {
    id: '2',
    title: 'Raising Engineers and Housewives',
    excerpt: 'A deep dive into how society has a strongly typed gendered approach to raising kids.',
    date: 'Jan, 2021',
    categories: ['Gender Equality'],
  },
  {
    id: '3',
    title: 'Book Review: Ain’t I a Woman? Black Women and Feminism by bell hooks',
    excerpt: 'bell hooks sheds light on the life of the black woman in America in the 19th and 20th centuries',
    date: 'September, 2021',
    categories: ['Feminism'],
  },
];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>(allPosts);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  
  // Extract unique categories from all posts
  const allCategories = Array.from(
    new Set(allPosts.flatMap(post => post.categories))
  ).sort();
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  useEffect(() => {
    let filtered = [...allPosts];
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by category
    if (activeCategory) {
      filtered = filtered.filter(post => 
        post.categories.includes(activeCategory)
      );
    }
    
    setPosts(filtered);
  }, [searchTerm, activeCategory]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="section-container">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-navy">
            Blog
          </h1>
          
          {/* Search and filters */}
          <div className="mb-12 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-navy/60 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan focus:border-transparent"
              />
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveCategory(null)}
                className={`px-3 py-1.5 rounded-full transition-colors ${
                  activeCategory === null 
                    ? "bg-navy text-white" 
                    : "bg-gray-100 text-navy hover:bg-gray-200"
                }`}
              >
                All
              </button>
              
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 rounded-full transition-colors ${
                    activeCategory === category 
                      ? "bg-navy text-white" 
                      : "bg-gray-100 text-navy hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          {/* Blog posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className={`bg-white rounded-lg overflow-hidden shadow-md card-hover ${
                    mounted ? "animate-fade-in" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
                >
                  <div className="p-6">
                    <div className="flex items-center text-sm text-navy/60 mb-3">
                      <Calendar className="h-4 w-4 mr-2" />
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
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-navy/70">No posts found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setActiveCategory(null);
                  }}
                  className="mt-4 text-cyan hover:underline"
                >
                  Clear filters and try again
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
