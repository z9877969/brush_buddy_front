import css from './ArticleParagraph.module.scss';

const ArticleParagraph = ({ content, accent }) => {
  const replaceJSX = (str, replacement) => {
    const result = [];
    if (replacement.length === 0) {
      result.push(str);
      return result;
    }

    //const keys = Object.keys(replacement);
    const keys = replacement;
    const getRegExp = () => {
      const regexp = [];
      keys.forEach((key) => regexp.push(`${key}`));
      return new RegExp('(' + regexp.join('|') + ')');
    };
    const splitText = str.split(getRegExp());
    let index = 0;
    splitText.forEach((item) => {
      if (replacement.some((repl) => item === repl))
        result.push(
          <span key={(index++).toString()} className={css.accent}>
            {item}
          </span>
        );
      else result.push(item);
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
      <p className={css.paragraph}>{replaceJSX(content, accent)}</p>
    </div>
  );
};
export default ArticleParagraph;
