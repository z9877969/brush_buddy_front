import { BlogPageCards } from 'modules/blogPageCards';
import { BlogView } from 'modules/blogView';
import { Container } from 'shared/components';

const BlogPage = () => {
  return (
    <Container>
      <BlogPageCards />
      <BlogView />
    </Container>
  );
};

export default BlogPage;
