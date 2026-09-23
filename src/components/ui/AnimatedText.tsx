import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Char: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none">{char}</span>
      <motion.span style={{ opacity }} className="absolute left-0 top-0">
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.25'],
  });

  const words = text.split(' ');
  const totalLength = text.length;
  let runningCharIndex = 0;

  return (
    <p ref={containerRef} className={`leading-relaxed text-center ${className}`}>
      {words.map((word, wordIndex) => {
        const chars = word.split('');
        const wordStartIndex = runningCharIndex;
        runningCharIndex += chars.length + 1; // account for space

        return (
          <span
            key={`word-${wordIndex}`}
            className="inline-block whitespace-nowrap mr-[0.28em] last:mr-0"
          >
            {chars.map((char, charIndex) => {
              const globalIndex = wordStartIndex + charIndex;
              const start = globalIndex / totalLength;
              const end = Math.min(1, (globalIndex + 3) / totalLength);
              return (
                <Char
                  key={`char-${globalIndex}`}
                  char={char}
                  progress={scrollYProgress}
                  range={[start, end]}
                />
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
