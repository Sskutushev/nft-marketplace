'use client';

import { useRef } from 'react';
import Image from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './CreateSection.module.scss';

const CreateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.create} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.banner}>
          <div className={styles.content}>
            <p className={styles.subtitle}>World&apos;s Largest NFT Place</p>
            <h2 className={styles.title}>Create and Sell NFTs</h2>

            <div className={styles.actions}>
              <button className={styles.btnPrimary}>
                Explore More
              </button>
              <button className={styles.btnSecondary}>
                Sell Artwork
              </button>
            </div>
          </div>

          <div className={styles.imageWrapper}>
            <Image
              src="/images/hero/create-nft.png"
              alt="Create NFT"
              className={styles.createImage}
              width={500}
              height={500}
              layout="responsive"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateSection;
