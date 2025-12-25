export interface NFTItem {
  id: string;
  name: string;
  image: string;
  currentBid: string;
  endTime: string; // используем строку вместо Date для сериализации
}

export interface NFTState {
  items: NFTItem[];
  loading: boolean;
  error: string | null;
}