import React from 'react';
import { ArrowDown, Download, Mail, Sparkles, Terminal, Code2, Database } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/socialLinks';

export default function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      const topOffset = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-violet-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 subtle-dot-grid opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Introductory Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold tracking-wider uppercase border border-violet-500/30 bg-violet-500/10 text-violet-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-violet-400 animate-ping" />
              <span>HELLO, I'M MEHAK BUDHIRAJA</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-100 leading-[1.12]">
              Building thoughtful <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-violet-400 via-indigo-300 to-zinc-100 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h1>

            {/* Supporting Description */}
            <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed">
              I'm a Computer Science graduate passionate about building modern web applications, solving problems through code, and exploring the possibilities of data and AI.
            </p>

            {/* Professional Domain Labels */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-900 border border-zinc-800 text-zinc-300 shadow-sm">
                <Code2 className="w-3.5 h-3.5 text-violet-400" />
                Software Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-900 border border-zinc-800 text-zinc-300 shadow-sm">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                Full-Stack Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-dark-900 border border-zinc-800 text-zinc-300 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                Data &amp; AI
              </span>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {/* Primary Button */}
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-600/25 transition-all duration-200 active:scale-95"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-dark-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700/80 hover:border-violet-500/40 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4 text-violet-400" />
                <span>Download Resume</span>
              </a>

              {/* Understated Contact Link */}
              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 hover:text-violet-300 transition-colors ml-1"
              >
                <Mail className="w-4 h-4" />
                <span>Let's Connect</span>
              </a>

              {/* Quick Social Buttons */}
              <div className="flex items-center gap-2 sm:ml-2">
                <a
                  href={personalInfo.socialLinks.linkedin.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-violet-500/40 transition-all shadow-sm"
                  aria-label="LinkedIn Profile"
                  title="Mehak Budhiraja on LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.socialLinks.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-dark-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-violet-500/40 transition-all shadow-sm"
                  aria-label="GitHub Profile"
                  title="Mehak Budhiraja on GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Credentials / Status Line */}
            <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                B.E. CSE • Chitkara University (8.15 CGPA)
              </span>
              <span className="hidden sm:inline text-zinc-600">•</span>
              <span className="hidden sm:inline">2022 – 2026</span>
            </div>
          </div>

          {/* Right Visual Element: Elegant MB Initials Monogram Badge */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-72 sm:w-80 aspect-square">
              {/* Subtle ambient rings */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-violet-600/20 via-indigo-500/10 to-transparent blur-xl" />
              <div className="absolute -inset-1 rounded-3xl border border-violet-500/20 opacity-70 animate-pulse" />

              {/* Monogram Frame Box */}
              <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-dark-850 to-dark-950 border border-zinc-700/80 p-8 flex flex-col justify-between shadow-2xl backdrop-blur-sm">
                
                {/* Top Code-Inspired Indicators */}
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">
                    mehak-budhiraja.dev
                  </span>
                </div>

                {/* Central Monogram Graphic */}
                <div className="my-auto text-center py-4">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-2xl bg-gradient-to-br from-dark-800 via-dark-900 to-dark-950 border border-violet-500/40 shadow-inner shadow-violet-500/20 relative group">
                    <div className="absolute inset-0 bg-violet-500/10 rounded-2xl blur-md group-hover:bg-violet-500/20 transition-all" />
                    <span className="font-mono text-5xl font-black bg-gradient-to-tr from-violet-400 via-indigo-300 to-zinc-100 bg-clip-text text-transparent tracking-tighter">
                      MB
                    </span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-zinc-200 tracking-wide">
                    Mehak Budhiraja
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 mt-0.5">
                    Computer Science &amp; Engineering
                  </p>
                </div>

                {/* Bottom Badges */}
                <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                  <span className="text-violet-400">React • Node • AI</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open to Roles
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
