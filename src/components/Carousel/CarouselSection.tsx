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
          spaceBetween={40}
          slidesPerView={1}
          loop={items.length > 3}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            375: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 32 },
            1440: { slidesPerView: 4, spaceBetween: 40 },
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
