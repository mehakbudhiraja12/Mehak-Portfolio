import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { educationData } from '../data/education';
import { GraduationCap, Calendar, Award, School } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Background"
          title="Education"
          subtitle="Formal academic qualification in Computer Science and Engineering with consistent high performance."
        />

        {/* Education Timeline */}
        <div className="max-w-3xl mx-auto space-y-6">
          {educationData.map((item, idx) => (
            <div
              key={idx}
              className="bg-dark-900/60 border border-zinc-800/80 hover:border-violet-500/30 rounded-2xl p-6 sm:p-7 transition-all duration-300 relative group flex flex-col sm:flex-row items-start justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:scale-105 transition-transform shrink-0">
                  {idx === 0 ? <GraduationCap className="w-6 h-6" /> : <School className="w-6 h-6" />}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
                      {item.degree}
                    </h3>
                    {item.score && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                        {item.score}
                      </span>
                    )}
                  </div>

                  <p className="text-sm font-medium text-zinc-300">
                    {item.institution}
                  </p>

                  <p className="mt-2 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.details}
                  </p>
                </div>
              </div>

              {/* Date Badge */}
              <div className="sm:self-start shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-zinc-400 bg-dark-950/80 border border-zinc-800">
                  <Calendar className="w-3.5 h-3.5 text-violet-400" />
                  {item.period}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
