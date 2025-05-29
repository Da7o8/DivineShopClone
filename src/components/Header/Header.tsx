import React, { useState, useEffect, useRef }from 'react';
import styles from './Header.module.css';
import HeaderNav from './HeaderNav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { headerLinks } from '../../data/headerLinks';

export const Header = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const AUTO_SLIDE_INTERVAL = 3000;

  const prevTitle = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + headerLinks.length) % headerLinks.length);
      setFade(true);
    }, 100);
  };

  const nextTitle = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % headerLinks.length);
      setFade(true);
    }, 100);
  };

  const resetAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      nextTitle();
    }, AUTO_SLIDE_INTERVAL);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextTitle();
    }, AUTO_SLIDE_INTERVAL);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);
  const currentItem = headerLinks[currentIndex];
  return (
    <header className={styles.header}>
      <div className={styles.headertop}>
        <div className={styles.containertop}>
          <div className={styles.boxmain}>
            {/* Ben trai */}
            <div className={styles.boxmainleft}>
              <HeaderNav direction="left" onClick={() => { prevTitle(); resetAutoSlide(); }} />
              <HeaderNav direction="right" onClick={() => { nextTitle(); resetAutoSlide(); }} />
              <a
                className={`${styles.canvaLink} ${fade ? styles.fadeIn : styles.fadeOut}`}
                href={currentItem.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {currentItem.title}
              </a>
            </div>
          
            { /* Ben phai */}
            <div className={styles.boxmainright}>
              <a href="https://help.divineshop.vn/huong-dan-thanh-toan" className={styles.topLink}> <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-book.svg?hash=1635136430" alt="Document" />Hướng dẫn mua hàng</a>
              <a href="https://page.divineshop.vn/uu-dai" className={styles.topLink}> <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-badge-percent.svg?hash=1635136430" alt="Gear" />Ưu đãi khách hàng</a>
              <a href="https://help.divineshop.vn/chinh-sach-bao-hanh/lien-he-va-ho-tr" className={styles.topLink}> <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/far fa-phone-alt.svg?hash=1635136430" alt="Phone" />Thông tin liên hệ</a>
            </div>
          </div>
        </div> 
      </div>

      <div className={styles.containerbody}>
        <div className={styles.containerbodymid}>
          {/* Logo */}
          <div className={styles.containerLogo}>
            <div className={styles.logo}>
            <img className={styles.logoImg} src="https://cdn.divineshop.vn/static/b1402e84a947ed36cebe9799e47f61c2.svg" alt="Logo"/>
              <div className={styles.logoText}>
                DivineShop
              </div>
          </div>
          </div>

          {/* Search Bar */}
          <div className={styles.containerSearch}>
            <div className={styles.searchWrapper}>
              <input type="text" placeholder="Tìm kiếm sản phẩm" className={styles.searchInput} />
              <button className={styles.searchButton}>
                <FontAwesomeIcon icon={faMagnifyingGlass} color="white" width="17.5px" height="17.5px" />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className={styles.icons}>
            <div className={styles.containerIcons}>
              <button className={styles.iconBtn1}><FontAwesomeIcon icon={faUser} color="white" /></button>
            <p>Đăng nhập / Đăng ký</p></div> 
          </div>
          
          {/* Shoping cart */}
          <div className={styles.containerCart}>
            <button className={styles.iconBtn2}><FontAwesomeIcon icon={faCartShopping} color="white" width="17.5px" height="17.5px" />
            <span className={styles.cartCount}>Giỏ hàng</span><span className={styles.numberCart}>0</span></button>
            
          </div>
        </div>

        {/*subject*/}
        <div className={styles.containernav}>
          <span className={styles.navbottom}>
            <a href="https://divineshop.vn/search/viewed">
              <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-eye.svg?hash=1635136430" alt="Eye" className={styles.icon} />
              Sản phẩm bạn vừa xem
            </a>
            <a href="https://divineshop.vn/search/trending">
              <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-fire.svg?hash=1635136430" alt="Hot" className={styles.icon} />
              Sản phẩm mua nhiều
            </a>
            <a href="https://divineshop.vn/search/new">
              <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-percent.svg?hash=1635136430" alt="Sale" className={styles.icon} />
              Sản phẩm khuyến mãi
            </a>
            <a href="https://page.divineshop.vn/tuyen-dung/vi-tri-dang-tuyen-dung/cskh">
              <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/tuyen-dung-40874.svg?hash=1730879498" alt="Job" className={styles.icon} />
              Tuyển dụng
            </a>
            <a href="https://divineshop.vn/topup">
              <img src="https://cdn.divineshop.vn/image/catalog/fontawesome/fas fa-credit-card.svg?hash=1635136430" alt="Payment" className={styles.icon}/>
              Hình thức thanh toán
            </a>
          </span>
        </div>
    </div>

      {/* Header cuối  */}
      <div className={styles.headerbuttom}>
        <div className={styles.containerbuttom}>
          <div className={styles.boxmainbuttom}>
            {/* been trai */}
            <div className={styles.boxmainbuttomleft}>
              <a className={styles.buttomLink}><FontAwesomeIcon icon={faBars} />Danh mục sản phẩm</a>
            </div>

            {/* ben phai */}
            <div className={styles.boxmainbuttomright}>
              <a className={styles.buttomLink} href="https://divineshop.vn/tin-tuc/" > 
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Nap-thesvg-30724.svg?hash=1640449820" 
                alt="Thủ thuật & tin tức" />Thủ thuật & tin tức
                </a>
              <a  className={`${styles.buttomLink} ${styles.link2}`} href="https://help.divineshop.vn/huong-dan-mua-hang/huong-dan-tao-tai-khoan"> 
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Gioi-thieu-ban-be-87652.svg?hash=1640449820" 
                alt="Hướng dẫn mua hàng" />Hướng dẫn mua hàng
                </a>
              <a className={`${styles.buttomLink} ${styles.link2}`} href="https://docs.google.com/forms/d/e/1FAIpQLSdsN84o3rQhofXqLY9MxTkyeWGq7-7PRDldNu5w59LGCgnndg/viewform" > 
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/Icon svg/Lien-he-hop-tac-33199.svg?hash=1640449820" 
                alt="Liên hệ hợp tác" />Liên hệ hợp tác
                </a>
              <a className={`${styles.buttomLink} ${styles.link2}`} href="https://t.me/divineshopsale" > 
                <img src="https://cdn.divineshop.vn/image/catalog/Anh/14.03.2022/sale-80749.svg?hash=1730876946" 
                alt="GA - Sale Divine" />GA - Sale Divine
                </a>
            </div>
          </div>
        </div>
      </div>
    </header> 
  );
};


