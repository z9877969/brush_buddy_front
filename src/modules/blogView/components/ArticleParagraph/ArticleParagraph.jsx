import css from './ArticleParagraph.module.scss';
const ArticleParagraph = ({ content, accent }) => {
  const replaceJSX = (str, replacement) => {
    const result = [];
    const keys = Object.keys(replacement);
    const getRegExp = () => {
      const regexp = [];
      keys.forEach((key) => regexp.push(`${key}`));
      return new RegExp(regexp.join('|'));
    };
    str.split(getRegExp()).forEach((item, i) => {
      result.push(item, replacement[keys[i]]);
    });
    return result;
  };

  // prepare replacements
  let replacement = {};
  accent.forEach((item) => {
    replacement[item] = (
      <span id="id" className={css.accent}>
        {item}
      </span>
    );
  });

  return (
    <div>
      <p>{replaceJSX(content, replacement)}</p>
      <br />
    </div>
  );
};
export default ArticleParagraph;
