import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { RoundButton } from 'shared/components';
import s from './ReviewsModalSwiper.module.scss';

const ReviewsModalSwiper = ({ reviewsCardData, slideIdx, closeModal }) => {
  const [isDisabledStartBtn, setIsDisabledStartBtn] = useState(false);
  const [isDisabledEndBtn, setIsDisabledEndBtn] = useState(false);

  const swiperRef = useRef(null);

  const handleClickPrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleClickNext = () => {
    swiperRef.current.slideNext();
  };

  useEffect(() => {
    swiperRef.isBeginning && setIsDisabledStartBtn(swiperRef.isBeginning);
    swiperRef.isEnd && setIsDisabledStartBtn(swiperRef.isEnd);
  }, []);

  return (
    <>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          swiper.slideTo(slideIdx, 0);
        }}
        onSlideChange={({ isBeginning, isEnd }) => {
          !isEnd && setIsDisabledEndBtn(isEnd);
          !isBeginning && setIsDisabledStartBtn(isBeginning);
        }}
        onReachEnd={({ isEnd }) => {
          setIsDisabledEndBtn(isEnd);
        }}
        onReachBeginning={({ isBeginning }) => {
          setIsDisabledStartBtn(isBeginning);
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
        modules={[Navigation]}
      >
        {reviewsCardData.map(({ id, image }) => (
          <SwiperSlide
            key={id}
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <div className={s.imageWrapper}>
              <img src={image} alt="photo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <RoundButton
        iconId={'icon-chevron-left'}
        className={s.btnPrev}
        disabled={isDisabledStartBtn}
        onClick={handleClickPrev}
      />
      <RoundButton
        iconId={'icon-chevron-right'}
        className={s.btnNext}
        disabled={isDisabledEndBtn}
        onClick={handleClickNext}
      />
    </>
  );
};

export default ReviewsModalSwiper;
