'use client';

import { useRef, useState, useEffect } from 'react';
import NextImage from 'next/image';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './CreateSection.module.scss';

const CreateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });
  const [currentImageSrc, setCurrentImageSrc] = useState('/images/Group 427320345.svg'); // Default to desktop image

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 885) {
        setCurrentImageSrc('/images/Group 427320377.svg');
      } else {
        setCurrentImageSrc('/images/Group 427320345.svg');
      }
    };

    // Set initial image src
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty dependency array means this effect runs once on mount

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

        <div className={styles.imageBlock}>
          <NextImage
            src={currentImageSrc}
            alt="Create NFT"
            width={369} // Default desktop width, will be overridden by CSS
            height={249} // Default desktop height, will be overridden by CSS
            sizes="(max-width: 885px) 100vw, 50vw" // Adjust sizes based on new breakpoint
            style={{ objectFit: 'contain' }}
            className={styles.createImage}
          />
        </div>
      </div>
    </section>
  );
};

export default CreateSection;
