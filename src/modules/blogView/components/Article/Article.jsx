import css from './Article.module.scss';
import ArticleAbout from '../ArticleAbout/ArticleAbout';
import ArticleList from '../ArticleList/ArticleList';
import ArticleParagraph from '../ArticleParagraph/ArticleParagraph';
import ArticlePrimaryTitle from '../ArticlePrimaryTitle/ArticlePrimaryTitle';
import ArticleSecondaryTitle from '../ArticleSecondaryTitle/ArticleSecondaryTitle';
import { Picture } from 'shared/components';
import * as images from '../../images';

const Article = ({ article }) => {
  const blocks = article.map((part, index, arr) => {
    switch (part.block) {
      case 'primaryTitle':
        return (
          <div key={index} className={css.block}>
            <ArticlePrimaryTitle content={part.content} />
          </div>
        );
      case 'secondaryTitle':
        return (
          <div key={index} className={css.block}>
            <ArticleSecondaryTitle content={part.content} />
          </div>
        );
      case 'about':
        return (
          <div key={index} className={css.block}>
            <ArticleAbout content={part.content} />
          </div>
        );
      case 'paragraph':
        return (
          <div key={index} className={css.block}>
            <ArticleParagraph content={part.content} accent={part.accent} />
          </div>
        );
      case 'list':
        return (
          <div key={index} className={css.block}>
            <ArticleList
              isNextParagraph={arr[index + 1]?.block === 'paragraph'}
              isPrevParagraph={arr[index - 1]?.block === 'paragraph'}
              content={part.content}
            />
          </div>
        );
      case 'image':
        return (
          <div key={index} className={css.block}>
            <Picture
              mob1x={
                images[`${part.content}mob`]
                  ? images[`${part.content}mob`]
                  : part.content
              }
              mob2x={
                images[`${part.content}mob2x`]
                  ? images[`${part.content}mob2x`]
                  : part.content
              }
              tab1x={
                images[`${part.content}tab`]
                  ? images[`${part.content}tab`]
                  : part.content
              }
              tab2x={
                images[`${part.content}tab2x`]
                  ? images[`${part.content}tab2x`]
                  : part.content
              }
              desk1x={
                images[`${part.content}desk`]
                  ? images[`${part.content}desk`]
                  : part.content
              }
              desk2x={
                images[`${part.content}desk2x`]
                  ? images[`${part.content}desk2x`]
                  : part.content
              }
              className={css.picture}
            />
          </div>
        );
      default:
        return null;
    }
  });
  return <div className={css.article}>{blocks}</div>;
};
export default Article;
