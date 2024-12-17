import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import { Container, MainTitle, RoundButton } from 'shared/components';
import HelpersCardList from '../HelpersCardList/HelpersCardList';
import { selectHelpersProduct } from '@redux/products/productsSelectors';
import s from './MainPageHelpers.module.scss';

const MainPageHelpers = ({ isDescrShow }) => {
  const helpersProducts = useSelector(selectHelpersProduct);

  const [disablStartButton, setdisablStartButton] = useState(true);
  const [disablEndButton, setdisablEndButton] = useState(false);

  const swiperRef = useRef(null);

  const swiperData = (ref) => {
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

  useEffect(() => {
    swiperRef;
  }, []);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.helpersBoxAll}>
          {isDescrShow && (
            <div className={s.aboutHelpersBox}>
              <p className={s.aboutHelpersText}>
                Також ми розробляємо цікавинки для заохочення і більшого
                інтересу до процесу чищення зубів. Також ми розробляємо
                цікавинки для заохочення і більшого інтересу до процесу чищення
                зубів.
              </p>
            </div>
          )}
          <div className={s.boxForButton}>
            <MainTitle title={'Допомагайки'} className={s.mainHelpersTitle} />
            <HelpersCardList
              swiperData={swiperData}
              reachEndButton={reachEndButton}
              reachStartButton={reachStartButton}
              helpersCardData={helpersProducts}
            />
            <div className={s.mainHelpersSlider}>
              <RoundButton
                iconId={'icon-chevron-left'}
                className={clsx(
                  disablStartButton
                    ? s.helpersSliderButtonDisabled
                    : s.helpersSliderButton
                )}
                onClick={handleClickPrev}
              />
              <RoundButton
                onClick={handleClickNext}
                iconId={'icon-chevron-right'}
                className={
                  disablEndButton
                    ? s.helpersSliderButtonDisabled
                    : s.helpersSliderButton
                }
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageHelpers;
