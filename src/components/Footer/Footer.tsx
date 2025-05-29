import React from 'react';
import styles from '../Footer/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.title}>Từ khóa nổi bật</h3>
      <div className={styles.keywords}>
        <a className={styles.key1} href="https://divineshop.vn/search?tag=L%C3%A0m%20vi%E1%BB%87c">Làm việc</a>
        <a className={styles.key2} href="https://divineshop.vn/search?tag=Gi%E1%BA%A3i%20tr%C3%AD">Giải trí</a>
        <a className={styles.key3} href="https://divineshop.vn/search?tag=H%E1%BB%8Dc%20t%E1%BA%ADp">Học tập</a>
        <a className={styles.key4} href="https://divineshop.vn/search?tag=AI">AI</a>
        <a className={styles.key5} href="https://divineshop.vn/search?tag=Wallet">Wallet</a>
        <a className={styles.key6} href="https://divineshop.vn/search?tag=Youtube">Youtobe</a>
      </div>
      </div>
  </footer>
  );
};

export default Footer;
