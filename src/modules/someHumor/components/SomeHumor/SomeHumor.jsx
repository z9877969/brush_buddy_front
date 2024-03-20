import { Container } from 'shared/components';
import { sprite } from 'shared/icons';
import s from './SomeHumor.module.scss';

const SomeHumor = () => {
  return (
    <section className={s.section}>
      <Container>
        <div className={s.someHumorWrap}>
          <div className={s.iconSomeHumorContainer}>
            <svg>
              <use href={`${sprite}#icon-quote`}></use>
            </svg>
          </div>

          <div className={s.someHumorWrapText}>
            <p className={s.someHumorText}>
              Трішечки гумору і легкості ніколи не завадить, тому, сподіваємось,
              що наш сайт буде сприяти вашому гарному настрою і стоматологічному
              здоров’ю. Трішечки гумору і легкості ніколи не завадить, тому,
              сподіваємось, що наш сайт буде сприяти вашому гарному настрою і
              стоматологічному здоров’ю.
            </p>
            <div className={s.yourBrushWrap}>
              <div className={s.iconLogoContainer}>
                <svg>
                  <use href={`${sprite}#icon-merch`}></use>
                </svg>
              </div>

              <p>Ваш БрашБадді</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SomeHumor;
