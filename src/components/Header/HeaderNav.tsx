// src/components/HeaderNav.tsx
import React from 'react';
import styles from './HeaderNav.module.css';

type Props = {
  direction: 'left' | 'right';
  onClick: () => void;
};

const HeaderNav: React.FC<Props> = ({ direction, onClick }) => {
  return (
    <button
      className={`${styles.navButton} ${direction === 'left' ? styles.left : styles.right}`}
      onClick={onClick}
      aria-label={`header-button-${direction}`}
    >
      {direction === 'left' ? '<' : '>'}
    </button>
  );
};

export default HeaderNav;
