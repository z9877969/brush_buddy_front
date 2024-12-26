import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { activeEyes } from 'shared/images/animations';
import s from './BlogItem.module.scss';

const BlogItem = ({ item }) => {
  const { items, navLink } = item;
  const title = items.find(
    (el) => el.block === 'primaryTitle' || el.block === 'secondaryTitle'
  )?.content;
  const image = items.find((el) => el.block === 'image')?.content;
  return (
    <li className={s.blogItem}>
      <Link to={navLink} className={s.blogLink}>
        <div className={clsx(s.blogImgWrapper, !image && s.noImage)}>
          <img src={image || activeEyes} alt={title} className={s.blogImg} />
        </div>
        <p className={s.blogDescr}>{title}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
