import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageHero.module.scss';
import { ROUTES } from 'shared/constants';

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
            title={'За покупками'}
            className={s.mainHeroBtn}
            to={ROUTES.PRODUCTS}
          />
        </div>
      </Container>
      <img
        src="/src/modules/mainPageHero/images/anmation.gif"
        alt="animation"
        className={s.animation}
      />

    </section>
  );
};

export default MainPageAbout;
