import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ArrowUpRight, Github, Sparkles } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-24 md:pt-32 pb-24 sm:pb-32 md:pb-40 px-4 sm:px-6 md:px-10"
    >
      {/* Heading */}
      <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28 relative z-20">
        <h2 className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
          Project
        </h2>
      </FadeIn>

      {/* Sticky Stacking Project Cards Container */}
      <div className="relative flex flex-col gap-12 sm:gap-20 max-w-6xl mx-auto">
        {PROJECTS_DATA.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            totalCards={PROJECTS_DATA.length}
          />
        ))}
      </div>

      {/* More Coming Up Soon Banner */}
      <FadeIn delay={0.1} y={30} className="max-w-6xl mx-auto mt-20 sm:mt-28 md:mt-36 relative z-20">
        <div className="relative rounded-[32px] sm:rounded-[40px] md:rounded-[50px] border-2 border-dashed border-[#D7E2EA]/20 bg-gradient-to-b from-[#141416]/90 via-[#0E0E10]/90 to-[#0A0A0C]/90 p-8 sm:p-12 md:p-16 text-center overflow-hidden backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.8)] group hover:border-[#D7E2EA]/40 transition-all duration-300">
          {/* Ambient Purple / Cyan Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#5227FF]/15 blur-[90px] pointer-events-none rounded-full" />
          <div className="absolute -bottom-24 right-1/4 w-72 h-40 bg-[#7621B0]/15 blur-[80px] pointer-events-none rounded-full" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#BBCCD7] uppercase tracking-wider mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span>05 // In The Lab · Actively Building</span>
            </div>

            {/* Heading */}
            <h3 className="font-kanit font-black uppercase text-2xl sm:text-4xl md:text-5xl text-[#D7E2EA] tracking-tight mb-4 flex items-center justify-center gap-3">
              <span>More Coming Up Soon</span>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-[#BBCCD7] animate-pulse" />
            </h3>

            {/* Description */}
            <p className="font-kanit font-light text-sm sm:text-base md:text-lg text-[#D7E2EA]/70 max-w-xl leading-relaxed mb-8">
              Currently engineering new production systems — from autonomous GenAI workflows and RAG pipelines to real-time full-stack platforms. More case studies dropping soon.
            </p>

            {/* GitHub Button */}
            <a
              href="https://github.com/ANIRUDH-Main"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#18181C] hover:bg-[#222228] border border-white/15 hover:border-white/30 text-sm sm:text-base font-kanit font-medium uppercase tracking-wider text-[#D7E2EA] transition-all duration-200 hover:scale-105 shadow-lg group/btn"
            >
              <Github className="w-4 h-4 text-[#BBCCD7]" />
              <span>Explore GitHub Repos</span>
              <ArrowUpRight className="w-4 h-4 text-[#BBCCD7] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};
