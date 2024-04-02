import { sprite } from 'shared/icons';
import s from './Paginator.module.scss';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Paginator = ({ totalPages, onPageChange, customkey }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const page = parseInt(params.get('page'));

    if (!isNaN(page) && page > 0) {
      setCurrentPage(page);
    } else {
      setCurrentPage(1);
    }
    // eslint-disable-next-line
  }, [customkey]);

  useEffect(() => {
    onPageChange(currentPage);
  }, [currentPage, onPageChange]);

  useEffect(() => {
    setSearchParams({ page: currentPage });
  }, [currentPage, setSearchParams, searchParams]);

  const changePage = async (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPagination = () => {
    const pages = [];
    let showPage = 3;
    const visiblePages = Math.min(totalPages, showPage);
    let showDots = totalPages > showPage;
    if (totalPages === showPage) {
      showDots = false;
    }

    if (totalPages === showPage + 1) {
      // якщо к-сть сторінок більша від showPage тільки на 1
      for (let i = 1; i <= totalPages; i++) {
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
      return <div className={s.blockFigure}>{pages}</div>;
    }

    for (let i = 1; i <= visiblePages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => changePage(i)}
          className={`${s.pageNum} ${s.paginatFigure} ${currentPage === i ? s.active : ''} ${i > 1 && currentPage > showPage ? s.visuallyHidden : ''}`}
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

      if (
        currentPage > showPage &&
        currentPage !== totalPages &&
        totalPages !== showPage
      ) {
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
    <div className={`${s.boxpagination} ${totalPages > 3 ? s.fixStyle : ''}`}>
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
