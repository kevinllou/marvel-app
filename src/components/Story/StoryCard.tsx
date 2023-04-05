import { Link } from 'react-router-dom';
import ROUTES from '../../routes/routes';
import IStories from '../../interfaces/IStories';

function StoryCard({ id, title, thumbnail }: Pick<IStories, 'id' | 'title' | 'thumbnail'>) {
  return (
    <Link to={`${ROUTES.STORIES}/${id.toString()}`}>
      <div className="stories__gridItems">
        <div className="stories__card">
          <div className="stories__cardImage">
            <img src={`${thumbnail?.path || 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available'}.${thumbnail?.extension || 'jpg'}`} alt="" />
          </div>
          <div className="stories__cardBody">
            <div className="stories__name">
              <p>{title}</p>
            </div>
            <div className="stories__options">
              <button type="button">Like</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default StoryCard;
