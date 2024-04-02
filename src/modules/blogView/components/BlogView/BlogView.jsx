import Article from '../Article/Article';
import blogList from '../../data/blogList.json';
import { BlogPageCards } from 'modules/blogPageCards';
import css from './BlogView.module.scss';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Loader } from 'shared/components';
import { ROUTES } from 'shared/constants';

const getBlogApi = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      blogList[id] ? resolve(blogList[id]) : reject('Blog not found');
    }, 500);
  });
};

const BlogView = () => {
  const navigate = useNavigate();
  const { blogId } = useParams();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getBlogApi(blogId - 1)
      .then((data) => setBlog(data))
      .catch(() => navigate(ROUTES.NOT_FOUND))
      .finally(() => setIsLoading(false));
    // eslint-disable-next-line
  }, [blogId]);

  return (
    <>
      <div className={css.wrapper}>
        <BlogPageCards />
        {blog && <Article article={blog} />}
      </div>
      {isLoading && <Loader />}
    </>
  );
};
export default BlogView;
