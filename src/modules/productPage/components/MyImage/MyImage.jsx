import { useEffect, useState } from 'react';
import clsx from 'clsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import WatermarkIcon from '../WatermarkIcon/WatermarkIcon';
import s from './MyImage.module.scss';
import UserTypesIcons from '../UserTypesIcons/UserTypesIcons';
import { noPictureImage } from 'shared/images';

export const MyImage = ({ images, userTypes, watermark }) => {
  const [mainImage, setMainImage] = useState(images[0] ?? noPictureImage);

  useEffect(() => {
    setMainImage(images[0] ?? noPictureImage);
  }, [images]);

  const swipingImages = images.length ? images : [noPictureImage];

  return (
    <div className={s.container}>
      <div className={s.imagesSwiperWrapper}>
        <Swiper
          className="product-card-img"
          onSwiper={(swiper) => {
            swiper.hostEl.style.height = '100%';
            swiper.wrapperEl.style.width = 'calc(100% - 2px)';
          }}
          direction={'vertical'}
          scrollbar={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            375: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 5,
            },
          }}
          modules={[Pagination]}
        >
          {swipingImages.map((img) => {
            return (
              <SwiperSlide key={img}>
                <button
                  type="button"
                  className={clsx(s.slideBtn, mainImage === img && s.focused)}
                >
                  <img
                    className={s.slideImage}
                    src={img}
                    onClick={() => setMainImage(img)}
                  />
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={s.imgContainer}>
        <div className={s.iconsWrapper}>
          <div className={s.watermark}>
            <WatermarkIcon watermark={watermark} />
          </div>
          <div className={s.userType}>
            <UserTypesIcons userTypes={userTypes} />
          </div>
        </div>
        <img
          className={s.largeImage}
          src={mainImage}
          alt="Зображення товару"
          height={'350'}
        />
      </div>
    </div>
  );
};
