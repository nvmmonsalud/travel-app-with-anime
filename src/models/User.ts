export interface UserPreferences {
  preferredSeat: string;
  preferredCuisines: string[];
  prefersAnimeThemes: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  homeAirport: string;
  membershipTier: string;
  preferences: UserPreferences;
  rewardsId: string;
}
