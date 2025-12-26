'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './NFTCard.module.scss';
import { NFTItem } from '@/types/nft.types';

const nftImages = [
  "/images/nft-cards/nft-card-1.svg",
  "/images/nft-cards/nft-card-2.svg",
  "/images/nft-cards/nft-card-3.svg",
  "/images/nft-cards/nft-card-4.svg",
  "/images/nft-cards/nft-card-5.svg",
  "/images/nft-cards/nft-card-1.svg", // Дополнительный элемент
  "/images/nft-cards/nft-card-2.svg", // Дополнительный элемент
  "/images/nft-cards/nft-card-3.svg", // Дополнительный элемент
];

interface NFTCardProps {
  nft: NFTItem;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const [timeLeft, setTimeLeft] = useState('');
  const [randomImageSrc, setRandomImageSrc] = useState('');

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

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        {randomImageSrc && (
          <Image src={randomImageSrc} alt={nft.name} layout="fill" objectFit="cover" className={styles.image} />
        )}
        <div className={styles.timer}>{timeLeft}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{nft.name}</h3>

        <div className={styles.bidInfo}>
          <div className={styles.currentBid}>
            <span className={styles.label}>Current bid</span>
            <div className={styles.price}>
              <Image src="/images/nft-cards/mdi_ethereum.svg" alt="Ethereum icon" width={22} height={22} className={styles.ethIcon} />
              <span>{nft.currentBid}</span>
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

export default NFTCard;
