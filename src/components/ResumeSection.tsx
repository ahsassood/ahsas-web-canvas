import React, { useEffect, useRef } from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
                  <h4 className="text-lg font-bold text-navy">Senior Software Engineer</h4>
                  {/* <span className="ml-2 text-xs font-semibold bg-cyan/20 text-cyan px-2 py-0.5 rounded-full">Current</span> */}
                </div>
                <p className="text-sm text-navy/60 mb-2">Deloitte - Ministry of Rural Development | 2023 - 2024</p>
                {/* <p className="text-navy/80">
                  Led the development of the company's flagship web application, improving performance
                  by 40% and implementing a new design system for better consistency across products.
                </p> */}
                <p className="text-navy/80">
                  ● Lead the software engineering vertical in the Data & Insights Unit at the Ministry of Rural Development, GoI <br/>
                  ● Project 1: Designed and built a full stack web application with microservices using Angular + Node.js + Typescript for frontend, Java + Spring Boot for backend, RESTful APIs for exchanging data and PostgreSQL as database to build a recommendation system within the official MIS for NRLM (National Rural Livelihood Mission) for fund allocation from the central government to state/district/block governments for Self Help Groups. The system allowed for equitable distribution of funds across the country. Created an extensive documentation which is used by multiple development teams across MoRD. <br/>
                  ● Project 2: Designed and developed the Android frontend and backend for a citizen-centric module in the official Janmanrega app (used by over 140 million applicants of National Rural Employment Generation Act), using Android SDK + Java + MySQL. Built RESTful APIs, implemented secure authentication, and constructed and optimized database queries to enable real-time access to attendance and payment details; receives 3 million searches per month with over 48 million to date ● Designed and implemented intricate SQL queries to optimize database performance and streamline data retrieval processes for PowerBI dashboards by exposing APIs using Java and Spring Boot and collating data using Python scripts <br/>
                  ● Introduced Git based version control workflows to MoRD, conducted training sessions, set up repositories, streamlined collaboration across multiple teams <br/>
                  ● Received Letter of Appreciation from Joint Secretary (IT), MoRD for contribution in Data & Insights Unit
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '200ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">Senior Associate</h4>
                <p className="text-sm text-navy/60 mb-2">Morgan Stanley | 2020 - 2023</p>
                <p className="text-navy/80">
                  ● Lead the eSign team as a full stack developer which eliminated dependency on paper for legal banking forms for Morgan Stanley clients increasing accessibility across the globe - Tech Stack: Java + Spring Boot + Angular + DB2 <br/>
                  ● eSign portal is used by financial analysts across all branches of Morgan Stanley to digitally send packages to retail clients and receive signed packages back for all financial services offered by the bank - account opening, account transfer, trading, etc. <br/>
                  ● Was responsible for feature development of the web application in a scalable and maintainable manner using Splunk for log maintenance and error detection, following Agile methodologies with stand ups, product refinement sessions and retrospectives and biweekly releases via Jenkins CI/CD pipelines <br/>
                  ● Contributed to conversion of 16.9M E*TRADE clients from Broadridge back office to Morgan Stanley back office as a part of the firm's integration with E*TRADE using Spark Engine. <br/>
                  ● Project 1: Developed a 'Batch Auto-Diagnosis and Remediation' System which helped reduce the Mean Time to Identify (MTTI) and the Mean Time to Resolve (MTTR) the failed jobs during batch processing by removing manual intervention. The framework saved money, improved productivity and reduced risk by performing analysis on job executions in real time by streaming logs using a Kafka broker. The architecture was implemented using the Azure CI/CD pipeline to accommodate for spikes in batch logs.
                  ● Project 2: Finalist for Technology Innovation Program for 'Giving back' for developing a UI quality gate to enhance accessibility of web content for people with disabilities <br/>
                  ● Developed a code quality check system using SonarQube and its plugin used with Jenkins to ensure metrics are met before merging, the system was extended to all consumers of web and desktop application test automation framework <br/>
                  ● Built a trading engine by creating an MVC pattern based service structure using RESTful requests and message queues for communication. Also built a shell similar to standard Unix shell with basic functionality using fork() and exec() system calls
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '300ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">Intern</h4>
                <p className="text-sm text-navy/60 mb-2">BACA Systems, Orion Charter Township, MI, USA | May'18</p>
                <p className="text-navy/80">
                  ● Reconstructed the control panel for BACA Robo SawJet product from scratch<br/>
                  ● The controller took up less room, was more organized and easier to handle as compared to the previous model                </p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6 text-navy">Education</h3>
            
            <div className="space-y-8">
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '400ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">BTech. in Electronics and Communication Engineering</h4>
                <p className="text-sm text-navy/60 mb-2">Indian Institute of Technology (ISM) Dhanbad | 2016 - 2020</p>
                <p className="text-navy/80">
                  GPA: 8.7/10
                </p>
              </div>
              
              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '500ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">High School</h4>
                <p className="text-sm text-navy/60 mb-2">Bhavan Vidyalaya, Panchkula | 2014 - 2015</p>
                <p className="text-navy/80">
                  CBSE Board Percentage: 92.6%
                </p>
              </div>

              <div className="relative pl-8 border-l-2 border-cyan animate-fade-in" style={{animationDelay: '500ms'}}>
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-cyan"></div>
                <h4 className="text-lg font-bold text-navy mb-1">High School</h4>
                <p className="text-sm text-navy/60 mb-2">Mission San Jose High School, Fremont, CA, USA | 2012 - 2014</p>
                <p className="text-navy/80">
                  GPA: 3.84/4
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col sm:flex-row items-center gap-6 justify-center animate-fade-in" style={{animationDelay: '600ms'}}>
          <a 
            href="/ahsas-web-canvas/Ahsas Sood - Resume.pdf" 
            download="Ahsas_Sood_Resume.pdf"
            className="btn btn-primary flex items-center"
            aria-label="Download resume"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Full Resume
          </a>
          
          <Link 
            to="/blog" 
            className="group flex items-center text-navy hover:text-cyan transition-colors"
          >
            Check out my blog posts
            <ArrowRight className="ml-2 h-4 w-4 group-hover:animate-slide-right" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
