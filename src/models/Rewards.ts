export interface RewardsTransaction {
  id: string;
  date: string;
  pointsChange: number;
  description: string;
}

export interface Rewards {
  id: string;
  userId: string;
  pointsBalance: number;
  tier: string;
  availablePerks: string[];
  transactions: RewardsTransaction[];
}
