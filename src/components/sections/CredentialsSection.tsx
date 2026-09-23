import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { CERTIFICATIONS, EDUCATION, LEADERSHIP } from '../../data/portfolioData';
import { Award, GraduationCap, Users, Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { ContactButton } from '../ui/ContactButton';

interface CredentialsSectionProps {
  onContactClick?: () => void;
}

export const CredentialsSection: React.FC<CredentialsSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="credentials"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-28 text-[#D7E2EA] border-t border-white/10 relative z-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20">
          <h2 className="hero-heading font-kanit font-black uppercase leading-none tracking-tight text-[clamp(2.5rem,10vw,120px)]">
            Credentials
          </h2>
          <p className="mt-4 text-[#D7E2EA]/60 font-kanit text-sm sm:text-base uppercase tracking-widest">
            Certifications, Academics &amp; Community Leadership
          </p>
        </FadeIn>

        {/* 3 Column Grid: Certifications, Education, Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* 1. Certifications */}
          <FadeIn delay={0.1} y={30} className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/15">
              <Award className="w-6 h-6 text-[#BBCCD7]" />
              <h3 className="font-kanit font-bold text-xl uppercase tracking-wider text-[#D7E2EA]">
                Certifications
              </h3>
            </div>
            <div className="space-y-4">
              {CERTIFICATIONS.map((cert) => {
                const CardWrapper = cert.credlyUrl ? 'a' : 'div';
                const wrapperProps = cert.credlyUrl
                  ? {
                      href: cert.credlyUrl,
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'block p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/30 hover:bg-[#181818] transition-all duration-300 group cursor-pointer',
                    }
                  : {
                      className:
                        'block p-5 rounded-2xl bg-[#141414] border border-white/5 transition-all duration-300',
                    };

                return (
                  <CardWrapper key={cert.title} {...(wrapperProps as any)}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono uppercase bg-[#D7E2EA]/10 text-[#BBCCD7]">
                        {cert.badge}
                      </span>
                      <div className="flex items-center gap-1.5 text-xs text-[#D7E2EA]/50 font-mono">
                        <span>{cert.date}</span>
                        {cert.credlyUrl && (
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#BBCCD7] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                        )}
                      </div>
                    </div>
                    <h4 className="font-kanit font-semibold text-base text-[#D7E2EA] group-hover:text-white transition-colors mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-[#D7E2EA]/60 leading-relaxed font-kanit">
                      {cert.description}
                    </p>
                  </CardWrapper>
                );
              })}
            </div>
          </FadeIn>

          {/* 2. Education */}
          <FadeIn delay={0.2} y={30} className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/15">
              <GraduationCap className="w-6 h-6 text-[#BBCCD7]" />
              <h3 className="font-kanit font-bold text-xl uppercase tracking-wider text-[#D7E2EA]">
                Education
              </h3>
            </div>
            <div className="space-y-4">
              {EDUCATION.map((edu) => (
                <div
                  key={edu.degree}
                  className="p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xs text-[#D7E2EA]/50 font-mono block mb-1">
                    {edu.timeline}
                  </span>
                  <h4 className="font-kanit font-semibold text-base text-[#D7E2EA] mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-xs text-[#BBCCD7] font-kanit mb-2">{edu.institution}</p>
                  <p className="text-xs text-[#D7E2EA]/60 leading-relaxed font-kanit">
                    <span className="font-medium text-[#D7E2EA]/80">Coursework:</span>{' '}
                    {edu.coursework}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* 3. Leadership & Community */}
          <FadeIn delay={0.3} y={30} className="flex flex-col">
            <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/15">
              <Users className="w-6 h-6 text-[#BBCCD7]" />
              <h3 className="font-kanit font-bold text-xl uppercase tracking-wider text-[#D7E2EA]">
                Leadership
              </h3>
            </div>
            <div className="space-y-4">
              {LEADERSHIP.map((lead) => (
                <div
                  key={lead.role + lead.organization}
                  className="p-5 rounded-2xl bg-[#141414] border border-white/5 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-xs text-[#D7E2EA]/50 font-mono block mb-1">
                    {lead.period}
                  </span>
                  <h4 className="font-kanit font-semibold text-base text-[#D7E2EA] mb-1">
                    {lead.role}
                  </h4>
                  <p className="text-xs text-[#BBCCD7] font-kanit mb-2">{lead.organization}</p>
                  <p className="text-xs text-[#D7E2EA]/60 leading-relaxed font-kanit">
                    {lead.description}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Contact Banner & Socials Footer */}
        <FadeIn delay={0.2} y={30}>
          <div className="rounded-[36px] bg-gradient-to-r from-[#141414] via-[#1a1c20] to-[#141414] border border-white/10 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <span className="text-xs uppercase font-mono tracking-widest text-[#BBCCD7]">
                Available for Engineering &amp; AI Roles
              </span>
              <h3 className="font-kanit font-bold text-2xl sm:text-4xl text-[#D7E2EA] mt-1 mb-2">
                Let&apos;s Build Together.
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 max-w-md font-kanit">
                Open for Full-Stack, Generative AI, and Prompt Engineering opportunities.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <ContactButton label="Get In Touch" onClick={onContactClick} />
            </div>
          </div>
        </FadeIn>

        {/* Footer Links */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-kanit text-[#D7E2EA]/60">
          <div>
            © {new Date().getFullYear()} Anirudh Chaurasia. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/ANIRUDH-Main"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/anirudh-chaurasia"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:anirudhkumar2004@gmail.com"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a
              href="tel:+918595450932"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 8595450932</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
