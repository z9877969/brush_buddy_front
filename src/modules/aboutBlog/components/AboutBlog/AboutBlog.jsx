import { Container } from 'shared/components';
import css from './AboutBlog.module.scss';

//import pictures

const AboutBlog = () => {
  return (
    <section className={css.section}>
      <Container>
        <div className="blogContent">
          <div className={css.textBox}>
            <p>
              У нас ви можете знайти цікаві статті від професіоналів різних
              галузей стоматології (навіть від ветеринарного стоматолога). У нас
              ви можете знайти цікаві статті від професіоналів різних галузей
              стоматології (навіть від ветеринарного стоматолога).
            </p>
          </div>

          <ul>
            <li>
              <a href="">
                <img src="" alt="" />
                <p>Зубна паста без фтора або з фтором: яку краще обрати</p>
              </a>
            </li>

            <li>
              <a href="">
                <img src="" alt="" />
                <p>Як вибрати зубну щітку для домашнього улюбленця</p>
              </a>
            </li>
          </ul>
        </div>

        <a className={css.button} href="#">
          Статті корисного блогу
        </a>
      </Container>
    </section>
  );
};

export default AboutBlog;
