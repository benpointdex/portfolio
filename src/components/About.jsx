import React from 'react';
import { Mail, FileText, Globe, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col justify-between h-full py-20 px-8 lg:px-16">
      <div>
        <div className="w-24 h-24 rounded-full overflow-hidden mb-8 border-2 border-accent-primary p-1 bg-transparent">
           <div className="w-full h-full rounded-full bg-accent-primary flex items-center justify-center text-white font-bold text-2xl">
             JS
           </div>
        </div>
        
        <h1 className="text-6xl lg:text-8xl font-normal mb-4 tracking-tight leading-none text-white">
          John <br /> <span className="text-accent-tertiary">Smith</span>
        </h1>
        <h2 className="text-xl font-medium text-accent-secondary mb-8 uppercase tracking-widest">
          Lead Creative Engineer
        </h2>
        
        <p className="text-lg text-gray-400 max-w-md mb-12 leading-relaxed">
          I build high-performance digital experiences that bridge the gap between design and engineering. Specializing in WebGL, React, and creative coding.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          {['Creative Coding', 'WebGL', 'React Architecture', 'Next.js'].map(skill => (
            <span key={skill} className="px-4 py-2 rounded-full border border-gray-700 text-sm text-gray-300">
              {skill}
            </span>
          ))}
        </div>

        <a 
          href="/resume.pdf" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-primary text-white rounded-full font-medium transition-all hover:bg-accent-tertiary hover:scale-105 active:scale-95"
        >
          <FileText className="w-5 h-5" />
          Download Resume
        </a>
      </div>

      <div className="flex gap-6 mt-12">
        <a href="#" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </a>
        <a href="#" className="text-gray-400 hover:text-white transition-colors" title="Email">
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default About;
