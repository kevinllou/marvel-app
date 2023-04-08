import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ICharacters from '../../interfaces/ICharacters';
import ROUTES from '../../routes/routes';
import { addCharacterToFavorites, removeCharacterOfFavorites, hideCharacter } from '../../redux/actions';
import IReducers from '../../interfaces/IReducers';

function CharacterCard({
  id, name, thumbnail, description, comics, stories,
}: ICharacters) {
  const dispatch = useDispatch();
  const charactersStore = useSelector((state: IReducers) => state.bookmarksReducer.characters);
  const characterHidden = useSelector((state: IReducers) => state.hiddenReducer.characters);
  const isCharacterInStore = !!charactersStore.find((item: ICharacters) => item.id === id);
  const isCharacterHidden = !!characterHidden.find((item: number) => item === id);

  const handleAddCharacterToFavorites = () => {
    if (isCharacterInStore) {
      dispatch(removeCharacterOfFavorites(id));
      return;
    }
    dispatch(addCharacterToFavorites({
      id,
      name,
      description,
      thumbnail,
      stories,
      comics,
    }));
  };
  const handleHideCharacter = () => {
    if (!isCharacterHidden) {
      dispatch(hideCharacter(id));
    }
  };
  return (

    <div className="characters__gridItems">
      <div className="characters__card">
        <div className="characters__cardImage">
          <img src={thumbnail?.path !== undefined ? `${thumbnail?.path}.${thumbnail?.extension}` : thumbnail} alt="" />
        </div>
        <div className="characters__cardBody">
          <div className="characters__name">
            <Link to={`${ROUTES.CHARACTERS}/${id.toString()}`}>
              {name}
            </Link>
          </div>
          <div className="characters__options">
            <button
              type="button"
              style={{ color: isCharacterInStore ? 'red' : 'white' }}
              onClick={handleAddCharacterToFavorites}
            >
              <i className="fa-sharp fa-solid fa-heart" />
            </button>
            <button
              type="button"
              onClick={handleHideCharacter}
              style={{
                color: isCharacterHidden ? 'red' : 'white',
                pointerEvents: isCharacterHidden ? 'none' : 'auto',
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

export default CharacterCard;
