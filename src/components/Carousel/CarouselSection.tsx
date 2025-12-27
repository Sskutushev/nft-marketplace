'use client';

import { useEffect, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchNFTsData } from '@/store/slices/nftSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import NextImage from 'next/image';
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
          loop={true} 
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            320: {
              slidesPerView: 1.8,
              centeredSlides: true,
              spaceBetween: 16,
            },
            375: {
              slidesPerView: 1.5,
              centeredSlides: true,
              spaceBetween: -30,
            },
            425: {
              slidesPerView: 1.8,
              centeredSlides: true,
              spaceBetween: -30,
            },
            575: {
              slidesPerView: 2.5,
              spaceBetween: -16,
              centeredSlides: true,
            },


            768: {
              slidesPerView: 4,
              spaceBetween: 16,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1240: {
              slidesPerView: 4.5,
              spaceBetween: 16,
              centeredSlides: true,
            },
            1440: {
              slidesPerView: 4.5,
              spaceBetween: 20,
              centeredSlides: true,
            },
            1680: {
              slidesPerView: 6,
              spaceBetween: 150,
              centeredSlides: true,
            },
            1920: {
              slidesPerView: 7,
              spaceBetween: 250,
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
        <div className={styles.newNavigation}>
          <div className={styles.newNavigationInner}>
            <button className="swiper-button-prev-custom" aria-label="Previous slide">
              <NextImage src="/images/icons/Line.svg" alt="Previous" width={24} height={24} />
            </button>
            <div className={styles.newDivider}></div>
            <button className="swiper-button-next-custom" aria-label="Next slide">
              <NextImage src="/images/icons/Line2.svg" alt="Next" width={24} height={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CarouselSection;
