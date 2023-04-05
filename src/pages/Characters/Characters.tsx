import CharacterFilter from '../../components/Character/CharacterFilter';
import CharacterGrid from '../../components/Character/CharacterGrid';
import './Characters.scss';

function Characters() {
  return (
    <section className="characters">
      <div className="characters__container">
        <h1>MARVEL CHARACTERS</h1>
        <CharacterFilter />
        <CharacterGrid />
      </div>
    </section>
  );
}
export default Characters;
