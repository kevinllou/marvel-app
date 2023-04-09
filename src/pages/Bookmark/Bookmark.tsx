/* eslint-disable @typescript-eslint/no-shadow */
import { useDispatch, useSelector } from 'react-redux';
import './Bookmark.scss';
import ICharacters from '../../interfaces/ICharacters';
import CharacterCard from '../../components/Character/CharacterCard';
import IComics from '../../interfaces/IComics';
import IStories from '../../interfaces/IStories';
import IReducers from '../../interfaces/IReducers';
import Message from '../../components/Message/Message';
import { removeAllFavorites, resetHiddenResources } from '../../redux/actions';
import ComicCard from '../../components/Comic/ComicCard';

function Bookmark() {
  const dispatch = useDispatch();
  const characters = useSelector((state: IReducers) => state.bookmarksReducer.characters);
  const comics = useSelector((state: IReducers) => state.bookmarksReducer.comics);
  return (
    <section className="bookmarks">
      <h1>Bookmark</h1>
      <div className="bookmarks__options">
        <button type="button" onClick={() => dispatch(resetHiddenResources())}>Unhidden elements</button>
        <button type="button" onClick={() => dispatch(removeAllFavorites())}>Remove favorites</button>
      </div>
      <div className="bookmarks__favorites">
        <h2>FAVORITES CHARACTERS</h2>
        <div className="bookmarks__grid">
          {characters.map(({
            id, name, thumbnail, description, comics, stories,
          }: ICharacters) => (
            <CharacterCard
              key={id}
              id={id}
              name={name}
              thumbnail={thumbnail}
              description={description}
              comics={comics}
              stories={stories}
            />
          ))}
        </div>
      </div>
      <div className="bookmarks__favorites">
        <h2>FAVORITES COMICS</h2>
        <div className="bookmarks__grid">
          {comics.map(({
            id, title, thumbnail, description, characters, stories,
          }: IComics) => (
            <ComicCard
              key={id}
              id={id}
              title={title}
              thumbnail={thumbnail}
              description={description}
              characters={characters}
              stories={stories}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bookmark;
