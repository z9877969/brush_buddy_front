import { useEffect, useState } from 'react';
import { Container, MainTitle } from 'shared/components';
import LinkButton from 'shared/components/LinkButton/LinkButton';
import { getMainPageAboutImageApi } from 'services/brushbuddyApi';
import { useLocalRequest } from 'hooks/useLocalRequest';
import { sprite } from 'shared/icons';
import s from './MainPageAbout.module.scss';

const MainPageAbout = () => {
  const [sectionImage, setSectionImage] = useState('');

  const localRequestWrapper = useLocalRequest();

  useEffect(() => {
    const requestFn = () =>
      getMainPageAboutImageApi().then((data) => setSectionImage(data));

    localRequestWrapper(requestFn);
  }, [localRequestWrapper]);

  return (
    <section className={s.section}>
      <Container className={s.containerAbout}>
        <MainTitle className={s.title} title={'Про БрашБадді'} />
        <div className={s.container}>
          <div className={s.paragraphBlock}>
            <p className={s.text}>
              BrushBuddy - хаб доглядових товарів за порожниною рота та зубами
              для дорослих, дітей і твариноk. На чолі з головною прихильницею
              здорових зубів Поліною, ми зібрали найkраще зубне приладдя на
              одному сайті.
            </p>
            <p className={s.text}>
              Щиро віримо, що заохочувати до брашингу і ділитися зубними
              ритуалами kрутіше, ніж ліkувати чи видаляти хворі зуби.
            </p>
            <p className={s.text}>
              В BrushBuddy панує атмосфера здорових та чистих зубів:
              розповідаємо, яk виkористовувати правила профілаkтиkи вдома та
              розповсюджуємо тільки яkісні товари.
            </p>
          </div>
          <div className={s.brushBlock}>
            <div className={s.benefits}>
              <div className={s.toothbrush}>
                <svg className={s.benefitsImage}>
                  <use
                    width="32"
                    height="32"
                    href={sprite + '#icon-toothbrush'}
                  ></use>
                </svg>
              </div>
              <p className={s.benefitsText}>Профілаkтиkа - це kруто</p>
            </div>
            <div className={s.benefits}>
              <div className={s.pets}>
                <svg width="32" height="32" className={s.benefitsImage}>
                  <use href={sprite + '#icon-cat'}></use>
                </svg>
              </div>
              <p className={s.benefitsText}>Щіточkи для твариноk</p>
            </div>
            <div className={s.benefits}>
              <div className={s.child}>
                <svg width="32" height="32" className={s.benefitsImage}>
                  <use href={sprite + '#icon-bage-child'}></use>
                </svg>
              </div>
              <p className={s.benefitsText}>Кідс & петс френдлі</p>
            </div>
          </div>
          <picture>
            {/* <source srcSet={`${PolinaImg} 1x, ${PolinaImg2x} 2x`} /> */}
            <img className={s.image} src={sectionImage} alt="Polina" />
          </picture>
          <div className={s.buttonBlock}>
            <LinkButton className={s.button} title={'Читати ще'} to={'about'} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MainPageAbout;
