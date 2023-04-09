import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ROUTES from '../../routes/routes';
import IStories from '../../interfaces/IStories';
import IReducers from '../../interfaces/IReducers';
import { addStoryToFavorites, hideStory, removeStoryOfFavorites } from '../../redux/actions';

function StoryCard({
  id, title, thumbnail, characters, comics, type, description,
}: IStories) {
  const dispatch = useDispatch();
  const storyStore = useSelector((state: IReducers) => state.bookmarksReducer.stories);
  const storyHidden = useSelector((state: IReducers) => state.hiddenReducer.stories);
  const isStoryInStore = !!storyStore.find((item: IStories) => item.id === id);
  const isStoryHidden = !!storyHidden.find((item: number) => item === id);
  const handleAddComicToFavorites = () => {
    if (isStoryInStore) {
      dispatch(removeStoryOfFavorites(id));
      return;
    }
    dispatch(addStoryToFavorites({
      id,
      title,
      type,
      description,
      thumbnail,
      comics,
      characters,
    }));
  };
  const handleHideComic = () => {
    if (!isStoryHidden) {
      dispatch(hideStory(id));
    }
  };
  return (
    <div className="stories__gridItems">
      <div className="stories__card">
        <div className="stories__cardImage">
          <img src={`${thumbnail?.path || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'}.${thumbnail?.extension || 'jpg'}`} alt="" />
        </div>
        <div className="stories__cardBody">
          <div className="stories__name">
            <Link to={`${ROUTES.STORIES}/${id.toString()}`}>{title}</Link>
          </div>
          <div className="stories__options">
            <button
              type="button"
              style={{ color: isStoryInStore ? 'red' : 'white' }}
              onClick={handleAddComicToFavorites}
            >
              <i className="fa-sharp fa-solid fa-heart" />
            </button>
            <button
              type="button"
              onClick={handleHideComic}
              style={{
                color: isStoryHidden ? 'red' : 'white',
                pointerEvents: isStoryHidden ? 'none' : 'auto',
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

export default StoryCard;
