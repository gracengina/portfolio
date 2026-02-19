import React from 'react';

const About = () => {
  return (
  <section id="about" className="bg-brand-cream pt-15 pb-8 px-10 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-20 items-start">      <div>
        <h2 className="text-3xl font-display text-brand-green uppercase tracking-tighter">
          The <span className=" text-brand-orange">Developer</span> <br /> Behind the Logic
        </h2>
        <p className="mt-8 text-brand-dark/80 leading-relaxed font-sans text-lg">
          I am a Computer Science student blending the precision of <span className="text-brand-green font-bold">Quantum Computing</span> and <span className="text-brand-green font-bold">Java Backend</span> with the creativity of a <span className="text-brand-green font-bold">Violinist</span>.
          <br /><br />
          My goal is to build intelligent systems that solve real-world problems, drawing from the discipline of music and the rigor of backend architecture.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Core Stack</h4>
          <div className="flex flex-wrap gap-3">
            {["Java", "Spring Boot","Node.js", "Python", "React", "MySQL","JavaScript","JavaScriptXML","PHP", "OpenGL"].map((skill) => (
              <span key={skill} className="border border-brand-green/18 px-4 py-2 text-sm uppercase font-semibold text-brand-green">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-4">Interests</h4>
          <ul className="text-brand-dark/70 space-y-2 text-sm">
            <li> AI & Quantum Computing</li>
            <li> Backend Development</li>
            <li> Music Theory & Violin</li>
            <li> Cloud Computing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;