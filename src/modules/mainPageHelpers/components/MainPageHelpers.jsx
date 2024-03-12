import { Container, MainTitle, RoundButton } from 'shared/components';

import { helpersCardData } from '../data/helpersCardData';
import { HelpersCardList } from '..';

import s from './MainPageHelpers.module.scss';

const MainPageHelpers = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.helpersBoxAll}>
          <MainTitle title={'Допомагайки'} className={s.mainHelpersTitle} />
          <HelpersCardList helpersCardData={helpersCardData} />
          <div className={s.mainHelpersSlider}>
            <RoundButton
              iconId={'icon-chevron-left'}
              className={s.helpersSliderButton}
            />
            <RoundButton
              iconId={'icon-chevron-right'}
              className={s.helpersSliderButton}
            />
          </div>
        </div>
      </Container>
      ;
    </section>
  );
};

export default MainPageHelpers;
