import { useState, useEffect } from 'react';
import { getMovieTranding } from '../../services/api';
import { FilmItem } from '../../components/FilmItem';
import { BASE_URL_IMG, placeholder } from '../../utils/hrefImg';
import css from './FilmList.module.css';

export default function FilmList() {
  const [trendsFilm, setTrendsFilm] = useState([]);
  useEffect(() => {
    getMovieTranding().then(({ results }) => setTrendsFilm(results));
  }, []);
  return (
    <main className={css.main}>
      <div className="wrapper">
        <h1 className={css.headline}>Trending movies</h1>
        <ul className={css.filmList}>
          {trendsFilm.map(({ id, original_title, poster_path, title }) => (
            <FilmItem key={id} title={original_title} href={`movies/${id}`}>
              <img
                src={
                  poster_path ? `${BASE_URL_IMG}${poster_path}` : placeholder
                }
                alt={title}
              />
            </FilmItem>
          ))}
        </ul>
      </div>
    </main>
  );
}
