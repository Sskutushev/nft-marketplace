import { configureStore } from '@reduxjs/toolkit';
import nftReducer from './slices/nftSlice';

export const store = configureStore({
  reducer: {
    nft: nftReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['nft/fetchNFTs/pending', 'nft/fetchNFTs/fulfilled', 'nft/fetchNFTs/rejected'],
        ignoredPaths: ['nft.items'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;