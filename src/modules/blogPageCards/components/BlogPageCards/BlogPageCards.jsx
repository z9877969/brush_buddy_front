import { Link } from 'react-router-dom';
import s from './BlogPageCards.module.scss';
import { ROUTES } from 'shared/constants';
import list from 'modules/blogPageCards/db/list.json';
import { useState } from 'react';
import { Picture } from 'shared/components';

const BlogPageCards = () => {
  const [blogList] = useState(list);

  return (
    <div>
      <ul>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[0].id)}>
            <Picture
              mob1x={blogList[0].img1x}
              mob2x={blogList[1].img2x}
              tab1x={blogList[2].img1x}
              tab2x={blogList[3].img2x}
              desk1x={blogList[4].img1x}
              desk2x={blogList[5].img2x}
              defaultImg={blogList[6].img1x}
              width={343}
              alt="photo"
            />
            {blogList[0].title}
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[1].id)}>
            {blogList[1].title}
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[2].id)}>
            {blogList[2].title}
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[3].id)}>
            {blogList[3].title}
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[4].id)}>
            {blogList[4].title}
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[5].id)}>
            {blogList[5].title}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPageCards;
