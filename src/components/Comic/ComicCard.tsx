import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import IComics from '../../interfaces/IComics';
import ROUTES from '../../routes/routes';
import IReducers from '../../interfaces/IReducers';
import { addComicToFavorites, hideComic, removeComicOfFavorites } from '../../redux/actions';

function ComicCard({
  id, title, thumbnail, stories, characters, description,
}: IComics) {
  const dispatch = useDispatch();
  const comicStore = useSelector((state: IReducers) => state.bookmarksReducer.comics);
  const comicHidden = useSelector((state: IReducers) => state.hiddenReducer.comics);
  const isComicInStore = !!comicStore.find((item: IComics) => item.id === id);
  const isComicHidden = !!comicHidden.find((item: number) => item === id);

  const handleAddComicToFavorites = () => {
    if (isComicInStore) {
      dispatch(removeComicOfFavorites(id));
      return;
    }
    dispatch(addComicToFavorites({
      id,
      title,
      description,
      thumbnail,
      stories,
      characters,
    }));
  };
  const handleHideComic = () => {
    if (!isComicHidden) {
      dispatch(hideComic(id));
    }
  };

  return (

    <div className="comics__gridItems">
      <div className="comics__card">
        <div className="comics__cardImage">
          <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt="" />
        </div>
        <div className="comics__cardBody">
          <div className="comics__name">
            <Link to={`${ROUTES.COMICS}/${id.toString()}`}>
              {title}
            </Link>
          </div>
          <div className="comics__options">
            <button
              type="button"
              style={{ color: isComicInStore ? 'red' : 'white' }}
              onClick={handleAddComicToFavorites}
            >
              <i className="fa-sharp fa-solid fa-heart" />
            </button>
            <button
              type="button"
              onClick={handleHideComic}
              style={{
                color: isComicHidden ? 'red' : 'white',
                pointerEvents: isComicHidden ? 'none' : 'auto',
              }}
            >
              <i className="fa-solid fa-eye-slash" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComicCard;
