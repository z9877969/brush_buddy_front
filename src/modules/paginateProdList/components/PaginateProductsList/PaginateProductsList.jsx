import { useEffect, useState } from 'react';
import ProdList from '../ProdList/ProdList';
import Paginator from '../Paginator/Paginator';
import s from './PaginateProductsList.module.scss';

const PaginateProdList = ({ products }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const displayedPages = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  return (
    <div className={s.blockPaginateProductsList}>
      <ProdList products={currentItems} />
      <Paginator
        handlePageClick={handlePageClick}
        displayedPages={displayedPages}
        pageCount={pageCount}
      />
    </div>
  );
};

export default PaginateProdList;
