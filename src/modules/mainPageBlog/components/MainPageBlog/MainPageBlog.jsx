import { Container, MainTitle } from 'shared/components';
import blogData from '../../db/blogData.json';
import { LinkButton } from 'shared/components';
import BlogItem from '../BlogItem/BlogItem';
import s from './MainPageBlog.module.scss';

const MainPaigeBlog = () => {
  const elements = blogData.map((item) => (
    <BlogItem item={item} key={item.id} />
  ));
  return (
    <section className={s.blogSection}>
      <Container className={s.blogWrapper}>
        <MainTitle title={'Корисний блог'} className={s.blogTitle} />
        <ul className={s.blogList}>{elements}</ul>
        <LinkButton
          title={'Всі статті'}
          className={s.blogBtn}
          to={'/blog/1}'}
        />
      </Container>
    </section>
  );
};

export default MainPaigeBlog;
