import React from 'react';
import { Code2, Layout, Server, Binary, Wrench, Cpu, Check } from 'lucide-react';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Binary: Binary,
  Wrench: Wrench,
  Cpu: Cpu,
};

export default function SkillGroup({ categoryData }) {
  const IconComponent = iconMap[categoryData.iconName] || Code2;

  return (
    <div className="bg-dark-900/60 border border-zinc-800/80 hover:border-violet-500/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 group flex flex-col justify-between">
      <div>
        {/* Category Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 group-hover:bg-violet-500/20 group-hover:scale-105 transition-all">
            <IconComponent className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-zinc-100 group-hover:text-violet-300 transition-colors">
              {categoryData.category}
            </h3>
            <span className="text-[11px] font-mono text-zinc-400">
              {categoryData.skills.length} skills listed
            </span>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-xs text-zinc-400 mb-4 leading-relaxed">
          {categoryData.description}
        </p>

        {/* Skill Chips */}
        <div className="flex flex-wrap gap-2">
          {categoryData.skills.map((skill) => (
            <div
              key={skill.name}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                skill.highlight
                  ? 'bg-zinc-800/80 text-zinc-200 border border-zinc-700/80 hover:border-violet-400/50 hover:bg-zinc-800'
                  : 'bg-dark-950/60 text-zinc-400 border border-zinc-800/60 hover:text-zinc-200'
              }`}
            >
              {skill.highlight && (
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              )}
              <span className="font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
