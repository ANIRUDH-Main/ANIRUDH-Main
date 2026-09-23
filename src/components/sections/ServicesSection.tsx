import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { SERVICES_DATA } from '../../data/portfolioData';

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="expertise"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40} className="text-center mb-16 sm:mb-20 md:mb-28">
          <h2 className="font-kanit font-black uppercase leading-none tracking-tight text-[#0C0C0C] text-[clamp(3rem,12vw,160px)]">
            Expertise
          </h2>
        </FadeIn>

        {/* 5 Service Items */}
        <div className="flex flex-col">
          {SERVICES_DATA.map((item, index) => (
            <FadeIn
              key={item.number}
              delay={index * 0.1}
              y={30}
              className="py-8 sm:py-10 md:py-12 border-b last:border-b-0 border-[#0C0C0C]/15 transition-all duration-300 hover:pl-2"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-12">
                {/* Number on left */}
                <div className="flex-shrink-0">
                  <span className="font-kanit font-black text-[#0C0C0C] leading-none text-[clamp(3rem,10vw,140px)] select-none">
                    {item.number}
                  </span>
                </div>

                {/* Name + Description stacked vertically on right */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-kanit font-medium uppercase text-[#0C0C0C] mb-3 text-[clamp(1rem,2.2vw,2.1rem)]">
                    {item.name}
                  </h3>
                  <p className="font-kanit font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {item.description}
                  </p>
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-[#0C0C0C]/5 rounded-full text-xs font-kanit font-medium text-[#0C0C0C]/75 uppercase tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
