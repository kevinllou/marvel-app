/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-useless-return */
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function CharacterFilter() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const comicsRef = useRef<HTMLSelectElement | null>(null);
  const storiesRef = useRef<HTMLSelectElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const comicValue = comicsRef.current?.value === 'null' ? '' : comicsRef.current?.value || '';
    const storieValue = storiesRef.current?.value === 'null' ? '' : storiesRef.current?.value || '';
    const searchValue = searchRef.current?.value || '';

    searchParams.set('nameStartsWith', searchValue);
    searchParams.delete('page');
    searchParams.set('stories', storieValue);
    searchParams.set('comics', comicValue);

    setSearchParams(searchParams);
  };
  const clearFilters = () => {
    formRef.current?.reset();
    setSearchParams({});
  };

  return (
    <section className="filter">
      <form className="filter__form" onSubmit={handleSubmit} ref={formRef}>
        <div className="filter__formWrapper">
          <div className="filter__formSearch">
            <input type="text" placeholder="Search by name ..." name="search" id="search" ref={searchRef} />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="filter__filterOptions">
            <label htmlFor="comics">
              {' '}
              Comics
              <select name="comics" id="comics" ref={comicsRef}>
                <option value="null" defaultValue="None">None</option>
                {' '}
                <option value="1749">(X-MEN - AGE OF APOCALYPSE)</option>
                <option value="1158">ULTIMATE WAR TPB</option>
                <option value="1332">X-Men: Days of Future Past</option>
                <option value="1590"> #9 (THE WOMEN OF MARVEL)</option>
                <option value="199">#13 (TEAMS)</option>
                <option value="1689">#10 (MARVEL KNIGHTS)</option>
              </select>
            </label>
            <label htmlFor="stories">
              {' '}
              Stories
              <select name="stories" id="stories" ref={storiesRef}>
                <option value="null" defaultValue="None">None</option>
                <option value="12">Visionary writer/artist Frank Miller's...</option>
                <option value="14">Karen Page, Daredevil's former lover...</option>
                <option value="20">Maya Lopez deaf...</option>
                <option value="22">Matt Murdock's life..</option>
                <option value="26">Haunted by her own father's death...</option>
                <option value="28">S.H.I.E.L.D. offers Elektra a mission...</option>
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

export default CharacterFilter;
