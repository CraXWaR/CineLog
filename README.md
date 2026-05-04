# 🎬 CineLog
> Your personal movie diary and social watch tracker. Log what you've watched and see what everyone is watching.

---

## What it does
 
- **Movie Logging** — Search any movie and add it to your Watched list or save it to Watch Later.
- **Social Feed** — See what all users are watching in real time.
- **Friends** — Send and remove friend requests to connect with other users.
- **Profile** — View your watched movies and watch later list on your profile.

---

## Stack

| Layer | Tech |
|-------|------|
| Language | TypeScript |
| Backend | Node.js, Express |
| Database | PostgreSQL, Prisma |
| Frontend | React |
| Auth | JWT |
| Movie Data | TMDB API |

---

## Getting Started

```bash
# Clone
git clone https://github.com/your-username/cinelog.git

# Backend
cd server && npm install
cp .env.example .env   # fill in PORT, DATABASE_URL, JWT_SECRET, JWT_REFRESH_SECRET, TMDB_API_KEY
npx prisma migrate dev
npm run dev

# Frontend
cd ../client && npm install
npm run dev
```

---

## Seed Database

Run the seeder to populate the database with a default test user:

```bash
cd server
npx prisma db seed
```

**Default test credentials:**
```
Email: test@gmail.com
Password: 123
```

> Seed data is defined in `prisma/seeders/seed.ts`.

---

## Environment Variables

```env
DATABASE_URL=postgresql://user:password@localhost:5432/cinelog
JWT_SECRET=your_secret_here
JWT_REFRESH_SECRET=your_refresh_secret_here
PORT=8080
TMDB_API_KEY=your_tmdb_api_key_here
```

---

## Project Structure

```
cinelog/
├── client/
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── helpers/
│       ├── hooks/
│       ├── layouts/
│       ├── pages/
│       ├── services/
│       ├── types/
│       └── utils/
│
└── server/
    ├── prisma/
    └── src/
        ├── config/
        ├── controllers/
        ├── db/
        ├── interfaces/
        ├── middlewares/
        ├── routes/
        ├── seeders/
        ├── services/
        ├── types/
        └── validators/
```

---

## API Endpoints
 
**User**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/user/register` | Register new user | No |
| POST | `/api/user/login` | Login, receive JWT | No |
| POST | `/api/user/refresh` | Refresh JWT token | No |
| GET | `/api/user/:publicId` | Get public profile | No |
| GET | `/api/user/:publicId/movies` | Get profile movies | No |
 
**Movies**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/movies/trending` | Get trending movies | No |
| GET | `/api/movies/genres` | Get movie genres | No |
| GET | `/api/movies/discover` | Discover movies | No |
| GET | `/api/movies/search` | Search movies | No |
| GET | `/api/movies/:tmdbId` | Get movie by ID | No |
 
**Watched**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/watched` | Add to watched list | Yes |
| GET | `/api/watched/check/:tmdbId` | Check if watched | Yes |
 
**Watch Later**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/watch-later` | Add to watch later | Yes |
| GET | `/api/watch-later/check/:tmdbId` | Check if in watch later | Yes |
| DELETE | `/api/watch-later/:tmdbId` | Remove from watch later | Yes |
 
**Friends**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/friends/get-friends/:publicId` | Get user's friends | No |
| GET | `/api/friends/status/:publicId` | Get friendship status | Yes |
| POST | `/api/friends/request` | Send friend request | Yes |
| DELETE | `/api/friends/request/:publicId` | Cancel friend request | Yes |
| PATCH | `/api/friends/accept/:publicId` | Accept friend request | Yes |
| DELETE | `/api/friends/:publicId` | Remove friend | Yes |
 
**Notifications**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/notification` | Get notifications | Yes |
| DELETE | `/api/notification/:id` | Dismiss notification | Yes |
 
**Activity**
| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/api/activity/feed` | Get friends' feed | No |
| GET | `/api/activity/all-feeds` | Get all activity | No |

---

## Roadmap
 
- [x] Auth & JWT
- [x] Movie search with genre filters
- [x] Discover & trending movies (TMDB)
- [x] Watched list & Watch Later (tracked on profile)
- [x] Profile with add/remove friends
- [x] Notifications
- [x] Dynamic social feed
- [ ] AI movie suggestions
- [ ] Personal reviews
