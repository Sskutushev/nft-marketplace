'use client';

import { useState, useEffect } from 'react';
import NextImage from 'next/image';
import styles from './NFTCard.module.scss';
import { NFTItem } from '@/types/nft.types';
import { NFTWebSocketService } from '@/services/websocket';

interface NFTCardProps {
  nft: NFTItem;
}

const nftImages = [
  "/images/nft-cards/nft-card-1.svg",
  "/images/nft-cards/nft-card-2.svg",
  "/images/nft-cards/nft-card-3.svg",
  "/images/nft-cards/nft-card-4.svg",
  "/images/nft-cards/nft-card-5.svg",
  "/images/nft-cards/nft-card-1.svg",
  "/images/nft-cards/nft-card-2.svg",
  "/images/nft-cards/nft-card-3.svg",
];

const NFTCard = ({ nft }: NFTCardProps) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [randomImageSrc, setRandomImageSrc] = useState('');
  const [livePrice, setLivePrice] = useState<string>(nft.currentBid);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * nftImages.length);
    setRandomImageSrc(nftImages[randomIndex]);
  }, []);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(nft.endTime).getTime();
      const difference = end - now;

      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(
          `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`
        );
      } else {
        setTimeLeft('Ended');
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, [nft.endTime]);

  // WebSocket для live updates
  useEffect(() => {
    const wsService = new NFTWebSocketService();
    let updateInterval: NodeJS.Timeout;
    let isMounted = true; 

    wsService.connect(
      (data) => {
        if (isMounted && data.ethereum) {
          setIsLive(true);
          // Simulate price fluctuation based on Ethereum price
          const fluctuation = (Math.random() - 0.5) * 0.1; 
          const newPrice = (parseFloat(nft.currentBid) * (1 + fluctuation)).toFixed(2);
          setLivePrice(newPrice);
        }
      },
      (error) => {
        if (process.env.NODE_ENV === 'development') {
          console.error('WebSocket error:', error);
        }
        if (isMounted) {
          setIsLive(false);
        }
      }
    );

    // Fallback: update price every 5 seconds if WebSocket fails
    updateInterval = setInterval(() => {
      if (isMounted && !wsService.isConnected()) {
        const fluctuation = (Math.random() - 0.5) * 0.05;
        const newPrice = (parseFloat(nft.currentBid) * (1 + fluctuation)).toFixed(2);
        setLivePrice(newPrice);
      }
    }, 5000);

    return () => {
      isMounted = false;
      wsService.disconnect();
      clearInterval(updateInterval);
    };
  }, [nft.currentBid]);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {randomImageSrc && (
          <NextImage src={randomImageSrc} alt={nft.name} layout="fill" objectFit="cover" className={styles.image} />
        )}
        <div className={styles.timer}>{timeLeft}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{nft.name}</h3>

        <div className={styles.bidInfo}>
          <div className={styles.currentBid}>
            <span className={styles.label}>Current bid</span>
            <div className={styles.price}>
              <NextImage src="/images/nft-cards/mdi_ethereum.svg" alt="Ethereum icon" width={22} height={22} className={styles.ethIcon} />
              <span>{livePrice}</span>
              {isLive && <span className={styles.liveBadge}>LIVE</span>}
            </div>
          </div>
          <button className={styles.bidButton}>
            PLACE BID
          </button>
        </div>
      </div>
    </div>
  );
};

import { memo } from 'react';

export default memo(NFTCard, (prevProps, nextProps) => {
  // Only rerender if NFT data changed
  return (
    prevProps.nft.id === nextProps.nft.id &&
    prevProps.nft.currentBid === nextProps.nft.currentBid &&
    prevProps.nft.endTime === nextProps.nft.endTime
  );
});