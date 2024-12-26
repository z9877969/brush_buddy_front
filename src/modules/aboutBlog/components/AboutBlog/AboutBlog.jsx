import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { Container, LinkButton } from 'shared/components';
import { useBlogsWithNavLink } from 'hooks';
import { activeEyes } from 'shared/images/animations';
import css from './AboutBlog.module.scss';

const AboutBlog = () => {
  const blogsList = useBlogsWithNavLink(2);

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

          {blogsList.length > 0 && (
            <ul className={css.list}>
              {blogsList.map(({ _id, items, navLink }) => {
                const blogeImage = items.find(
                  ({ block }) => block === 'image'
                )?.content;
                return (
                  <li className={css.listItem} key={_id}>
                    <Link className={css.cardLink} to={navLink}>
                      <div
                        className={clsx(
                          css.imageWrapper,
                          !blogeImage && css.imageBorder
                        )}
                      >
                        <picture>
                          <img
                            className={css.image}
                            src={blogeImage || activeEyes}
                            width={340}
                            alt="photo"
                          ></img>
                        </picture>
                      </div>

                      <h3 className={css.cardTitle}>
                        {
                          items.find(({ block }) => block === 'primaryTitle')
                            ?.content
                        }
                      </h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <LinkButton
          title={'Статті корисного блогу'}
          className={css.buttonLink}
          to={blogsList[0]?.navLink}
        />
      </Container>
    </section>
  );
};

export default AboutBlog;
