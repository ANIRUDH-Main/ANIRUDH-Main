import React from 'react';
import { TechCardItem } from '../../data/portfolioData';
import {
  Boxes,
  Workflow,
  Cloud,
  FileCode,
  Database,
  Terminal,
  Sparkles,
  Bot,
  Server,
  Layers,
  Cpu,
  Brain,
} from 'lucide-react';

interface TechStackCardProps {
  tech: TechCardItem;
}

const iconMap: Record<string, React.ReactNode> = {
  Atom: <Boxes className="w-6 h-6 text-cyan-400" />,
  Workflow: <Workflow className="w-6 h-6 text-emerald-400" />,
  Cloud: <Cloud className="w-6 h-6 text-amber-400" />,
  FileCode: <FileCode className="w-6 h-6 text-blue-400" />,
  Database: <Database className="w-6 h-6 text-green-400" />,
  Terminal: <Terminal className="w-6 h-6 text-yellow-400" />,
  Sparkles: <Sparkles className="w-6 h-6 text-purple-400" />,
  Bot: <Bot className="w-6 h-6 text-orange-400" />,
  Server: <Server className="w-6 h-6 text-sky-400" />,
  Layers: <Layers className="w-6 h-6 text-teal-400" />,
  Cpu: <Cpu className="w-6 h-6 text-rose-400" />,
  Brain: <Brain className="w-6 h-6 text-violet-400" />,
};

export const TechStackCard: React.FC<TechStackCardProps> = ({ tech }) => {
  const icon = iconMap[tech.icon] || <Boxes className="w-6 h-6 text-white" />;

  return (
    <div
      className={`w-[320px] sm:w-[380px] md:w-[420px] h-[210px] sm:h-[240px] md:h-[270px] flex-shrink-0 rounded-2xl p-6 sm:p-7 md:p-8
        bg-[#131417] border border-white/10 hover:border-white/25 transition-all duration-300 relative overflow-hidden group select-none flex flex-col justify-between`}
    >
      {/* Ambient background glow */}
      <div
        className={`absolute -top-12 -right-12 w-44 h-44 rounded-full bg-gradient-to-br ${tech.accentGradient} blur-2xl opacity-50 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Top Header: Category & Tech Icon */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
          {tech.category}
        </span>
        <div className="p-2 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>

      {/* Center: Major Tech Stack Written Bold in the Center */}
      <div className="flex flex-col items-center justify-center my-auto text-center z-10 py-1">
        <h3 className="font-kanit font-black uppercase tracking-tight text-2xl sm:text-3xl md:text-[2.2rem] text-[#D7E2EA] group-hover:text-white transition-colors duration-300 leading-tight">
          {tech.name}
        </h3>
        <p className="mt-1 text-xs sm:text-[13px] text-[#D7E2EA]/60 font-kanit font-light max-w-[280px] line-clamp-1">
          {tech.tagline}
        </p>
      </div>

      {/* Bottom Footer: Feature Tag & Metric */}
      <div className="flex items-center justify-between z-10 pt-2 border-t border-white/5 text-[11px] font-mono">
        <span className="text-[#BBCCD7] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
          {tech.highlight}
        </span>
        <span className="text-[#D7E2EA]/40 uppercase tracking-widest">
          Production Ready
        </span>
      </div>
    </div>
  );
};
