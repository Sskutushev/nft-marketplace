'use client';

import { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { gsap } from 'gsap';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Animation logic will be re-added later
  }, []);

  return (
    <section className={styles.heroSection} ref={mainRef}>
      {/* Desktop/Tablet Version */}
      <div className={styles.desktopTabletHero}>
        <div className={styles.mainContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.line}></div>
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
        </div>
      </div>
      
      {/* Mobile Version */}
      <div className={styles.mobileHero}>
        <div className={styles.mobileContainer}>
          <div className={styles.leftContainer}>
            <div className={styles.lineAndTextBlock}>
              <div className={styles.line}></div>
              <span className={styles.mobileOnlyText}>OVER 1M CREATORS</span>
            </div>
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;