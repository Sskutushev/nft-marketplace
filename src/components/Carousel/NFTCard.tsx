'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './NFTCard.module.scss';
import { NFTItem } from '@/types/nft.types';

interface NFTCardProps {
  nft: NFTItem;
}

const NFTCard = ({ nft }: NFTCardProps) => {
  const [timeLeft, setTimeLeft] = useState('');

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
        <Image src={nft.image} alt={nft.name} layout="fill" objectFit="cover" className={styles.image} />
        <div className={styles.timer}>{timeLeft}</div>
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{nft.name}</h3>

        <div className={styles.bidInfo}>
          <div className={styles.currentBid}>
            <span className={styles.label}>Current bid</span>
            <div className={styles.price}>
              <svg width="22" height="22" className={styles.ethIcon} viewBox="0 0 22 22">
                {/* Ethereum icon path - using placeholder for now */}
                <path d="M11 2L2 9l9 5 9-5-9-7z" fill="#141416"/>
                <path d="M11 2v14l9-5-9-7z" fill="#141416"/>
              </svg>
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
