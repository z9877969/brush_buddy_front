import { Container, MainTitle, Section } from 'shared/components';
import blogData from '../../db/blogData.json';
import { LinkButton } from 'shared/components';
import BlogItem from '../BlogItem/BlogItem';
import s from './MainPageBlog.module.scss';

const MainPaigeBlog = () => {
  const elements = blogData.map((item) => (
    <BlogItem item={item} key={item.id} />
  ));
  return (
    <Section className={s.blogSection}>
      <Container>
        <div>
          <MainTitle title={'Корисний блог'} />
          <LinkButton
            title={'Всі статті'}
            className={s.blogBtn}
            to={'/blog/1}'}
          />
        </div>
        <ul className={s.blogList}>{elements}</ul>
      </Container>
    </Section>
  );
};

export default MainPaigeBlog;
