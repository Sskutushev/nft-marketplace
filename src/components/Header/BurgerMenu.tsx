'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import styles from './BurgerMenu.module.scss';

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const BurgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
  useEffect(() => {
    if (isOpen) {
      gsap.to(`.${styles.menu}`, {
        y: 0,
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        onComplete: () => {
          document.body.style.overflow = 'hidden';
        }
      });
    } else {
      gsap.to(`.${styles.menu}`, {
        y: '-100%',
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
          document.body.style.overflow = '';
        }
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className={styles.menu}>
      <button className={styles.closeButton} onClick={onClose} aria-label="Close menu">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      </button>

      <nav className={styles.nav}>
        <a href="#discover" onClick={onClose}>Discover</a>
        <a href="#creators" onClick={onClose}>Creators</a>
        <a href="#sell" onClick={onClose}>Sell</a>
        <a href="#stats" onClick={onClose}>Stats</a>
      </nav>

      <button className={styles.ctaButton}>
        Connect Wallet
      </button>
    </div>
  );
};

export default BurgerMenu;