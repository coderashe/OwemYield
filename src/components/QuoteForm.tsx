import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, Sparkles, Building, User, Layers, Hash, FileText } from 'lucide-react';
import { BUSINESS_INFO, SERVICES } from '../data/mockData';
import { QuoteFormData } from '../types/printing';
import { buildQuoteMessage, buildWhatsAppUrl, sanitizeInput } from '../utils/whatsapp';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    company: '',
    serviceType: SERVICES[0].title,
    quantity: '50',
    message: ''
  });

  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Sanitize values
    const sanitizedData: QuoteFormData = {
      name: sanitizeInput(formData.name),
      company: sanitizeInput(formData.company),
      serviceType: sanitizeInput(formData.serviceType),
      quantity: sanitizeInput(formData.quantity),
      message: sanitizeInput(formData.message)
    };

    const message = buildQuoteMessage(sanitizedData);
    const url = buildWhatsAppUrl(BUSINESS_INFO.whatsappNumber, message);

    setSubmittedUrl(url);

    // Open WhatsApp link
    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch {
      window.location.href = url;
    }
  };

  return (
    <section id="quote" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-surface)] border border-gray-200 text-xs font-bold text-[var(--color-brand-green)] uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-brand-gold)]" />
            Fast WhatsApp Routing Desk
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-ink)] tracking-tight">
            Request an Immediate Production Quote
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Submit your order parameters below. Our system will format a production docket and open WhatsApp directly with our Harare estimating team.
          </p>
        </div>

        {/* The Form Card */}
        <div className="bg-[var(--color-surface)] rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field: Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Farai Moyo"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:border-transparent transition"
                />
              </div>

              {/* Field: Company / Organization */}
              <div>
                <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
                  Company or Institution
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. Delta Holdings / St. Mark's School"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:border-transparent transition"
                />
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Field: Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
                  Required Service Category <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  required
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:border-transparent transition cursor-pointer"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Multi-Category Corporate Branding Package">
                    Multi-Category Brand Launch Package
                  </option>
                  <option value="Custom Graphic Design & Pre-Press Only">
                    Custom Graphic Design & Pre-Press Only
                  </option>
                </select>
              </div>

              {/* Field: Estimated Quantity */}
              <div>
                <label htmlFor="quantity" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                  <Hash className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
                  Estimated Quantity / Volume <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g. 100 T-Shirts, 2 Banners"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:border-transparent transition"
                />
              </div>

            </div>

            {/* Field: Message / Specifications */}
            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[var(--color-brand-green)]" />
                Project Specifications & Delivery Location
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Include details like garment colors, print positions (e.g. front left chest embroidery + back screen print), delivery city (Harare, Bulawayo, etc.), and desired turnaround deadline."
                className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-brand-green)] focus:border-transparent transition"
              />
            </div>

            {/* Submit Action (10% Gold Accent) */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 bg-[var(--color-brand-gold)] hover:bg-[var(--color-brand-gold-hover)] active:scale-[0.99] text-black font-extrabold text-base py-4 px-6 rounded-xl shadow-md transition-all cursor-pointer"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Format & Launch WhatsApp Inquiry</span>
                <Send className="w-4 h-4" />
              </button>
              <div className="text-center text-xs text-gray-500 mt-2">
                ⚡ Directly opens WhatsApp with the formatted order docket. No login required.
              </div>
            </div>

          </form>

          {/* Fallback button if popup blocked or for review */}
          {submittedUrl && (
            <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200 animate-in fade-in duration-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-700 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <div className="text-xs font-bold text-green-900 uppercase tracking-wide">
                    Order Docket Generated Successfully!
                  </div>
                  <p className="text-xs text-green-800 mt-1">
                    If WhatsApp did not automatically open on your device, tap the button below:
                  </p>
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 bg-[var(--color-brand-green)] text-white text-xs font-bold px-4 py-2 rounded-lg hover:bg-[var(--color-brand-green-dark)] transition"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Open Generated WhatsApp Chat Now</span>
                  </a>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
