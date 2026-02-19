import React from 'react';

const projectData = [
  {
    title: "Cadenza",
    subtitle: "Music Learning Platform",
    description: "Connects students with music teachers. Inspired by my violin background.",
    tech: ["Java", "Spring Boot", "MySQL"],
    category: "Full-Stack"
  },
  {
    title: "EventEase",
    subtitle: "Scalable Management Backend",
    description: "Secure REST API architecture with efficient database handling.",
    tech: ["Java", "Spring Boot", "REST APIs"],
    category: "Backend"
  },
  {
    title: "Smart Greenhouse",
    subtitle: "AI Decision Support System",
    description: "AI-assisted system for semi-arid agriculture using intelligent logic.",
    tech: ["Python", "AI Logic", "Data Analysis"],
    category: "AI / Data"
  },
  {
    title: "Student Portal",
    subtitle: "UI/UX Redesign",
    description: "Redesigning navigation based on real user feedback and research.",
    tech: ["Figma", "UX Research"],
    category: "Design"
  },
  {
    title: "Advanced Calculator",
    subtitle: "Logic Tool",
    description: "Python GUI application handling memory and complex operations.",
    tech: ["Python", "GUI"],
    category: "Software"
  }
];

const ProjectGallery = () => {
  return (
    <section className="bg-brand-dark py-24 px-10 md:px-20 text-brand-cream">
      <h2 className="text-5xl font-display mb-16 uppercase tracking-tighter">
        Selected <span className="italic text-brand-orange">Works</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
        // src/components/ProjectGallery.jsx
{projectData.map((project, index) => (
  <div key={index} className="group relative border-b border-brand-dark/10 py-12 flex flex-col md:flex-row justify-between items-start hover:bg-brand-orange/[0.02] transition-all duration-500 px-4">
    
    {/* Project Title & Subtitle */}
    <div className="md:w-1/3">
      <span className="text-brand-orange font-mono text-[10px] tracking-[0.3em] uppercase">0{index + 1} / {project.category}</span>
      <h3 className="text-4xl font-display text-brand-green mt-2 group-hover:italic transition-all">
        {project.title}
      </h3>
    </div>

    {/* Project Description */}
    <div className="md:w-1/3 mt-4 md:mt-0">
      <p className="text-brand-dark/70 text-sm leading-relaxed max-w-xs">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tech.map((t, i) => (
          <span key={i} className="text-[9px] font-bold uppercase tracking-tighter text-brand-dark/40 italic">
            #{t}
          </span>
        ))}
      </div>
    </div>

    {/* Link Button */}
    <div className="md:w-1/4 mt-6 md:mt-0 flex md:justify-end items-center">
      <a href={project.github} className="h-12 w-12 rounded-full border border-brand-dark/20 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-500">
        <span className="group-hover:text-white transition-colors text-xl">→</span>
      </a>
    </div>
  </div>
))}
      </div>
    </section>
  );
};

export default ProjectGallery;