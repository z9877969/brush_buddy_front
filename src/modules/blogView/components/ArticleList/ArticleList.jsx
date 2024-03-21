const ArticleList = ({ content }) => {
  const list = content.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
  return (
    <>
      <ul>{list}</ul>
      <br />
    </>
  );
};
export default ArticleList;
