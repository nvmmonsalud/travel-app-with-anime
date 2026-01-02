export interface HotelAvailability {
  startDate: string;
  endDate: string;
  availableRooms: number;
  roomType: string;
}

export interface HotelPricing {
  currency: string;
  nightlyRate: number;
  taxesAndFees: number;
  totalEstimate: number;
}

export interface Hotel {
  id: string;
  name: string;
  location: string;
  description: string;
  rating: number;
  amenities: string[];
  availability: HotelAvailability[];
  pricing: HotelPricing;
  animeExclusivePerks: string[];
}
