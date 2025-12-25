'use client';

import { useState, useEffect } from 'react';
import styles from './Header.module.scss';
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
        <div className={styles.container}>
          {/* Logo */}
          <div className={styles.logo}>
            <svg className={styles.logoIcon} width="53" height="53" viewBox="0 0 53 53">
              {/* Add wave SVG path from Figma - using placeholder for now */}
              <path d="M26.5 5C14.5 5 5 14.5 5 26.5S14.5 48 26.5 48 48 38.5 48 26.5 38.5 5 26.5 5z" fill="#141416"/>
            </svg>
            <span className={styles.logoText}>DiveSea</span>
          </div>

          {/* Desktop Navigation */}
          <nav className={styles.nav}>
            <a href="#discover" className={styles.navLink}>Discover</a>
            <a href="#creators" className={styles.navLink}>Creators</a>
            <a href="#sell" className={styles.navLink}>Sell</a>
            <a href="#stats" className={styles.navLink}>Stats</a>
          </nav>

          {/* CTA Button */}
          <button className={styles.ctaButton}>
            Connect Wallet
          </button>

          {/* Mobile Burger */}
          <button
            className={styles.burgerButton}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <BurgerMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Header;