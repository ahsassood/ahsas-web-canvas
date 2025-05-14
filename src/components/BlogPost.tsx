
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';

interface BlogPostData {
  id: string;
  title: string;
  date: string;
  categories: string[];
  content: string;
}

// Sample blog post data
const blogPosts: BlogPostData[] = [
  {
    id: '1',
    title: 'How to Build Accessible React Components',
    date: 'May 10, 2023',
    categories: ['React', 'Accessibility'],
    content: `
      <p>Creating accessible web applications is not just a nice-to-have feature—it's essential for ensuring that your apps can be used by as many people as possible.</p>
      
      <h2>Why Accessibility Matters</h2>
      <p>Accessibility (often abbreviated as a11y) ensures that your applications can be used by people with various disabilities, including visual, motor, auditory, and cognitive impairments.</p>
      
      <h2>Key Principles</h2>
      <ul>
        <li>Use semantic HTML elements</li>
        <li>Ensure keyboard navigation works properly</li>
        <li>Add proper ARIA attributes when necessary</li>
        <li>Maintain sufficient color contrast</li>
        <li>Provide text alternatives for non-text content</li>
      </ul>
      
      <h2>Example: An Accessible Button Component</h2>
      <pre>
function AccessibleButton({ onClick, children, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      aria-disabled={disabled}
      className="btn"
    >
      {children}
    </button>
  );
}
      </pre>
      
      <p>Remember that accessibility is an ongoing process. Regularly test your components with screen readers and keyboard navigation to ensure they remain accessible as your application evolves.</p>
    `
  },
  {
    id: '2',
    title: 'Understanding TypeScript Generics',
    date: 'April 2, 2023',
    categories: ['TypeScript', 'Programming'],
    content: `
      <p>TypeScript generics are a powerful feature that allows you to write reusable, type-safe code.</p>
      
      <h2>What Are Generics?</h2>
      <p>Generics provide a way to create components that can work over a variety of types rather than a single one, making it possible to create reusable components.</p>
      
      <h2>Basic Syntax</h2>
      <pre>
function identity<T>(arg: T): T {
  return arg;
}

// Usage
const output = identity<string>("myString");  // type of output will be 'string'
const output2 = identity(123);  // type inference works too, type will be 'number'
      </pre>
      
      <h2>Generic Constraints</h2>
      <p>Sometimes you want to limit the types that a generic can accept. You can do this using constraints:</p>
      
      <pre>
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);  // Now we know it has a .length property
  return arg;
}
      </pre>
      
      <p>By mastering generics, you can create more flexible and reusable code while maintaining type safety.</p>
    `
  },
  {
    id: '3',
    title: 'Setting Up a Modern Frontend Development Workflow',
    date: 'March 15, 2023',
    categories: ['Tooling', 'Productivity'],
    content: `
      <p>A well-configured development workflow can significantly improve your productivity and code quality.</p>
      
      <h2>Essential Tools</h2>
      <ul>
        <li>Package Manager: npm or yarn</li>
        <li>Bundler: Vite, Webpack, or Parcel</li>
        <li>Linter: ESLint</li>
        <li>Formatter: Prettier</li>
        <li>Type Checking: TypeScript</li>
        <li>Testing: Jest, Vitest, or React Testing Library</li>
      </ul>
      
      <h2>Setting Up ESLint and Prettier</h2>
      <p>First, install the necessary packages:</p>
      <pre>
npm install --save-dev eslint prettier eslint-config-prettier
      </pre>
      
      <p>Create a .prettierrc file:</p>
      <pre>
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
      </pre>
      
      <h2>Git Hooks with Husky</h2>
      <p>Husky allows you to run scripts before commits or pushes:</p>
      <pre>
npm install --save-dev husky lint-staged

// In package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
      </pre>
      
      <p>Investing time in setting up a solid development workflow pays off in the long run through improved code quality and team productivity.</p>
    `
  }
];

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogPosts.find(post => post.id === postId);
  
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Post not found</h2>
          <Link to="/blog" className="text-cyan hover:underline">
            Return to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link to="/blog" className="flex items-center text-navy hover:text-cyan transition-colors mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to all posts
      </Link>
      
      <article>
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-navy">{post.title}</h1>
          
          <div className="flex items-center text-navy/60 mb-4">
            <Calendar className="h-4 w-4 mr-2" />
            <span>{post.date}</span>
          </div>
          
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
        </header>
        
        <div 
          className="blog-content prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>
    </div>
  );
};

export default BlogPost;
