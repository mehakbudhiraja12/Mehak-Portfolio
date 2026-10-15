import React from 'react';

export default function SectionHeading({ badge, title, subtitle, align = "center" }) {
  const isCenter = align === "center";

  return (
    <div className={`mb-12 md:mb-16 ${isCenter ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium tracking-wide uppercase mb-3 border border-violet-500/20 bg-violet-500/10 text-violet-300 ${isCenter ? 'mx-auto' : ''}`}>
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          {badge}
        </div>
      )}
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-100">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 text-base sm:text-lg text-zinc-400 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
