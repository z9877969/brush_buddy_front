import css from './ArticleAbout.module.scss';

const ArticleAbout = ({ content }) => {
  return (
    <>
      <div className={css.about}>
        <p className={css.name}>{content.author}</p>
        <p>{content.date}</p>
      </div>
    </>
  );
};
export default ArticleAbout;
