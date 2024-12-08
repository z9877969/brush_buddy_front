import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, MainTitle, RoundButton } from 'shared/components';
import ReviewsCardList from '../ReviewsCardList/ReviewsCardList';
import { brushbuddyApi as bbApi } from 'services';
import { setLoadingAction } from '@redux/loader/loaderSlice';
import s from './MainPageReviews.module.scss';

const MainPageReviews = () => {
  const dispatch = useDispatch();
  const [refSwiper, setRefSwiper] = useState(null);
  const [disablStartButton, setdisablStartButton] = useState(true);
  const [disablEndButton, setdisablEndButton] = useState(false);
  const [reviews, setReviews] = useState([]);

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

  useEffect(() => {
    dispatch(setLoadingAction(true));
    bbApi
      .getReviewsApi()
      .then((reviewsList) => setReviews(reviewsList))
      // eslint-disable-next-line
      .catch((err) => console.log(err.message))
      .finally(() => dispatch(setLoadingAction(false)));
  }, [dispatch]);

  return (
    <section className={s.section} id="reviews">
      <Container>
        <div className={s.reviewsBoxAll}>
          <MainTitle title={'Відгуки'} className={s.mainReviewsTitle} />
          <ReviewsCardList
            swiperData={swiperData}
            reachEndButton={reachEndButton}
            reachStartButton={reachStartButton}
            reviewsCardData={reviews}
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
