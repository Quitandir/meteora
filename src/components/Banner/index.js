import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

import styles from './Banner.module.css'

export default function Banner() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      className={styles.banner}
      spaceBetween={30}

    >
      <SwiperSlide><div className={styles.carrosel1}></div></SwiperSlide>
      <SwiperSlide><div className={styles.carrosel2}>
        <h2 className={styles.banner__titulo}>coleção atemporal</h2>
        <h4 className={styles.banner__subtitulo}>Estilo e qualidade para durar</h4>
      </div></SwiperSlide>
      <SwiperSlide><div className={styles.carrosel3}>
        <h2 className={styles.banner__titulo}>coleção atemporal</h2>
        <h4 className={styles.banner__subtitulo}>Estilo e qualidade para durar</h4>
      </div></SwiperSlide>


    </Swiper>
  );
};