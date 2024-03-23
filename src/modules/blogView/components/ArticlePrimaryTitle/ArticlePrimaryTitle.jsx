import css from './ArticlePrimaryTitle.module.scss';
const ArticlePrimaryTitle = ({ content }) => {
  return (
    <>
      <h1 className={css.title}>{content}</h1>
    </>
  );
};
export default ArticlePrimaryTitle;
