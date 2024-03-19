import { useEffect, useState } from 'react';
import s from './ProductPagePagination.module.scss';
import ReactPaginate from 'react-paginate';
import { sprite } from 'shared/icons';
import { Container } from 'shared/components';

const ProductsPagePagination = ({ data }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 7;
  const displayedPages = 3;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };
  return (
    <Container>
      <div>
        {currentItems.map(({ image, title }, index) => (
          <div key={index}>
            <img src={image} alt={title} />
          </div>
        ))}
      </div>
      <div className={s.blockPagination}>
        <ReactPaginate
          breakLabel={<span>...</span>}
          nextLabel={
            <svg className={s.paginationIcon}>
              <use href={sprite + '#icon-chevron-right'}></use>
            </svg>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={
            pageCount > displayedPages ? displayedPages : pageCount
          }
          marginPagesDisplayed={0}
          pageCount={pageCount}
          previousLabel={
            <svg className={s.paginationIcon}>
              <use href={sprite + '#icon-chevron-left'}></use>
            </svg>
          }
          renderOnZeroPageCount={null}
          containerClassName={s.boxpagination}
          pageClassName={s.pageNum}
          previousLinkClassName={s.pageNum}
          nextLinkClassName={s.pageNum}
          activeClassName={s.active}
          previousClassName={s.previous}
          nextClassName={s.next}
          disabledClassName={s.disabled}
        />
      </div>
    </Container>
  );
};

//   const [currentPage, setCurrentPage] = useState(1);
//   const [disabled, setDisabledLeft] = useState(true);
//   const paginator = new Paginator(12, 7);
//   const info = paginator.build(data.length, currentPage);
//   console.log(info);
//   console.log(data.length);
//   return (
//     <div className={s.boxpagination}>
//       <RoundButton className={s.svg} iconId={'icon - chevron - left'} />
//       <RoundButton className={s.btnPagin} title={currentPage} />
//       <RoundButton className={s.svg} iconId={'icon-arrow-right'} />
//     </div>
//   );

export default ProductsPagePagination;
