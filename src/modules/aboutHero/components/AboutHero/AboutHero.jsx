import { Container } from 'shared/components';
import { MainTitle } from 'shared/components';
import { Picture } from 'shared/components';
import s from './AboutHero.module.scss';
import { sprite } from 'shared/icons';

//import pictures
import IMG1xMobile from '../../images/IMG@1x-mobile-min.jpg';
import IMG2xMobile from '../../images/IMG@2x-mobile-min.jpg';
import IMG1xTablet from '../../images/IMG@1x-tablet-min.jpg';
import IMG2xTablet from '../../images/IMG@2x-tablet-min.jpg';
import IMG1xDesktop from '../../images/IMG@1x-desktop-min.jpg';
import IMG2xDesktop from '../../images/IMG@2x-desktop-min.jpg';
import IMGDefault from '../../images/IMG-min.jpg';

const AboutHero = () => {
  return (
    <section className={s.section}>
      <Container>
        <MainTitle title={'Про БрашБадді'} className={s.aboutHeroTittle} />
        <div className={s.boxInfo}>
          <Picture
            mob1x={IMG1xMobile}
            mob2x={IMG2xMobile}
            tab1x={IMG1xTablet}
            tab2x={IMG2xTablet}
            desk1x={IMG1xDesktop}
            desk2x={IMG2xDesktop}
            defaultImg={IMGDefault}
            width={343}
            alt="photo"
          />
          <div>
            <p className={s.textHero}>
              BrushBuddy - хаб доглядових товарів за порожниною рота та зубами
              для дорослих, дітей і тваринок. На чолі з головною прихильницею
              здорових зубів Поліною, ми зібрали найкраще зубне приладдя на
              одному сайті. Щиро віримо, що заохочувати до брашингу і ділитися
              зубними ритуалами крутіше, ніж лікувати чи видаляти хворі зуби. В
              BrushBuddy панує атмосфера здорових та чистих зубів: розповідаємо,
              як використовувати правила профілактики вдома та розповсюджуємо
              тільки якісні товари.
            </p>
            <div className={s.chooseVariantproducts}>
              <p>
                Кожен товар має мітку, завдяки якій ви одразу бачите, для кого
                підходить ця позиція:{' '}
              </p>
              <ul className={s.listChoose}>
                <li>
                  <svg className={s.pet} width={56} height={56}>
                    <use href={sprite + '#icon-bage-animal'}></use>
                  </svg>
                  <p>для тварин</p>
                </li>
                <li>
                  <svg className={s.adult} width={56} height={56}>
                    <use href={sprite + '#icon-bage-adult'}></use>
                  </svg>
                  <p>для дорослих</p>
                </li>
                <li>
                  <svg className={s.child} width={56} height={56}>
                    <use href={sprite + '#icon-bage-child'}></use>
                  </svg>
                  <p>для дітей</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
