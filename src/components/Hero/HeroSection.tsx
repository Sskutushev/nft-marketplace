'use client';

import { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { gsap } from 'gsap';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './HeroSection.module.scss';

const HeroSection = () => {
  const mainRef = useRef(null);
  const isVisible = useIntersectionObserver(mainRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      // Create timeline for animations
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Left container animations
      tl.fromTo(`.${styles.headline}`,
        { opacity: 0, y: 50 }, // from state
        { opacity: 1, y: 0, duration: 0.8 } // to state
      )
      .fromTo(`.${styles.subheadline}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(`.${styles.buttonGroup}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(`.${styles.statsContainer}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      );

      // Right container animations
      tl.fromTo([`.${styles.heroImage1}`, `.${styles.heroImage2}`],
        { x: 100, opacity: 0 }, // from state
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, // to state
        "-=0.6"
      )
      .fromTo(`.${styles.heroImage3}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(`.${styles.heroImage4}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );

      // Mobile animations - using fromTo to ensure proper animation
      const mobileTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      mobileTl.fromTo(`.${styles.mobileHero} .${styles.headline}`,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8 },
        "+=0.2"
      )
      .fromTo(`.${styles.mobileHero} .${styles.subheadline}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(`.${styles.mobileHero} .${styles.buttonGroup}`,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.4"
      )
      .fromTo([`.${styles.mobileHeroImage1}`, `.${styles.mobileHeroImage2}`],
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1 },
        "-=0.6"
      )
      .fromTo(`.${styles.mobileHeroImage3}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      )
      .fromTo(`.${styles.mobileHeroImage4}`,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        "-=0.2"
      );
    }
  }, [isVisible]);

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
          <div className={styles.rightContainer}>
            <NextImage
              src="/images/nft-cards/Group 427320379.svg"
              alt="NFT 1"
              width={391}
              height={419}
              className={`${styles.heroImage} ${styles.heroImage1}`}
            />
            <NextImage
              src="/images/Group 427320373.svg"
              alt="NFT 2"
              width={321}
              height={343}
              className={`${styles.heroImage} ${styles.heroImage2}`}
            />
            <NextImage
              src="/images/Arrow 01.svg"
              alt="Arrow"
              width={129}
              height={124}
              className={`${styles.heroImage} ${styles.heroImage3}`}
            />
            <NextImage
              src="/images/Frame 26.svg"
              alt="Frame"
              width={173}
              height={400}
              className={`${styles.heroImage} ${styles.heroImage4}`}
            />
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
          {/* Duplicated right container for mobile */}
          <div className={`${styles.rightContainer} ${styles.mobileImageContainer}`}>
            <NextImage
              src="/images/nft-cards/Group 427320379.svg"
              alt="NFT 1"
              width={391}
              height={419}
              className={`${styles.heroImage} ${styles.mobileHeroImage1}`}
            />
            <NextImage
              src="/images/Group 427320373.svg"
              alt="NFT 2"
              width={321}
              height={343}
              className={`${styles.heroImage} ${styles.mobileHeroImage2}`}
            />
            <NextImage
              src="/images/Arrow 01.svg"
              alt="Arrow"
              width={129}
              height={124}
              className={`${styles.heroImage} ${styles.mobileHeroImage3}`}
            />
            <NextImage
              src="/images/Frame 26.svg"
              alt="Frame"
              width={173}
              height={400}
              className={`${styles.heroImage} ${styles.mobileHeroImage4}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;