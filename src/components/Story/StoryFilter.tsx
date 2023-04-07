/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-undef */
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function StoryFilter() {
  const characterRef = useRef<HTMLSelectElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const characterValue = characterRef.current?.value === 'null' ? '' : characterRef.current?.value || '';
    const newSearchParams = new URLSearchParams({
      characters: characterValue,
      page: '1',
    });
    setSearchParams(newSearchParams);
  };
  const clearFilters = () => {
    formRef.current?.reset();
    setSearchParams({});
  };
  return (
    <section className="filter">
      <form className="filter__form" onSubmit={handleSubmit} ref={formRef}>
        <div className="filter__formWrapper">
          <div className="filter__filterOptions">
            <label htmlFor="comics">
              {' '}
              Format
              <select name="comics" id="comics" ref={characterRef}>
                <option value="null" defaultValue="None">None</option>
                {' '}
                <option value="1011334">3D- MAN</option>
                <option value="1009351">HULK</option>
                <option value="1011318">IRON FIST (BEI BANG-WEN)</option>
                <option value="1009191">BLADE</option>
                <option value="1012717">AGATHA HARKNESS </option>
                <option value="1010802">ANT-MAN (ERIC O'GRADY)</option>
                <option value="1010801">WOLVERIN</option>
                <option value="1014873">SPIDER-MAN (2099)</option>
              </select>
            </label>
            <button type="submit">Filter</button>
          </div>
        </div>
        <button type="button" onClick={clearFilters}>Clear all filters</button>
      </form>
    </section>
  );
}

export default StoryFilter;
