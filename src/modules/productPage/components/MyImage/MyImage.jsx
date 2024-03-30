import { useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import clsx from 'clsx';
import s from './MyImage.module.scss';

export const MyImage = ({ imges = [{ url: ' ' }] }) => {
  const [mainImage, setMainImage] = useState(imges[0]);

  return (
    <div className={s.container}>
      <div className={s.imageList}>
        <Swiper
          className="product-card-img"
          onSwiper={(swiper) => {
            swiper.hostEl.style.height = '100%';
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
          {imges.map((img) => {
            return (
              <SwiperSlide key={img.url}>
                <button
                  className={clsx(
                    s.imgListBlock,
                    mainImage.url === img.url && s.focused
                  )}
                >
                  <img
                    className={clsx(
                      s.image,
                      img.url === mainImage.url ? s.imageFocus : s.image
                    )}
                    src={img.url}
                    onClick={() => setMainImage(img)}
                  />
                </button>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={s.imgContainer}>
        <img
          className={s.largeImage}
          src={imges.length === 0 ? null : mainImage.url}
          alt="Зображення товару"
          height={'350'}
        />
      </div>
    </div>
  );
};
