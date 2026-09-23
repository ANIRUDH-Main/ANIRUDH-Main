import React, { useRef, useState, useEffect } from 'react';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../../data/portfolioData';
import { TechStackCard } from '../ui/TechStackCard';

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      // Scroll offset formula: (window.scrollY - sectionTop + window.innerHeight) * 0.3
      const currentOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(currentOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Triple items for seamless rendering across all viewport widths
  const row1Items = [...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1];
  const row2Items = [...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-4 sm:pb-6 overflow-hidden relative select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll: translateX(offset - 200) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {row1Items.map((tech, idx) => (
            <TechStackCard key={`row1-${tech.name}-${idx}`} tech={tech} />
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll: translateX(-(offset - 200)) */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {row2Items.map((tech, idx) => (
            <TechStackCard key={`row2-${tech.name}-${idx}`} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};
