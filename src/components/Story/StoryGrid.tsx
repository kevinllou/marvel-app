/* eslint-disable react/no-unescaped-entities */
import { useSearchParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import IApiResponse from '../../interfaces/IApiResponse';
import IStories from '../../interfaces/IStories';
import Spinner from '../Spinner/Spinner';
import StoryCard from './StoryCard';
import createURLFetch from '../../helpers/createURLFetch';
import IURLParams from '../../interfaces/IURLParams';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../hooks/usePagination';

function StoriesGrid() {
  const [searchParams] = useSearchParams();
  const storiesFetch: IURLParams = {
    characterParam: searchParams.get('characters') || '',
    page: searchParams.get('page') || '1',
  };
  const { state, data, error } = useFetch<IApiResponse<IStories>>(createURLFetch(storiesFetch, 'stories'));
  const paginationRange = usePagination(
    {
      totalCount: data?.data?.total || 0,
      pageSize: 20,
      currentPage: Number(storiesFetch.page),
    },
  );

  if (state === 'loading') return <Spinner />;
  if (error) return <p>There was an error</p>;
  return (
    <>
      <div className="characters__grid">
        {data?.data?.results?.length === 0 && <p style={{ paddingTop: '.5rem' }}>We couldn't find any data ...</p>}
        {data?.data?.results?.map(({ id, title, thumbnail }) => (
          <StoryCard key={id} title={title} thumbnail={thumbnail} id={id} />
        ))}
      </div>
      <Pagination currentPage={storiesFetch.page} paginationRange={paginationRange} />
    </>
  );
}

export default StoriesGrid;
