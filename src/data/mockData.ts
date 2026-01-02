import { Flight } from "../models/Flight";
import { Hotel } from "../models/Hotel";
import { Restaurant } from "../models/Restaurant";
import { Rewards } from "../models/Rewards";
import { User } from "../models/User";

export const mockHotels: Hotel[] = [
  {
    id: "hotel-neo-01",
    name: "Neo Sakura Suites",
    location: "Shibuya, Tokyo",
    description: "Skyline views with a retro anime lounge and capsule spa.",
    rating: 4.8,
    amenities: ["Sky Lounge", "Capsule Spa", "Rooftop Onsen", "Concierge"],
    availability: [
      {
        startDate: "2024-11-01",
        endDate: "2024-11-30",
        availableRooms: 12,
        roomType: "Deluxe Panorama",
      },
    ],
    pricing: {
      currency: "JPY",
      nightlyRate: 32000,
      taxesAndFees: 4200,
      totalEstimate: 36200,
    },
    animeExclusivePerks: ["Collector keycard", "Late-night ramen drop"],
  },
];

export const mockFlights: Flight[] = [
  {
    id: "flight-otk-88",
    route: "SFO → HND",
    segments: [
      {
        origin: "SFO",
        destination: "HND",
        departureTime: "2024-11-02T10:15:00Z",
        arrivalTime: "2024-11-03T02:40:00Z",
        flightNumber: "OTK88",
        carrier: "Otaku Air",
      },
    ],
    schedule: {
      departureDate: "2024-11-02",
      arrivalDate: "2024-11-03",
      durationMinutes: 685,
    },
    fareClasses: [
      {
        code: "ECO",
        name: "Cosplay Economy",
        price: 680,
        currency: "USD",
        seatsAvailable: 32,
        perks: ["Anime playlist", "Snack pack"],
      },
      {
        code: "PRI",
        name: "Premium Shonen",
        price: 1150,
        currency: "USD",
        seatsAvailable: 8,
        perks: ["Priority boarding", "Gacha voucher"],
      },
    ],
    animeExclusivePerks: ["Limited-edition boarding pass"],
  },
];

export const mockRestaurants: Restaurant[] = [
  {
    id: "rest-ramen-03",
    name: "Starlight Ramen Lab",
    location: "Akihabara, Tokyo",
    cuisine: ["Ramen", "Izakaya"],
    priceRange: "$$",
    rating: 4.6,
    availableReservationSlots: ["2024-11-03T19:30:00Z", "2024-11-03T21:00:00Z"],
    animeExclusivePerks: ["Chef collaboration menu", "Studio poster"],
  },
];

export const mockUsers: User[] = [
  {
    id: "user-1001",
    name: "Aiko Tanaka",
    email: "aiko.tanaka@example.com",
    homeAirport: "SFO",
    membershipTier: "Platinum",
    preferences: {
      preferredSeat: "Window",
      preferredCuisines: ["Ramen", "Sushi"],
      prefersAnimeThemes: true,
    },
    rewardsId: "rewards-1001",
  },
];

export const mockRewards: Rewards[] = [
  {
    id: "rewards-1001",
    userId: "user-1001",
    pointsBalance: 48250,
    tier: "Platinum",
    availablePerks: ["Anime lounge access", "Priority merch drop"],
    transactions: [
      {
        id: "txn-1",
        date: "2024-10-02",
        pointsChange: 4200,
        description: "Flight booking bonus",
      },
      {
        id: "txn-2",
        date: "2024-10-10",
        pointsChange: -12000,
        description: "Redeemed for studio tour",
      },
    ],
  },
];
