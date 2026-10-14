import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/mockData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

import brandedMerchHeroImage from '../assets/images/branded_merch_hero_1791965579006.jpg';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerWhatsAppUrl = buildWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello ${BUSINESS_INFO.name}, I would like more information on corporate account setup.`
  );

  return (
    <footer className="relative bg-[#070D0A] text-white pt-16 pb-28 border-t-4 border-[var(--color-brand-gold)] overflow-hidden">
      {/* Background Branded Merchandise Image with Premium Dark Overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img 
          src={brandedMerchHeroImage} 
          alt="OwemYield Corporate Branding Merchandise" 
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.45] contrast-125"
          width="1920"
          height="1080"
          loading="lazy"
        />
        {/* Deep, rich dark moody gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08170F]/95 via-[#060D09]/92 to-[#020504]/98" />
        <div className="absolute inset-0 bg-[#0F5132]/20 mix-blend-color" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-black/60 border border-[var(--color-brand-gold)] flex items-center justify-center shadow-md">
                <svg viewBox="0 0 36 36" className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="14" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 2" />
                  <path d="M12 12L18 20L24 12" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M18 20V26" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-black text-lg tracking-tight block text-white">OWEMYIELD</span>
                <span className="text-[11px] text-[var(--color-brand-gold)] font-bold uppercase tracking-wider block">
                  Designing & Printing
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Industrial corporate apparel, large format exhibition signage, executive promotional gifts, and academic awards manufacturing in Zimbabwe.
            </p>

            <div className="text-xs text-[var(--color-brand-gold)] font-semibold flex items-center gap-1.5">
              <span>National Delivery:</span>
              <span className="text-gray-300">Harare, Bulawayo, Mutare, Gweru</span>
            </div>
          </div>

          {/* Col 2: Service Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-gold)] mb-4">
              Production Divisions
            </h4>
            <ul className="space-y-2 text-xs text-gray-300">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[var(--color-brand-gold)] transition-colors flex items-center justify-between group">
                    <span>{s.title}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[var(--color-brand-gold)]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Workshop Contact Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-gold)] mb-4">
              Harare Workshop & Orders
            </h4>
            <ul className="space-y-3 text-xs text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0" />
                <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-[var(--color-brand-gold)] transition-colors">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.email}`} className="hover:text-[var(--color-brand-gold)] transition-colors">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[var(--color-brand-gold)] shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.operatingHours}</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Settlement & Social Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--color-brand-gold)] mb-4">
              Billing & Settlement
            </h4>
            <p className="text-xs text-gray-300 mb-3 leading-relaxed">
              We process corporate purchases in USD (Cash & Nostro Transfers) and registered EcoCash Merchant accounts.
            </p>

            <div className="pt-2">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-black/60 hover:bg-black/90 border border-[var(--color-brand-gold)] text-[var(--color-brand-gold)] hover:text-white text-xs font-bold px-3.5 py-2.5 rounded-lg transition-colors shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-current" />
                <span>Chat with Accounts Desk</span>
              </a>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-3 text-xs text-gray-400">
              <span>Follow us:</span>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
                Facebook
              </a>
              <span>•</span>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-brand-gold)] transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Network note */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-3">
          <div>
            © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved. Zimbabwe.
          </div>
          <div className="flex items-center gap-2">
            <span>Affiliated with the</span>
            <span className="font-bold text-[var(--color-brand-gold)]">iStart Network Ecosystem</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
