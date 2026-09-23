import React from 'react';
import { motion } from 'framer-motion';

interface ContactButtonProps {
  label?: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  label = 'Contact Me',
  onClick,
  href = 'mailto:anirudhkumar2004@gmail.com',
  className = '',
}) => {
  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      onClick={onClick}
      className={`relative inline-flex items-center justify-center rounded-full font-kanit font-medium uppercase tracking-widest text-white transition-all duration-300
        px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base cursor-pointer shadow-lg hover:shadow-[0_0_25px_rgba(182,0,168,0.5)] ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      <span>{label}</span>
    </motion.button>
  );

  if (href && !onClick) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
        {content}
      </a>
    );
  }

  return content;
};
