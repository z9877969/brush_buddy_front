import { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import PopularProductsSlide from '../PopularProductsSlide/PopularProductsSlide';

const ProductsSwipeCards = ({
  products,
  // setRefSwiper,
  // reachEndButton,
  // reachStartButton,
}) => {
  const lengthCards = products.length;

  const elements = useMemo(() => {
    return products.reduce((acc, product, idx, arr) => {
      if (idx % 2 === 0) {
        const nextProduct = idx + 1 < arr.length ? arr[idx + 1] : null;

        acc.push(
          <SwiperSlide key={idx}>
            {nextProduct ? (
              <PopularProductsSlide
                firstProduct={product}
                secondProduct={nextProduct}
              />
            ) : (
              <PopularProductsSlide firstProduct={product} />
            )}
          </SwiperSlide>
        );
      }

      return acc;
    }, []);
  }, [products]);

  return (
    <Swiper
      allowTouchMove={false}
      onSwiper={(swiper) => {
        // setRefSwiper(swiper);
        const slidesWrapper = swiper?.slidesEl;
        const slidesHost = swiper?.hostEl;
        if (slidesHost) {
          slidesHost.style.overflow = 'hidden';
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
          // reachEndButton(false);
          // reachStartButton(false);
        }
      }}
      onReachEnd={() => {
        // reachEndButton(true);
      }}
      onReachBeginning={() => {
        // reachStartButton(true);
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
