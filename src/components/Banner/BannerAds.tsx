import React, { useEffect, useRef, useState } from 'react';
import styles from '../Banner/BannerAds.module.css';
import BannerNav from './BannerNav';
import {
  Gamepad2,
  Briefcase,
  GraduationCap,
  Gamepad,
  ImageIcon,
  LayoutDashboard,
  Cloud,
  Sparkles,
  ShieldCheck,
  PlayCircle
} from "lucide-react";


type Slide = {
  imageUrls: string[];
  title: string;
};

type BannerAds = {
  slides: Slide[];
  interval?: number;
};

export const BannerAds: React.FC<BannerAds> = ({ slides, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (!isHovered) {
      timeoutRef.current = setTimeout(nextSlide, interval);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isHovered]);

  const currentSlide = slides[currentIndex];

  return (
    <div className={styles.layoutGrid}>
      {/* Sidebar */}
      <div className={styles.sidebarCell}>
        <div className={styles.sidebar}>
          <ul>
            <li><Gamepad2 className={styles.icon} /> Giải trí</li>
            <li><Briefcase className={styles.icon} /> Làm việc</li>
            <li><GraduationCap className={styles.icon} /> Học tập</li>
            <li><Gamepad className={styles.icon} /> Game Steam</li>
            <li><ImageIcon className={styles.icon} /> Edit Ảnh - Video</li>
            <li><LayoutDashboard className={styles.icon} /> Window, Office</li>
            <li><Cloud className={styles.icon} /> Google Drive</li>
            <li><Sparkles className={styles.icon} /> Thế giới AI</li>
            <li><ShieldCheck className={styles.icon} /> Diệt Virus</li>
            <li><PlayCircle className={styles.icon} /> Gift Card</li>
          </ul>
        </div> 

        {/* Banner chính */}
        <div className={styles.mainBannerCell}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ position: 'relative' }} // rất quan trọng để định vị các nút overlay
          >
            <img src="https://cdn.divineshop.vn/image/catalog/Banner/TuyenDung-99661.png?hash=1725123079" alt="Main Banner" />
            <BannerNav onPrev={prevSlide} onNext={nextSlide} /> 
        </div>

        {/* 2 Ads bên phải (VPN + AI) */}
        <div className={styles.rightTop1}>
          <img src="https://cdn.divineshop.vn/image/catalog/Anh/VPN-73434.png?hash=1746457420" alt="VPN Banner" />
        </div>
        <div className={styles.rightTop2}>
          <img src="https://cdn.divineshop.vn/image/catalog/Anh/AI-49218.png?hash=1746457452" alt="AI Banner" />
        </div>

        {/* 4 banner nhỏ bên dưới */}
        <div className={styles.bottom0}>
          <img src="https://cdn.divineshop.vn/image/catalog/Anh/Steam-38102.png?hash=1746457480" alt="Steam Wallet" />
        </div>
        <div className={styles.bottom1}>
          <img src="https://cdn.divineshop.vn/image/catalog/Anh/ThietKe-75063.png?hash=1746457467" alt="Design Tool" />
        </div>
        <div className={styles.bottom2}>
          <img src="https://cdn.divineshop.vn/image/catalog/Anh/SteamTK-79362.png?hash=1746457474" alt="Steam Game" />
        </div>
        <div className={styles.bottom3}>
          <img src="https://cdn.divineshop.vn/image/catalog/Banner/Microsoft Office-69043.png?hash=1741751484" alt="Office" />
        </div>
      </div>
    </div>
  );
};
