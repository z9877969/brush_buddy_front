import clsx from 'clsx';
import css from './ArticleList.module.scss';
const ArticleList = ({ content, isNextParagraph, isPrevParagraph }) => {
  const list = content.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <ul
      className={clsx(
        css.list,
        isNextParagraph && css.mbMin,
        isPrevParagraph && css.mtMin
      )}
    >
      {list}
    </ul>
  );
};
export default ArticleList;
