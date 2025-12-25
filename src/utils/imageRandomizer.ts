const NFT_IMAGES = [
  '/images/nft-cards/nft-1.png',
  '/images/nft-cards/nft-2.png',
  '/images/nft-cards/nft-3.png',
  '/images/nft-cards/nft-4.png',
  '/images/nft-cards/nft-5.png',
];

export const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * NFT_IMAGES.length);
  return NFT_IMAGES[randomIndex];
};