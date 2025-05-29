// src/components/ProductCard.tsx
import React, { useState } from 'react';
import styles from './ProductCard.module.css';
import { Product } from '../../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} className={styles.image} />
      <h3 className={styles.name}>{product.name}</h3>
      <div className={styles.prices}>
        <span className={styles.price}>{product.price.toLocaleString()}đ</span>
        <span className={styles.originalPrice}>{product.originalPrice.toLocaleString()}đ</span>
        <span className={styles.discount}>{product.discount}</span>
      </div>
    </div>
  );
};

interface ProductSectionProps {
  title: string;
  products: Product[];
}

export const ProductSection: React.FC<ProductSectionProps> = ({ title, products }) => {
  const [visibleCount, setVisibleCount] = useState(8); // hiển thị 8 sản phẩm đầu tiên

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 8, products.length));
  };

  const visibleProducts = products.slice(0, visibleCount);

  return (
    <section className={styles.container}>
      <div className={styles.productSection}>
        <h2 className={styles.title}>{title}</h2>
          <h4>Danh sách những sản phẩm theo xu hướng mà bạn có thể thích</h4>
      <div className={styles.grid}>
        {visibleProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className={styles.loadMoreWrapper}>
          <button className={styles.loadMoreBtn} onClick={handleLoadMore}>
            Xem thêm
          </button>
        </div>
      )}
      </div>
    </section>
  );
};
