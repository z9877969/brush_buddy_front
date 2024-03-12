import { Link } from 'react-router-dom';
import s from './BlogItem.module.scss';
import * as images from '../../images';

const BlogItem = ({ item }) => {
  const { title, imgUrl, id } = item;
  return (
    <li className={s.blogItem}>
      <Link to={`/blog/${id}`} className={s.blogLink}>
        <img src={images[imgUrl]} alt={title} className={s.blogImg} />
        <p className={s.blogDescr}>{title}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
