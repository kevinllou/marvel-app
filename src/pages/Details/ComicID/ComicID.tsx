/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ICharacters from '../../../interfaces/ICharacters';
import IReducers from '../../../interfaces/IReducers';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IStories from '../../../interfaces/IStories';
import './ComicID.scss';
import ROUTES from '../../../routes/routes';
import IComics from '../../../interfaces/IComics';
import createURLFetch from '../../../helpers/createURLFetch';
import Message from '../../../components/Message/Message';
import { createComicObject } from '../../../helpers/createObjectType';
import { addComicToFavorites, hideComic, removeComicOfFavorites } from '../../../redux/actions';

function ComicId() {
  const { id } = useParams();
  const history = useNavigate();
  const comicId = Number(id);
  const dispatch = useDispatch();
  const { state, data: comics, error } = useFetch<IApiResponse<IComics>>(createURLFetch({}, 'comic_id', comicId));
  const { data: characters } = useFetch<IApiResponse<ICharacters>>(createURLFetch({}, 'comicCharacters', comicId));
  const { data: stories } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'comicStories', comicId));
  const comicObject = createComicObject(comics?.data?.results);
  const comicStore = useSelector((state: IReducers) => state.bookmarksReducer.comics);
  const comicHidden = useSelector((state: IReducers) => state.hiddenReducer.comics);
  const isComicInStore = !!comicStore.find((item: IComics) => item.id === comicId);
  const isComicHidden = !!comicHidden.find((item: number) => item === comicId);

  const handleAddComicToFavorites = () => {
    if (isComicInStore) {
      dispatch(removeComicOfFavorites(comicObject?.id));
      return;
    }
    dispatch(addComicToFavorites(comicObject));
  };
  const handleHideComic = () => {
    if (!isComicHidden && comicObject?.id) {
      dispatch(hideComic(comicObject?.id));
    }
  };
  if (state === 'loading') return <Spinner />;
  if (error) return <Message typeMessage="This comic does not exist" />;
  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        <div className="detail__card" key={comicObject?.id}>
          <div className="detail__cardImg">
            <img src={`${comicObject?.thumbnail?.path}.${comicObject?.thumbnail?.extension}`} alt="imageId" />
          </div>
          <div className="detail__cardBody">
            <div className="detail__cardBodyInfo">
              <p className="detail__cardBodyTitle">{comicObject?.title}</p>
              <p className="detail__cardDescription">{comicObject?.description || 'No available'}</p>
            </div>
            <div className="detail__cardBodyBottom">
              <button
                type="button"
                style={{ backgroundColor: isComicInStore ? 'grey' : 'red' }}
                onClick={handleAddComicToFavorites}
                data-testid="icon-heart"
              >
                Like
                {' '}
                <i className="fa-sharp fa-solid fa-heart" />
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: isComicHidden ? 'grey' : 'red',
                  pointerEvents: isComicHidden ? 'none' : 'auto',
                }}
                onClick={handleHideComic}
                data-testid="icon-hide"
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
                            && <p>This comic doesn't contain characters</p>}
            {characters ? characters.data?.results?.map(({ id: idCharacter, name }) => (
              <Link key={idCharacter} to={`${ROUTES.CHARACTERS}/${idCharacter}`}>
                <li>{name}</li>
              </Link>
            )) : <Spinner />}
          </div>
          <div className="detail__stories">
            <h1>STORIES</h1>
            {stories?.data?.results?.length === 0 && <p>This comic doesn't contain stories</p>}
            {stories ? stories.data?.results?.map(({ id: idStory, title }) => (
              <Link key={idStory} to={`${ROUTES.STORIES}/${idStory}`}>
                <li>{title}</li>
              </Link>
            )) : <Spinner />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComicId;
