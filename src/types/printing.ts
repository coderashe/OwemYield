export interface BusinessInfo {
  name: string;
  tagline: string;
  subTagline: string;
  phone: string;
  whatsappNumber: string;
  email: string;
  address: string;
  city: string;
  country: string;
  operatingHours: string;
  establishedYear: number;
  deliveryCoverage: string;
}

export interface ServiceItemSpec {
  name: string;
  description: string;
  commonMaterials: string;
}

export interface ServiceCard {
  id: string;
  title: string;
  shortDesc: string;
  items: string[];
  turnaroundTime: string;
  moq: string;
  printMethods: string[];
  badge?: string;
  detailedSpecs?: ServiceItemSpec[];
  heroImage?: string;
}

export interface EcosystemPartner {
  id: string;
  name: string;
  description: string;
  url: string;
  category?: string;
}

export interface QuoteFormData {
  name: string;
  company: string;
  serviceType: string;
  quantity: string;
  message: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  organization: string;
  city: string;
  text: string;
  project: string;
}

export interface CapabilityFeature {
  title: string;
  description: string;
  specs: string;
}
