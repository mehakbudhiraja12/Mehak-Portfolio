import React from 'react';
import SectionHeading from '../components/SectionHeading';
import SkillGroup from '../components/SkillGroup';
import { skillCategories } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Technical Skills"
          title="Skills &amp; Technologies"
          subtitle="A comprehensive toolkit developed through computer science coursework, hands-on full-stack projects, and certified AI training."
        />

        {/* 6 Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SkillGroup key={cat.category} categoryData={cat} />
          ))}
        </div>

        {/* Context Note */}
        <div className="mt-12 text-center">
          <p className="text-xs font-mono text-zinc-400 max-w-xl mx-auto">
            * All technologies reflect hands-on project experience, university coursework, or certified competency from IISDT.
          </p>
        </div>

      </div>
    </section>
  );
}
