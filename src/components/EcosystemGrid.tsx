import React from 'react';
import { ExternalLink, Network } from 'lucide-react';
import { ECOSYSTEM_PARTNERS } from '../data/mockData';

export const EcosystemGrid: React.FC = () => {
  return (
    <section id="ecosystem" className="py-12 bg-white border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="p-1.5 rounded-md bg-[var(--color-brand-green)]/10 text-[var(--color-brand-green)]">
            <Network className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-bold text-[var(--color-ink)] tracking-tight">
              iStart Network Ecosystem
            </h3>
            <p className="text-xs text-gray-500">
              Synergistic business units & strategic enterprise affiliates
            </p>
          </div>
        </div>

        {/* 4 Micro-Cards (Single line each with ExternalLink icon) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {ECOSYSTEM_PARTNERS.map((partner) => (
            <a
              key={partner.id}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3.5 rounded-xl border border-gray-200 hover:border-[var(--color-brand-green)] bg-[var(--color-surface)] hover:bg-white transition-all shadow-2xs hover:shadow-xs flex items-center justify-between gap-3 text-decoration-none"
            >
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-gray-900 group-hover:text-[var(--color-brand-green)] truncate transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-gold)] shrink-0" />
                  <span className="truncate">{partner.name}</span>
                </div>
                <div className="text-[11px] text-gray-500 truncate mt-0.5">
                  {partner.description}
                </div>
              </div>

              <ExternalLink className="w-3.5 h-3.5 text-gray-400 group-hover:text-[var(--color-brand-green)] shrink-0 transition-colors" />
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
