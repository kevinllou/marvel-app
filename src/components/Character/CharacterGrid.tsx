/* eslint-disable react/no-unescaped-entities */
import { useSearchParams } from 'react-router-dom';
import CharacterCard from './CharacterCard';
import Spinner from '../Spinner/Spinner';
import useFetch from '../../hooks/useFetch';
import IApiResponse from '../../interfaces/IApiResponse';
import ICharacters from '../../interfaces/ICharacters';
import createURLFetch from '../../helpers/createURLFetch';
import IURLParams from '../../interfaces/IURLParams';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../hooks/usePagination';

function CharacterGrid() {
  const [searchParams] = useSearchParams();
  const charactersFecth: IURLParams = {
    nameStartsWith: searchParams.get('nameStartsWith') || '',
    comicParam: searchParams.get('comics') || '',
    storyParam: searchParams.get('stories') || '',
    page: searchParams.get('page') || '1',
  };
  const { state, data, error } = useFetch<IApiResponse<ICharacters>>(createURLFetch(charactersFecth, 'characters'));
  const paginationRange = usePagination(
    {
      totalCount: data?.data?.total || 0,
      pageSize: 20,
      currentPage: Number(charactersFecth.page),
    },
  );
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
      {data && paginationRange?.length > 1
      && <Pagination currentPage={charactersFecth.page} paginationRange={paginationRange || []} />}

    </>
  );
}
export default CharacterGrid;
