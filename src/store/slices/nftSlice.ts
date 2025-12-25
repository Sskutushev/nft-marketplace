import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNFTs } from '@/services/api';
import { getRandomImage } from '@/utils/imageRandomizer';
import { generateRandomBid, generateRandomEndTime } from '@/utils/dataGenerators';
import { NFTState, NFTItem } from '@/types/nft.types';

export const fetchNFTsData = createAsyncThunk(
  'nft/fetchNFTs',
  async () => {
    const data = await fetchNFTs();

    // Take first 10 NFTs and add generated data
    return data.slice(0, 10).map((nft: any) => ({
      id: nft.id,
      name: nft.name,
      image: getRandomImage(),
      currentBid: generateRandomBid(),
      endTime: generateRandomEndTime(),
    }));
  }
);

const initialState: NFTState = {
  items: [],
  loading: false,
  error: null,
};

const nftSlice = createSlice({
  name: 'nft',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNFTsData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchNFTsData.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchNFTsData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to load NFTs';
      });
  },
});

export default nftSlice.reducer;