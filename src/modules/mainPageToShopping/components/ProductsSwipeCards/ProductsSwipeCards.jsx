import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { ProductCardItem } from 'shared/components';

const ProductsSwipeCards = ({
  productsCardData,
  swiperData,
  reachEndButton,
  reachStartButton,
}) => {
  const lengthCards = productsCardData.length;
  const elements = useMemo(() => {
    return productsCardData.map((product, index) => (
      <SwiperSlide key={index}>
        <ProductCardItem {...product} />
      </SwiperSlide>
    ));
  }, [productsCardData]);

  return (
    <Swiper
      onSwiper={(swiper) => {
        swiperData(swiper);
        const slidesWrapper = swiper?.slidesEl;
        const slidesHost = swiper?.hostEl;
        if (slidesHost) {
          slidesHost.style.overflow = 'hidden';
          // slidesHost.style.marginLeft = '-1px';
          // slidesHost.style.marginRight = '-1px';
        }
        if (slidesWrapper) {
          slidesWrapper.style.display = 'flex';
        }
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
        0: {
          slidesPerView: 'auto',
          // spaceBetween: 24,
        },
        375: {
          slidesPerView: 1,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
      }}
      modules={[Navigation]}
    >
      {elements}
    </Swiper>
  );
};

export default ProductsSwipeCards;
