import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { ProjectCard } from './ProjectCard';
import { PROJECTS_DATA } from '../../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 relative z-10 pt-20 sm:pt-24 md:pt-32 pb-60 sm:pb-72 md:pb-80 px-4 sm:px-6 md:px-10"
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
    </section>
  );
};
