# Product Roadmap: AnimeVoyage

## Phase 1: Foundation & Migration (Current Priority)
-   [ ] **Consolidate Codebase**: Move static prototype to a sub-directory and restore the React app entry point.
-   [ ] **Migrate Features**: Port the "Search" and "Listing" functionality for Hotels, Flights, and Restaurants from vanilla JS to React components.
-   [ ] **Backend Setup**: Initialize the `server/` directory with a basic Node.js/Express API to serve data, replacing hardcoded JS objects.

## Phase 2: Core Enhancements
-   [ ] **Interactive Map with Anime Overlays**:
    -   Integrate a map view (e.g., Mapbox or Google Maps) showing real-world locations alongside their anime counterparts.
    -   Allow filtering by Anime title.
-   [ ] **Gamified Rewards System**:
    -   Implement the "Rewards" page logic.
    -   Users earn XP/Points for booking trips or "checking in" at anime locations.
    -   Badges for completing specific "Anime Pilgrimages".

## Phase 3: Advanced Features
-   [ ] **AI-Powered Itinerary Generator**:
    -   Users input their favorite anime and travel dates.
    -   AI generates a day-by-day itinerary visiting relevant locations, themed cafes, and shops.
-   [ ] **Community Scene Capture**:
    -   Social feature allowing users to upload photos matching anime scenes (side-by-side comparison).
    -   Upvoting and commenting system.
-   [ ] **Real-time Booking Integration**:
    -   Connect with flight and hotel APIs (Amadeus, Expedia, etc.) for real pricing and availability.

## Phase 4: Mobile Expansion
-   [ ] **Mobile App**:
    -   Develop a React Native version of the app for on-the-go itinerary management and location check-ins.
