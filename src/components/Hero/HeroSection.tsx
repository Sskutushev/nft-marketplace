'use client';

import { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { gsap } from 'gsap';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageWrappers = gsap.utils.toArray(`.${styles.imageWrapper}`);
      const leftElements = gsap.utils.toArray(`.${styles.leftContainer} > *`);

      // Set initial hidden states
      gsap.set(imageWrappers, { opacity: 0, x: '50%' });
      gsap.set(leftElements, { opacity: 0, y: 30 });

      // Create timelines for animations
      const imageTimeline = gsap.timeline({ delay: 0.5 });
      imageTimeline.to(imageWrappers, {
        opacity: 1,
        x: '0%',
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out'
      });

      const textTimeline = gsap.timeline({ delay: 0.2 });
      textTimeline.to(leftElements, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out'
      });

    }, mainRef); // Scope animations to the main container

    return () => ctx.revert(); // Cleanup function
  }, []);

  return (
    <section className={styles.heroSection} ref={mainRef}>
      {/* Desktop/Tablet Version */}
      <div className={styles.desktopTabletHero}>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.line}></div>
            <span className={styles.mobileOnlyText}>OVER 1M CREATORS</span>
            <h1 className={styles.headline}>
              Discover And <br />
              Create NFTs
            </h1>
            <p className={styles.subheadline}>
              Discover, Create and Sell NFTs On Our NFT Marketplace 
              <br />
              With Over Thousands Of NFTs And Get a <strong>$20 bonus.</strong>
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.exploreButton}>EXPLORE MORE</button>
              <button className={styles.createButton}>CREATE NFT</button>
            </div>
            <div className={styles.statsContainer}>
              <div className={styles.stat}>
                <span className={styles.statValue}>430K+</span>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>159K+</span>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>87K+</span>
                <span className={styles.statLabel}>Collections</span>
              </div>
            </div>
          </div>

          <div className={styles.rightContainer}>
            <div className={`${styles.imageWrapper} ${styles.image1}`}>
              <NextImage src="/images/Rectangle 3.svg" alt="NFT 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.image2}`}>
              <NextImage src="/images/Rectangle 3 (1).svg" alt="NFT 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.arrow}`}>
              <NextImage src="/images/Arrow 01.svg" alt="Arrow" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.image4}`}>
              <NextImage src="/images/Frame 26.svg" alt="NFT 4" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Version */}
      <div className={styles.mobileHero}>
        {/* Structure for mobile version goes here */}
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.line}></div>
            <span className={styles.mobileOnlyText}>OVER 1M CREATORS</span>
            <h1 className={styles.headline}>
              Discover And <br />
              Create NFTs
            </h1>
            <p className={styles.subheadline}>
              Discover, Create and Sell NFTs On Our NFT Marketplace 
              <br />
              With Over Thousands Of NFTs And Get a <strong>$20 bonus.</strong>
            </p>
            <div className={styles.buttonGroup}>
              <button className={styles.exploreButton}>EXPLORE MORE</button>
              <button className={styles.createButton}>CREATE NFT</button>
            </div>
            <div className={styles.statsContainer}>
              <div className={styles.stat}>
                <span className={styles.statValue}>430K+</span>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>159K+</span>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>87K+</span>
                <span className={styles.statLabel}>Collections</span>
              </div>
            </div>
          </div>

          <div className={styles.rightContainer}>
            {/* You can have different image structure for mobile */}
            <div className={`${styles.imageWrapper} ${styles.image1}`}>
              <NextImage src="/images/Rectangle 3.svg" alt="NFT 1" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.image2}`}>
              <NextImage src="/images/Rectangle 3 (1).svg" alt="NFT 2" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'cover' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.arrow}`}>
              <NextImage src="/images/Arrow 01.svg" alt="Arrow" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
            </div>
            <div className={`${styles.imageWrapper} ${styles.image4}`}>
              <NextImage src="/images/Frame 26.svg" alt="NFT 4" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" style={{ objectFit: 'contain' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;