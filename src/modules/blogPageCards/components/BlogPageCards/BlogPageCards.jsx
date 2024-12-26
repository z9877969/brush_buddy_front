import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useMedia, useBlogsWithNavLink } from 'hooks';
import { selectHeaderHeight } from '@redux/header/headerSelector';
import { activeEyes } from 'shared/images/animations';
import s from './BlogPageCards.module.scss';

const BlogPageCards = () => {
  const blogs = useBlogsWithNavLink(4);

  const { isDesktop } = useMedia();

  const headerHeight = useSelector(selectHeaderHeight);

  const blogsList = useMemo(() => {
    return blogs.map(({ items, _id, ...rest }) => {
      const imgUrl = items.find((el) => el.block === 'image')?.content;
      const title = items.find((el) => el.block === 'primaryTitle')?.content;
      return {
        _id,
        title,
        imgUrl,
        ...rest,
      };
    });
  }, [blogs]);

  return (
    <div
      className={s.sidebar}
      style={{ top: isDesktop ? headerHeight - 80 + 32 : headerHeight - 2 }}
    >
      <ul className={s.list}>
        {blogsList.length > 0 &&
          blogsList.map(({ title, imgUrl, _id, navLink }) => (
            <li key={_id}>
              <Link className={s.cardLink} to={navLink}>
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
