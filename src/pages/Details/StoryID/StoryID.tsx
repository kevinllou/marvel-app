/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate, useParams } from 'react-router-dom';
import ICharacters from '../../../interfaces/ICharacters';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IStories from '../../../interfaces/IStories';
import './StoryID.scss';
import ROUTES from '../../../routes/routes';
import createURLFetch from '../../../helpers/createURLFetch';

function StoryID() {
  const { id } = useParams();
  const history = useNavigate();
  const idStory = Number(id);
  const { state, data: stories, error } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'story_id', idStory));
  const { data: characters } = useFetch<IApiResponse<ICharacters>>(createURLFetch({}, 'storyCharacters', idStory));
  const { data: comics } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'storyComics', idStory));

  if (state === 'loading') return <Spinner />;
  if (error) return <p>There was an error</p>;
  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        {stories?.data?.results?.map(({
          id: idCharacters, title, thumbnail, description,
        }) => (
          <div className="detail__card" key={idCharacters}>
            <div className="detail__cardImg">
              <img src={`${thumbnail?.path || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'}.${thumbnail?.extension || 'jpg'}`} alt="" />
            </div>
            <div className="detail__cardBody">
              <div className="detail__cardBodyInfo">
                <p className="detail__cardBodyTitle">{title}</p>
                <p className="detail__cardDescription">{description || 'No available'}</p>
              </div>
              <div className="detail__cardBodyBottom">
                <button type="button">
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
