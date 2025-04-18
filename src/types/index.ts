export interface Destination {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  rating: number;
  tags: string[];
  savedCount: number;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  duration: string;
  price: string;
  tags: string[];
  rating: number;
}

export interface Itinerary {
  id: string;
  title: string;
  days: ItineraryDay[];
  totalCost: string;
}

export interface ItineraryDay {
  day: number;
  activities: ItineraryActivity[];
}

export interface ItineraryActivity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string;
  imageUrl: string;
  duration: string;
}

export interface UserProfile {
  name: string;
  avatar: string;
  savedDestinations: string[];
  trips: Itinerary[];
  preferences: string[];
}