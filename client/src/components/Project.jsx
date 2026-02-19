import React from 'react';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-10 bg-brand-cream min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-display text-brand-green uppercase tracking-tighter mb-16">
          Selected <span className="text-brand-orange italic">Works</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Image only shows if showImage is true */}
              {project.showImage && project.image && (
                <div className="aspect-video w-full overflow-hidden bg-brand-green/5 border border-brand-green/10 mb-8 rounded-sm relative">
                <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover block" 
                    onError={(e) => { e.target.style.display = 'none'; }} // Hides the broken icon if image fails
                />
                </div>
              )}

              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-display text-brand-green group-hover:text-brand-orange transition-colors uppercase">
                  {project.title}
                </h3>
                <span className="text-[10px] font-bold text-brand-dark/20 pt-2">0{index + 1}</span>
              </div>
              
              <p className="text-brand-dark/70 leading-relaxed mb-8 max-w-md">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-bold uppercase tracking-widest text-brand-green border border-brand-green/10 px-4 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;