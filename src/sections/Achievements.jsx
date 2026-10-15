import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { achievementsData } from '../data/achievements';
import { Award, Users, BookOpen, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Award: Award,
  Users: Users,
  BookOpen: BookOpen
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Credentials &amp; Roles"
          title="Certifications &amp; Leadership"
          subtitle="Verified domain certifications and active contributions to collegiate technical student organizations."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievementsData.map((item) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={item.id}
                className="bg-dark-900/60 border border-zinc-800/80 hover:border-violet-500/30 rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-violet-300 bg-violet-500/10 border border-violet-500/20 px-2.5 py-1 rounded-full">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    {item.issuer}
                  </p>

                  <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-2 font-semibold">
                    Core Competencies Acquired:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.skillsAcquired.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-dark-950 text-zinc-300 border border-zinc-800 flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
