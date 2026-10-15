import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { Sparkles, Code2, ShieldAlert } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Featured Projects"
          title="Practical Engineering Work"
          subtitle="Full-stack web applications and AI-driven platforms built with the MERN stack, RESTful APIs, and modern frontend tools."
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Authenticity Transparency Notice */}
        <div className="mt-12 p-4 rounded-xl bg-dark-900/40 border border-zinc-800/70 max-w-2xl mx-auto flex items-center justify-between gap-4 text-xs font-mono text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-violet-400" />
            <span>Honest Project Disclosures: Development status &amp; feature sets are strictly aligned with resume specs.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
