'use client';

import { useEffect } from 'react';
import NextImage from 'next/image';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.topContent}>
        <nav className={styles.nav}>
          <a href="#discover" onClick={onClose}>Discover</a>
          <a href="#creators" onClick={onClose}>Creators</a>
          <a href="#sell" onClick={onClose}>Sell</a>
          <a href="#stats" onClick={onClose}>Stats</a>
        </nav>

        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <NextImage src="/images/Frame 16.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <NextImage src="/images/Frame 17.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" aria-label="Facebook">
            <NextImage src="/images/Frame 18.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <NextImage src="/images/Frame 19.svg" alt="Twitter" width={24} height={24} />
          </a>
        </div>
      </div>

      <button className={styles.ctaButton}>
        Connect Wallet
      </button>
    </div>
  );
};

export default BurgerMenu;