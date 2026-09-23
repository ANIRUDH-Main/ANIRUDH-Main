import React from 'react';
import { motion } from 'framer-motion';
import { Magnet } from '../ui/Magnet';
import { ContactButton } from '../ui/ContactButton';
import avatarSerious from '../../assets/anirudh_avatar_serious.png';

import { ArrowUpRight } from 'lucide-react';
import StaggeredMenu, { StaggeredMenuItem, StaggeredMenuSocialItem } from '../ui/StaggeredMenu';

interface HeroSectionProps {
  onContactClick?: () => void;
}

const mobileMenuItems: StaggeredMenuItem[] = [
  { label: 'About', ariaLabel: 'About Anirudh', link: '#about' },
  { label: 'Expertise', ariaLabel: 'Technical domains and services', link: '#expertise' },
  { label: 'Projects', ariaLabel: 'Deployed projects and systems', link: '#projects' },
  { label: 'Credentials', ariaLabel: 'Certifications and education', link: '#credentials' },
  {
    label: 'Resume',
    ariaLabel: 'Google Drive resume',
    link: 'https://drive.google.com/file/d/1oYSdKpLNxNSfr5un05sRd6GsccUjGzBa',
  },
];

const mobileSocialItems: StaggeredMenuSocialItem[] = [
  { label: 'GitHub', link: 'https://github.com/ANIRUDH-Main' },
  { label: 'LinkedIn', link: 'https://linkedin.com/in/anirudh-chaurasia' },
  { label: 'Email', link: 'mailto:anirudhkumar2004@gmail.com' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onContactClick }) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.pushState(null, '', href);
      }
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] select-none">
      {/* 1. Mobile StaggeredMenu (Active on Mobile Screens) */}
      <div className="md:hidden">
        <StaggeredMenu
          isFixed
          position="right"
          items={mobileMenuItems}
          socialItems={mobileSocialItems}
          colors={['#18011F', '#B600A8', '#7621B0', '#5227FF']}
          accentColor="#7621B0"
          menuButtonColor="#ffffff"
          openMenuButtonColor="#0c0c0c"
        />
      </div>

      {/* 2. Desktop Horizontal Navbar (Active on md+ Screens) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="hidden md:flex w-full items-center justify-between px-6 md:px-10 pt-6 md:pt-8 z-20"
      >
        <a
          href="#about"
          onClick={(e) => handleNavClick(e, '#about')}
          className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          About
        </a>
        <a
          href="#expertise"
          onClick={(e) => handleNavClick(e, '#expertise')}
          className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          Expertise
        </a>
        <a
          href="#projects"
          onClick={(e) => handleNavClick(e, '#projects')}
          className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          Projects
        </a>
        <a
          href="#credentials"
          onClick={(e) => handleNavClick(e, '#credentials')}
          className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
        >
          Credentials
        </a>
        <a
          href="https://drive.google.com/file/d/1oYSdKpLNxNSfr5un05sRd6GsccUjGzBa"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#D7E2EA] font-kanit font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70 flex items-center gap-1 text-emerald-300 sm:text-[#D7E2EA]"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 opacity-75" />
        </a>
      </motion.nav>

      {/* 2. Hero Heading (Positioned above avatar on mobile, in-flow background layer on desktop) */}
      <div className="w-full overflow-hidden flex items-center justify-center z-0 px-3 sm:px-6 md:px-8 absolute top-[27%] -translate-y-1/2 left-0 md:static md:top-auto md:left-auto md:translate-y-0">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="hero-heading font-kanit font-black uppercase tracking-tight leading-none whitespace-nowrap text-center
            text-[9vw] sm:text-[9.8vw] md:text-[10.6vw] lg:text-[11.4vw] mt-0 md:-mt-6 pointer-events-none select-none max-w-full"
        >
          Hi, i&apos;m anirudh
        </motion.h1>
      </div>

      {/* 3. Hero Portrait: Transparent Lassoed Cutout with Magnet Effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 pointer-events-auto top-[52%] -translate-y-1/2 md:top-auto md:translate-y-0 md:bottom-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
          >
            <div className="w-[250px] sm:w-[300px] md:w-[360px] lg:w-[410px] flex items-end justify-center pointer-events-none">
              <img
                src={avatarSerious}
                alt="Anirudh Chaurasia - 3D Serious Avatar"
                className="w-full h-auto object-contain select-none pointer-events-none filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.85)]"
                draggable={false}
              />
            </div>
          </Magnet>
        </motion.div>
      </div>

      {/* 4. Bottom Bar */}
      <div className="w-full flex items-end justify-between px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 z-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA] font-kanit font-light uppercase tracking-wide leading-snug
            text-[clamp(0.75rem,1.4vw,1.5rem)] max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
        >
          a full-stack &amp; ai engineer driven by crafting striking, scalable, and intelligent platforms
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <ContactButton label="Contact Me" onClick={onContactClick} />
        </motion.div>
      </div>
    </section>
  );
};
