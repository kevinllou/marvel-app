/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate, useParams } from 'react-router-dom';
import './CharacterID.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ICharacters from '../../../interfaces/ICharacters';
import API_CREDENTIALS from '../../../constants/api_backend_url';
import ENDPOINTS from '../../../constants/endpoints';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IComics from '../../../interfaces/IComics';
import IStories from '../../../interfaces/IStories';
import ROUTES from '../../../routes/routes';
import { addCharacterToFavorites } from '../../../redux/actions';

function CharacterId() {
  const { id } = useParams();
  const history = useNavigate();
  const idCharacter = Number(id);
  const dispatch = useDispatch();
  const [buttonsStatus, setButtonsStatus] = useState({
    favorites: true,
    hidden: true,
  });
  const { fetchState: { state, data: character, error } } = useFetch<IApiResponse<ICharacters>>(`${ENDPOINTS.characters}/${idCharacter}?${API_CREDENTIALS}`);
  const { fetchState: { data: comics } } = useFetch<IApiResponse<IComics>>(`${ENDPOINTS.characters}/${idCharacter}/comics?${API_CREDENTIALS}`);
  const { fetchState: { data: stories } } = useFetch<IApiResponse<IStories>>(`${ENDPOINTS.characters}/${idCharacter}/stories?${API_CREDENTIALS}`);
  const handleAddCharacterToFavorites = () => {
    setButtonsStatus({
      ...buttonsStatus,
      favorites: false,
    });
    const transformArray = (characters: ICharacters[] | null | undefined):ICharacters | null | undefined => characters?.[0];
    const characterState = transformArray(character?.data?.results);
    dispatch(addCharacterToFavorites(characterState));
  };
  if (state === 'loading') return <Spinner />;
  if (error) return <p>There was an error</p>;

  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        {character?.data?.results?.map(({
          id: idCharacters, name, thumbnail, description,
        }) => (
          <div className="detail__card" key={idCharacters}>
            <div className="detail__cardImg">
              <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt="imageId" />
            </div>
            <div className="detail__cardBody">
              <div className="detail__cardBodyInfo">
                <p className="detail__cardBodyTitle">{name}</p>
                <p className="detail__cardDescription">{description || 'No available'}</p>
              </div>
              <div className="detail__cardBodyBottom">
                <button
                  type="button"
                  style={{ backgroundColor: !buttonsStatus.favorites ? 'grey' : 'red', pointerEvents: !buttonsStatus.favorites ? 'none' : 'auto' }}
                  onClick={handleAddCharacterToFavorites}
                >
                  Like
                  {' '}
                  <i className="fa-sharp fa-solid fa-heart" />
                </button>
                <button type="button">
                  Hide
                  {' '}
                  <i className="fa-solid fa-eye-slash" />
                </button>
              </div>
            </div>
          </div>
        ))}
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
