import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Picture } from 'shared/components';
import { ROUTES } from 'shared/constants';
import list from '../../db/list.json';
import * as imageDict from '../../images';
import s from './BlogPageCards.module.scss';

const getBlogListApi = () => {
  return new Promise((resolve) => {
    const id = setTimeout(() => {
      resolve(list);
      clearTimeout(id);
    }, 500);
  });
};

const BlogPageCards = () => {
  const [blogList, setBlogList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBlogListApi()
      .then((data) => {
        setBlogList(data);
      })
      // eslint-disable-next-line
      .catch((err) => console.log(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [blogList]);

  return (
    <>
      {/* run Loader or not run Loader if used LoaderProvider */}
      {isLoading && null}
      <div className={s.div}>
        <h2 className={s.title}>Статті блогу</h2>
        <ul className={s.list}>
          {blogList.length > 0 &&
            blogList.map(({ title, imgUrl }, idx) => (
              <li key={idx}>
                <Link className={s.cardLink} to={ROUTES.GET_BLOG_ID(idx + 1)}>
                  <div className={s.imageWrapper}>
                    {imgUrl ? (
                      <img
                        src={imgUrl}
                        alt={'Зображення статті ' + title}
                        width={302}
                        height={180}
                        className={s.picture}
                      />
                    ) : (
                      <Picture
                        className={s.picture}
                        mob1x={imageDict['img1x_' + (idx + 1)]}
                        mob2x={imageDict['img2x_' + (idx + 1)]}
                        tab1x={imageDict['img1x_' + (idx + 1)]}
                        tab2x={imageDict['img2x_' + (idx + 1)]}
                        desk1x={imageDict['img1x_' + (idx + 1)]}
                        desk2x={imageDict['img2x_' + (idx + 1)]}
                        defaultImg={imageDict['img1x_' + (idx + 1)]}
                        width={302}
                        alt="photo"
                      />
                    )}
                  </div>
                  <h3 className={s.itemTitle}>{title}</h3>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default BlogPageCards;
