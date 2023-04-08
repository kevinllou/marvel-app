/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { Link, useNavigate, useParams } from 'react-router-dom';
import ICharacters from '../../../interfaces/ICharacters';
import useFetch from '../../../hooks/useFetch';
import Spinner from '../../../components/Spinner/Spinner';
import IApiResponse from '../../../interfaces/IApiResponse';
import IStories from '../../../interfaces/IStories';
import './ComicID.scss';
import ROUTES from '../../../routes/routes';
import IComics from '../../../interfaces/IComics';
import createURLFetch from '../../../helpers/createURLFetch';

function ComicId() {
  const { id } = useParams();
  const history = useNavigate();
  const comicId = Number(id);
  const { state, data: comics, error } = useFetch<IApiResponse<IComics>>(createURLFetch({}, 'comic_id', comicId));
  const { data: characters } = useFetch<IApiResponse<ICharacters>>(createURLFetch({}, 'comicCharacters', comicId));
  const { data: stories } = useFetch<IApiResponse<IStories>>(createURLFetch({}, 'comicStories', comicId));

  if (state === 'loading') return <Spinner />;
  if (error) return <p>There was an error</p>;
  return (
    <section className="detail">
      <div className="detail__container">
        <div className="detail__goBack">
          <button type="button" onClick={() => history(-1)}><i className="fa-solid fa-arrow-left" /></button>
        </div>
        {comics?.data?.results?.map(({
          id: idComic, title, thumbnail, description,
        }) => (
          <div className="detail__card" key={idComic}>
            <div className="detail__cardImg">
              <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt="imageId" />
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
