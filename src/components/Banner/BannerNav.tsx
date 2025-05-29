import React from 'react';
import styles from '../Banner/BannerNav.module.css';

type Props = {
  onPrev: () => void;
  onNext: () => void;
};

const BannerNav: React.FC<Props> = ({ onPrev, onNext }) => {
  return (
    <>
      <div className={styles.overlayLeft} onClick={onPrev}>
        <span className={styles.arrow}>&lt;</span>
      </div>
      <div className={styles.overlayRight} onClick={onNext}>
        <span className={styles.arrow}>&gt;</span>
      </div>
    </>
  );
};

export default BannerNav;
