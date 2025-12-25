'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
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
      <div className={styles.topContent}>
        <nav className={styles.nav}>
          <a href="#discover" onClick={onClose}>Discover</a>
          <a href="#creators" onClick={onClose}>Creators</a>
          <a href="#sell" onClick={onClose}>Sell</a>
          <a href="#stats" onClick={onClose}>Stats</a>
        </nav>

        <div className={styles.socials}>
          <a href="#" aria-label="Instagram">
            <Image src="/images/Frame 16.svg" alt="Instagram" width={24} height={24} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Image src="/images/Frame 17.svg" alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="#" aria-label="Facebook">
            <Image src="/images/Frame 18.svg" alt="Facebook" width={24} height={24} />
          </a>
          <a href="#" aria-label="Twitter">
            <Image src="/images/Frame 19.svg" alt="Twitter" width={24} height={24} />
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