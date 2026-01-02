export interface Restaurant {
  id: string;
  name: string;
  location: string;
  cuisine: string[];
  priceRange: string;
  rating: number;
  availableReservationSlots: string[];
  animeExclusivePerks: string[];
}
