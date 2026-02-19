import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section className="50px flex items-center justify-center px-8 bg-brand-cream pt-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-display text-brand-green uppercase leading-none tracking-tighter">
          Grace <br /> 
          <span className="text-brand-orange italic">Ngina Mwangi</span>
        </h1>
        
        {/* TYPING ANIMATION SECTION */}
        <div className="mt-6 h-4"> {/* Fixed height prevents "jumping" while typing */}
          <p className="text-brand-dark/60 tracking-[0.5em] uppercase text-xs font-bold">
            <Typewriter
              words={['Quantum Computing Enthusiast','Cloud Computing Practitioner','Backend Developer', 'AI Enthusiast', 'Full-Stack in Progress', 'Violinist']}
              loop={0} //infinite loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>

        <div className="mt-10 flex justify-center space-x-8">
            <div className="h-px w-12 bg-brand-orange self-center opacity-30"></div>
            <p className="font-display italic text-xl text-brand-green">Logic meets Creativity</p>
            <div className="h-px w-12 bg-brand-orange self-center opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;