import React from 'react';
import { TECH_STACK_ROW_1, TECH_STACK_ROW_2 } from '../../data/portfolioData';
import { DraggableMarqueeRow } from '../ui/DraggableMarqueeRow';

export const MarqueeSection: React.FC = () => {
  return (
    <section
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-4 sm:pb-6 overflow-hidden relative select-none"
    >
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
