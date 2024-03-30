import { sprite } from 'shared/icons';
import s from './Paginator.module.scss';
import { useState, useEffect } from 'react';

const Paginator = ({ totalPages, onPageChange, key }) => {
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [key]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange, totalPages]);

  const changePage = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    const showPage = 3;
    const visiblePages = Math.min(totalPages, showPage);
    const showDots = totalPages > showPage;

    for (let i = 1; i <= visiblePages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`${s.pageNum} ${s.paginatFigure} ${currentPage === i ? s.active : ''}`}
        >
          {i}
        </button>
      );
    }

    if (showDots) {
      pages.push(
        <button key="dots" className={s.pageNum} disabled>
          <span>...</span>
        </button>
      );
    }
    if (currentPage > showPage) {
      pages.push(
        <button
          key={currentPage}
          onClick={() => changePage(currentPage)}
          className={`${s.pageNum} ${s.paginatFigure} ${currentPage === currentPage ? s.active : ''}`}
        >
          {currentPage}
        </button>
      );
      if (currentPage > showPage && currentPage !== totalPages) {
        pages.push(
          <button key="dots" className={s.pageNum} disabled>
            <span>...</span>
          </button>
        );
      }
    }
    if (showDots && currentPage !== totalPages) {
      pages.push(
        <button
          key={totalPages}
          onClick={() => changePage(totalPages)}
          className={`${s.pageNum} ${currentPage === totalPages ? s.active : ''}`}
        >
          {totalPages}
        </button>
      );
    }

    return <div className={s.blockFigure}>{pages}</div>;
  };
  if (totalPages < 2) {
    return null;
  }

  return (
    <div className={s.boxpagination}>
      <button
        className={s.pageNum}
        onClick={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg className={s.paginationIcon}>
          <use href={sprite + '#icon-chevron-left'}></use>
        </svg>
      </button>
      {renderPagination()}
      <button
        className={s.pageNum}
        onClick={() => changePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <svg className={s.paginationIcon}>
          <use href={sprite + '#icon-chevron-right'}></use>
        </svg>
      </button>
    </div>
  );
};

export default Paginator;
