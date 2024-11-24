import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import s from './ReviewsModalSwiper.module.scss';
import { Navigation } from 'swiper/modules';

const ReviewsModalSwiper = ({ reviewsCardData, slideIdx }) => {
  return (
    <Swiper
      onSwiper={(swiper) => {
        swiper.slideTo(slideIdx, 0);
      }}
      slidesPerView={1}
      breakpoints={{
        375: {
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1440: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
      }}
      navigation={true}
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
