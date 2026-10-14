import { BusinessInfo, ServiceCard, EcosystemPartner, CapabilityFeature } from '../types/printing';

export const BUSINESS_INFO: BusinessInfo = {
  name: "OwemYield Designing and Printing",
  tagline: "Corporate Apparel, Large Format Signage & Promotional Printing",
  subTagline: "Zimbabwe's trusted precision manufacturing partner for corporates, SMEs, schools, and faith institutions.",
  phone: "+263 77 400 9821",
  whatsappNumber: "263774009821",
  email: "orders@owemyield.co.zw",
  address: "Harare Industrial Precinct, Harare, Zimbabwe",
  city: "Harare",
  country: "Zimbabwe",
  operatingHours: "Mon – Fri: 08:00 – 17:00 | Sat: 08:30 – 13:00",
  establishedYear: 2021,
  deliveryCoverage: "Nationwide dispatch across Zimbabwe (Harare, Bulawayo, Mutare, Gweru, Masvingo & Chinhoyi)"
};

export const SERVICES: ServiceCard[] = [
  {
    id: "corporate-apparel",
    title: "Corporate Apparel & Regalia",
    shortDesc: "Industrial-grade embroidery, silk screen printing, and heat press transfer on premium workwear and institutional uniforms.",
    items: [
      "Custom Branded T-Shirts (180g & 220g 100% Cotton)",
      "Structured & Golf Caps (Branded Peak & Crown)",
      "Creche & School Uniforms (Tracksuits, Pinafores & Hats)",
      "Industrial Hi-Vis Wear & Reflective Work Suits"
    ],
    turnaroundTime: "48 – 72 Hours for batches up to 500 units",
    moq: "Minimum 10 units (Mixed sizing available)",
    printMethods: ["Precision Computerized Embroidery", "High-Density Screen Printing", "Direct-to-Film (DTF) Transfer"],
    badge: "Most Requested",
    detailedSpecs: [
      {
        name: "Corporate Golf & Polo Shirts",
        description: "Heavyweight combed cotton with reinforced collars, custom sleeve embroidery, and color-matched plackets.",
        commonMaterials: "100% Combed Cotton, Poly-Cotton Pique (200-240 GSM)"
      },
      {
        name: "Protective Hi-Vis Overalls & Vests",
        description: "Certified day/night reflective tape with company chest insignia and back department labeling.",
        commonMaterials: "Fluorescent polyester mesh, D59 flame-retardant drill fabric"
      },
      {
        name: "Custom School & Early Years Uniforms",
        description: "Durable colorfast fabrics designed for playground durability, washable institutional crest badges.",
        commonMaterials: "Brushed fleece, breathable tricot, poly-viscose"
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gifts-stationery",
    title: "Corporate Gifts & Stationery",
    shortDesc: "Executive executive stationery and bespoke promotional merchandise designed to elevate corporate prestige.",
    items: [
      "Branded Executive Leatherette Diaries & Notebooks",
      "Numbered & Perforated Security Voucher Books",
      "Premium Spot-UV & Matte Laminated Business Cards",
      "Custom Desk, Wall & Tent Calendars"
    ],
    turnaroundTime: "3 – 5 Business Days with proof approval",
    moq: "50 units for stationery, 25 for hardbound diaries",
    printMethods: ["Hot Foil Stamping (Gold/Silver)", "Blind Debossing", "Precision Digital Spot UV", "Offset Litho"],
    badge: "Executive Class",
    detailedSpecs: [
      {
        name: "Executive Year Planners & Diaries",
        description: "A5 & A4 hardcovers with ribbon markers, golden edge gilding, and custom tip-in company profile pages.",
        commonMaterials: "PU Thermo-reactive leatherette, 80gsm cream woodfree paper"
      },
      {
        name: "Secure Receipt & Invoice Books",
        description: "Carbonless NCR papers (Duplicate/Triplicate), crash numbered with durable wrap-around writing shields.",
        commonMaterials: "Self-copying NCR stock (Top white, middle yellow, bottom pink)"
      },
      {
        name: "Signature Business Cards",
        description: "400gsm triple-layered cardstock with silky soft-touch lamination and raised gold metallic accents.",
        commonMaterials: "400gsm Silk Board with Velvet Lamination"
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "advertising-signage",
    title: "Advertising & Large Signage",
    shortDesc: "Weatherproof outdoor displays and portable exhibition systems engineered for maximum roadside and event visibility.",
    items: [
      "Luxury Aluminum Base Pull-Up Banners (850mm x 2000mm)",
      "Single & Double Sided Teardrop & Telescopic Flags",
      "Display Shields & Die-Cut Rigid PVC Foam Boards",
      "High-Traffic Vinyl Roadside Banners & Backdrops"
    ],
    turnaroundTime: "24 – 48 Hours rapid production available",
    moq: "No Minimum (Single unit orders welcomed)",
    printMethods: ["Eco-Solvent 1440 DPI Full Color", "UV-Resistant Sublimation", "High-Gloss Heavy Vinyl Weld"],
    badge: "Maximum Visibility",
    detailedSpecs: [
      {
        name: "Deluxe Retractable Roll-Up Banners",
        description: "Anti-curl smooth stoplight PET film encased in a heavy-duty anodized aluminum cartridge with padded carry bag.",
        commonMaterials: "No-curl 420gsm lay-flat banner media, reinforced top clamp"
      },
      {
        name: "Wind-Resistant Teardrop Banners",
        description: "Aerodynamic fiberglass pole sets with ground spikes or water-tank bases for outdoor Zimbabwean conditions.",
        commonMaterials: "115gsm Knitted Polyester, direct dye sublimation"
      },
      {
        name: "Directional & Event Display Boards",
        description: "Rigid lightweight forex and chromadek signage with UV laminate protection against sunlight fading.",
        commonMaterials: "3mm / 5mm High-Density Celuka Foam PVC, Chromadek Steel"
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "trophies-awards",
    title: "Trophies & Awards",
    shortDesc: "Distinguished presentation pieces, laser-engraved acrylics, and honor medals for academic, sports, and corporate achievements.",
    items: [
      "Custom Laser-Engraved Crystal & Acrylic Trophies",
      "Die-Cast Medals with Custom Branded Neck Ribbons",
      "Mahogany Wooden Presentation Shields & Plaques",
      "Prestige Corporate Excellence & Long-Service Awards"
    ],
    turnaroundTime: "3 – 4 Days (Includes vector proofing)",
    moq: "5 units (1 unit for VIP executive trophies)",
    printMethods: ["CO2 Laser Micro-Engraving", "Full-Color UV Flatbed Print", "Sublimated Aluminum Inset Plates"],
    badge: "Prestige Honor",
    detailedSpecs: [
      {
        name: "Optical Crystal Column Awards",
        description: "Heavy faceted K9 optical crystal with bevelled diamond edges and subsurface 3D laser engraving.",
        commonMaterials: "K9 Optical Grade Crystal, satin-lined gift presentation box"
      },
      {
        name: "Annual School & Sports Medals",
        description: "Gold, Silver, and Bronze antiqued medals featuring 3D embossed school crest and custom printed 25mm lanyard ribbons.",
        commonMaterials: "Zinc alloy die-cast, 50mm - 70mm diameter"
      },
      {
        name: "Solid Mahogany Wall & Table Shields",
        description: "Hand-lacquered solid hardwood with engraved polished brass and brushed silver record shields.",
        commonMaterials: "Stained African Teak / Mahogany with engraved metal alloys"
      }
    ],
    heroImage: "https://images.unsplash.com/photo-1578269174936-2709b6aeb913?auto=format&fit=crop&w=800&q=80"
  }
];

export const ECOSYSTEM_PARTNERS: EcosystemPartner[] = [
  {
    id: "istart-capital",
    name: "iStart Capital",
    description: "ICT Consulting & Custom Software",
    url: "https://facebook.com",
    category: "Technology & Infrastructure"
  },
  {
    id: "hp-shoes",
    name: "H&P Shoes",
    description: "Premium Ladies' Fashion Destination",
    url: "https://github.io",
    category: "Apparel & Retail"
  },
  {
    id: "legendary-parts",
    name: "Legendary Parts Centre",
    description: "Automotive Spares Shop Zimbabwe",
    url: "https://github.io",
    category: "Automotive & Logistics"
  },
  {
    id: "chichi-tlc",
    name: "Chichi TLC",
    description: "Healthcare Staffing & Agency",
    url: "https://github.io",
    category: "Healthcare & Human Resources"
  }
];

export const PRODUCTION_PILLARS: CapabilityFeature[] = [
  {
    title: "Automated Multi-Head Embroidery",
    description: "Up to 15-color synchronized stitching for fine typography, organizational insignias, and durable cap profiles.",
    specs: "0.1mm stitch precision | High-luster Madeira polyester threads"
  },
  {
    title: "1440 DPI High-Density Screen Printing",
    description: "Industrial plastisol and water-based ink carousels ensuring vivid wash-resistant color fastness across thousands of garments.",
    specs: "Micro-registration carousels | Infrared tunnel curing"
  },
  {
    title: "UV Flatbed & Eco-Solvent Large Format",
    description: "Direct-to-substrate printing on acrylics, PVC boards, tear-resistant canvas, and high-tensile outdoor flex banner rolls.",
    specs: "3.2m seamless width | UV rated for intense Zimbabwean sunlight"
  },
  {
    title: "Precision Laser Engraving & Die Cutting",
    description: "Computer numerical control cutting and etching for acrylic awards, wooden shields, and custom shaped signage.",
    specs: "Sub-millimeter edge polish | Clean burn-free finishes"
  }
];

export const FAQS = [
  {
    q: "How does ordering through WhatsApp work?",
    a: "Select your desired items or fill out our quick quote form on this page. When you tap 'Order via WhatsApp', your inquiry details will automatically populate in a formatted message directly to our production team. We verify your artwork, confirm lead times, and issue a formal invoice."
  },
  {
    q: "What payment methods are accepted in Zimbabwe?",
    a: "We accommodate Zimbabwean business billing needs: USD Cash on collection/dispatch, Bank Transfer (USD Nostro and ZiG/RTGS at prevailing official invoice terms), and registered EcoCash merchant payment."
  },
  {
    q: "Can you deliver outside Harare?",
    a: "Yes! We run daily nationwide dispatches using trusted regional couriers (Swift, FedEx, and reliable inter-city coach express) servicing Bulawayo, Mutare, Gweru, Kwekwe, Masvingo, Chinhoyi, and Victoria Falls."
  },
  {
    q: "What format should my logo or artwork be in?",
    a: "We recommend vector files for crisp print quality: Adobe Illustrator (.AI), PDF, CorelDraw (.CDR), or high-resolution PNG (at least 300 DPI with transparent background). If you only have a draft image, our design studio can redraw it into vector format."
  }
];
