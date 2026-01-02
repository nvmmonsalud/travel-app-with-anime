# Travel App API (Mock)

This document captures planned endpoints for early UI development. All endpoints return mock data for now.

## Hotels

- `GET /api/hotels` - List hotels (supports `location`, `checkIn`, `checkOut`, `guests` query params).
- `GET /api/hotels/:id` - Hotel detail including availability and pricing.
- `POST /api/hotels/:id/book` - Create a hotel booking.

## Flights

- `GET /api/flights` - Search flights (`origin`, `destination`, `date`, `passengers`).
- `GET /api/flights/:id` - Flight detail with segments and fare classes.
- `POST /api/flights/:id/book` - Book a flight fare.

## Restaurants

- `GET /api/restaurants` - List restaurants (`location`, `cuisine`, `date`).
- `GET /api/restaurants/:id` - Restaurant detail and reservation slots.
- `POST /api/restaurants/:id/reservations` - Reserve a table.

## Rewards

- `GET /api/rewards/:userId` - Retrieve rewards balance and perks.
- `POST /api/rewards/:userId/redeem` - Redeem points for a perk.

## Users

- `GET /api/users/:id` - Retrieve user profile and preferences.
- `PATCH /api/users/:id` - Update user preferences.
