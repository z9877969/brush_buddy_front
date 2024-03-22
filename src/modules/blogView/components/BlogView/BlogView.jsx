import { Container } from 'shared/components';
import Article from '../Article/Article';
import ArticlesList from '../ArticlesList/ArticlesList';
import { testArticle } from '../data/testArticle';

const BlogView = () => {
  return (
    <div>
      <Container>
        <ArticlesList />
        <Article article={testArticle} />
      </Container>
    </div>
  );
};
export default BlogView;
