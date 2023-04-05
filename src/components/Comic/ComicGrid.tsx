/* eslint-disable react/no-unescaped-entities */
import { useSearchParams } from 'react-router-dom';
import API_CREDENTIALS from '../../constants/api_backend_url';
import ENDPOINTS from '../../constants/endpoints';
import useFetch from '../../hooks/useFetch';
import IApiResponse from '../../interfaces/IApiResponse';
import IComics from '../../interfaces/IComics';
import Spinner from '../Spinner/Spinner';
import ComicCard from './ComicCard';
/* import usePagination from '../../hooks/usePagination';
import Pagination from '../Pagination/Pagination'; */

const LIMIT = 20;
function ComicGrid() {
  const [searchParams] = useSearchParams();
  const titleValue = searchParams.get('title') ? `title=${searchParams.get('title')}&` : '';
  const formatValue = searchParams.get('format') ? `format=${searchParams.get('format')}&` : '';
  const page = searchParams.get('page') || '1';
  const offset = `offset=${page === '1' ? '0' : (Number(page) * LIMIT).toString()}&`;
  const limit = `limit=${LIMIT}&`;
  const { fetchState: { state, data, error } } = useFetch<IApiResponse<IComics>>(`${ENDPOINTS.comics}?${titleValue}${formatValue}${offset}${limit}${API_CREDENTIALS}`);
  /*   const paginationRange = usePagination(
    {
      totalCount: data?.data?.total,
      pageSize: LIMIT,
      currentPage: page,
    },
  ); */
  if (state === 'loading') return <Spinner />;
  if (error) return <p>There was an error</p>;

  return (
    <>
      <div className="characters__grid">
        {data?.data?.results?.length === 0 && <p style={{ paddingTop: '.5rem' }}>We couldn't find any data ...</p>}
        {data?.data?.results?.map(({ id, title, thumbnail }) => (
          <ComicCard
            key={id}
            title={title}
            thumbnail={thumbnail}
            id={id}
          />
        ))}
      </div>
      {/*   <Pagination currentPage={page} paginationRange={paginationRange} /> */}
    </>
  );
}

export default ComicGrid;
