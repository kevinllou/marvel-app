/* eslint-disable react/jsx-no-undef */
import React, { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

function ComicFilter() {
  const searchRef = useRef<HTMLInputElement | null>(null);
  const formatRef = useRef<HTMLSelectElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const [, setSearchParams] = useSearchParams();

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const searchValue = searchRef.current?.value || '';
    const formatValue = formatRef.current?.value === 'null' ? '' : formatRef.current?.value || '';
    const newSearchParams = new URLSearchParams({
      title: searchValue,
      format: formatValue,
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
          <div className="filter__formSearch">
            <input type="text" placeholder="Search by title ..." name="search" id="search" ref={searchRef} />
            <i className="fa-solid fa-magnifying-glass" />
          </div>
          <div className="filter__filterOptions">
            <label htmlFor="comics">
              {' '}
              Format
              <select name="comics" id="comics" ref={formatRef}>
                <option value="null" defaultValue="None">None</option>
                {' '}
                <option value="comic">Comic</option>
                <option value="magazine">Magazine</option>
                <option value="trade paperback">Trade PaperBack</option>
                <option value="hardcover">Hard cover</option>
                <option value="digest">Digest</option>
                <option value="digital comic">Digital comic</option>
                <option value="infinite comic">Infinite comic</option>
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

export default ComicFilter;
