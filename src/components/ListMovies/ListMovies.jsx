import React from 'react';
import image from 'images.jpg';
import style from './ListMovies.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { BASE_URL_IMG } from 'utils/constance';
export default function ListMovies({ movies }) {
  const location = useLocation();

  return (
    <div className={style.wrapper}>
      {movies.map(movie => (
        <Link
          state={{ from: location }}
          to={`/movie/${movie.id}`}
          className={style.block}
          key={movie.id}
        >
          <img
            className={style.img}
            src={
              movie.poster_path ? `${BASE_URL_IMG}${movie.poster_path}` : image
            }
            alt="photoCard"
          />
          <p className={style.movie_name}>{movie.title || movie.name}</p>
        </Link>
      ))}
    </div>
  );
}
