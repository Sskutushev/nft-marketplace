# NFT Marketplace Landing Page

A responsive NFT marketplace landing page built with Next.js 14, Redux Toolkit, SCSS, and GSAP animations.

## What's inside

- GSAP animations for smooth transitions
- Fully responsive (Desktop / Tablet / Mobile)
- NFT carousel with live data
- Hover effects on buttons and navigation
- Docker support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **State Management**: Redux Toolkit
- **Styling**: SCSS Modules
- **Animations**: GSAP
- **Carousel**: Swiper.js
- **Language**: TypeScript

## How to run

### You need:
- Node.js 18+
- npm

### Steps:
1. Install dependencies:
```bash
npm install
```

2. Run in development mode:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

### With Docker:
```bash
# Build image
docker-compose build

# Run container
docker-compose up -d
```

## Project Structure
```
nft-marketplace/
├── public/              # Static files
├── src/
│   ├── app/            # Next.js pages
│   ├── components/     # React components
│   ├── store/          # Redux store
│   ├── services/       # API calls
│   ├── utils/          # Helper functions
│   ├── types/          # TypeScript types
│   └── styles/         # Global styles
├── Dockerfile
└── docker-compose.yml
```

## Key Features

### Header
- Fixed position that changes on scroll
- Mobile menu with smooth animations

### Hero Section
- Text animations that appear in sequence
- Images slide in from the right
- Responsive buttons with hover effects

### Carousel
- Shows NFT cards with real API data
- Live countdown timers
- Auto-rotating with swipe support

### Create Section
- Call-to-action buttons with hover effects
- Responsive layout

## Responsive breakpoints
- Desktop: 1440px
- Tablet: 1024px
- Mobile: 375px

## License
MIT
