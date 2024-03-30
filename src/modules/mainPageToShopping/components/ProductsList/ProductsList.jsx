import { useState } from 'react';

import { RoundButton } from 'shared/components';
import ProductsSwipeCards from '../ProductsSwipeCards/ProductsSwipeCards';
import s from './ProductsList.module.scss';

const ProductsList = ({ title, products }) => {
  const [refSwiper, setRefSwiper] = useState(null);
  const [disablStartButton, setdisablStartButton] = useState(true);
  const [disablEndButton, setdisablEndButton] = useState(false);

  const swiperData = (ref) => {
    setRefSwiper(ref);
  };

  const reachEndButton = (isEnd) => {
    setdisablEndButton(isEnd);
  };

  const reachStartButton = (isStart) => {
    setdisablStartButton(isStart);
  };

  const handleClickPrev = () => {
    refSwiper.slidePrev();
    setdisablEndButton(false);
  };

  const handleClickNext = () => {
    refSwiper.slideNext();
    setdisablStartButton(false);
  };

  return (
    <div>
      <div className={s.titleWrapper}>
        <h4 className={s.prodSubtitle}>{title}</h4>
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
      <ProductsSwipeCards
        productsCardData={products}
        swiperData={swiperData}
        reachEndButton={reachEndButton}
        reachStartButton={reachStartButton}
      />
    </div>
  );
};

export default ProductsList;
