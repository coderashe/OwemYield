import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/mockData';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppBar: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl(
    BUSINESS_INFO.whatsappNumber,
    `Hello ${BUSINESS_INFO.name}, I would like to make an order inquiry.`
  );

  return (
    <aside 
      aria-label="Order via WhatsApp bar"
      className="fixed bottom-0 left-0 right-0 z-50 w-full bg-[var(--color-brand-gold)] border-t border-[#B89628] shadow-[0_-4px_12px_rgba(0,0,0,0.15)]"
    >
      <div className="max-w-4xl mx-auto px-4 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        <div className="hidden sm:flex flex-col text-left">
          <span className="text-xs uppercase font-extrabold tracking-wider text-black/80">
            Fast Response Desk
          </span>
          <span className="text-xs text-black/90 font-medium">
            Production proofing & instant quotes within 15 mins
          </span>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex-1 sm:flex-initial flex items-center justify-center gap-2.5 py-3 px-6 rounded-lg bg-black text-[var(--color-brand-gold)] hover:bg-gray-900 active:scale-[0.99] transition-all font-black text-sm sm:text-base tracking-wide shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-[var(--color-brand-gold)] text-black" />
          <span>💬 Order via WhatsApp</span>
        </a>
      </div>
    </aside>
  );
};
