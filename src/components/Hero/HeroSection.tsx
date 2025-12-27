'use client';

import { useEffect, useRef } from 'react';
import NextImage from 'next/image';
import { gsap } from 'gsap';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './HeroSection.module.scss';
import AnimatedCounter from './AnimatedCounter';
import ParticlesCanvas from './ParticlesCanvas';

const HeroSection = () => {
  const mainRef = useRef<HTMLElement>(null);
  const isVisible = useIntersectionObserver(mainRef, { threshold: 0.1 });

  useEffect(() => {
    if (!isVisible) return;

    // Check if mobile layout is active
    const isMobile = window.innerWidth <= 900;

    // Animation config
    const config = {
      ease: 'power3.out',
      duration: 0.8,
    };

    const selectors = isMobile
      ? {
          headline: `.${styles.mobileHero} .${styles.headline}`,
          subheadline: `.${styles.mobileHero} .${styles.subheadline}`,
          buttonGroup: `.${styles.mobileHero} .${styles.buttonGroup}`,
          image1: `.${styles.mobileHeroImage1}`,
          image2: `.${styles.mobileHeroImage2}`,
          image3: `.${styles.mobileHeroImage3}`,
          image4: `.${styles.mobileHeroImage4}`,
        }
      : {
          headline: `.${styles.headline}`,
          subheadline: `.${styles.subheadline}`,
          buttonGroup: `.${styles.buttonGroup}`,
          statsContainer: `.${styles.statsContainer}`,
          image1: `.${styles.heroImage1}`,
          image2: `.${styles.heroImage2}`,
          image3: `.${styles.heroImage3}`,
          image4: `.${styles.heroImage4}`,
        };

    const tl = gsap.timeline({
      defaults: config,
    });

    tl.fromTo(
      selectors.headline,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        selectors.subheadline,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        selectors.buttonGroup,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );

    // Stats animation (desktop only)
    if (!isMobile && selectors.statsContainer) {
      tl.fromTo(
        selectors.statsContainer,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );
    }

    // Image animations
    tl.fromTo(
      [selectors.image1, selectors.image2],
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.1 },
      '-=0.6'
    )
      .fromTo(
        selectors.image3,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      )
      .fromTo(
        selectors.image4,
        { opacity: 0 },
        { opacity: 1, duration: 0.6 },
        '-=0.2'
      );

    tl.eventCallback('onComplete', () => {
      if (mainRef.current) {
        mainRef.current.classList.add(styles.animated);
      }
    });

    return () => {
      tl.kill();
    };
  }, [isVisible]);

  return (
    <section className={styles.heroSection} ref={mainRef}>
      <ParticlesCanvas />
      {/* Desktop/Tablet layout */}
      <div className={styles.DesktopTabletHero}>
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
                <span className={styles.statValue}>
                  <AnimatedCounter end={430} suffix="K+" className={styles.statValue} />
                </span>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter end={159} suffix="K+" className={styles.statValue} />
                </span>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter end={87} suffix="K+" className={styles.statValue} />
                </span>
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

      {/* Mobile layout - separate structure with different image positions */}
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
                <span className={styles.statValue}>
                  <AnimatedCounter end={430} suffix="K+" className={styles.statValue} />
                </span>
                <span className={styles.statLabel}>Art Works</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter end={159} suffix="K+" className={styles.statValue} />
                </span>
                <span className={styles.statLabel}>Creators</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statValue}>
                  <AnimatedCounter end={87} suffix="K+" className={styles.statValue} />
                </span>
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