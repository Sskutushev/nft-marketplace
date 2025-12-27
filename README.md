# NFT Marketplace

A modern, responsive NFT marketplace frontend built with Next.js 14 and React.

## Features

- Responsive design (Desktop, Tablet, Mobile)
- GSAP animations for smooth transitions
- Real-time NFT data from CoinGecko API
- Interactive carousel with countdown timers
- Redux state management
- Docker deployment support

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: SCSS Modules
- **State Management**: Redux Toolkit
- **Animations**: GSAP
- **Carousel**: Swiper.js
- **Testing**: Jest, React Testing Library, Playwright

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Visit [http://localhost:3000](http://localhost:3000)

## Docker Deployment

Build and run with Docker:
```bash
# Build the image
docker-compose build

# Start the container
docker-compose up -d
```

## Project Structure

```
src/
├── app/                # Next.js app router pages
├── components/         # Reusable UI components
│   ├── Carousel/       # NFT carousel
│   ├── CreateSection/  # Create NFT section
│   ├── Footer/         # Footer component
│   ├── Header/         # Header with navigation
│   └── Hero/           # Hero section with animations
├── hooks/              # Custom React hooks
├── services/           # API services
├── store/              # Redux store
├── styles/             # Global styles and mixins
├── types/              # TypeScript type definitions
└── utils/              # Utility functions
```

## Key Components

### Header
- Responsive navigation
- Mobile menu toggle
- Scroll detection

### Hero Section
- Animated text elements
- Responsive image layout
- Performance optimized animations

### NFT Carousel
- Real-time data fetching
- Countdown timers
- Interactive navigation

## Testing

Run unit tests:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run E2E tests:
```bash
npm run test:e2e
```

## Build

Create production build:
```bash
npm run build
```

## License

MIT
