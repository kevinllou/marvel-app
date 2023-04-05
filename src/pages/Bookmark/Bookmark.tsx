import { useSelector } from 'react-redux';
import './Bookmark.scss';
import ICharacters from '../../interfaces/ICharacters';
import CharacterCard from '../../components/Character/CharacterCard';
import IComics from '../../interfaces/IComics';
import IStories from '../../interfaces/IStories';
import IResourcesType from '../../interfaces/IResourcesType';

function Bookmark() {
  const characters = useSelector((state: IResourcesType) => state.characters);
  return (
    <section className="bookmarks">
      <h1>Bookmark</h1>
      <div className="bookmarks__favorites">
        <h2>FAVORITES</h2>
        <div className="bookmarks__grid">
          {characters.length === 0 && <p>There are not any characters yet</p>}
          {characters.map(({ id, name, thumbnail }: ICharacters) => (
            <CharacterCard key={id} name={name} thumbnail={thumbnail} id={id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Bookmark;
