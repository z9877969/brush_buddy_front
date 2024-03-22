import css from './ArticleAbout.module.scss';

const ArticleAbout = ({ content }) => {
  return (
    <>
      <div className={css.about}>
        <p className={css.name}>{content[0]}</p>
        <p>{content[1]}</p>
      </div>
      <br />
    </>
  );
};
export default ArticleAbout;
