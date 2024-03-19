import { useState, useEffect, useMemo } from 'react';
import { Container, MainTitle } from 'shared/components';
import blogData from '../../db/blogData.json';
import { LinkButton } from 'shared/components';
import BlogItem from '../BlogItem/BlogItem';
import s from './MainPageBlog.module.scss';

const MainPaigeBlog = () => {
  const [visiblePosts, setVisiblePosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [blogId, setBlogId] = useState(null);

  useEffect(() => {
    setPosts(blogData);
    setBlogId('1');
  }, []);

  useEffect(() => {
    setVisiblePosts(posts.slice(0, 3));
  }, [posts]);

  const elements = useMemo(() => {
    return visiblePosts.map((item) => <BlogItem item={item} key={item.id} />);
  }, [visiblePosts]);

  return (
    <section className={s.blogSection}>
      <Container className={s.blogWrapper}>
        <MainTitle title={'Корисний блог'} className={s.blogTitle} />
        <ul className={s.blogList}>{elements}</ul>
        <LinkButton
          title={'Всі статті'}
          className={s.blogBtn}
          to={`/blog/${blogId}`}
        />
      </Container>
    </section>
  );
};

export default MainPaigeBlog;
