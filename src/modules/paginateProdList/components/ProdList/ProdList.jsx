const ProdList = ({ currentItems = [] }) => {
  return (
    <div>
      {currentItems.map(({ image, title }, index) => (
        <div key={index}>
          <img src={image} alt={title} />
        </div>
      ))}
    </div>
  );
};

export default ProdList;
