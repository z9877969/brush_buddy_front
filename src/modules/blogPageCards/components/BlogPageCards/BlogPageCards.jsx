import { Link } from 'react-router-dom';
import s from './BlogPageCards.module.scss';
import { ROUTES } from 'shared/constants';
import list from 'modules/blogPageCards/db/list.json';
import { useState } from 'react';
import { Picture } from 'shared/components';

//images
import { img1x_1 } from '../../images/index';
import { img2x_1 } from '../../images/index';
import { img1x_2 } from '../../images/index';
import { img2x_2 } from '../../images/index';
import { img1x_3 } from '../../images/index';
import { img2x_3 } from '../../images/index';
import { img1x_4 } from '../../images/index';
import { img2x_4 } from '../../images/index';
import { img1x_5 } from '../../images/index';
import { img2x_5 } from '../../images/index';

const BlogPageCards = () => {
  const [blogList] = useState(list);

  return (
    <div className={s.div}>
      <h2 className={s.title}>Статті блогу</h2>
      <ul className={s.list}>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[0].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_1}
              mob2x={img2x_1}
              tab1x={img1x_1}
              tab2x={img2x_1}
              desk1x={img1x_1}
              desk2x={img2x_1}
              defaultImg={img1x_1}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[0].title}</h3>
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[1].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_2}
              mob2x={img2x_2}
              tab1x={img1x_2}
              tab2x={img2x_2}
              desk1x={img1x_2}
              desk2x={img2x_2}
              defaultImg={img1x_2}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[1].title}</h3>
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[2].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_3}
              mob2x={img2x_3}
              tab1x={img1x_3}
              tab2x={img2x_3}
              desk1x={img1x_3}
              desk2x={img2x_3}
              defaultImg={img1x_3}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[2].title}</h3>
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[3].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_4}
              mob2x={img2x_4}
              tab1x={img1x_4}
              tab2x={img2x_4}
              desk1x={img1x_4}
              desk2x={img2x_4}
              defaultImg={img1x_4}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[3].title}</h3>
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[4].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_5}
              mob2x={img2x_5}
              tab1x={img1x_5}
              tab2x={img2x_5}
              desk1x={img1x_5}
              desk2x={img2x_5}
              defaultImg={img1x_5}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[4].title}</h3>
          </Link>
        </li>
        <li>
          <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(blogList[5].id)}>
            <Picture
              className={s.picture}
              mob1x={img1x_5}
              mob2x={img2x_5}
              tab1x={img1x_5}
              tab2x={img2x_5}
              desk1x={img1x_5}
              desk2x={img2x_5}
              defaultImg={img1x_5}
              width={302}
              alt="photo"
            />
            <h3 className={s.itemTitle}>{blogList[5].title}</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default BlogPageCards;
