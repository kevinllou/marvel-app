/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ICharacters from '../../../interfaces/ICharacters';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IStories from '../../../interfaces/IStories';
import './StoryID.scss';
import ROUTES from '../../../routes/routes';
import createURLFetch from '../../../helpers/createURLFetch';
import Message from '../../../components/Message/Message';
import IReducers from '../../../interfaces/IReducers';
import { createStoriesObject } from '../../../helpers/createObjectType';
import { addStoryToFavorites, hideStory, removeStoryOfFavorites } from '../../../redux/actions';

function StoryID() {
  const { id } = useParams();
  const history = useNavigate();
  const idStory = Number(id);
  const dispatch = useDispatch();
  const { state, data: stories, error } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'story_id', idStory));
  const { data: characters } = useFetch<IApiResponse<ICharacters>>(createURLFetch({}, 'storyCharacters', idStory));
  const { data: comics } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'storyComics', idStory));
  const storyObject = createStoriesObject(stories?.data?.results);
  const storyStore = useSelector((state: IReducers) => state.bookmarksReducer.stories);
  const storyHidden = useSelector((state: IReducers) => state.hiddenReducer.stories);
  const isStoryInStore = !!storyStore.find((item: IStories) => item.id === idStory);
  const isStoryHidden = !!storyHidden.find((item: number) => item === idStory);

  const handleAddStoryToFavorites = () => {
    if (isStoryInStore) {
      dispatch(removeStoryOfFavorites(storyObject?.id));
      return;
    }
    dispatch(addStoryToFavorites(storyObject));
  };
  const handleHideStory = () => {
    if (!isStoryHidden && storyObject?.id) {
      dispatch(hideStory(storyObject?.id));
    }
  };

  if (state === 'loading') return <Spinner />;
  if (error) return <Message typeMessage="This story does not exist" />;
  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        <div className="detail__card" key={idStory}>
          <div className="detail__cardImg">
            <img src={`${storyObject?.thumbnail?.path || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'}.${storyObject?.thumbnail?.extension || 'jpg'}`} alt="" />
          </div>
          <div className="detail__cardBody">
            <div className="detail__cardBodyInfo">
              <p className="detail__cardBodyTitle">{storyObject?.title}</p>
              <p className="detail__cardDescription">{storyObject?.description || 'No available'}</p>
            </div>
            <div className="detail__cardBodyBottom">
              <button
                type="button"
                style={{ backgroundColor: isStoryInStore ? 'grey' : 'red' }}
                onClick={handleAddStoryToFavorites}
              >
                Like
                {' '}
                <i className="fa-sharp fa-solid fa-heart" />
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: isStoryHidden ? 'grey' : 'red',
                  pointerEvents: isStoryHidden ? 'none' : 'auto',
                }}
                onClick={handleHideStory}
              >
                Hide
                {' '}
                <i className="fa-solid fa-eye-slash" />
              </button>
            </div>
          </div>
        </div>
        <div className="detail__characterInfo">
          <div className="detail__characters">
            <h1>CHARACTERS</h1>
            {characters?.data?.results?.length === 0
            && <p>This story doesn't contain characters</p>}
            {characters ? characters.data?.results?.map(({ id: idCharacter, name }) => (
              <Link key={idCharacter} to={`${ROUTES.CHARACTERS}/${idCharacter}`}>
                <li>{name}</li>
              </Link>
            )) : <Spinner />}
          </div>
          <div className="detail__comics">
            <h1>COMICS</h1>
            {comics?.data?.results?.length === 0 && <p>This story doesn't contain stories</p>}
            {comics ? comics.data?.results?.map(({ id: idComic, title }) => (
              <Link key={idComic} to={`${ROUTES.COMICS}/${idComic}`}>
                <li>{title}</li>
              </Link>
            )) : <Spinner />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoryID;
