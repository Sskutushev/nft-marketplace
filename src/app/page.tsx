'use client';

import { useEffect } from 'react';
import Header from '@/components/Header/Header';
import HeroSection from '@/components/Hero/HeroSection';
import CarouselSection from '@/components/Carousel/CarouselSection';
import CreateSection from '@/components/CreateSection/CreateSection';
import Footer from '@/components/Footer/Footer';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { initScrollAnimations } from '@/utils/animations';

export default function Home() {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <Provider store={store}>
      <ErrorBoundary>
        <div className="app">
          <Header />
          <main>
            <ErrorBoundary>
              <HeroSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <CarouselSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <CreateSection />
            </ErrorBoundary>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Provider>
  );
}
