import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectBlogs } from '@redux/blogs/blogsSelectors';
import { Container, LinkButton } from 'shared/components';
import { activeEyes } from 'shared/images/animations';
import { ROUTES } from 'shared/constants';
import css from './AboutBlog.module.scss';
import clsx from 'clsx';

const AboutBlog = () => {
  const blogsList = useSelector(selectBlogs);
  const filteredBlogsList = blogsList.filter((_, idx) => idx < 2);

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

          {filteredBlogsList.length > 0 && (
            <ul className={css.list}>
              {filteredBlogsList.map(({ _id, items }) => {
                const blogeImage = items.find(
                  ({ block }) => block === 'image'
                )?.content;
                return (
                  <li className={css.listItem} key={_id}>
                    <Link className={css.cardLink} to={ROUTES.GET_BLOG_ID(_id)}>
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
          to={ROUTES.GET_BLOG_ID(filteredBlogsList[0]._id)}
        />
      </Container>
    </section>
  );
};

export default AboutBlog;
