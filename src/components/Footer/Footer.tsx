import NextImage from 'next/image';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.desktopTabletFooter}>
        <div className={styles.container}>
          <div className={styles.upper}>
            <div className={styles.logo}>
              <NextImage src="/images/Wave.svg" alt="DiveSea Logo" width={65} height={65} />
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
            <p className={`${styles.copyright} ${styles.copyrightFull}`}>© 2023 DiveSea All Rights Reserved.</p>
            <p className={`${styles.copyright} ${styles.copyrightShort}`}>© 2023</p>

            <div className={styles.socials}>
              <a href="#" className={styles.socialIcon}>
                <NextImage src="/images/Frame 16.svg" alt="Instagram" width={24} height={24} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <NextImage src="/images/Frame 17.svg" alt="LinkedIn" width={24} height={24} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <NextImage src="/images/Frame 18.svg" alt="Facebook" width={24} height={24} />
              </a>
              <a href="#" className={styles.socialIcon}>
                <NextImage src="/images/Frame 19.svg" alt="Twitter" width={24} height={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobileFooter}>
        <div className={styles.mobileContainer}>
          <div className={styles.mobileUpper}>
            <div className={styles.mobileLogoBlock}>
              <NextImage src="/images/Wave.svg" alt="DiveSea Logo" width={46} height={46} />
              <span>DiveSea</span>
            </div>
            <div className={styles.mobileSocials}>
              <a href="#" className={styles.mobileSocialIcon}>
                <NextImage src="/images/Frame 16.svg" alt="Instagram" width={17} height={17} />
              </a>
              <a href="#" className={styles.mobileSocialIcon}>
                <NextImage src="/images/Frame 17.svg" alt="LinkedIn" width={17} height={17} />
              </a>
              <a href="#" className={styles.mobileSocialIcon}>
                <NextImage src="/images/Frame 18.svg" alt="Facebook" width={17} height={17} />
              </a>
              <a href="#" className={styles.mobileSocialIcon}>
                <NextImage src="/images/Frame 19.svg" alt="Twitter" width={17} height={17} />
              </a>
            </div>
          </div>

          <nav className={styles.mobileNav}>
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Term & Conditions</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className={styles.mobileDivider}></div>

          <p className={styles.mobileCopyright}>© 2023 DiveSea All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;