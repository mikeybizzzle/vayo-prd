export interface SignupData {
  email: string;
  name?: string;
  affiliateId?: string;
  source?: string;
  campaign?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  location: string;
  text: string;
  savings: string;
}

export interface PriceComparison {
  id: string;
  destination: string;
  hotel: string;
  publicRate: number;
  memberRate: number;
  savings: number;
  image: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface TrackingEvent {
  event: string;
  affiliateId?: string;
  data?: Record<string, any>;
}