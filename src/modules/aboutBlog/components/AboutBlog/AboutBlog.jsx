import { Container, LinkButton } from 'shared/components';
import css from './AboutBlog.module.scss';
import { BlogPage } from 'pages/index';
import { ROUTES } from 'shared/constants';

import { useState } from 'react';
import { Link } from 'react-router-dom';

//import pictures

const AboutBlog = () => {
  const [blogList] = useState([
    { id: '1', title: '' },
    { id: '2', title: 'Зубна паста без фтора або з фтором: яку краще обрати' },
    { id: '3', title: 'Як вибрати зубну щітку для домашнього улюбленця' },
  ]);

  return (
    <section className={css.section}>
      <Container>
        <div className={css.blogContent}>
          <div className={css.textBox}>
            <p>
              У нас ви можете знайти цікаві статті від професіоналів різних
              галузей стоматології (навіть від ветеринарного стоматолога). У нас
              ви можете знайти цікаві статті від професіоналів різних галузей
              стоматології (навіть від ветеринарного стоматолога).
            </p>
          </div>

          <ul className={css.list}>
            <li>
              <Link to={ROUTES.GET_BLOG_ID(blogList[1].id)}>
                <img src="" alt="" />
                <h3>{blogList[1].title}</h3>
              </Link>
            </li>

            <li>
              <Link to={ROUTES.GET_BLOG_ID(blogList[2].id)}>
                <img src="" alt="" />
                <h3>{blogList[2].title}</h3>
              </Link>
            </li>
          </ul>
        </div>

        <LinkButton
          title={'Статті корисного блогу'}
          className={css.buttonLink}
          to={ROUTES.GET_BLOG_ID(blogList[0].id)}
        />
      </Container>
    </section>
  );
};

export default AboutBlog;
