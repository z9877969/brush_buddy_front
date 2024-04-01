import DialogPhrase from '../DialogPhrase/DialogPhrase';
import css from './MainPageDialog.module.scss';
import { sprite } from '../../images/icons';
import poliMobX1 from '../../images/mobile/Poli-mobile.png';
import boyMobX1 from '../../images/mobile/Boy-mobile.png';
import catMobX1 from '../../images/mobile/Cat-mobile.png';
import poliMobX2 from '../../images/mobile/Poli-mobile@2x.png';
import boyMobX2 from '../../images/mobile/Boy-mobile@2x.png';
import catMobX2 from '../../images/mobile/Cat-mobile@2x.png';
import poliDeskX1 from '../../images/desktop/Poli-desktop.png';
import boyDeskX1 from '../../images/desktop/Boy-desktop.png';
import catDeskX1 from '../../images/desktop/Cat-desktop.png';
import poliDeskX2 from '../../images/desktop/Poli-desktop@2x.png';
import boyDeskX2 from '../../images/desktop/Boy-desktop@2x.png';
import catDeskX2 from '../../images/desktop/Cat-desktop@2x.png';

const MainPageDialog = () => {
  return (
    <section className={css.section}>
      <div className={css.sectionContainer}>
        <DialogPhrase
          imgSourceMobX1={poliMobX1}
          imgSourceMobX2={poliMobX2}
          imgSourceDeskX1={poliDeskX1}
          imgSourceDeskX2={poliDeskX2}
          direction="left"
          number="1"
          phraseClass={css.slide1}
        >
          Гайда <span className={css.brushAccent}>брашити</span>
          <br /> зубки разом!
        </DialogPhrase>
        <svg className={css.iconWow} height="120">
          <use href={sprite + '#icon-wow'}></use>
        </svg>
        <DialogPhrase
          imgSourceMobX1={boyMobX1}
          imgSourceMobX2={boyMobX2}
          imgSourceDeskX1={boyDeskX1}
          imgSourceDeskX2={boyDeskX2}
          direction="right"
          number="1"
          phraseClass={css.slide2}
        >
          А як же кішка <br />
          <span className={css.boyAccent}>Пломба</span>?
        </DialogPhrase>
        <DialogPhrase
          imgSourceMobX1={poliMobX1}
          imgSourceMobX2={poliMobX2}
          imgSourcedeskX1={poliDeskX1}
          imgSourcedeskX2={poliDeskX2}
          direction="left"
          number="2"
          phraseClass={css.slide3}
        >
          Обов&apos;язково і їй!
        </DialogPhrase>
        <svg className={css.iconHello} height="120">
          <use href={sprite + '#icon-hello'}></use>
        </svg>
        <DialogPhrase
          imgSourceMobX1={catMobX1}
          imgSourceMobX2={catMobX2}
          imgSourceDeskX1={catDeskX1}
          imgSourceDeskX2={catDeskX2}
          direction="right"
          number="2"
          phraseClass={css.slide4}
        >
          мУУ<span className={css.catAccent}>УРРРА</span>АА...
        </DialogPhrase>
      </div>
    </section>
  );
};

export default MainPageDialog;
