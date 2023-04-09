/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CharacterID.scss';
import { useDispatch, useSelector } from 'react-redux';
import ICharacters from '../../../interfaces/ICharacters';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IComics from '../../../interfaces/IComics';
import IStories from '../../../interfaces/IStories';
import ROUTES from '../../../routes/routes';
import { addCharacterToFavorites, hideCharacter, removeCharacterOfFavorites } from '../../../redux/actions';
import { createCharacterObject } from '../../../helpers/createObjectType';
import createURLFetch from '../../../helpers/createURLFetch';
import Message from '../../../components/Message/Message';
import IReducers from '../../../interfaces/IReducers';

function CharacterId() {
  const { id } = useParams();
  const history = useNavigate();
  const idCharacter = Number(id);
  const dispatch = useDispatch();
  const { state, data: character, error } = useFetch<IApiResponse<ICharacters>>(createURLFetch({}, 'character_id', idCharacter));
  const { data: comics } = useFetch<IApiResponse<IComics>>(createURLFetch({}, 'characterComics', idCharacter));
  const { data: stories } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'characterStories', idCharacter));
  const characterObject = createCharacterObject(character?.data?.results);
  const charactersStore = useSelector((state: IReducers) => state.bookmarksReducer.characters);
  const isInStore = !!charactersStore.find((item: ICharacters) => item.id === characterObject?.id);
  const characterHidden = useSelector((state: IReducers) => state.hiddenReducer.characters);
  const isCharacterHidden = characterHidden.find((id) => id === characterObject?.id);

  const handleAddCharacterToFavorites = () => {
    if (isInStore) {
      dispatch(removeCharacterOfFavorites(characterObject?.id));
      return;
    }
    dispatch(addCharacterToFavorites(characterObject));
  };

  const handleHideCharacter = () => {
    if (!isCharacterHidden && characterObject?.id) {
      dispatch(hideCharacter(characterObject.id));
    }
  };

  if (state === 'loading') return <Spinner />;
  if (error) return <Message typeMessage="This character does not exist" />;

  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        <div className="detail__card" key={characterObject?.id}>
          <div className="detail__cardImg">
            <img src={`${characterObject?.thumbnail?.path}.${characterObject?.thumbnail?.extension}`} alt="imageId" />
          </div>
          <div className="detail__cardBody">
            <div className="detail__cardBodyInfo">
              <p className="detail__cardBodyTitle">{characterObject?.name}</p>
              <p className="detail__cardDescription">{characterObject?.description || 'No available'}</p>
            </div>
            <div className="detail__cardBodyBottom">
              <button
                type="button"
                style={{ backgroundColor: isInStore ? 'grey' : 'red' }}
                onClick={handleAddCharacterToFavorites}
              >
                Like
                {' '}
                <i className="fa-sharp fa-solid fa-heart" />
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: isCharacterHidden ? 'grey' : 'red',
                  pointerEvents: isCharacterHidden ? 'none' : 'auto',
                }}
                onClick={handleHideCharacter}
              >
                Hide
                {' '}
                <i
                  className="fa-solid fa-eye-slash"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="detail__characterInfo">
          <div className="detail__comics">
            <h1>COMICS</h1>
            {comics?.data?.results?.length === 0 && <p>This character doesn't contain comics</p>}
            {comics ? comics.data?.results?.map(({ id: idComic, title }) => (
              <Link key={idComic} to={`${ROUTES.COMICS}/${idComic.toString()}`}>
                <li>{title}</li>
              </Link>
            )) : <Spinner />}
          </div>
          <div className="detail__stories">
            <h1>STORIES</h1>
            {stories?.data?.results?.length === 0 && <p>This story doesn't contain stories</p>}
            {stories ? stories.data?.results?.map(({ id: idStory, title }) => (
              <Link to={`${ROUTES.STORIES}/${idStory}`} key={idStory}>
                <li>{title}</li>
              </Link>
            )) : <Spinner />}
          </div>
        </div>
      </div>
    </section>

  );
}

export default CharacterId;
