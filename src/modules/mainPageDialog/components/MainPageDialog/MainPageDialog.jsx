import DialogPhrase from '../DialogPhrase/DialogPhrase';
import css from './MainPageDialog.module.scss';
import { Container } from 'shared/components';
import poli from '../../images/Poli.png';
import boy from '../../images/Boy.png';
import cat from '../../images/Cat.png';

const MainPageDialog = () => {
  return (
    <section className={css.section}>
      <Container>
        <DialogPhrase
          imgSource={poli}
          direction="left"
          phraseClass={css.slide1}
        >
          Гайда <span className={css.brushAccent}>брашити</span>
          <br /> зубки разом!
        </DialogPhrase>
        <DialogPhrase
          imgSource={boy}
          direction="right"
          phraseClass={css.slide2}
        >
          А як же кішка <br />
          <span className={css.boyAccent}>Пломба</span>?
        </DialogPhrase>
        <DialogPhrase
          imgSource={poli}
          direction="left"
          phraseClass={css.slide3}
        >
          Обов&apos;язково і їй!
        </DialogPhrase>
        <DialogPhrase
          imgSource={cat}
          direction="right"
          phraseClass={css.slide4}
        >
          мУУ<span className={css.catAccent}>УРРРА</span>АА...
        </DialogPhrase>
      </Container>
    </section>
  );
};

export default MainPageDialog;
