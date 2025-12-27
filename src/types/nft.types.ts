export interface NFTItem {
  id: string;
  name: string;
  image: string;
  currentBid: string;
  endTime: string; 
}

export interface NFTState {
  items: NFTItem[];
  loading: boolean;
  error: string | null;
}