const destinations = [
  {
    name: 'Kyoto',
    description: 'Temple-hopping, cozy ryokan stays, and river walks.',
  },
  {
    name: 'Hokkaido',
    description: 'Powdery slopes, hot springs, and winter festivals.',
  },
  {
    name: 'Okinawa',
    description: 'Island beaches, tropical eats, and coral reef dives.',
  },
];

const versionOneFeatures = [
  {
    title: 'Anime Scene Itinerary Builder',
    description:
      'Map iconic scenes to real-world stops, then drag-and-drop them into a day-by-day plan.',
  },
  {
    title: 'Template Library for Iconic Trips',
    description:
      'Browse curated journeys by anime title, mood, and trip length to jump-start planning.',
  },
  {
    title: 'Integrated Booking Hub',
    description:
      'Compare flights, hotels, and restaurants with anime-exclusive perks in one flow.',
  },
  {
    title: 'Rewards & Perks Tracker',
    description:
      'Collect stamps, unlock merch drops, and keep your points balance in view.',
  },
  {
    title: 'Scene Capture Checklist',
    description:
      'Save must-see spots, track progress, and share your completed anime-inspired quest.',
  },
  {
    title: 'Community Sharing',
    description:
      'Publish your itinerary, remix fan favorites, and follow other travelers.',
  },
];

export default function App() {
  return (
    <div className="app">
      <header className="hero">
        <p className="eyebrow">Travel App with Anime</p>
        <h1>Plan journeys inspired by your favorite anime worlds.</h1>
        <p className="subhead">
          Build itineraries, save scenes, and keep your travel checklist in one place.
        </p>
        <div className="actions">
          <button type="button">Start a new trip</button>
          <button type="button" className="button secondary">
            Explore templates
          </button>
          <a href="/prototype/index.html" className="button secondary">
            View Prototype
          </a>
        </div>
      </header>
      <section className="grid" aria-label="Featured destinations">
        {destinations.map((destination) => (
          <article key={destination.name} className="card">
            <h2>{destination.name}</h2>
            <p>{destination.description}</p>
            <button type="button" className="link">
              View itinerary
            </button>
          </article>
        ))}
      </section>
      <section className="feature-panel" aria-labelledby="version-one-title">
        <div>
          <p className="eyebrow">Version 1</p>
          <h2 id="version-one-title">New anime-first features</h2>
          <p className="subhead">
            The first release focuses on story-driven planning, community sharing, and
            anime-exclusive perks.
          </p>
        </div>
        <div className="feature-grid">
          {versionOneFeatures.map((feature) => (
            <article key={feature.title} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
