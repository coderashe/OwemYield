import React from 'react';
import { Layers, Cpu, Award, Zap, CheckCircle2 } from 'lucide-react';
import { PRODUCTION_PILLARS } from '../data/mockData';

export const ProductionPillars: React.FC = () => {
  const pillarIcons = [
    <Cpu className="w-6 h-6 text-[var(--color-brand-green)]" key="cpu" />,
    <Layers className="w-6 h-6 text-[var(--color-brand-green)]" key="layers" />,
    <Zap className="w-6 h-6 text-[var(--color-brand-green)]" key="zap" />,
    <Award className="w-6 h-6 text-[var(--color-brand-green)]" key="award" />
  ];

  return (
    <section id="capabilities" className="py-16 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[var(--color-brand-green)] text-xs font-bold uppercase tracking-wider mb-2">
            <CheckCircle2 className="w-3.5 h-3.5" />
            In-House Machinery & Standards
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-ink)] tracking-tight">
            Factory-Grade Technology & Quality Controls
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            We avoid low-durability shortcuts. Our Harare production facility utilizes commercial-grade equipment to ensure color consistency, stitch durability, and outdoor weather resistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTION_PILLARS.map((pillar, index) => (
            <div 
              key={index} 
              className="p-6 rounded-2xl bg-[var(--color-surface)] border border-gray-200/90 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center mb-4 shadow-2xs">
                  {pillarIcons[index % pillarIcons.length]}
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-3 border-t border-gray-200/70 text-[11px] font-semibold text-[var(--color-brand-green)]">
                {pillar.specs}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
