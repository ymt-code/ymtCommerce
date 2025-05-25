// Carousel.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const styles = `
  /* کانتینر پایه: عرض کامل و ارتفاع ثابت در دسکتاپ */
  .my-swiper {
    width: 100%;
    max-width: 1200px;
    height: 350px; /* دسکتاپ */
    margin: 20px auto;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  }

  /* وقتی عرض صفحه زیر 1024px شد (تبلت یا لپ‌تاپ کوچیک)، ارتفاع رو کم می‌کنیم */
  @media (max-width: 1024px) {
    .my-swiper {
      height: 300px;
    }
  }

  /* زیر 768px (موبایل بزرگ و تبلت عمودی)، باز کوچکتر */
  @media (max-width: 768px) {
    .my-swiper {
      height: 250px;
    }
  }

  /* زیر 480px (موبایل)، ارتفاع 200px */
  @media (max-width: 480px) {
    .my-swiper {
      height: 200px;
    }
  }

  /* اسلاید داخلی */
  .my-swiper .swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f8f8f8;
  }

  /* عکس‌ها همیشه تمام عرض و ارتفاع رو بگیرن */
  .my-swiper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* دکمه‌های ناوبری */
  .my-swiper .swiper-button-next,
  .my-swiper .swiper-button-prev {
    color: #28a745; /* سبز */
    transition: color 0.3s ease;
  }
  .my-swiper .swiper-button-next:hover,
  .my-swiper .swiper-button-prev:hover {
    color: #1e7e34; /* سبز تیره‌تر روی هاور */
  }

  /* دایره‌های صفحه (pagination) */
  .my-swiper .swiper-pagination-bullet {
    background: #bbb;
    opacity: 0.7;
  }
  .my-swiper .swiper-pagination-bullet-active {
    background: #28a745; /* سبز فعال */
    opacity: 1;
  }
`;

const Carousel = () => {
  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.textContent = styles;
    document.head.appendChild(styleTag);
    return () => {
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      className="my-swiper"
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/f6d58ceabc68777bb376226685cefcc0458ead28_1747413088.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="Slide 1"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/e98de54507a303a26f047a01947acee076840e9f_1747469733.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="Slide 2"
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/af3e145f6ff9e913af0038adbe3b5439c07b95ab_1746606857.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt="Slide 3"
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
