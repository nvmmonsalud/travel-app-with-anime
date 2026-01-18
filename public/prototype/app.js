const dataSets = {
  hotels: [
    {
      id: "starlight-onsen",
      name: "Starlight Onsen Resort",
      location: "Kyoto, Japan",
      price: 280,
      rating: 4.9,
      amenities: ["onsen", "spa", "wifi"],
      vibe: "Celestial zen suites with sakura views.",
    },
    {
      id: "neon-skyline",
      name: "Neon Skyline Hotel",
      location: "Seoul, South Korea",
      price: 180,
      rating: 4.6,
      amenities: ["gym", "wifi", "rooftop"],
      vibe: "Cyberpunk skyline rooms and ramen bar.",
    },
    {
      id: "cloud-castle",
      name: "Cloud Castle Ryokan",
      location: "Hakone, Japan",
      price: 230,
      rating: 4.7,
      amenities: ["onsen", "garden", "koi"],
      vibe: "Tatami suites with koi pond tea service.",
    },
  ],
  flights: [
    {
      id: "sakura-express",
      name: "Sakura Express",
      route: "LAX → NRT",
      price: 920,
      rating: 4.8,
      stops: "nonstop",
      cabin: "business",
      airline: "SkyPetal Air",
    },
    {
      id: "moonlight-connection",
      name: "Moonlight Connection",
      route: "SFO → ICN",
      price: 640,
      rating: 4.4,
      stops: "1 stop",
      cabin: "economy",
      airline: "Lunar Wings",
    },
    {
      id: "anime-arc",
      name: "Anime Arc",
      route: "JFK → HND",
      price: 780,
      rating: 4.6,
      stops: "nonstop",
      cabin: "premium",
      airline: "MangaJet",
    },
  ],
  restaurants: [
    {
      id: "ramen-constellation",
      name: "Ramen Constellation",
      location: "Osaka, Japan",
      price: 35,
      rating: 4.9,
      cuisine: "ramen",
      vibe: "Chef-curated broth flight with anime projections.",
    },
    {
      id: "gilded-sushi",
      name: "Gilded Sushi Theater",
      location: "Tokyo, Japan",
      price: 55,
      rating: 4.8,
      cuisine: "sushi",
      vibe: "Omakase stages with hologram plating.",
    },
    {
      id: "starbento",
      name: "Starbento Café",
      location: "Taipei, Taiwan",
      price: 28,
      rating: 4.5,
      cuisine: "bento",
      vibe: "Cosplay-friendly lounge with artisan tea pairings.",
    },
  ],
};

const verticalMeta = {
  hotels: {
    searchLabel: "Search by city or hotel",
    priceRanges: [
      { label: "Under $200", min: 0, max: 199 },
      { label: "$200 - $250", min: 200, max: 250 },
      { label: "$250+", min: 251, max: 999 },
    ],
  },
  flights: {
    searchLabel: "Search by route or airline",
    priceRanges: [
      { label: "Under $700", min: 0, max: 699 },
      { label: "$700 - $850", min: 700, max: 850 },
      { label: "$850+", min: 851, max: 2000 },
    ],
  },
  restaurants: {
    searchLabel: "Search by cuisine or city",
    priceRanges: [
      { label: "Under $30", min: 0, max: 29 },
      { label: "$30 - $45", min: 30, max: 45 },
      { label: "$45+", min: 46, max: 150 },
    ],
  },
};

const pageType = document.body.dataset.page;

function createResultCard(item, type) {
  if (type === "hotels") {
    return `
      <div class="result-card">
        <div>
          <h3>${item.name}</h3>
          <small>${item.location}</small>
        </div>
        <div class="badge">⭐ ${item.rating} · $${item.price}/night</div>
        <p>${item.vibe}</p>
        <div class="result-actions">
          <a class="button" href="hotel-detail.html">View details</a>
          <span class="badge">${item.amenities.join(" · ")}</span>
        </div>
      </div>
    `;
  }

  if (type === "flights") {
    return `
      <div class="result-card">
        <div>
          <h3>${item.name}</h3>
          <small>${item.route}</small>
        </div>
        <div class="badge">⭐ ${item.rating} · $${item.price}</div>
        <p>${item.airline} · ${item.cabin} · ${item.stops}</p>
        <div class="result-actions">
          <a class="button" href="flight-detail.html">View details</a>
          <span class="badge">Anime lounge access</span>
        </div>
      </div>
    `;
  }

  if (type === "restaurants") {
    return `
      <div class="result-card">
        <div>
          <h3>${item.name}</h3>
          <small>${item.location}</small>
        </div>
        <div class="badge">⭐ ${item.rating} · $${item.price} avg</div>
        <p>${item.vibe}</p>
        <div class="result-actions">
          <a class="button" href="restaurant-detail.html">View details</a>
          <span class="badge">${item.cuisine}</span>
        </div>
      </div>
    `;
  }

  return "";
}

function filterItems(items, query, filters, type) {
  const normalized = query.trim().toLowerCase();

  return items.filter((item) => {
    const inQuery = normalized
      ? JSON.stringify(item).toLowerCase().includes(normalized)
      : true;

    const priceMatch =
      !filters.priceRange ||
      (item.price >= filters.priceRange.min && item.price <= filters.priceRange.max);

    if (type === "hotels") {
      const amenitiesMatch = filters.amenities.length
        ? filters.amenities.every((amenity) => item.amenities.includes(amenity))
        : true;
      return inQuery && priceMatch && amenitiesMatch;
    }

    if (type === "flights") {
      const stopsMatch = filters.stops ? item.stops === filters.stops : true;
      const cabinMatch = filters.cabin ? item.cabin === filters.cabin : true;
      return inQuery && priceMatch && stopsMatch && cabinMatch;
    }

    if (type === "restaurants") {
      const cuisineMatch = filters.cuisine ? item.cuisine === filters.cuisine : true;
      return inQuery && priceMatch && cuisineMatch;
    }

    return inQuery && priceMatch;
  });
}

function getFilters(type) {
  const priceValue = document.querySelector("[data-filter=price]")?.value;
  const priceRange =
    priceValue && verticalMeta[type]
      ? verticalMeta[type].priceRanges[Number(priceValue)]
      : null;

  if (type === "hotels") {
    const amenities = Array.from(
      document.querySelectorAll("input[name=amenities]:checked")
    ).map((input) => input.value);
    return { priceRange, amenities };
  }

  if (type === "flights") {
    return {
      priceRange,
      stops: document.querySelector("input[name=stops]:checked")?.value || "",
      cabin: document.querySelector("input[name=cabin]:checked")?.value || "",
    };
  }

  if (type === "restaurants") {
    return {
      priceRange,
      cuisine: document.querySelector("input[name=cuisine]:checked")?.value || "",
    };
  }

  return { priceRange };
}

function renderResults(type) {
  const query = document.querySelector("#search")?.value || "";
  const filters = getFilters(type);
  const results = filterItems(dataSets[type], query, filters, type);
  const list = document.querySelector(".results-list");
  const count = document.querySelector("#results-count");

  if (!list || !count) {
    return;
  }

  count.textContent = `${results.length} experiences found`;
  list.innerHTML = results.map((item) => createResultCard(item, type)).join("");
}

if (pageType && dataSets[pageType]) {
  window.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#search");
    const filterInputs = document.querySelectorAll("input, select");

    renderResults(pageType);

    searchInput?.addEventListener("input", () => renderResults(pageType));
    filterInputs.forEach((input) =>
      input.addEventListener("change", () => renderResults(pageType))
    );
  });
}
