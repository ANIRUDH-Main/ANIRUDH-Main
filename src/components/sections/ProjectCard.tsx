import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LiveProjectButton } from '../ui/LiveProjectButton';
import { ProjectItem } from '../../data/portfolioData';

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  totalCards: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[780px] md:min-h-0 flex items-start md:items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.9)] transition-shadow duration-300"
      >
        {/* Top Row: Number, category label, project name, and Live Project button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 sm:pb-6 gap-4 border-b border-[#D7E2EA]/15">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="font-kanit font-black text-[clamp(2.5rem,6vw,4.5rem)] text-[#D7E2EA] leading-none select-none">
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="text-xs sm:text-sm font-kanit uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
                  {project.category}
                </span>
                {project.id === 'thc-platform' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-mono uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span>Live Commercial Client</span>
                  </span>
                )}
                {project.id === 'client-portfolio' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[11px] font-mono uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                    </span>
                    <span>Live Client Project</span>
                  </span>
                )}
                {project.id === 'smart-parking' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-mono uppercase tracking-wider">
                    <span>🏆</span>
                    <span>2nd Place TechFusion</span>
                  </span>
                )}
                {project.id === 'stock-intelligence' && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[11px] font-mono uppercase tracking-wider">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                    </span>
                    <span>AI &amp; ML Pipeline</span>
                  </span>
                )}
              </div>
              <h3 className="font-kanit font-medium uppercase text-lg sm:text-2xl md:text-3xl text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <LiveProjectButton
              href={project.liveUrl || project.githubUrl}
              label={
                project.id === 'thc-platform'
                  ? 'Live Platform'
                  : project.id === 'client-portfolio'
                  ? 'Live Portfolio'
                  : project.id === 'smart-parking'
                  ? 'LinkedIn Post'
                  : project.id === 'stock-intelligence'
                  ? 'GitHub Repo'
                  : project.liveUrl?.includes('github') || project.githubUrl
                  ? 'View Code'
                  : 'Live Project'
              }
            />
          </div>
        </div>

        {/* Feature Badges & Quick Description */}
        <div className="py-3 flex flex-wrap items-center justify-between gap-3 text-xs sm:text-sm text-[#D7E2EA]/80 font-kanit">
          <p className="max-w-2xl font-light text-[clamp(0.85rem,1.2vw,1rem)] leading-snug">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.metrics.map((m) => (
              <span
                key={m}
                className="px-2.5 py-0.5 rounded-full bg-[#D7E2EA]/10 text-[#D7E2EA] text-[11px] sm:text-xs font-mono uppercase tracking-wider"
              >
                {m}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Row: Two-column image grid (Left 40% with 2 stacked images, Right 60% with 1 tall image) */}
        {project.images ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 pt-2">
            {/* Left Column (40% width -> 5 columns out of 12) */}
            <div className="md:col-span-5 flex flex-col gap-3 sm:gap-4">
              {/* Left Top Image */}
              <div
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5"
                style={{ height: 'clamp(130px, 16vw, 230px)' }}
              >
                <img
                  src={project.images.col1Top}
                  alt={`${project.name} preview top`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Left Bottom Image */}
              <div
                className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5"
                style={{ height: 'clamp(160px, 22vw, 340px)' }}
              >
                <img
                  src={project.images.col1Bottom}
                  alt={`${project.name} preview bottom`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column (60% width -> 7 columns out of 12) */}
            <div className="md:col-span-7">
              <div className="w-full h-[300px] sm:h-[400px] md:h-full min-h-[300px] md:min-h-[400px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden bg-[#161616] border border-white/5">
                <img
                  src={project.images.col2}
                  alt={`${project.name} feature visual`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        ) : (
          /* Technical Deep Dive: Bullet Points & Pipeline Architecture (No image slots) */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 pt-2">
            {/* Bullet Points Container (8 of 12 cols on desktop) */}
            <div className="lg:col-span-8 flex flex-col justify-between gap-2 sm:gap-3">
              {project.bullets?.map((bullet, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-4 rounded-[20px] sm:rounded-[32px] bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300 flex items-start gap-2.5 sm:gap-4 group"
                >
                  <div className="flex-shrink-0 mt-0.5 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-300 text-[10px] sm:text-xs font-mono font-semibold">
                    0{idx + 1}
                  </div>
                  <p className="text-xs sm:text-sm md:text-[0.95rem] text-[#D7E2EA]/90 leading-relaxed font-kanit">
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Pipeline Architecture Spec Card (4 of 12 cols on desktop) */}
            <div className="lg:col-span-4 rounded-[20px] sm:rounded-[32px] bg-gradient-to-b from-[#18181c] to-[#111114] border border-white/10 p-3.5 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
                  <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-[#BBCCD7]">
                    Pipeline Architecture
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-[9px] sm:text-[10px] font-mono uppercase">
                    5-Stage Pipeline
                  </span>
                </div>

                <div className="space-y-2 font-kanit text-[11px] sm:text-xs">
                  <div>
                    <span className="text-[#D7E2EA]/50 block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">
                      1. Data Ingestion
                    </span>
                    <p className="text-[#D7E2EA] font-medium leading-snug">
                      Reddit API (PRAW) scraping 20+ financial subreddits for live ticker discussions.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#D7E2EA]/50 block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">
                      2. NLP &amp; Sentiment Detection
                    </span>
                    <p className="text-[#D7E2EA] font-medium leading-snug">
                      VADER sentiment analyzer and spaCy entity recognizer filtering market signals.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#D7E2EA]/50 block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">
                      3. Ensemble ML Forecasting
                    </span>
                    <p className="text-[#D7E2EA] font-medium leading-snug">
                      XGBoost, Random Forest, Gradient Boosting, Ridge, and SVR price models.
                    </p>
                  </div>

                  <div>
                    <span className="text-[#D7E2EA]/50 block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">
                      4. Narrative Agent &amp; Output
                    </span>
                    <p className="text-[#D7E2EA] font-medium leading-snug">
                      CrewAI + Ollama synthesis, writing into decoupled pre-generated JSON cache.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technologies Pills */}
              <div className="mt-3 pt-2.5 border-t border-white/10">
                <span className="text-[#D7E2EA]/50 block font-mono text-[9px] sm:text-[10px] uppercase tracking-wider mb-1.5">
                  Stack &amp; Frameworks
                </span>
                <div className="flex flex-wrap gap-1">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 sm:px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[#BBCCD7] text-[9px] sm:text-[10px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
