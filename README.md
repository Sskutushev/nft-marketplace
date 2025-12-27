# NFT Marketplace

A modern, responsive NFT marketplace frontend built with Next.js 14 and React.

## Features

- Responsive design (Desktop, Tablet, Mobile)
- GSAP animations for smooth transitions
- Real-time NFT data from CoinGecko API
- Interactive carousel with countdown timers
- Redux state management
- Docker deployment support

## Advanced Features

### Real-Time Updates
- WebSocket integration for live NFT price updates
- Automatic reconnection with exponential backoff
- Live badge indicator on cards

### Progressive Web App (PWA)
- Full offline support with Service Workers
- Installable on mobile and desktop devices
- Optimized caching strategy for assets
- App-like experience with standalone mode

### Advanced Animations
- **GSAP**: Timeline-based hero animations
- **Canvas API**: Interactive particle background with 60 FPS performance
- **requestAnimationFrame**: Smooth counter animations with easing
- Performance optimized for mobile devices

### Performance Optimizations
- **React.memo**: Component memoization to prevent unnecessary re-renders
- **useMemo**: Expensive calculation caching
- **Performance Monitor**: Real-time performance tracking in development
- **Bundle Analysis**: Size optimization with @next/bundle-analyzer
- **Lazy Loading**: Intersection Observer for on-demand loading

### Production Ready
- Error Boundaries for graceful error handling
- TypeScript strict mode enabled
- Comprehensive test coverage (Unit + E2E + Integration)
- Docker multi-stage build for optimal image size
- Service Worker for offline functionality

## Performance Metrics

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: < 250KB gzipped (main bundle)
- **Animation FPS**: 60 FPS on all devices

## Tech Stack

**Core**
- Next.js 14 (App Router)
- TypeScript (strict mode)
- React 18

**State Management**
- Redux Toolkit
- React hooks (useState, useEffect, useMemo, useCallback)

**Styling**
- SCSS Modules
- CSS Variables
- Responsive Design (Mobile-first)

**Animations**
- GSAP (Timeline animations)
- Canvas API (Particle system)
- requestAnimationFrame (Counter animations)

**Real-Time**
- WebSocket (coincap.io API)
- Automatic reconnection

**PWA**
- next-pwa
- Service Workers
- Web App Manifest

**Testing**
- Jest (Unit tests)
- React Testing Library
- Playwright (E2E tests)

**Code Quality**
- ESLint
- Prettier
- TypeScript

**Performance**
- React.memo
- useMemo / useCallback
- Bundle Analyzer
- Performance Monitor

**DevOps**
- Docker (multi-stage build)
- Docker Compose
- Healthcheck

## How to Use Advanced Features

### WebSocket Real-Time Updates
- Live price updates happen automatically
- Look for the "LIVE" badge on NFT cards

### PWA Installation
```bash
```

### Performance Monitoring
```bash
```

### Bundle Analysis
```bash
npm run analyze
```

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

3. Visit  http://localhost:3000

## Docker Deployment

Build and run with Docker:
```bash
docker-compose build

docker-compose up -d
```

## Advanced Commands

```bash
npm run analyze

npm run build
npm run start

npm run test:coverage
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
