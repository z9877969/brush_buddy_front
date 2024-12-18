import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ProductsListItem } from 'shared/components';

const ProductsSwiper = ({
  products,
  setRefSwiper,
  reachEndButton,
  reachStartButton,
}) => {
  const elements = useMemo(() => {
    return products.map((product, idx) => {
      return (
        <SwiperSlide key={idx}>
          <ProductsListItem {...product} />
        </SwiperSlide>
      );
    });
  }, [products]);

  return (
    <Swiper
      // allowTouchMove={true}
      onSwiper={(swiper) => {
        setRefSwiper(swiper);
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

export default ProductsSwiper;
