import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.upper}>
          <div className={styles.logo}>
            <svg width="65" height="65" viewBox="0 0 65 65">
              {/* Logo SVG from Figma - using placeholder for now */}
              <circle cx="32.5" cy="32.5" r="30" fill="#141416"/>
            </svg>
            <span>DiveSea</span>
          </div>

          <nav className={styles.nav}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Term & Conditions</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.lower}>
          <p className={styles.copyright}>© 2023 DiveSea All Rights Reserved.</p>

          <div className={styles.socials}>
            {/* Add social media icons - using placeholders for now */}
            <div className={styles.socialIcon}></div>
            <div className={styles.socialIcon}></div>
            <div className={styles.socialIcon}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;