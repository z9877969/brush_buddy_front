import { Container, LinkButton, MainTitle } from 'shared/components';
import s from './MainPageHero.module.scss';
import { ROUTES } from 'shared/constants';
import { heroGif } from 'modules/mainPageHero/images';

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
      <img src={heroGif} alt="animation" className={s.animation} />
    </section>
  );
};

export default MainPageAbout;
