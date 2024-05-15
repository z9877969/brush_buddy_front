import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { BlogPageCards } from 'modules/blogPageCards';
import Article from '../Article/Article';
import { selectBlogs } from '@redux/blogs/blogsSelectors';
import css from './BlogView.module.scss';
import { useParams } from 'react-router-dom';

const BlogView = () => {
  const blogsList = useSelector(selectBlogs);
  const { blogId } = useParams();

  const blog = useMemo(
    () => blogsList.find((el) => el._id === blogId)?.items || null,
    [blogsList, blogId]
  );

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
