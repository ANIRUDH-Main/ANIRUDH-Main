import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { TechCardItem } from '../../data/portfolioData';
import { TechStackCard } from './TechStackCard';

interface DraggableMarqueeRowProps {
  items: TechCardItem[];
  rowId: string;
  baseSpeed?: number;
  scrollMultiplier?: number;
  className?: string;
}

const COPIES = [0, 1, 2, 3, 4];

export const DraggableMarqueeRow: React.FC<DraggableMarqueeRowProps> = ({
  items,
  rowId,
  baseSpeed = 0.5,
  scrollMultiplier = 0.3,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const singleSetRef = useRef<HTMLDivElement>(null);

  const singleWidthRef = useRef(2600);
  const [isDragging, setIsDragging] = useState(false);

  // Position and physics references
  const xRef = useRef(0);
  const velocityRef = useRef(0);
  const isDraggingRef = useRef(false);
  const isHoveredRef = useRef(false);
  const lastScrollYRef = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  // Gesture tracking
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const isHorizontalDragRef = useRef<boolean | null>(null);

  // Measure 1 complete set width (cards + gap)
  useLayoutEffect(() => {
    const updateWidth = () => {
      if (singleSetRef.current) {
        // gap-3 is 12px
        const measured = singleSetRef.current.offsetWidth + 12;
        if (measured > 100) {
          singleWidthRef.current = measured;
        }
      }
    };

    updateWidth();

    const ro = new ResizeObserver(updateWidth);
    if (singleSetRef.current) {
      ro.observe(singleSetRef.current);
    }
    window.addEventListener('resize', updateWidth);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateWidth);
    };
  }, [items]);

  // Handle page scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const deltaY = currentScrollY - lastScrollYRef.current;
      lastScrollYRef.current = currentScrollY;

      // When not dragging, user page scrolling shifts the row
      if (!isDraggingRef.current) {
        xRef.current += deltaY * scrollMultiplier;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollMultiplier]);

  // Main animation / physics loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const render = (currentTime: number) => {
      const deltaTime = Math.min(currentTime - lastTime, 64);
      lastTime = currentTime;
      const timeScale = deltaTime / 16.67;

      if (!isDraggingRef.current) {
        // Apply inertia if there's release velocity
        if (Math.abs(velocityRef.current) > 0.08) {
          xRef.current += velocityRef.current * timeScale;
          velocityRef.current *= Math.pow(0.93, timeScale); // Smooth friction
        } else {
          velocityRef.current = 0;
          // Normal auto-drift
          if (!isHoveredRef.current) {
            xRef.current += baseSpeed * timeScale;
          } else {
            // Very gentle slow-motion drift on hover
            xRef.current += baseSpeed * 0.15 * timeScale;
          }
        }
      }

      // Infinite wrapping transform
      const W = singleWidthRef.current;
      if (W > 0 && trackRef.current) {
        const modX = ((xRef.current % W) + W) % W;
        // Positioned so middle copies (index 1 & 2) map cleanly across screen
        const renderX = modX - 2 * W;
        trackRef.current.style.transform = `translate3d(${renderX}px, 0, 0)`;
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(animId);
  }, [baseSpeed]);

  // Pointer event handlers for drag / touch swipe
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0) return; // Only primary click
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    isHorizontalDragRef.current = null;

    if (e.pointerType === 'mouse') {
      isDraggingRef.current = true;
      setIsDragging(true);
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {}
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    const currentX = e.clientX;
    const currentY = e.clientY;
    const dx = currentX - startXRef.current;
    const dy = currentY - startYRef.current;

    // Distinguish between horizontal drag vs vertical page scroll on touch
    if (isHorizontalDragRef.current === null && e.pointerType !== 'mouse') {
      if (Math.abs(dx) < 6 && Math.abs(dy) < 6) return;
      if (Math.abs(dx) >= Math.abs(dy)) {
        isHorizontalDragRef.current = true;
        isDraggingRef.current = true;
        setIsDragging(true);
        try {
          e.currentTarget.setPointerCapture(e.pointerId);
        } catch {}
      } else {
        isHorizontalDragRef.current = false;
        return;
      }
    }

    if (!isDraggingRef.current) return;

    const deltaX = currentX - lastPointerXRef.current;
    const now = performance.now();
    const dt = Math.max(1, now - lastPointerTimeRef.current);

    // Update position directly
    xRef.current += deltaX;

    // Smoothed release velocity
    const instantVel = (deltaX / dt) * 16.67;
    velocityRef.current = 0.75 * instantVel + 0.25 * velocityRef.current;

    lastPointerXRef.current = currentX;
    lastPointerTimeRef.current = now;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      // Cap release velocity to realistic bounds
      velocityRef.current = Math.max(-28, Math.min(28, velocityRef.current));
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
    isHorizontalDragRef.current = null;
  };

  const handlePointerCancel = (e: React.PointerEvent) => {
    if (isDraggingRef.current) {
      isDraggingRef.current = false;
      setIsDragging(false);
      velocityRef.current = 0;
      try {
        e.currentTarget.releasePointerCapture(e.pointerId);
      } catch {}
    }
    isHorizontalDragRef.current = null;
  };

  // Wheel and horizontal trackpad swipe
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
      const delta = e.deltaX !== 0 ? e.deltaX : e.deltaY;
      xRef.current -= delta;
      velocityRef.current = -delta * 0.25;
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full overflow-hidden touch-pan-y select-none transition-colors duration-200 ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onWheel={handleWheel}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
    >
      <div
        ref={trackRef}
        className="flex gap-3 will-change-transform select-none"
      >
        {COPIES.map((copyIdx) => (
          <div
            key={`${rowId}-copy-${copyIdx}`}
            ref={copyIdx === 0 ? singleSetRef : undefined}
            className="flex gap-3 shrink-0"
          >
            {items.map((tech, idx) => (
              <div
                key={`${rowId}-${copyIdx}-${tech.name}-${idx}`}
                className={isDragging ? 'pointer-events-none' : ''}
              >
                <TechStackCard tech={tech} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
