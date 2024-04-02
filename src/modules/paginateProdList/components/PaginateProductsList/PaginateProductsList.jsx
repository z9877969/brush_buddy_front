import { useEffect, useState } from 'react';
import ProdList from '../ProdList/ProdList';
import Paginator from '../Paginator/Paginator';
import s from './PaginateProductsList.module.scss';
import { scrollToTop } from 'helpers/scrollToTop';

const PaginateProdList = ({ products }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;
  const [productsChanged, setProductsChanged] = useState(false);
  const [prevProductsLength, setPrevProductsLength] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(products.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(products.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, products]);

  const handlePageClick = (pageNumber) => {
    const newOffset = (pageNumber - 1) * itemsPerPage;
    setItemOffset(newOffset);
    scrollToTop();
  };

  useEffect(() => {
    if (products.length !== prevProductsLength) {
      setProductsChanged(true);
      setPrevProductsLength(products.length);
    }
    if (prevProductsLength === 0) {
      setProductsChanged(false);
    }
  }, [products, prevProductsLength]);

  return (
    <div className={s.blockPaginateProductsList}>
      <ProdList products={currentItems} />
      {currentItems.length > 0 && (
        <Paginator
          totalPages={pageCount}
          onPageChange={handlePageClick}
          key={products.length}
          customkey={productsChanged}
        />
      )}
    </div>
  );
};

export default PaginateProdList;
