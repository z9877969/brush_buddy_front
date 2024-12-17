import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductPrice } from 'shared/components';
import { useAddProductToCart } from 'hooks';
import { sprite } from 'shared/icons';
import { noPictureImage } from 'shared/images';
import s from './HelpersCardList.module.scss';

const HelpersCardList = ({
  helpersCardData,
  swiperData,
  reachEndButton,
  reachStartButton,
}) => {
  const onClickAdd = useAddProductToCart();

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperData(swiper);
      }}
      onSlideChange={({ isBeginning, isEnd }) => {
        !isEnd && reachEndButton(isEnd);
        !isBeginning && reachStartButton(isBeginning);
      }}
      onReachEnd={({ isEnd }) => {
        reachEndButton(isEnd);
      }}
      onReachBeginning={({ isBeginning }) => {
        reachStartButton(isBeginning);
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
        ({
          _id,
          title,
          description,
          category /* { _id: categoryId, label, value } */,
          variants: [{ images, quantity, salePrice, price, _id: varId } = {}],
        }) => (
          <SwiperSlide key={_id}>
            <Link className={s.link} to={`/products/${_id}/${varId}`}>
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
                            id: _id,
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
                  <ProductPrice price={price} salePrice={salePrice} />
                  <p className={s.helpersBoxText}>
                    {description[0] &&
                      (description[0].paragraph || description[0].title)}
                  </p>
                </div>
                <div className={s.imgWrapper}>
                  <img
                    className={s.helpersBoxIMG}
                    src={images ? images[0] : noPictureImage}
                    alt="photo"
                  />
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
