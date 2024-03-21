import ReactPaginate from 'react-paginate';
import { sprite } from 'shared/icons';
import s from './Paginator.module.scss';

const Paginator = ({ handlePageClick, displayedPages, pageCount }) => {
  return (
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
        pageLinkClassName={s.pageNum}
        pageClassName={s.pageFigure}
        previousLinkClassName={s.pageNum}
        nextLinkClassName={s.pageNum}
        activeLinkClassName={s.active}
        previousClassName={s.previous}
        nextClassName={s.next}
        disabledClassName={s.disabled}
      />
    </div>
  );
};

export default Paginator;
