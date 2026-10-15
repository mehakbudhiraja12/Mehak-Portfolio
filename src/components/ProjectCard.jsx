import React, { useState } from 'react';
import { ExternalLink, ArrowRight, Info, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { ProjectPreview } from './ProjectPreviews';
import ProjectModal from './ProjectModal';

export default function ProjectCard({ project }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col bg-dark-900/70 border border-zinc-800 hover:border-violet-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5 group">
        {/* Project Visual Preview Header */}
        <ProjectPreview type={project.previewType} />

        {/* Card Body */}
        <div className="p-6 flex-1 flex flex-col justify-between">
          <div>
            {/* Status & Tagline */}
            <div className="flex items-center justify-between gap-2 mb-3">
              <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${project.badgeColor}`}>
                {project.status}
              </span>
              <span className="text-[11px] font-mono text-zinc-400">
                {project.technologies.slice(0, 3).join(' • ')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl font-bold text-zinc-100 group-hover:text-violet-300 transition-colors min-h-[56px] flex items-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-2 text-sm text-zinc-200 leading-relaxed font-normal min-h-[72px]">
              {project.description}
            </p>

            {/* Key Features Snapshot */}
            <div className="mt-4 space-y-1.5 border-t border-zinc-800/80 pt-3">
              {project.features.slice(0, 3).map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 mt-0.5 shrink-0" />
                  <span className="line-clamp-1">{feature}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-dark-950/80 text-zinc-300 border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-3">
            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors group/btn focus:outline-none"
            >
              <span>View Details</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
            </button>

            <div className="flex items-center gap-2">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 hover:text-white transition-colors"
                  aria-label={`View ${project.title} GitHub repository`}
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              ) : (
                <div className="relative group/tooltip">
                  <button
                    type="button"
                    className="p-2 rounded-lg bg-zinc-800/30 text-zinc-400 cursor-help border border-zinc-800"
                    aria-label="GitHub link configurable"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block px-2 py-1 text-[10px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                    GitHub URL configurable in data/projects.js
                  </span>
                </div>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 transition-colors"
                  aria-label={`View ${project.title} live demo`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="relative group/tooltip">
                  <button
                    type="button"
                    className="p-2 rounded-lg bg-zinc-800/30 text-zinc-400 cursor-help border border-zinc-800"
                    aria-label="Live demo configurable"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                  <span className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block px-2 py-1 text-[10px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                    Deployment URL configurable
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Modal Dialog */}
      <ProjectModal
        project={project}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
