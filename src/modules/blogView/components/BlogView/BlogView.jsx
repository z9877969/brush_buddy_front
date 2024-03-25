import Article from '../Article/Article';
import { testArticle } from '../data/testArticle';
import { BlogPageCards } from 'modules/blogPageCards';
import css from './BlogView.module.scss';

const BlogView = () => {
  return (
    <div className={css.blog}>
      <BlogPageCards />
      <Article article={testArticle} />
    </div>
  );
};
export default BlogView;
