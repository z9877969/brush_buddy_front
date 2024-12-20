import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageHero.module.scss';
import { ROUTES } from 'shared/constants';
import { animation } from 'modules/mainPageHero/images';

const MainPageAbout = () => {
  return (
    <section className={s.section}>
      <Container className={s.container}>
        <div className={s.titleContainer}>
          <MainTitle
            title={'Гайда брашити зубки'}
            className={s.mainHeroTitle}
            light
          />
          <LinkButton
            title={'До покупок'}
            className={s.mainHeroBtn}
            to={`${ROUTES.PRODUCTS}?page=1`}
          />
        </div>
        <div className={s.animationWrapper}>
          <img src={animation} alt="animation" className={s.animation} />
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
