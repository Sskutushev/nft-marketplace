import '@testing-library/jest-dom';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props) => {
    return <img {...props} />;
  },
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
class IntersectionObserver {
  constructor(callback, options) {
    this.callback = callback;
    this.options = options;
    this.thresholds = options?.threshold || [0];
    this.root = options?.root || null;
    this.rootMargin = options?.rootMargin || '0px';
  }

  observe = (element) => {
    this.callback([{ isIntersecting: true, target: element }], this);
  };

  unobserve = () => {};

  disconnect = () => {};
}

window.IntersectionObserver = IntersectionObserver;