import Article from '../Article/Article';
import ArticlesList from '../ArticlesList/ArticlesList';
import { testArticle } from '../data/testArticle';

const BlogView = () => {
  return (
    <div>
      <ArticlesList />
      <Article article={testArticle} />
    </div>
  );
};
export default BlogView;
