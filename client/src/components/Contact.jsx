import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-32 px-10 bg-brand-green text-brand-cream">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-8">
          Ready to <span className="text-brand-orange italic">Collaborate?</span>
        </h2>
        
        {/* Replace 'your-form-id' with the ID you get from Formspree */}
        <form action="https://formspree.io/f/mzdavlro" method="POST" className="mt-12 space-y-6 text-left">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="text" name="name" placeholder="Your Name" required
              className="w-full bg-transparent border-b border-brand-cream/20 py-4 focus:border-brand-orange outline-none transition-colors"
            />
            <input 
              type="email" name="email" placeholder="Your Email" required
              className="w-full bg-transparent border-b border-brand-cream/20 py-4 focus:border-brand-orange outline-none transition-colors"
            />
          </div>
          <textarea 
            name="message" placeholder="How can I help you?" rows="4" required
            className="w-full bg-transparent border-b border-brand-cream/20 py-4 focus:border-brand-orange outline-none transition-colors"
          ></textarea>
          <button type="submit" className="bg-brand-orange text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-brand-green transition-all">
            Send Message
          </button>
        </form>

        <footer className="mt-32 pt-8 border-t border-brand-cream/5 text-[10px] uppercase tracking-[0.5em] opacity-30">
          © 2026 Grace Ngina Mwangi — Dedan Kimathi University
        </footer>
      </div>
    </section>
  );
};

export default Contact;