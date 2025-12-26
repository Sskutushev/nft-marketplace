'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNFTsData } from '@/store/slices/nftSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import NFTCard from './NFTCard';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './CarouselSection.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CarouselSection = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.nft);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isVisible = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    dispatch(fetchNFTsData());
  }, [dispatch]);

  return (
    <section 
      ref={sectionRef} 
      className={`${styles.carousel} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.background}></div>

      <h2 className={styles.title}>Weekly - Top NFT</h2>

      {loading ? (
        <div className={styles.loader}>Loading NFTs...</div>
      ) : error ? (
        <div className={styles.error}>{error}</div>
      ) : items.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={40} // Default spaceBetween
          slidesPerView={1} // Default slidesPerView
          loop={true} // Always loop if enough items
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            320: { // Mobile adaptation for 320px
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 15,
            },
            375: { // Mobile adaptation for 375px
              slidesPerView: 'auto',
              centeredSlides: true,
              spaceBetween: 15,
            },
            768: { // Tablet adaptation (2.5 slides visible)
              slidesPerView: 2.5,
              spaceBetween: 24,
              centeredSlides: true,
            },
            1024: { // Tablet adaptation (3.5 slides visible)
              slidesPerView: 3.5,
              spaceBetween: 32,
              centeredSlides: true,
            },
            1440: { // Desktop adaptation (3.5 slides visible)
              slidesPerView: 3.5,
              spaceBetween: 40,
              centeredSlides: true,
            },
            1920: { // Large Desktop adaptation (5.5 slides visible)
              slidesPerView: 5.5,
              spaceBetween: 40,
              centeredSlides: true,
            },
          }}
          className={styles.swiperContainer}
        >
          {items.map((nft) => (
            <SwiperSlide key={nft.id}>
              <NFTCard nft={nft} />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.error}>No NFTs available</div>
      )}

      {items.length > 0 && (
        <div className={styles.navigation}>
          <button className="swiper-button-prev-custom" aria-label="Previous slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
          <div className={styles.divider}></div>
          <button className="swiper-button-next-custom" aria-label="Next slide">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
};

export default CarouselSection;
