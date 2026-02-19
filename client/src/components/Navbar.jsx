import React from 'react';

const Navbar = ({ onProjectClick, onHomeClick, onAboutClick, onContactClick }) => {
  
  const handleHomeClick = () => {
    onHomeClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAboutClick = () => {
    onAboutClick();
  };

  const handleProjectClick = () => {
    onProjectClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToContact = () => {
    onContactClick();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-10 py-6 flex justify-between items-center bg-brand-cream/80 backdrop-blur-md border-b border-brand-green/5">
      <div 
        className="text-brand-green font-display text-2xl font-bold tracking-tighter cursor-pointer"
        onClick={handleHomeClick}
      >
        WELCOME<span className="text-brand-orange">!</span>
      </div>

      <ul className="hidden md:flex space-x-12 text-[10px] tracking-[0.3em] uppercase font-bold text-brand-dark/70">
        <li>
          <button onClick={handleHomeClick} className="hover:text-brand-orange transition-colors cursor-pointer">Home</button>
        </li>
        <li>
          <button onClick={handleAboutClick} className="hover:text-brand-orange transition-colors cursor-pointer">About</button>
        </li>
        <li>
          <button onClick={handleProjectClick} className="hover:text-brand-orange transition-colors cursor-pointer">Projects</button>
        </li>
      </ul>

      <button 
        onClick={scrollToContact}
        className="bg-brand-orange text-white px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-green transition-all duration-300 cursor-pointer"
      >
        Let's Talk
      </button>
    </nav>
  );
};

export default Navbar;