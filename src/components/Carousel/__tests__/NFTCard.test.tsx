import { render, screen } from '@testing-library/react';
import NFTCard from '../NFTCard';
import { NFTItem } from '@/types/nft.types';

const mockNFT: NFTItem = {
  id: '1',
  name: 'Test NFT #1',
  image: '/test-image.png',
  currentBid: '2.5',
  endTime: new Date(Date.now() + 86400000).toISOString(), 
};

describe('NFTCard Component', () => {
  it('renders NFT name', () => {
    render(<NFTCard nft={mockNFT} />);

    expect(screen.getByText('Test NFT #1')).toBeInTheDocument();

  });

  it('displays current bid', () => {
    render(<NFTCard nft={mockNFT} />);

    expect(screen.getByText('2.5')).toBeInTheDocument();
    expect(screen.getByText('Current bid')).toBeInTheDocument();

  });

  it('shows countdown timer', () => {
    render(<NFTCard nft={mockNFT} />);

    const timer = screen.getByText(/\d{2}h \d{2}m \d{2}s/);
    expect(timer).toBeInTheDocument();

  });

  it('renders Place Bid button', () => {
    render(<NFTCard nft={mockNFT} />);

    const button = screen.getByText('PLACE BID');
    expect(button).toBeInTheDocument();

  });
});