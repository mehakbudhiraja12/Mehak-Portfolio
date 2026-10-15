import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, AlertCircle, Layers, Cpu, Compass } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop overlay */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog Box */}
      <div 
        className="relative w-full max-w-3xl bg-dark-900 border border-zinc-700/80 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 border-b border-zinc-800 bg-dark-850/50">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${project.badgeColor}`}>
                {project.status}
              </span>
              <span className="text-xs font-mono text-zinc-400">
                {project.tagline}
              </span>
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold text-zinc-100">
              {project.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-zinc-300">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono uppercase text-violet-400 tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Compass className="w-4 h-4" /> Overview &amp; Objective
            </h4>
            <p className="text-zinc-300 leading-relaxed bg-dark-950/40 p-4 rounded-xl border border-zinc-800/60">
              {project.projectObjective}
            </p>
          </div>

          {/* Problem Addressed */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <AlertCircle className="w-4 h-4 text-amber-400" /> Problem Addressed
            </h4>
            <p className="text-zinc-300 leading-relaxed bg-dark-950/40 p-4 rounded-xl border border-zinc-800/60">
              {project.problemAddressed}
            </p>
          </div>

          {/* Mehak's Contribution */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Layers className="w-4 h-4 text-indigo-400" /> Mehak's Key Contribution
            </h4>
            <p className="text-zinc-300 leading-relaxed bg-dark-950/40 p-4 rounded-xl border border-zinc-800/60">
              {project.mehakContribution}
            </p>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3 flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Key Features &amp; Implementation
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-dark-950/50 p-3 rounded-lg border border-zinc-800/50">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-2 shrink-0" />
                  <span className="text-zinc-300 text-xs leading-relaxed">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
              <Cpu className="w-4 h-4 text-violet-400" /> Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-zinc-800/80 text-zinc-200 border border-zinc-700/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges */}
          {project.developmentChallenges && (
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-2 font-semibold">
                Technical Considerations &amp; Challenges
              </h4>
              <p className="text-zinc-400 text-xs leading-relaxed italic bg-zinc-900/60 p-3 rounded-lg border border-zinc-800/50">
                "{project.developmentChallenges}"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-6 border-t border-zinc-800 bg-dark-850/60">
          <div className="text-xs text-zinc-400 font-mono">
            {project.isDeveloping ? 'Status: Active Development' : 'Status: Project Completed'}
          </div>

          <div className="flex items-center gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-100 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            ) : (
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/40 cursor-not-allowed"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub Repository</span>
                </button>
                <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap">
                  Configure repository URL in data/projects.js
                </span>
              </div>
            )}

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-violet-600 hover:bg-violet-500 text-white transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            ) : (
              <div className="group relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium bg-zinc-800/50 text-zinc-400 border border-zinc-700/40 cursor-not-allowed"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Live Demo</span>
                </button>
                <span className="absolute bottom-full right-0 mb-2 hidden group-hover:block px-2.5 py-1 text-[11px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap">
                  Configure live deployment URL in data/projects.js
                </span>
              </div>
            )}

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
