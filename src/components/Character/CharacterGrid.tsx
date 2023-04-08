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
import Message from '../Message/Message';

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
  if (error) return <Message typeMessage="Error: There is not data available" />;
  if (data?.data?.results?.length === 0) return <Message typeMessage="We couldn't find more characters" />;
  return (
    <>
      <div className="characters__grid">
        {data?.data?.results?.map(({
          id, name, thumbnail, description, comics, stories,
        }) => (
          <CharacterCard
            key={id}
            name={name}
            thumbnail={thumbnail}
            id={id}
            description={description}
            comics={comics}
            stories={stories}
          />
        ))}
      </div>
      {data && paginationRange?.length > 1
      && <Pagination currentPage={charactersFecth.page} paginationRange={paginationRange || []} />}

    </>
  );
}
export default CharacterGrid;
