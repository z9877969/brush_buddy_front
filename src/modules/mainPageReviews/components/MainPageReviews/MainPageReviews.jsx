import { Container, MainTitle, RoundButton } from 'shared/components';

import { reviewsCardData } from '../../data/reviewsCardData';
import { ReviewsCardList } from '../..';

import s from './MainPageReviews.module.scss';
import { useState } from 'react';

const MainPageReviews = () => {
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
    <section className={s.section} id="reviews">
      <Container>
        <div className={s.reviewsBoxAll}>
          <MainTitle title={'Відгуки'} className={s.mainReviewsTitle} />
          <ReviewsCardList
            swiperData={swiperData}
            reachEndButton={reachEndButton}
            reachStartButton={reachStartButton}
            reviewsCardData={reviewsCardData}
          />
          <div className={s.mainReviewsSlider}>
            <RoundButton
              iconId={'icon-chevron-left'}
              className={
                disablStartButton
                  ? s.reviewsSliderButtonDisabled
                  : s.reviewsSliderButton
              }
              onClick={handleClickPrev}
            />
            <RoundButton
              onClick={handleClickNext}
              iconId={'icon-chevron-right'}
              className={
                disablEndButton
                  ? s.reviewsSliderButtonDisabled
                  : s.reviewsSliderButton
              }
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageReviews;
