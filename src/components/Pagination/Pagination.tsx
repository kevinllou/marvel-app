/* eslint-disable react/no-array-index-key */
import './Pagination.scss';
import { useSearchParams } from 'react-router-dom';

interface IFilterItems {
  currentPage: string | undefined;
  paginationRange: (string | number)[];
}

function Pagination({ currentPage, paginationRange }: IFilterItems) {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClick = (page:number | string) => {
    if (page === currentPage || page === '...') return;
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  };
  const onPrevious = () => {
    const pageValue = (Number(currentPage) - 1).toString();
    searchParams.set('page', pageValue);
    setSearchParams(searchParams);
  };
  const onNext = () => {
    const pageValue = (Number(currentPage) + 1).toString();
    searchParams.set('page', pageValue);
    setSearchParams(searchParams);
  };
  return (
    <section className="pagination">
      <button type="button" onClick={onPrevious} className="pagination__prev">
        <i className="fa-solid fa-angle-left" />
      </button>
      {
        paginationRange?.map((page: string | number, index:number) => (
          <button
            type="button"
            key={index}
            onClick={() => handleClick(page)}
            style={{ pointerEvents: page === '...' ? 'none' : 'auto' }}
            className={`${page.toString() === currentPage ? 'pagination__btn pagination__btn--active' : 'pagination__btn'
            }`}
          >
            {page}
          </button>
        ))
      }
      <button type="button" onClick={onNext} className="pagination__next">
        <i className="fa-solid fa-angle-right" />
      </button>
    </section>
  );
}

export default Pagination;
