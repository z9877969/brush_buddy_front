import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './ReviewsModalSwiper.module.scss';
import { Navigation } from 'swiper/modules';

const ReviewsModalSwiper = ({ reviewsCardData }) => {
  return (
    <Swiper
      //   onSwiper={(swiper) => {
      //     swiperData(swiper);
      //   }}
      // onSlideChange={(swiper) => {
      //   // const isEnd = swiper.isEnd;
      //   // const isBeginning = swiper.isBeginning;
      //   // if (isEnd) {
      //   //   reachEndButton(true);
      //   // } else if (isBeginning) {
      //   //   reachStartButton(true);
      //   // } else {
      //   //   reachEndButton(false);
      //   //   reachStartButton(false);
      //   // }
      // }}
      //   breakpoints={{
      //     375: {
      //       slidesPerView: 1,
      //       spaceBetween: 24,
      //     },
      //     768: {
      //       slidesPerView: 2,
      //       spaceBetween: 24,
      //     },
      //     1440: {
      //       slidesPerView: 3,
      //       spaceBetween: 24,
      //     },
      //   }}
      modules={[Navigation]}
    >
      {reviewsCardData.map(({ id, image }) => (
        <SwiperSlide key={id}>
          <div className={s.imageWrapper}>
            <img src={image} alt="photo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ReviewsModalSwiper;
