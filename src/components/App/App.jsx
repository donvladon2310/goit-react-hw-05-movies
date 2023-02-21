import { NavLink, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import clsx from 'clsx';
import { Loader } from 'components/Loader/Loader';
import styles from './App.module.css';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

function App() {
  const classNames = condition => {
    return clsx({ [styles.navLinkActive]: condition, [styles.navLink]: true });
  };

  return (
    <>
      <header>
        <nav className={styles.nav}>
          <NavLink
            className={({ isActive }) => classNames(isActive)}
            to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => classNames(isActive)}
            to="/movies"
          >
            Movies
          </NavLink>
        </nav>
      </header>
      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
