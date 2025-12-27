import axios from 'axios';

const API_BASE_URL = 'https://api.coingecko.com/api/v3';

interface CoinGeckoNFT {
  id: string;
  name: string;
}

export const fetchNFTs = async (): Promise<CoinGeckoNFT[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/nfts/list`, {
      params: {
        per_page: 10,
      },
    });

    // Map to required fields only
    return response.data.map((nft: any) => ({
      id: nft.id,
      name: nft.name,
    }));
  } catch (error) {
    console.error('Error fetching NFTs from CoinGecko:', error);

    // Fallback to mock data on API error
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
  }
};