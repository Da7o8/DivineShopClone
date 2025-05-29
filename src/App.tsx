// src/App.tsx
import React  from "react";
import styles from  "./App.module.css";
import { Header } from "./components/Header/Header";
import { BannerAds } from "./components/Banner/BannerAds";
import {ProductSection}  from "./components/Product/ProductCard";
import Footer from "./components/Footer/Footer";
import { hotProducts } from './data/products';
import { bannerSlides } from "./data/bannerSlides";


export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <BannerAds slides={bannerSlides} interval={5000} />
        <ProductSection title="Sản phẩm nổi bật" products={hotProducts} />
        <Footer />
      </main>
    </div>
  );
};

export default App;