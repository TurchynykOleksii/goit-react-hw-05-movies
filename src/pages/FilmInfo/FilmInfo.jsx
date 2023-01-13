import { useState, useEffect, Suspense } from 'react';
import { Outlet, useParams, useLocation, Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import { getMovieDetails } from '../../services/api';
import { BASE_URL_IMG } from '../../utils/hrefImg';
import { Loader } from 'components/Loader';
import css from './FilmInfo.module.css';

export default function FilmInfo() {
  const [film, setFilm] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieDetails(filmId).then(setFilm).catch(console.log);
  }, [filmId]);

  if (!film) return;

  const { title, overview, genres, vote_average, poster_path, id } = film;
  const getGenres = genres.map(genre => genre.name).join(', ');
  const goBackHref = location.state?.from ?? '/';

  return (
    <div className={css.filmInfoContainer}>
      <div className="wrapper">
        <Link to={goBackHref} className={css.goBack}>
          <BiArrowBack />
          go back
        </Link>
        <div className={css.filmInfo}>
          <img src={`${BASE_URL_IMG}${poster_path}`} alt={title} />
          <div>
            <h2 className={css.headline}>{title}</h2>
            <p>
              <strong>User Score:</strong> {vote_average.toFixed(1)}
            </p>
            <p>
              <strong>Overview:</strong> {overview}
            </p>
            <p>
              <strong>Genres:</strong> {getGenres}
            </p>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <div className={css.btn}>
            <Link
              data-id={id}
              to="cast"
              state={location.state}
              className={css.btnDetail}
            >
              cast
            </Link>
            <Link
              data-id={id}
              to="reviews"
              state={location.state}
              className={css.btnDetail}
            >
              reviews
            </Link>
          </div>
        </div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}
