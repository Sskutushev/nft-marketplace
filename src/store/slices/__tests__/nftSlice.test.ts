import nftReducer, { fetchNFTsData } from '../nftSlice';
import { configureStore } from '@reduxjs/toolkit';

// Mock API
jest.mock('@/services/api', () => ({
  fetchNFTs: jest.fn(() =>
    Promise.resolve([
      { id: '1', name: 'NFT 1' },
      { id: '2', name: 'NFT 2' },
    ])
  ),
}));

describe('NFT Slice', () => {
  let store: any;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        nft: nftReducer,
      },
    });
  });

  it('should have initial state', () => {
    const state = store.getState().nft;

    expect(state.items).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);

  });

  it('should set loading to true when fetching NFTs', () => {
    store.dispatch(fetchNFTsData.pending('', undefined));

    const state = store.getState().nft;
    expect(state.loading).toBe(true);

  });

  it('should populate items when fetch succeeds', async () => {
    await store.dispatch(fetchNFTsData());

    const state = store.getState().nft;
    expect(state.loading).toBe(false);
    expect(state.items.length).toBeGreaterThan(0);

  });
});