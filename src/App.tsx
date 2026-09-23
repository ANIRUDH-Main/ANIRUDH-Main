import { useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CredentialsSection } from './components/sections/CredentialsSection';
import { ContactModal } from './components/ui/ContactModal';
import TextLoop from './components/ui/TextLoop';

export function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-[#0C0C0C] text-[#D7E2EA] font-kanit min-h-screen relative selection:bg-[#BBCCD7] selection:text-[#0C0C0C] overflow-x-clip">
      {/* 1. Hero Section */}
      <HeroSection onContactClick={() => setIsContactOpen(true)} />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* Interactive Wavy TextLoop Ribbon */}
      <div className="py-0 -my-2 sm:-my-6 bg-[#0C0C0C] relative z-10 overflow-hidden">
        <TextLoop
          text="ANIRUDH CHAURASIA ✦ OPEN TO WORK ✦ LET'S BUILD ✦"
          shape="wave"
          speed={150}
          direction="reverse"
          separator="✦"
          curviness={90}
          fontSize={46}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#5227FF"
          ribbonWidth={86}
          pauseOnHover={false}
        />
      </div>

      {/* 3. About Section */}
      <AboutSection onContactClick={() => setIsContactOpen(true)} />

      {/* 4. Expertise Section (White Background Accent) */}
      <ServicesSection />

      {/* 5. Projects Section (Sticky Stacking Cards) */}
      <ProjectsSection />

      {/* 6. Credentials & Leadership Section */}
      <CredentialsSection onContactClick={() => setIsContactOpen(true)} />

      {/* Interactive Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      
      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}

export default App;
