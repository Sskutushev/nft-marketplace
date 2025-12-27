import { render, screen } from '@testing-library/react';
import CreateSection from '../CreateSection';

// Mock the useIntersectionObserver hook
jest.mock('@/hooks/useIntersectionObserver', () => ({
  __esModule: true,
  default: () => true, 
}));

describe('CreateSection Component', () => {
  it('renders title and subtitle', () => {
    render(<CreateSection />);

    expect(screen.getByText('Create and Sell NFTs')).toBeInTheDocument();
    expect(screen.getByText("world's Largest NFT Place")).toBeInTheDocument();

  });

  it('renders both action buttons', () => {
    render(<CreateSection />);

    expect(screen.getByText('Explore More')).toBeInTheDocument();
    expect(screen.getByText('Sell Atwork')).toBeInTheDocument();

  });

  it('renders image', () => {
    render(<CreateSection />);

    const image = screen.getByAltText('Create NFT');
    expect(image).toBeInTheDocument();

  });
});