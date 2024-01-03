import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getMovieDetails } from 'services/apiservices';
import image from 'images.jpg';
import style from './Moviedetails.module.scss';
import { BASE_URL_IMG } from 'utils/constance';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { Grid } from 'react-loader-spinner';

export default function MovieDetails() {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  if (!movie) {
    return (
      <h2>
        <Grid
          visible={true}
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="grid-loading"
          radius="12.5"
          wrapperStyle={{}}
          wrapperClass="grid-wrapper"
        />
      </h2>
    );
  }

  return (
    <div>
      <Link className={style.btn_back} to={backLinkHref.current}>
        Go Back
      </Link>
      <div className={style.wrapper}>
        <img
          className={style.img}
          src={
            movie.poster_path ? `${BASE_URL_IMG}${movie.poster_path}` : image
          }
          alt="noFoto"
        />
        <div className={style.block}>
          <h2 className={style.title}>
            {movie.title || movie.name}
            <span>({movie.release_date?.slice(0, 4)})</span>
          </h2>
          <p>
            <span className={style.genre}>
              Genres: <br />
            </span>{' '}
            {movie.genres?.map(genre => `${genre.name} `)}
          </p>
          <p>
            <span className={style.genre}>
              Overview: <br />
            </span>{' '}
            {movie.overview}
          </p>
        </div>
      </div>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.active}` : `${style.li}`
        }
        to="credits"
      >
        Cast
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? `${style.active}` : `${style.li}`
        }
        to="reviews"
      >
        Reviews
      </NavLink>
      <Routes>
        <Route path="credits" element={<Cast movieId={movieId} />} />
        <Route path="reviews" element={<Reviews movieId={movieId} />} />
      </Routes>
    </div>
  );
}
