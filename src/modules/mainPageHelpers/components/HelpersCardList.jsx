import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useAddProductToCart } from 'hooks';
import { sprite } from 'shared/icons';
import s from './MainPageHelpers.module.scss';

const HelpersCardList = ({
  helpersCardData,
  swiperData,
  reachEndButton,
  reachStartButton,
}) => {
  const lengthCards = helpersCardData.length;

  const onClickAdd = useAddProductToCart();

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
          slidesPerView: 2,
          spaceBetween: 24,
        },
      }}
      modules={[Navigation]}
    >
      {helpersCardData.map(
        ({ id, title, price, text, images, quantity, category }) => (
          <SwiperSlide key={id}>
            <Link className={s.link} to={`/products/${id}`}>
              <div className={s.mainHelpersBox}>
                <div className={s.boxTitleText}>
                  <div className={s.helpersBoxTitle}>
                    <h3 className={s.helpersBoxTitleText}>{title}</h3>
                    <button
                      className={s.helpersBoxButton}
                      type="button"
                      onClick={(event) => {
                        event.preventDefault(),
                          onClickAdd({
                            id,
                            title,
                            price,
                            images,
                            quantity,
                            category,
                          });
                      }}
                    >
                      <svg className={s.helpersBoxSVG}>
                        <use href={sprite + '#icon-cart'}></use>
                      </svg>
                    </button>
                  </div>
                  <p className={s.helpersBoxPrice}>{`${price} грн`}</p>
                  <p className={s.helpersBoxText}>{text}</p>
                </div>
                <div className={s.imgWrapper}>
                  <img className={s.helpersBoxIMG} src={images} alt="photo" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        )
      )}
    </Swiper>
  );
};

export default HelpersCardList;
