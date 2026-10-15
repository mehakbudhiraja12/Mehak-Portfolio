import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Research from './sections/Research';
import Education from './sections/Education';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-zinc-100 flex flex-col font-sans selection:bg-violet-500/20 selection:text-violet-300">
      {/* Top Fixed Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Research />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}
