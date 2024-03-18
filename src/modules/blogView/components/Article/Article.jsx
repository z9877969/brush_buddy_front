const Article = ({ article }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <div>
        <p>{article.author}</p>
        <p>{article.date}</p>
      </div>
      {article.text}
    </div>
  );
};
export default Article;
