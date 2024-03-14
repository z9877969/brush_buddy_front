import { sprite } from 'shared/icons';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

import s from './MainPageHelpers.module.scss';

const HelpersCardList = ({
  helpersCardData,
  swiperData,
  reachEndButton,
  reachStartButton,
}) => {
  const lengthCards = helpersCardData.length;

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperData(swiper);
      }}
      onSlideChange={(swiper) => {
        if (
          swiper.activeIndex === 1 ||
          swiper.activeIndex === lengthCards - 2
        ) {
          reachEndButton(false);
          reachStartButton(false);
        }
      }}
      onReachEnd={() => {
        reachEndButton(true);
      }}
      onReachBeginning={() => {
        reachStartButton(true);
      }}
      breakpoints={{
        375: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 1.7,
          spaceBetween: 24,
        },
      }}
      modules={[Navigation]}
    >
      {helpersCardData.map(({ id, title, price, text, image }) => (
        <SwiperSlide key={id}>
          <div className={s.mainHelpersBox}>
            <div className={s.boxTitleText}>
              <div className={s.helpersBoxTitle}>
                <h3>{title}</h3>
                <button type="button">
                  <svg>
                    <use href={sprite + '#icon-cart'}></use>
                  </svg>
                </button>
              </div>
              <p className={s.helpersBoxPrice}>{`${price} грн`}</p>
              <p className={s.helpersBoxText}>{text}</p>
            </div>
            <img src={image} alt="photo" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HelpersCardList;
