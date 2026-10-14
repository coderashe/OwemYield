import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare, ChevronRight, Layers, Award, Printer, Building2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const quickChatUrl = buildWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello ${BUSINESS_INFO.name}, I am contacting you from your website to make a print inquiry.`
  );

  return (
    <header className="sticky top-0 z-40 h-[60px] w-full bg-white border-b border-gray-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logomark & Title */}
        <a 
          href="#top" 
          className="flex items-center gap-2.5 text-decoration-none group select-none"
          onClick={closeMenu}
        >
          {/* Custom SVG Logomark: Green shield & Gold yield ring */}
          <div className="w-10 h-10 rounded-lg bg-[var(--color-brand-green)] flex items-center justify-center shadow-xs text-white relative overflow-hidden transition-transform group-hover:scale-105">
            <svg 
              viewBox="0 0 36 36" 
              className="w-7 h-7" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <circle cx="18" cy="18" r="14" stroke="#D4AF37" strokeWidth="2.5" strokeDasharray="3 2" />
              <path d="M12 12L18 20L24 12" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 20V26" stroke="#D4AF37" strokeWidth="3" strokeLinecap="round" />
              <circle cx="18" cy="18" r="2" fill="#D4AF37" />
            </svg>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-extrabold text-base tracking-tight text-[var(--color-brand-green)]">
                OWEMYIELD
              </span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-surface)] text-[var(--color-ink)] border border-gray-200">
                ZW
              </span>
            </div>
            <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider mt-0.5">
              Designing & Printing
            </span>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-gray-700">
          <a href="#services" className="hover:text-[var(--color-brand-green)] transition-colors">
            Services
          </a>
          <a href="#capabilities" className="hover:text-[var(--color-brand-green)] transition-colors">
            Production Specs
          </a>
          <a href="#quote" className="hover:text-[var(--color-brand-green)] transition-colors">
            Request Quote
          </a>
          <a href="#ecosystem" className="hover:text-[var(--color-brand-green)] transition-colors">
            iStart Ecosystem
          </a>
        </nav>

        {/* Desktop Quick Contact Button */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${BUSINESS_INFO.phone}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-[var(--color-brand-green)] transition-colors px-2 py-1"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
            <span>{BUSINESS_INFO.phone}</span>
          </a>
          <a
            href={quickChatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black text-xs font-bold px-3 py-2 rounded-md shadow-xs transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp Desk</span>
          </a>
        </div>

        {/* Mobile Hamburger Button (Min 44px tap target for thumb comfort) */}
        <button
          type="button"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close main navigation menu" : "Open main navigation menu"}
          aria-expanded={isOpen}
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)]"
        >
          {isOpen ? <X className="w-6 h-6 text-[var(--color-brand-green)]" /> : <Menu className="w-6 h-6 text-gray-900" />}
        </button>
      </div>

      {/* Full-width Dropdown Nav Panel for Mobile */}
      {isOpen && (
        <div className="md:hidden w-full bg-white border-b border-gray-200 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            <div className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-3 pb-1 border-b border-gray-100">
              Navigation Menu
            </div>

            <a
              href="#services"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg text-gray-800 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green)] font-semibold transition-colors"
            >
              <div className="flex items-center gap-3">
                <Printer className="w-5 h-5 text-[var(--color-brand-green)]" />
                <span>Our Printing Services</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#capabilities"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg text-gray-800 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green)] font-semibold transition-colors"
            >
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-[var(--color-brand-green)]" />
                <span>Production & Technology Specs</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#quote"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg text-gray-800 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green)] font-semibold transition-colors"
            >
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-[var(--color-brand-green)]" />
                <span>Instant WhatsApp Quote</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>

            <a
              href="#ecosystem"
              onClick={closeMenu}
              className="flex items-center justify-between p-3 rounded-lg text-gray-800 hover:bg-[var(--color-surface)] hover:text-[var(--color-brand-green)] font-semibold transition-colors"
            >
              <div className="flex items-center gap-3">
                <Building2 className="w-5 h-5 text-[var(--color-brand-green)]" />
                <span>iStart Network Ecosystem</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </a>

            {/* Direct Contact Bar inside panel */}
            <div className="pt-3 mt-2 border-t border-gray-100 flex flex-col gap-2">
              <a
                href={quickChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 bg-[var(--color-brand-gold)] text-black font-bold py-3 rounded-lg text-sm shadow-xs"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat Direct on WhatsApp</span>
              </a>
              <div className="text-center text-xs text-gray-500 pt-1">
                Harare Workshop: {BUSINESS_INFO.phone}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
