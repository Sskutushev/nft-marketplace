'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import styles from './HeroSection.module.scss';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const h1Ref = useRef(null);
  const textRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);

  useEffect(() => {
    // Запускаем анимации с небольшой задержкой, чтобы избежать конфликта с рендерингом
    const timer = setTimeout(() => {
      // Анимации текста
      if (h1Ref.current) {
        gsap.fromTo(h1Ref.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
        );
      }

      if (textRef.current) {
        gsap.fromTo(textRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', delay: 0.2 }
        );
      }

      if (buttonsRef.current) {
        gsap.fromTo(buttonsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.3 }
        );
      }

      if (statsRef.current) {
        gsap.fromTo(statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out', delay: 0.1 }
        );
      }

      // Анимации изображений
      if (image1Ref.current && image2Ref.current) {
        gsap.fromTo([image1Ref.current, image2Ref.current],
          { x: 200, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 0.4 }
        );
      }

      // Анимации для секции features
      gsap.fromTo(".featureItem",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          delay: 0.8
        }
      );
    }, 100); // Небольшая задержка для правильного рендеринга

    // Очищаем таймер при размонтировании
    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Stats */}
          <div className={styles.stats} ref={statsRef}>
            <div className={styles.statsLine}></div>
            <span>OVER 1M CREATORS</span>
          </div>

          {/* Heading */}
          <h1 className={styles.heading} ref={h1Ref}>Discover And Create NFTs</h1>

          {/* Description */}
          <p className={styles.description} ref={textRef}>
            Discover, Create and Sell NFTs On Our NFT Marketplace With Over
            Thousands Of NFTs And Get a $20 bonus.
          </p>

          {/* Buttons */}
          <div className={styles.buttons} ref={buttonsRef}>
            <button className={styles.btnPrimary}>
              Explore More
            </button>
            <button className={styles.btnSecondary}>
              Create NFT
            </button>
          </div>
        </div>

        {/* Hero Images */}
        <div className={styles.images}>
          <div className={styles.imageWrapper}>
            <Image
              ref={image1Ref}
              src="/images/hero/hero-main.png"
              alt="NFT Hero"
              className={styles.mainImage}
              width={500}
              height={500}
              layout="intrinsic"
            />
          </div>

          <div className={styles.sideImages}>
            <Image
              ref={image2Ref}
              src="/images/hero/hero-secondary.png"
              alt="NFT"
              className={styles.sideImage}
              width={500}
              height={500}
              layout="intrinsic"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={styles.features}>
        <div className={`${styles.featureItem} featureItem`}>
          <span className={styles.featureValue}>430K+</span>
          <span className={styles.featureLabel}>Art Works</span>
        </div>
        <div className={`${styles.featureItem} featureItem`}>
          <span className={styles.featureValue}>159K+</span>
          <span className={styles.featureLabel}>Creators</span>
        </div>
        <div className={`${styles.featureItem} featureItem`}>
          <span className={styles.featureValue}>87K+</span>
          <span className={styles.featureLabel}>Collections</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
