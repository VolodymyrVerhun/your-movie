import { NavLink, Route, Routes } from 'react-router-dom';
import style from './App.module.scss';
// import logo from 'pngwing.com.png';
import { Suspense, lazy } from 'react';
import { Grid } from 'react-loader-spinner';

const HomePage = lazy(() => import('pages/homePage/HomePage'));
const MoviesPage = lazy(() => import('pages/moviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/notFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('pages/movieDetailsPage/MovieDetails'));

export const App = () => {
  return (
    <>
      <header className={style.header}>
        {/* <img className={style.img} src={logo} alt="" /> */}

        <nav className={style.nav}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.active}` : `${style.li}`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.active}` : `${style.li}`
            }
            to="/movies"
          >
            Search Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={
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
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movie/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
    </>
  );
};
