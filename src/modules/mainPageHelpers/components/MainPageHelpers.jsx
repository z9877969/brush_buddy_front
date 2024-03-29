import { Container, MainTitle, RoundButton } from 'shared/components';

import { helpersCardData } from '../data/helpersCardData';
import { HelpersCardList } from '..';

import s from './MainPageHelpers.module.scss';
import { useState } from 'react';

const MainPageHelpers = ({ isDescrShow }) => {
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
              helpersCardData={helpersCardData}
            />
            <div className={s.mainHelpersSlider}>
              <RoundButton
                iconId={'icon-chevron-left'}
                className={
                  disablStartButton
                    ? s.helpersSliderButtonDisabled
                    : s.helpersSliderButton
                }
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
