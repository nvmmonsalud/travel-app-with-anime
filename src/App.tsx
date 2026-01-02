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
          <button type="button" className="secondary">
            Explore templates
          </button>
        </div>
      </header>
      <section className="grid">
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
    </div>
  );
}
