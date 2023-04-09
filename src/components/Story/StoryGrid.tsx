/* eslint-disable react/no-unescaped-entities */
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useFetch from '../../hooks/useFetch';
import IApiResponse from '../../interfaces/IApiResponse';
import IStories from '../../interfaces/IStories';
import Spinner from '../Spinner/Spinner';
import StoryCard from './StoryCard';
import createURLFetch from '../../helpers/createURLFetch';
import IURLParams from '../../interfaces/IURLParams';
import Pagination from '../Pagination/Pagination';
import usePagination from '../../hooks/usePagination';
import Message from '../Message/Message';
import IReducers from '../../interfaces/IReducers';

function StoriesGrid() {
  const [searchParams] = useSearchParams();
  const storyHidden = useSelector((state: IReducers) => state.hiddenReducer.stories);
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
  if (data?.data?.results?.length === 0) return <Message typeMessage="We couldn't find more stories" />;
  return (
    <>
      <div className="characters__grid">
        {data?.data?.results
          ?.filter(({ id }, key) => id !== storyHidden[key])
          .map(({
            id, title, thumbnail, type, description, characters, comics,
          }) => (
            <StoryCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              type={type}
              description={description}
              characters={characters}
              comics={comics}
            />
          ))}
      </div>
      <Pagination currentPage={storiesFetch.page} paginationRange={paginationRange} />
    </>
  );
}

export default StoriesGrid;
