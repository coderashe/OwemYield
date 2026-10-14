import React, { useState, useRef } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  MessageSquare, 
  Check, 
  Clock, 
  Package, 
  Sparkles, 
  Info,
  X
} from 'lucide-react';
import { SERVICES, BUSINESS_INFO } from '../data/mockData';
import { ServiceCard } from '../types/printing';
import { buildWhatsAppUrl, buildServiceInquiryMessage } from '../utils/whatsapp';

export const ServiceDirectory: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceCard | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-16 sm:py-20 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-brand-green)] mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-brand-gold)] inline-block" />
              Comprehensive Manufacturing Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-ink)] tracking-tight">
              Production Service Directory
            </h2>
            <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl">
              Engineered for endurance and corporate prestige. Swipe horizontally or tap any category to inspect production specs, MOQs, and initiate a WhatsApp order.
            </p>
          </div>

          {/* Desktop Scroll Controls */}
          <div className="flex items-center gap-2 self-start md:self-auto">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Scroll left through services"
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:text-[var(--color-brand-green)] hover:border-[var(--color-brand-green)] flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Scroll right through services"
              className="w-10 h-10 rounded-full border border-gray-300 bg-white text-gray-700 hover:text-[var(--color-brand-green)] hover:border-[var(--color-brand-green)] flex items-center justify-center transition-colors shadow-2xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Swipeable Scroll Container (CSS Scroll-Snap Mandate) */}
        <div
          ref={scrollContainerRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-1 px-1 snap-mandatory-x hide-scrollbar scroll-smooth"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {SERVICES.map((service, index) => {
            const cardInquiryUrl = buildWhatsAppUrl(
              BUSINESS_INFO.whatsappNumber,
              buildServiceInquiryMessage(service.title, service.items[0])
            );

            return (
              <div
                key={service.id}
                className="snap-card-item shrink-0 w-[88vw] sm:w-[380px] md:w-[420px] bg-white rounded-2xl border border-gray-200/90 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Visual Header / Cover Image */}
                <div className="relative h-44 w-full bg-gray-100 overflow-hidden">
                  {service.heroImage ? (
                    <img
                      src={service.heroImage}
                      alt={service.title}
                      loading="lazy"
                      width="420"
                      height="176"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-[var(--color-brand-green)] opacity-90 flex items-center justify-center text-white font-bold">
                      {service.title}
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Category Index & Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2">
                    <span className="bg-black/60 backdrop-blur-xs text-white text-[11px] font-mono font-bold px-2.5 py-1 rounded-md border border-white/20">
                      0{index + 1}
                    </span>
                    {service.badge && (
                      <span className="bg-[var(--color-brand-gold)] text-black text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <h3 className="text-xl font-extrabold tracking-tight drop-shadow-sm leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Mandated Service Items List */}
                    <div className="bg-[var(--color-surface)] rounded-xl p-3.5 border border-gray-200/70 mb-4">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2">
                        Core Product Range
                      </div>
                      <ul className="space-y-1.5">
                        {service.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-gray-800 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-green)] mt-1.5 shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Technical Highlights */}
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-600 mb-4">
                      <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-brand-green)] shrink-0" />
                        <span className="truncate">{service.turnaroundTime.split(' ')[0]} {service.turnaroundTime.split(' ')[1]} Lead</span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-gray-50 p-2 rounded-lg border border-gray-100">
                        <Package className="w-3.5 h-3.5 text-[var(--color-brand-green)] shrink-0" />
                        <span className="truncate">{service.moq.split('(')[0]}</span>
                      </div>
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-gray-300 hover:border-[var(--color-brand-green)] text-gray-700 hover:text-[var(--color-brand-green)] text-xs font-semibold bg-white transition-colors"
                      >
                        <Info className="w-3.5 h-3.5" />
                        <span>Specs & Fabrics</span>
                      </button>

                      <a
                        href={cardInquiryUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black text-xs font-bold transition-colors shadow-2xs"
                      >
                        <MessageSquare className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp Quote</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Swipe Guidance Note */}
        <div className="text-center md:hidden text-xs text-gray-400 mt-2 font-medium">
          👉 Swipe cards left or right to explore all 4 core departments
        </div>

      </div>

      {/* Detail Specifications Modal */}
      {selectedService && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-h-[85vh] flex flex-col animate-in fade-in zoom-in-95 duration-150">
            
            <div className="p-4 sm:p-5 bg-[var(--color-brand-green)] text-white flex items-center justify-between">
              <div>
                <span className="text-xs uppercase font-bold text-[var(--color-brand-gold)] tracking-wider">
                  Technical Specifications
                </span>
                <h3 className="text-lg sm:text-xl font-bold">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close specification dialog"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 overflow-y-auto space-y-4">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">
                  Supported Print & Production Methods
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedService.printMethods.map((m, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-800 font-semibold px-2.5 py-1 rounded-md border border-gray-200">
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-[var(--color-surface)] rounded-xl border border-gray-200">
                  <span className="text-gray-500 block font-medium">Standard Production Lead:</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">{selectedService.turnaroundTime}</span>
                </div>
                <div className="p-3 bg-[var(--color-surface)] rounded-xl border border-gray-200">
                  <span className="text-gray-500 block font-medium">Minimum Order Quantity:</span>
                  <span className="font-bold text-gray-900 mt-0.5 block">{selectedService.moq}</span>
                </div>
              </div>

              {selectedService.detailedSpecs && selectedService.detailedSpecs.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">
                    Material & Construction Details
                  </h4>
                  <div className="space-y-2.5">
                    {selectedService.detailedSpecs.map((spec, i) => (
                      <div key={i} className="p-3 rounded-lg border border-gray-200 bg-gray-50/50">
                        <div className="font-bold text-xs text-gray-900">{spec.name}</div>
                        <p className="text-xs text-gray-600 mt-1">{spec.description}</p>
                        <div className="text-[11px] text-[var(--color-brand-green)] font-semibold mt-1">
                          Standard Stock: {spec.commonMaterials}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-700 hover:text-black"
              >
                Close
              </button>
              <a
                href={buildWhatsAppUrl(
                  BUSINESS_INFO.whatsappNumber,
                  buildServiceInquiryMessage(selectedService.title)
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] text-black text-xs font-bold px-4 py-2.5 rounded-lg shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
