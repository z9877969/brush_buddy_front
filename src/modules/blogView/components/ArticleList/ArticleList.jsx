import css from './ArticleList.module.scss';
const ArticleList = ({ content }) => {
  const list = content.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <>
      <ul className={css.style}>{list}</ul>
      <br />
    </>
  );
};
export default ArticleList;
