'use client';

import { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver'; // Assuming this hook is still needed for animation
import styles from './CreateSection.module.scss';

const CreateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 }); // Keep animation logic if needed

  return (
    <section ref={sectionRef} className={`${styles.createSection} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.createContainer}>
        <div className={styles.leftBlock}>
          <h2 className={styles.title}>Create and Sell NFTs</h2>
          <p className={styles.subtitle}>world&apos;s Largest NFT Place</p>

          <div className={styles.buttonGroup}>
            <button className={styles.exploreButton}>Explore More</button>
            <button className={styles.sellButton}>Sell Atwork</button>
          </div>
        </div>

        {/* This image is part of the main container on desktop/tablet, but separates on mobile */}
        <div className={styles.imageBlock}>
          <Image
            src="/images/Group 427320345.svg"
            alt="Create NFT"
            width={369}
            height={249}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: 'contain' }}
            className={styles.createImage}
          />
        </div>
      </div>
      {/* On mobile, this image might be separate, but currently it's inside the .createContainer for desktop/tablet layout */}
    </section>
  );
};

export default CreateSection;
