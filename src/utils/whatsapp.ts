import { QuoteFormData } from '../types/printing';

/**
 * Sanitizes input text by trimming and normalizing excess whitespace.
 */
export function sanitizeInput(text: string): string {
  if (!text) return '';
  return text.trim().replace(/\s+/g, ' ');
}

/**
 * Builds a valid WhatsApp click-to-chat URL.
 * Automatically strips non-digits (like +, -, spaces) from the phone number
 * and encodes the message payload.
 */
export function buildWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const trimmedMessage = message.trim();
  
  if (!trimmedMessage) {
    return `https://wa.me/${cleanPhone}`;
  }
  
  const encodedText = encodeURIComponent(trimmedMessage);
  return `https://wa.me/${cleanPhone}?text=${encodedText}`;
}

/**
 * Builds a structured, professional WhatsApp order inquiry text from form data.
 */
export function buildQuoteMessage(data: QuoteFormData): string {
  const name = sanitizeInput(data.name);
  const company = sanitizeInput(data.company) || 'Individual Client';
  const service = sanitizeInput(data.serviceType);
  const quantity = sanitizeInput(data.quantity);
  const details = data.message.trim();

  return [
    `*NEW QUOTE INQUIRY — OWEMYIELD DESIGNING & PRINTING*`,
    `----------------------------------------`,
    `👤 *Client Name:* ${name}`,
    `🏢 *Company / Org:* ${company}`,
    `📦 *Service Category:* ${service}`,
    `🔢 *Estimated Quantity:* ${quantity || 'Flexible / Inquiry'}`,
    `📝 *Order Specifications:*`,
    details ? details : 'Please advise on turnaround time, pricing, and artwork setup guidelines.',
    `----------------------------------------`,
    `_Sent via OwemYield Web Order Desk_`
  ].join('\n');
}

/**
 * Quick inquiry generator for a specific service card.
 */
export function buildServiceInquiryMessage(serviceTitle: string, sampleItem?: string): string {
  return [
    `*SERVICE INQUIRY — OWEMYIELD DESIGNING & PRINTING*`,
    `Hello OwemYield Team, I would like to get a quote and production timeline for:`,
    `👉 *${serviceTitle}*${sampleItem ? ` (${sampleItem})` : ''}`,
    `Could you please share your minimum order quantity, pricing tiers, and lead time?`,
    `Thank you!`
  ].join('\n');
}
