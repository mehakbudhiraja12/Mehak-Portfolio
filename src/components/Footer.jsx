import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/socialLinks';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800/80 bg-dark-950 py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Credit */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-dark-900 border border-zinc-700/60 flex items-center justify-center">
              <span className="font-mono font-bold text-xs bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                MB
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold text-zinc-200">
                Mehak Budhiraja
              </p>
              <p className="text-xs text-zinc-400">
                Designed &amp; built by Mehak Budhiraja &copy; {currentYear}
              </p>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="flex items-center gap-4">
            {/* Email link */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
              aria-label="Send email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* LinkedIn */}
            {personalInfo.socialLinks.linkedin.url ? (
              <a
                href={personalInfo.socialLinks.linkedin.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            ) : (
              <div className="relative group/tooltip">
                <span className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50 cursor-help inline-flex">
                  <LinkedinIcon className="w-4 h-4" />
                </span>
                <span className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block px-2 py-1 text-[10px] font-mono text-zinc-300 bg-dark-900 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                  Update LinkedIn in socialLinks.js
                </span>
              </div>
            )}

            {/* GitHub */}
            {personalInfo.socialLinks.github.url ? (
              <a
                href={personalInfo.socialLinks.github.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-zinc-400 hover:text-zinc-100 hover:bg-zinc-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            ) : (
              <div className="relative group/tooltip">
                <span className="p-2 rounded-lg text-zinc-400 hover:text-zinc-300 hover:bg-zinc-900/50 cursor-help inline-flex">
                  <GithubIcon className="w-4 h-4" />
                </span>
                <span className="absolute bottom-full right-0 mb-2 hidden group-hover/tooltip:block px-2 py-1 text-[10px] font-mono text-zinc-300 bg-dark-900 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                  Update GitHub in socialLinks.js
                </span>
              </div>
            )}

            {/* Back to top */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-zinc-400 hover:text-zinc-100 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 transition-colors ml-2"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
