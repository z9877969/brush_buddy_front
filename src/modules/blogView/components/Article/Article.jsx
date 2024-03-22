import css from './Article.module.scss';
import ArticleAbout from '../ArticleAbout/ArticleAbout';
import ArticleList from '../ArticleList/ArticleList';
import ArticleParagraph from '../ArticleParagraph/ArticleParagraph';
import ArticlePrimaryTitle from '../ArticlePrimaryTitle/ArticlePrimaryTitle';
import ArticleSecondaryTitle from '../ArticleSecondaryTitle/ArticleSecondaryTitle';
import { Picture } from 'shared/components';
import * as images from '../../images';

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
      case 'image':
        return (
          <Picture
            key={index}
            mob1x={images[`${part.content}mob`]}
            mob2x={images[`${part.content}mob2x`]}
            tab1x={images[`${part.content}tab`]}
            tab2x={images[`${part.content}tab2x`]}
            desk1x={images[`${part.content}desk`]}
            desk2x={images[`${part.content}desk2x`]}
            className={css.picture}
          />
        );
      default:
        return <p key={index}>Section unsupported</p>;
    }
  });
  return <div> {blocks}</div>;
};
export default Article;
