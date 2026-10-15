import React from 'react';
import { Sparkles, Terminal, Shield, Users, Database, HeartHandshake, CheckCircle2 } from 'lucide-react';

export function ProjectPreview({ type }) {
  if (type === 'ai-prep') {
    return (
      <div className="w-full h-48 sm:h-52 bg-dark-900/90 rounded-t-xl p-4 font-mono text-xs text-zinc-300 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden select-none group">
        <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/10 via-purple-500/5 to-transparent pointer-events-none" />
        
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2 relative z-10">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            <span className="ml-2 text-[10px] text-zinc-400 font-sans">interview-simulation.ai</span>
          </div>
          <span className="px-2 py-0.5 rounded text-[10px] bg-violet-500/20 text-violet-300 border border-violet-500/30 font-sans">
            AI Engine Active
          </span>
        </div>

        {/* Mock Question Prompt */}
        <div className="space-y-2 relative z-10 my-auto">
          <div className="flex items-center gap-2 text-violet-400 text-[11px] font-sans">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-medium">Technical Prompt: React &amp; Modern JS</span>
          </div>
          <div className="bg-dark-950/80 p-3 rounded-lg border border-zinc-800/80">
            <p className="text-zinc-100 text-xs font-sans leading-relaxed">
              "Explain how React reconciliation works with virtual DOM diffing and automatic state batching."
            </p>
          </div>
        </div>

        {/* Mock Feedback Badge */}
        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400 relative z-10">
          <span className="flex items-center gap-1 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Evaluation Feedback Ready
          </span>
          <span className="font-sans text-[10px] text-zinc-400">MERN + AI Pipeline</span>
        </div>
      </div>
    );
  }

  if (type === 'faculty-mgmt') {
    return (
      <div className="w-full h-48 sm:h-52 bg-dark-900/90 rounded-t-xl p-4 font-mono text-xs text-zinc-300 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden select-none group">
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 via-blue-500/5 to-transparent pointer-events-none" />
        
        {/* Mock Top bar */}
        <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2 relative z-10">
          <div className="flex items-center gap-2">
            <Shield className="w-3.5 h-3.5 text-indigo-400" />
            <span className="font-sans text-[11px] text-zinc-300 font-semibold">Faculty Admin Portal</span>
          </div>
          <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/20 px-2 py-0.5 rounded border border-indigo-500/30">
            JWT: Role=Admin
          </span>
        </div>

        {/* Mock Faculty Grid */}
        <div className="grid grid-cols-2 gap-2.5 my-auto relative z-10 font-sans">
          <div className="bg-dark-950/80 p-2.5 rounded-lg border border-zinc-800/70 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
              <span>CSE Dept</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 font-semibold border border-emerald-500/20">
                98% Logged
              </span>
            </div>
            <div className="text-xs font-bold text-zinc-100">42 Faculty Members</div>
            <div className="text-[10px] text-zinc-400 mt-1">Attendance: Complete</div>
          </div>

          <div className="bg-dark-950/80 p-2.5 rounded-lg border border-zinc-800/70 flex flex-col justify-between">
            <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
              <span>Workload</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-indigo-500/10 text-indigo-300 font-semibold border border-indigo-500/20">
                Balanced
              </span>
            </div>
            <div className="text-xs font-bold text-zinc-100">Course Allocation</div>
            <div className="text-[10px] text-zinc-400 mt-1">Timetable: Synced</div>
          </div>
        </div>

        {/* Mock Footer */}
        <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400 relative z-10">
          <span className="flex items-center gap-1.5 text-zinc-300 text-[10px] font-mono">
            <Database className="w-3 h-3 text-indigo-400" /> MongoDB Optimized Indexing
          </span>
          <span className="text-[10px] text-indigo-300 font-sans">MERN Stack</span>
        </div>
      </div>
    );
  }

  // blood-bank
  return (
    <div className="w-full h-48 sm:h-52 bg-dark-900/90 rounded-t-xl p-4 font-mono text-xs text-zinc-300 flex flex-col justify-between border-b border-zinc-800/80 relative overflow-hidden select-none group">
      <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 via-red-500/5 to-transparent pointer-events-none" />
      
      {/* Mock Top bar */}
      <div className="flex items-center justify-between border-b border-zinc-800/60 pb-2 relative z-10">
        <div className="flex items-center gap-2">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-400" />
          <span className="font-sans text-[11px] text-zinc-300 font-semibold">Blood Inventory &amp; Donors</span>
        </div>
        <span className="text-[10px] font-mono text-rose-300 bg-rose-500/20 px-2 py-0.5 rounded border border-rose-500/30">
          Live Registry
        </span>
      </div>

      {/* Mock Stock Badges */}
      <div className="grid grid-cols-4 gap-2 my-auto relative z-10 font-sans text-center">
        <div className="bg-dark-950/70 p-1.5 rounded-lg border border-zinc-800/60">
          <div className="text-xs font-bold text-rose-400 font-mono">O+</div>
          <div className="text-[10px] text-zinc-400 mt-0.5">Available</div>
        </div>
        <div className="bg-dark-950/70 p-1.5 rounded-lg border border-zinc-800/60">
          <div className="text-xs font-bold text-rose-400 font-mono">A+</div>
          <div className="text-[10px] text-zinc-400 mt-0.5">Available</div>
        </div>
        <div className="bg-dark-950/70 p-1.5 rounded-lg border border-zinc-800/60">
          <div className="text-xs font-bold text-rose-400 font-mono">B+</div>
          <div className="text-[10px] text-zinc-400 mt-0.5">Available</div>
        </div>
        <div className="bg-dark-950/70 p-1.5 rounded-lg border border-zinc-800/60">
          <div className="text-xs font-bold text-amber-400 font-mono">AB-</div>
          <div className="text-[10px] text-amber-300/80 mt-0.5">Low Stock</div>
        </div>
      </div>

      {/* Mock Footer */}
      <div className="flex items-center justify-between text-[11px] pt-2 border-t border-zinc-800/60 text-zinc-400 relative z-10">
        <span className="flex items-center gap-1 text-emerald-400 text-[10px]">
          <CheckCircle2 className="w-3 h-3" /> Donor Intake Authenticated
        </span>
        <span className="text-[10px] text-rose-300 font-sans">Role Protected</span>
      </div>
    </div>
  );
}
