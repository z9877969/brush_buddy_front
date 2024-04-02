import css from './ArticleSecondaryTitle.module.scss';
const ArticleSecondaryTitle = ({ content }) => {
  return <h2 className={css.title}>{content}</h2>;
};
export default ArticleSecondaryTitle;
