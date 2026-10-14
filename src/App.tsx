import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServiceDirectory } from './components/ServiceDirectory';
import { ProductionPillars } from './components/ProductionPillars';
import { QuoteForm } from './components/QuoteForm';
import { FaqSection } from './components/FaqSection';
import { EcosystemGrid } from './components/EcosystemGrid';
import { Footer } from './components/Footer';
import { WhatsAppBar } from './components/WhatsAppBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-surface)] text-[var(--color-ink)] selection:bg-[var(--color-brand-gold)] selection:text-black">
      {/* 60px Sticky Navigation Header */}
      <Header />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Full-viewport Hero with Brand Green & Gold CTA */}
        <Hero />

        {/* Horizontal Swipeable Scroll Cards for 4 Core Departments */}
        <ServiceDirectory />

        {/* Factory Standards & Production Machinery Specs */}
        <ProductionPillars />

        {/* WhatsApp-Routed Inquiry Quote Form */}
        <QuoteForm />

        {/* FAQs for Zimbabwean Corporate & Institutional Buyers */}
        <FaqSection />

        {/* iStart Network Ecosystem 4 Micro-Cards */}
        <EcosystemGrid />
      </main>

      {/* Brand Green Footer */}
      <Footer />

      {/* Fixed Gold Bottom WhatsApp Order Bar (z-50) */}
      <WhatsAppBar />
    </div>
  );
}
