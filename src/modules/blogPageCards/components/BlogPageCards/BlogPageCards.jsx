import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { ROUTES } from 'shared/constants';
import { activeEyes } from 'shared/images/animations';
import { selectBlogs } from '@redux/blogs/blogsSelectors';
import { selectHeaderHeight } from '@redux/header/headerSelector';
import { useMedia } from 'hooks/useMedia';
import s from './BlogPageCards.module.scss';

const BlogPageCards = () => {
  const blogs = useSelector(selectBlogs);
  const { isDesktop } = useMedia();

  const headerHeight = useSelector(selectHeaderHeight);

  const blogsList = useMemo(() => {
    return blogs.map(({ items, _id }) => {
      const imgUrl = items.find((el) => el.block === 'image')?.content;
      const title = items.find((el) => el.block === 'primaryTitle')?.content;
      return {
        _id,
        title,
        imgUrl,
      };
    });
  }, [blogs]);

  return (
    <div
      className={s.sidebar}
      style={{ top: isDesktop ? headerHeight - 80 + 32 : headerHeight - 2 }}
    >
      {/* <h2 className={s.title}>Статті блогу</h2> */}
      <ul className={s.list}>
        {blogsList.length > 0 &&
          blogsList.map(({ title, imgUrl, _id }) => (
            <li key={_id}>
              <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(_id)}>
                <div className={clsx(s.imageWrapper, !imgUrl && s.imageBorder)}>
                  <img
                    src={imgUrl || activeEyes}
                    alt={'Зображення статті ' + title}
                    width={302}
                    height={180}
                    className={s.picture}
                  />
                </div>
                <h3 className={s.itemTitle}>{title}</h3>
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BlogPageCards;
