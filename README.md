# NFT Marketplace Landing Page

Modern, fully responsive NFT marketplace landing page built with Next.js 14, Redux Toolkit, SCSS, and GSAP animations.

## Features

- Smooth GSAP animations
- Fully responsive design (Desktop / Tablet / Mobile)
- Pixel-perfect implementation
- Infinite carousel with real API data
- Live countdown timers for NFT cards
- Interactive hover states
- Optimized performance
- Docker support

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **State Management**: Redux Toolkit
- **Styling**: SCSS Modules
- **Animations**: GSAP
- **Carousel**: Swiper.js
- **Language**: TypeScript
- **API**: CoinGecko NFT API

## Installation

### Prerequisites
- Node.js 18+
- npm or yarn

### Local Development

1. Clone repository:
```bash
git clone https://github.com/username/nft-marketplace.git
cd nft-marketplace
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Docker Deployment

1. Build image:
```bash
docker-compose build
```

2. Run container:
```bash
docker-compose up -d
```

3. Access at [http://localhost:3000](http://localhost:3000)

## Project Structure
```
nft-marketplace/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   ├── components/     # React components
│   ├── store/          # Redux store
│   ├── services/       # API services
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   └── styles/         # Global styles
├── Dockerfile
├── docker-compose.yml
└── README.md
```
## Design Specifications
### Breakpoints

- Desktop: 1440px (base)
- Tablet: 1024px
- Mobile: 375px
- Large screens: 1920px+ (scaled)

### Color Palette

- Primary Black: #141416
- Hover Black: #222222
- White: #FFFFFF
- Background: #F8F8F8
- Carousel BG: #F1F1F1

### Typography

- Poppins: Primary font (10px - 76px)
- Inter: Navigation, footer (12px - 18px)
- Outfit: CTA buttons (10px - 21px)
- Public Sans: Statistics (36px)

## Features Breakdown
### Header

- Fixed positioning with scroll effects
- Transparent to white background transition
- Responsive burger menu for mobile
- Smooth navigation transitions

### Hero Section

- Staggered text animations (200-300ms delays)
- Images slide in from right
- Responsive typography scaling
- Interactive CTA buttons

### Carousel Section

- Real-time data from CoinGecko API
- Random image assignment
- Live countdown timers
- Generated bid prices
- Infinite loop
- Swipe/drag support
- Responsive card scaling

### Create Section

- Call-to-action banner
- Hover animations
- Responsive button layout

### Footer

- Multi-column layout
- Social media links
- Responsive stacking

## Performance Optimizations

- Image optimization with Next.js Image component
- Code splitting
- Lazy loading
- SCSS modules for scoped styling
- Redux Toolkit for efficient state management
- Memoized components where needed

## License
This project is licensed under the MIT License.
