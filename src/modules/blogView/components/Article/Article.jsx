import css from './Article.module.scss';
import ArticleAbout from '../ArticleAbout/ArticleAbout';
import ArticleList from '../ArticleList/ArticleList';
import ArticleParagraph from '../ArticleParagraph/ArticleParagraph';
import ArticlePrimaryTitle from '../ArticlePrimaryTitle/ArticlePrimaryTitle';
import ArticleSecondaryTitle from '../ArticleSecondaryTitle/ArticleSecondaryTitle';

const Article = ({ article }) => {
  const blocks = article.map((part, index) => {
    // console.log('block' + part.block);
    switch (part.block) {
      case 'primaryTitle':
        return <ArticlePrimaryTitle key={index} content={part.content} />;
      case 'secondaryTitle':
        return <ArticleSecondaryTitle key={index} content={part.content} />;
      case 'about':
        return <ArticleAbout key={index} content={part.content} />;
      case 'paragraph':
        return (
          <ArticleParagraph
            key={index}
            content={part.content}
            accent={part.accent}
          />
        );
      case 'list':
        return <ArticleList key={index} content={part.content} />;
      default:
        return <p key={index}>Section unsupported</p>;
    }
  });
  return <div className={css.section}> {blocks}</div>;
};
export default Article;
