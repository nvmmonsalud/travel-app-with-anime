export interface FlightSegment {
  origin: string;
  destination: string;
  departureTime: string;
  arrivalTime: string;
  flightNumber: string;
  carrier: string;
}

export interface FareClass {
  code: string;
  name: string;
  price: number;
  currency: string;
  seatsAvailable: number;
  perks: string[];
}

export interface Flight {
  id: string;
  route: string;
  segments: FlightSegment[];
  schedule: {
    departureDate: string;
    arrivalDate: string;
    durationMinutes: number;
  };
  fareClasses: FareClass[];
  animeExclusivePerks: string[];
}
