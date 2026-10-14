import React from 'react';
import { MessageSquare, CheckCircle2, ShieldCheck, Clock, Truck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

import brandedMerchHeroImage from '../assets/images/branded_merch_hero_1791965579006.jpg';

export const Hero: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello ${BUSINESS_INFO.name}, I would like an urgent quote for custom corporate printing and branding.`
  );

  return (
    <section 
      id="top" 
      className="relative min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-center text-white overflow-hidden pt-12 md:pt-16 pb-28 sm:pb-32 px-4 sm:px-6 lg:px-8 bg-black"
    >
      {/* High-Impact Branded Merchandise Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={brandedMerchHeroImage} 
          alt="OwemYield Branded Corporate Merchandise, Embroidered Apparel, Stationery & Signage Showcase" 
          className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-105"
          width="1920"
          height="1080"
          loading="eager"
        />

        {/* Clean, cinematic scrim overlays that let the branded items show through while keeping text 100% legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-[#072417]/90" />
        <div className="absolute inset-0 bg-[#0F5132]/35 mix-blend-color" />
      </div>

      {/* Main Content Card Container */}
      <div className="relative max-w-5xl mx-auto w-full text-center z-10 flex flex-col items-center">
        
        {/* Quality Badge (10% Gold accent token) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 border border-[var(--color-brand-gold)]/70 text-[var(--color-brand-gold)] text-xs sm:text-sm font-bold tracking-wide mb-6 backdrop-blur-md shadow-lg">
          <ShieldCheck className="w-4 h-4 text-[var(--color-brand-gold)]" />
          <span>Factory-Direct Zimbabwean Corporate Branding & Signage</span>
        </div>

        {/* White Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight max-w-4xl drop-shadow-md">
          High-Precision Corporate Apparel, Large Format Signage & Awards
        </h1>

        {/* Gold Accent Subtext */}
        <p className="mt-5 text-base sm:text-lg md:text-xl text-[var(--color-brand-gold)] font-semibold max-w-3xl leading-relaxed drop-shadow-sm">
          Outfit your workforce, dominate outdoor branding, and celebrate organizational excellence with industrial multi-head embroidery, high-density screen printing, and UV-resistant displays.
        </p>

        {/* Market Scope Pill */}
        <p className="mt-3 text-xs sm:text-sm text-gray-200 font-medium">
          Serving Zimbabwean Corporates, Growing SMEs, Educational Institutions & Faith Organizations.
        </p>

        {/* Primary WhatsApp CTA Button */}
        <div className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] active:scale-95 text-black font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-xl transition-all"
          >
            <MessageSquare className="w-5 h-5 fill-black text-black" />
            <span>Request WhatsApp Quote</span>
          </a>
        </div>

        {/* Trust Badges - Zimbabwe Logistics & Reliability */}
        <div className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/20 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-left">
          
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 shadow-sm">
            <Clock className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">48–72h Turnaround</div>
              <div className="text-[11px] text-gray-300">Fast batch delivery</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Strict Color Proofs</div>
              <div className="text-[11px] text-gray-300">Pantone calibrated match</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 shadow-sm">
            <Truck className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Nationwide Freight</div>
              <div className="text-[11px] text-gray-300">Harare, Byo, Mutare & more</div>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-black/55 backdrop-blur-md border border-white/15 shadow-sm">
            <ShieldCheck className="w-5 h-5 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs sm:text-sm font-bold text-white">Flexible Settlement</div>
              <div className="text-[11px] text-gray-300">USD Cash, Nostro & EcoCash</div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
