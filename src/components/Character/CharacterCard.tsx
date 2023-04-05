import { Link } from 'react-router-dom';
import ICharacters from '../../interfaces/ICharacters';
import ROUTES from '../../routes/routes';

function CharacterCard({ id, name, thumbnail }: Pick<ICharacters, 'id' | 'name' | 'thumbnail'>) {
  return (
    <Link to={`${ROUTES.CHARACTERS}/${id.toString()}`}>
      <div className="characters__gridItems">
        <div className="characters__card">
          <div className="characters__cardImage">
            <img src={thumbnail?.path !== undefined ? `${thumbnail?.path}.${thumbnail?.extension}` : thumbnail} alt="" />
          </div>
          <div className="characters__cardBody">
            <div className="characters__name">
              <p>{name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CharacterCard;
