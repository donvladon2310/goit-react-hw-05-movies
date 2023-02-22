import { useState, useEffect, Suspense, } from 'react';
import { useParams, Link, useLocation, Outlet } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { Notify } from 'notiflix';
import { Loader } from 'components/Loader/Loader';
import { getMovieDetails } from 'services/API';
import styles from './MovieDetails.module.css';




function MovieDetails() {
  const [movieInfo, setMovieInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!movieId) return;
    const fetchMovieDetails = async id => {
      try {
        setIsLoading(true);
        const receivedTrends = await getMovieDetails(id);
        setMovieInfo(receivedTrends);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);

  useEffect(() => {
    if (error === null) return;
    Notify.failure(`some error occured ${error}`);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <Link className={styles.goBack} to={location?.state?.from ?? '/'}>
        <BsFillArrowLeftSquareFill size="30px" />
      </Link>
      {isLoading && <Loader />}
      {movieInfo !== null && (
        <div className={styles.box}>
          <img
            className={styles.img}
            src={
              movieInfo?.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieInfo?.poster_path}`
                : 'https://cdn4.iconfinder.com/data/icons/ui-beast-4/32/Ui-12-512.png'
            }
            alt={movieInfo.title}
          />
          <div className={styles.info}>
            <h1 className={styles.title}>
              {movieInfo.title} ({movieInfo?.release_date.slice(0, 4)})
            </h1>
            <p>User Score: {movieInfo?.vote_average}</p>
            <h2>Overview</h2>
            <p className={styles.overview}>{movieInfo.overview}</p>
            <h2>Genres</h2>
            <ul className={styles.genre}>
              {movieInfo?.genres?.map(({ id, name }) => {
                return (
                  <li key={id} className={styles.genreItem}>
                    {name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
      <div className={styles.moreInfo}>
        <Link
          state={{ from: location?.state?.from ?? '/' }}
          className={styles.moreInfoLink}
          to="reviews"
        >
          Reviews
        </Link>
        <Link
          state={{ from: location?.state?.from ?? '/' }}
          className={styles.moreInfoLink}
          to="cast"
        >
          Cast
        </Link>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

export default MovieDetails;
