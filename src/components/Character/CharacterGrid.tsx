/* eslint-disable react/no-unescaped-entities */
import { useSearchParams } from 'react-router-dom';
import API_KEY from '../../constants/api_backend_url';
import CharacterCard from './CharacterCard';
import Spinner from '../Spinner/Spinner';
import ENDPOINTS from '../../constants/endpoints';
import useFetch from '../../hooks/useFetch';
import IApiResponse from '../../interfaces/IApiResponse';
import ICharacters from '../../interfaces/ICharacters';
/* import Pagination from '../Pagination/Pagination';
import usePagination from '../../hooks/usePagination'; */

const LIMIT = 20;
function CharacterGrid() {
  const [searchParams] = useSearchParams();
  const filterName = searchParams.get('nameStartsWith') ? `nameStartsWith=${searchParams.get('nameStartsWith')}&` : '';
  const filterComics = searchParams.get('comics') ? `comics=${searchParams.get('comics')}&` : '';
  const filterStories = searchParams.get('stories') ? `stories=${searchParams.get('stories')}&` : '';
  const page = searchParams.get('page') || '1';
  const offset = `offset=${page === '1' ? '0' : (Number(page) * LIMIT).toString()}&`;
  const limit = `limit=${LIMIT}&`;
  const { fetchState: { state, data, error } } = useFetch<IApiResponse<ICharacters>>(`${ENDPOINTS.characters}?${filterName}${filterComics}${filterStories}${offset}${limit}${API_KEY}`);
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
        {data?.data?.results?.map(({ id, name, thumbnail }) => (
          <CharacterCard key={id} name={name} thumbnail={thumbnail} id={id} />
        ))}
      </div>
      {/*       <Pagination currentPage={page} paginationRange={paginationRange} />
 */}
      {' '}

    </>
  );
}
export default CharacterGrid;
