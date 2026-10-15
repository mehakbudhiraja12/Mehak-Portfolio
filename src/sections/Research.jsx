import React from 'react';
import SectionHeading from '../components/SectionHeading';
import { researchData } from '../data/achievements';
import { FileText, BookOpen, ShieldCheck, CheckCircle2, ExternalLink } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Academic Research"
          title="Research &amp; Publications"
          subtitle="Investigating the societal, ethical, and privacy implications of deploying artificial intelligence in educational technologies."
        />

        {/* Refined Research Paper Card */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-dark-900 to-dark-950 border border-zinc-800 hover:border-violet-500/40 rounded-2xl p-6 sm:p-10 shadow-xl transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Paper Details */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-violet-500/10 text-violet-300 border border-violet-500/30">
                  {researchData.status}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {researchData.role}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-100 leading-snug">
                {researchData.title}
              </h3>

              <div className="text-xs font-mono text-zinc-400 pb-2 border-b border-zinc-800/80">
                <span>Venue: </span>
                <strong className="text-zinc-200 font-semibold">{researchData.venue}</strong>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed">
                {researchData.description}
              </p>

              {/* Abstract Callout */}
              <div className="bg-dark-950/70 border border-zinc-800 rounded-xl p-4 mt-4">
                <h4 className="text-xs font-mono uppercase text-violet-400 tracking-wider mb-2 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5" /> Paper Abstract Overview
                </h4>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {researchData.abstract}
                </p>
              </div>

              {/* Key Topics List */}
              <div className="pt-2">
                <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-semibold">
                  Core Investigative Themes
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {researchData.keyTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Academic Paper Visual Graphic */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="w-full max-w-[240px] aspect-[1/1.3] bg-dark-850 rounded-xl border border-zinc-700/80 p-5 shadow-2xl flex flex-col justify-between relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-violet-500/10 rounded-bl-full pointer-events-none" />
                
                <div>
                  <div className="flex items-center justify-between border-b border-zinc-700/60 pb-2">
                    <FileText className="w-6 h-6 text-violet-400" />
                    <span className="text-[10px] font-mono text-zinc-400">PDF Document</span>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <div className="h-2 w-3/4 bg-zinc-700/60 rounded" />
                    <div className="h-2 w-full bg-zinc-800 rounded" />
                    <div className="h-2 w-5/6 bg-zinc-800 rounded" />
                    <div className="h-2 w-2/3 bg-zinc-800 rounded" />
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800 space-y-1.5">
                    <div className="text-[10px] font-mono text-zinc-400">Co-Author &amp; Presenter:</div>
                    <div className="text-xs font-semibold text-zinc-200">Mehak Budhiraja</div>
                    <div className="text-[10px] font-mono text-violet-400">Chitkara University</div>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800/80 text-center">
                  {researchData.paperUrl ? (
                    <a
                      href={researchData.paperUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold bg-violet-600 text-white"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Paper</span>
                    </a>
                  ) : (
                    <div className="text-[10px] font-mono text-zinc-400 bg-dark-900/80 py-1.5 px-2 rounded border border-zinc-800">
                      Academic Reference Submission
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4 text-center">
                <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1 justify-center">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Co-authored &amp; Presented
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
