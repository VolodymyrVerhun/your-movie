import ListMovies from 'components/ListMovies/ListMovies';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from 'services/apiservices';
import style from './MoviesPage.module.scss';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useSearchParams();
  // const [inputvalue, setInputValue] = useState('');
  const filmValue = query.get('query');

  useEffect(() => {
    if (filmValue) {
      getSearchMovies(filmValue)
        .then(setMovies)
        .catch(error => error.message);
    }
  }, [filmValue]);

  function handleSubmit(e) {
    e.preventDefault();
    setQuery({ query: e.target.elements.value.value });
  }

  return (
    <div>
      <h1 className={style.title}>Search movie</h1>
      <form className={style.form} onSubmit={handleSubmit}>
        <div className={style.input_box}>
          <input
            required
            className={style.input}
            type="text"
            name="value"
            placeholder=""
          />
          <label className={style.label} htmlFor="">
            Search
          </label>
        </div>
        <button className={style.button} type="submit">
          search
        </button>
      </form>
      <ListMovies movies={movies} />
    </div>
  );
}
