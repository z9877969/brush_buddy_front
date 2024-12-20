import { useRef, useState } from 'react';
import ProductsSwiper from '../ProductsSwiper/ProductsSwiper';
import { RoundButton } from 'shared/components';
import s from './ProductsListSwiper.module.scss';

const ProductsListSwiper = ({ title, products }) => {
  const [disablStartButton, setdisablStartButton] = useState(true);
  const [disablEndButton, setdisablEndButton] = useState(false);

  const swiperRef = useRef(null);

  const setRefSwiper = (ref) => {
    swiperRef.current = ref;
  };

  const reachEndButton = (isEnd) => {
    setdisablEndButton(isEnd);
  };

  const reachStartButton = (isStart) => {
    setdisablStartButton(isStart);
  };

  const handleClickPrev = () => {
    swiperRef.current.slidePrev();
  };

  const handleClickNext = () => {
    swiperRef.current.slideNext();
  };

  return (
    <div className={s.swipperWrapper}>
      <div className={s.titleWrapper}>
        {title && <h4 className={s.prodSubtitle}>{title}</h4>}
        <div className={s.buttonsWrapper}>
          <RoundButton
            iconId={'icon-chevron-left'}
            className={s.scrollBtn}
            onClick={handleClickPrev}
            disabled={disablStartButton}
          />
          <RoundButton
            iconId={'icon-chevron-right'}
            className={s.scrollBtn}
            onClick={handleClickNext}
            disabled={disablEndButton}
          />
        </div>
      </div>
      <ProductsSwiper
        products={products}
        setRefSwiper={setRefSwiper}
        reachEndButton={reachEndButton}
        reachStartButton={reachStartButton}
      />
    </div>
  );
};

export default ProductsListSwiper;
