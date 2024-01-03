import React, { useEffect, useState } from 'react';
import { getTrendingMovies } from 'services/apiservices';
import style from './HomePage.module.scss';
import ListMovies from 'components/ListMovies/ListMovies';

export default function HomePage() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <>
      <h1 className={style.title}>Тренди цього тижня</h1>
      <ListMovies movies={movies} />
    </>
  );
}
