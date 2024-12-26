import { useMemo } from 'react';
import { Container, MainTitle, LinkButton } from 'shared/components';
import BlogItem from '../BlogItem/BlogItem';
import { useBlogsWithNavLink } from 'hooks';
import s from './MainPageBlog.module.scss';

const MainPaigeBlog = () => {
  const blogsList = useBlogsWithNavLink(3);

  const elements = useMemo(() => {
    if (!blogsList || blogsList.length === 0) return null;
    return blogsList.map((item) => <BlogItem item={item} key={item._id} />);
  }, [blogsList]);

  return (
    <section className={s.blogSection}>
      <Container className={s.blogWrapper}>
        <MainTitle title={'Корисний блог'} className={s.blogTitle} />
        <ul className={s.blogList}>{elements}</ul>
        <LinkButton
          title={'Всі статті'}
          className={s.blogBtn}
          to={blogsList[0].navLink}
        />
      </Container>
    </section>
  );
};

export default MainPaigeBlog;
