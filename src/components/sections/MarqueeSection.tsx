import React from 'react';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../../data/portfolioData';
import { DraggableMarqueeRow } from '../ui/DraggableMarqueeRow';
import { MoveHorizontal } from 'lucide-react';

export const MarqueeSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] pt-20 sm:pt-28 md:pt-36 pb-4 sm:pb-6 overflow-hidden relative select-none"
    >
      {/* Interactive Drag Hint */}
      <div className="flex items-center justify-center mb-5 sm:mb-7 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-mono text-[#BBCCD7]/70 uppercase tracking-wider backdrop-blur-sm shadow-sm">
          <MoveHorizontal className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
          <span>Drag or swipe cards sideways</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {/* Row 1: Draggable & auto-drifts right */}
        <DraggableMarqueeRow
          rowId="tech-row-1"
          items={TECH_STACK_ROW_1}
          baseSpeed={0.5}
          scrollMultiplier={0.35}
        />

        {/* Row 2: Draggable & auto-drifts left */}
        <DraggableMarqueeRow
          rowId="tech-row-2"
          items={TECH_STACK_ROW_2}
          baseSpeed={-0.5}
          scrollMultiplier={-0.35}
        />
      </div>
    </section>
  );
};
