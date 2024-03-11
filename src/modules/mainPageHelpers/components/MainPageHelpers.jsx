import { Container, MainTitle, RoundButton } from 'shared/components';

import s from './MainPageHelpers.module.scss';

import testIMG from '../images/111.jpg';

import { HelpersCardList } from '..';

const helpersCardData = [
  {
    id: '1',
    title: 'Календар-трекер для дітей',
    price: '288.80',
    text: 'Перед використанням календаря ви домовляєтеся з дитиною, якою буде нагорода за щотижневе постійне чищення зубів.',
    image: testIMG,
  },
  {
    id: '2',
    title: 'Календар-трекер для дітей',
    price: '288.80',
    text: 'Перед використанням календаря ви домовляєтеся з дитиною, якою буде нагорода за щотижневе постійне чищення зубів.',
    image: testIMG,
  },
  {
    id: '2',
    title: 'Календар-трекер для дітей',
    price: '288.80',
    text: 'Перед використанням календаря ви домовляєтеся з дитиною, якою буде нагорода за щотижневе постійне чищення зубів.',
    image: testIMG,
  },
];

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
