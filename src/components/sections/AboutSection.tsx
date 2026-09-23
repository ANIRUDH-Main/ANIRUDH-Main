import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { AnimatedText } from '../ui/AnimatedText';
import { ContactButton } from '../ui/ContactButton';

interface AboutSectionProps {
  onContactClick?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onContactClick }) => {
  const aboutBio =
    "MCA candidate with 4 deployed projects including a live commercial full-stack platform and 4 certifications across AWS, Google Cloud, and IBM in Generative AI and Prompt Engineering. From architecting real-time platforms on Supabase to building an AI-powered stock sentiment dashboard and organizing DevFest with the GDG New Delhi core team, I engineer scalable software that solves real-world challenges. Let's build something incredible together!";

  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-10 sm:pt-14 pb-20 overflow-hidden"
    >
      {/* 4 Corner 3D Decorative Assets */}
      {/* Top-Left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] pointer-events-none z-0">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
            alt="3D Moon Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none opacity-80"
          />
        </FadeIn>
      </div>

      {/* Bottom-Left: 3D Object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] pointer-events-none z-0">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
            alt="3D Shape Decor"
            className="w-[100px] sm:w-[140px] md:w-[180px] select-none opacity-80"
          />
        </FadeIn>
      </div>

      {/* Top-Right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] pointer-events-none z-0">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
            alt="3D Lego Decor"
            className="w-[120px] sm:w-[160px] md:w-[210px] select-none opacity-80"
          />
        </FadeIn>
      </div>

      {/* Bottom-Right: 3D Group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] pointer-events-none z-0">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
            alt="3D Group Decor"
            className="w-[130px] sm:w-[170px] md:w-[220px] select-none opacity-80"
          />
        </FadeIn>
      </div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="mb-10 sm:mb-14 md:mb-16">
          <h2 className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Character-by-Character Scroll-Revealed Paragraph */}
        <div className="mb-16 sm:mb-20 md:mb-24 px-4">
          <AnimatedText
            text={aboutBio}
            className="text-[#D7E2EA] font-kanit font-medium text-center leading-relaxed max-w-[640px] mx-auto text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Contact Button */}
        <FadeIn delay={0.3} y={30}>
          <ContactButton label="Contact Me" onClick={onContactClick} />
        </FadeIn>
      </div>
    </section>
  );
};
