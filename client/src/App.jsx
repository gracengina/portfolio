import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Project';
import Contact from './components/Contact';

function App() {
  const [showProjects, setShowProjects] = useState(false);
  // This state will track a number that we increase to "restart" the animation
  const [animKey, setAnimKey] = useState(0);

  const triggerFade = () => {
    setAnimKey(prev => prev + 1);
  };

  return (
    <main className="bg-brand-cream min-h-screen">
      <Navbar 
        onProjectClick={() => {
          setShowProjects(true);
          triggerFade();
        }} 
        onHomeClick={() => {
          setShowProjects(false);
          triggerFade();
        }} 
        onAboutClick={() => {
          setShowProjects(false);
          triggerFade();
          // We also want to scroll to About
          setTimeout(() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
        onContactClick={triggerFade}
      />
      
      {/* The key={animKey} forces the div to re-animate every time triggerFade is called */}
      <div key={animKey} className="pt-20 fade-in">
        {!showProjects ? (
          <>
            <Hero />
            <About />
          </>
        ) : (
          <Projects />
        )}
      </div>
      
      <Contact />
    </main>
  );
}

export default App;