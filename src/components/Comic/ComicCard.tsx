import { Link } from 'react-router-dom';
import IComics from '../../interfaces/IComics';
import ROUTES from '../../routes/routes';

function ComicCard({ id, title, thumbnail }: Pick<IComics, 'id' | 'title' | 'thumbnail'>) {
  return (
    <Link to={`${ROUTES.COMICS}/${id.toString()}`}>
      <div className="comics__gridItems">
        <div className="comics__card">
          <div className="comics__cardImage">
            <img src={`${thumbnail?.path}.${thumbnail?.extension}`} alt="" />
          </div>
          <div className="comics__cardBody">
            <div className="comics__name">
              <p>{title}</p>
            </div>
            <div className="comics__options">
              <button type="button">Like</button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ComicCard;
