import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { GraduationCap, Code2, Compass, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/socialLinks';

export default function About() {
  const cards = [
    {
      title: "Education",
      subtitle: "Chitkara University, Punjab",
      icon: GraduationCap,
      description: "Bachelor of Engineering in Computer Science & Engineering (2022–2026). Maintained a strong academic record with a CGPA of 8.15 / 10.",
      tag: "Academic Foundation"
    },
    {
      title: "Interests",
      subtitle: "Full-Stack, Data & AI",
      icon: Code2,
      description: "Passionate about full-stack web engineering with the MERN stack, designing responsive interfaces, building REST APIs, and exploring AI-assisted workflows.",
      tag: "Technical Focus"
    },
    {
      title: "Approach",
      subtitle: "Continuous Learning & Clean Code",
      icon: Compass,
      description: "Focusing on structured problem-solving, readable and maintainable code, disciplined version control, and collaborative teamwork.",
      tag: "Engineering Mindset"
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="About Me"
          title="A little about me."
          subtitle="Passionate about writing clean code, engineering full-stack platforms, and turning ideas into reliable software."
        />

        {/* Narrative Paragraphs */}
        <div className="max-w-3xl mx-auto mb-16 bg-dark-900/60 border border-zinc-800/80 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            I'm a Computer Science Engineering graduate from <strong className="text-zinc-100 font-semibold">Chitkara University, Punjab</strong>, with an interest in software development, full-stack web applications, and data-driven technologies. I enjoy turning ideas into practical applications, learning new technologies, and solving problems through structured thinking and clean code.
          </p>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed">
            Through my academic and personal projects, I've worked with the MERN stack, programming languages (Java, Python, JavaScript), relational and NoSQL databases, and AI-related applications. I'm looking forward to contributing to meaningful products, collaborating with teams, and continuing to grow as a developer.
          </p>
        </div>

        {/* Three Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-dark-900/70 border border-zinc-800 hover:border-violet-500/40 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 bg-zinc-800/60 px-2.5 py-1 rounded-md">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-mono text-violet-400 mt-0.5">
                    {card.subtitle}
                  </p>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-zinc-800/80 flex items-center gap-1.5 text-xs text-zinc-400 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
                  <span>Verified Resume Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
