import { Link } from 'react-router-dom';
import s from './BlogItem.module.scss';
import * as images from '../../images';

const BlogItem = ({ item }) => {
  const { title, imgUrl, id } = item;
  return (
    <li>
      <Link to={`/blog/${id}`}>
        <img src={images[imgUrl]} alt={title} className={s.blogImg} />
        <p className={s.blogTitle}>{title}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
