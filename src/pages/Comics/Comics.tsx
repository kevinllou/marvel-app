import ComicFilter from '../../components/Comic/ComicFilter';
import ComicGrid from '../../components/Comic/ComicGrid';
import './Comics.scss';

function Comics() {
  return (
    <section className="comics">
      <div className="comics__container">
        <h1>COMICS</h1>
        <ComicFilter />
        <ComicGrid />
      </div>
    </section>
  );
}

export default Comics;
