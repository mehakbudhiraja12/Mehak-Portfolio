import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import { personalInfo } from '../data/socialLinks';
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Have a project in mind?"
          subtitle="I'm open to discussing software development opportunities, collaborative projects, and interesting ideas."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Contact Information Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-dark-900/70 border border-zinc-800 rounded-2xl p-6 sm:p-7 shadow-lg space-y-5">
              <h3 className="text-lg font-bold text-zinc-100">Contact Details</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Feel free to reach out directly via email, phone, or professional networks. I'm actively seeking entry-level software engineering roles.
              </p>

              {/* Email item */}
              <div className="p-3.5 rounded-xl bg-dark-950/70 border border-zinc-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Direct Email</span>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-medium text-zinc-200 hover:text-violet-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone item */}
              <div className="p-3.5 rounded-xl bg-dark-950/70 border border-zinc-800/80 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 block">Phone</span>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-medium text-zinc-200 hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-1.5 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location item */}
              <div className="p-3.5 rounded-xl bg-dark-950/70 border border-zinc-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-zinc-400 block">Location</span>
                  <span className="text-sm font-medium text-zinc-200">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Channels Configured */}
              <div className="pt-2 border-t border-zinc-800/80">
                <span className="text-xs font-mono uppercase text-zinc-400 block mb-3 font-semibold">
                  Professional Profiles
                </span>
                
                <div className="grid grid-cols-2 gap-3">
                  {personalInfo.socialLinks.linkedin.url ? (
                    <a
                      href={personalInfo.socialLinks.linkedin.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-semibold bg-dark-950 border border-zinc-800 hover:border-violet-500/50 text-zinc-200 hover:text-violet-300 transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                      <span>LinkedIn</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ) : (
                    <div className="group relative">
                      <div className="inline-flex items-center justify-center gap-2 w-full p-2.5 rounded-lg text-xs font-medium bg-dark-950/40 border border-zinc-800/50 text-zinc-500 cursor-help">
                        <LinkedinIcon className="w-4 h-4" />
                        <span>LinkedIn</span>
                      </div>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 text-[10px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                        Update LinkedIn in socialLinks.js
                      </span>
                    </div>
                  )}

                  {personalInfo.socialLinks.github.url ? (
                    <a
                      href={personalInfo.socialLinks.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 p-2.5 rounded-lg text-xs font-semibold bg-dark-950 border border-zinc-800 hover:border-violet-500/50 text-zinc-200 hover:text-violet-300 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GitHub</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
                    </a>
                  ) : (
                    <div className="group relative">
                      <div className="inline-flex items-center justify-center gap-2 w-full p-2.5 rounded-lg text-xs font-medium bg-dark-950/40 border border-zinc-800/50 text-zinc-500 cursor-help">
                        <GithubIcon className="w-4 h-4" />
                        <span>GitHub</span>
                      </div>
                      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block px-2.5 py-1 text-[10px] font-mono text-zinc-300 bg-dark-950 border border-zinc-700 rounded shadow-md whitespace-nowrap z-20">
                        Update GitHub in socialLinks.js
                      </span>
                    </div>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </section>
  );
}
