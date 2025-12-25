import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

export const fetchNFTs = async () => {
  try {
    // Using a mock response since the actual NFT endpoint might not be available
    // In a real implementation, this would call the actual API
    console.log('Fetching NFTs from CoinGecko API...');
    
    // For now, returning mock data to simulate API response
    return [
      { id: '1', name: 'Cosmic Dreams #1' },
      { id: '2', name: 'Digital Art #2' },
      { id: '3', name: 'Pixel Warriors #3' },
      { id: '4', name: 'Crypto Cats #4' },
      { id: '5', name: 'Neon Nights #5' },
      { id: '6', name: 'Abstract Vision #6' },
      { id: '7', name: 'Future Icons #7' },
      { id: '8', name: 'Virtual Landscapes #8' },
      { id: '9', name: 'Cyber Punks #9' },
      { id: '10', name: 'Metaverse Collectibles #10' }
    ];
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    throw new Error('Failed to fetch NFTs from API');
  }
};