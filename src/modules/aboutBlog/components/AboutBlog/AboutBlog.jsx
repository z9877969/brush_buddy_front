import { Container, LinkButton } from 'shared/components';
import css from './AboutBlog.module.scss';
//import { BlogPage } from 'pages/index';
import { ROUTES } from 'shared/constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

//import pictures
import img1x1 from '../../images/img1-1x.jpg';
import img2x1 from '../../images/img1-2x.jpg';
import img1x2 from '../../images/img2-1x.jpg';
import img2x2 from '../../images/img2-2x.jpg';

const AboutBlog = () => {
  const [blogList] = useState([
    { id: '1', title: '' },
    {
      id: '2',
      title: 'Зубна паста без фтора або з фтором: яку краще обрати',
      img1x: img1x1,
      img2x: img2x1,
    },
    {
      id: '3',
      title: 'Як вибрати зубну щітку для домашнього улюбленця',
      img1x: img1x2,
      img2x: img2x2,
    },
  ]);

  return (
    <section className={css.section}>
      <Container className={css.wrapper}>
        <div className={css.blogContent}>
          <div className={css.textBox}>
            <p className={css.text}>
              У нас ви можете знайти цікаві статті від професіоналів різних
              галузей стоматології (навіть від ветеринарного стоматолога).
            </p>
          </div>

          <ul className={css.list}>
            <li className={css.listItem}>
              <Link
                className={css.cardLink}
                to={ROUTES.GET_BLOG_ID(blogList[1].id)}
              >
                <picture>
                  <source
                    srcSet={`${blogList[1].img1x} 1x, ${blogList[1].img2x} 2x`}
                  ></source>
                  <img
                    className={css.image}
                    src={blogList[1].img1x}
                    width={340}
                    alt="photo Polina"
                  ></img>
                </picture>

                <h3 className={css.cardTitle}>{blogList[1].title}</h3>
              </Link>
            </li>

            <li className={css.listItem}>
              <Link
                className={css.cardLink}
                to={ROUTES.GET_BLOG_ID(blogList[2].id)}
              >
                <picture>
                  <source
                    srcSet={`${blogList[2].img1x} 1x, ${blogList[2].img2x} 2x`}
                  ></source>
                  <img
                    className={css.image}
                    src={blogList[2].img1x}
                    alt="photo cat Plomba"
                  ></img>
                </picture>

                <h3 className={css.cardTitle}>{blogList[2].title}</h3>
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
