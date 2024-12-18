import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BlogPageCards } from 'modules/blogPageCards';
import Article from '../Article/Article';
import { selectBlogs } from '@redux/blogs/blogsSelectors';
import css from './BlogView.module.scss';
import { Navigate, useParams } from 'react-router-dom';
import { ROUTES } from 'shared/constants';

const BlogView = () => {
  const blogsList = useSelector(selectBlogs);
  const { blogId } = useParams();

  const blog = useMemo(
    () => blogsList.find((el) => el._id === blogId)?.items || null,
    [blogsList, blogId]
  );

  if (blogsList.length > 0 && !blog) return <Navigate to={ROUTES.NOT_FOUND} />;

  return (
    <>
      <div className={css.wrapper}>
        <BlogPageCards />
        {blog && <Article article={blog} />}
      </div>
    </>
  );
};
export default BlogView;
