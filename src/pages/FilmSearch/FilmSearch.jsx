import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { CiSearch } from 'react-icons/ci';
import { getQueryByMovie } from '../../services/api';
import { FilmItem } from './../../components/FilmItem/FilmItem';
import css from './FilmSearch.module.css';
import { placeholder } from 'utils/hrefImg';
import { BASE_URL_IMG } from './../../utils/hrefImg';

export default function FilmSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const [film, setFilm] = useState([]);

  useEffect(() => {
    if (!query) {
      return;
    }
    getQueryByMovie(query).then(setFilm).catch(console.log);
  }, [query]);

  const onChangeHandler = e => {
    const { value } = e.target;
    setSearchParams(value ? { query: value } : {});
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!query) {
      Notify.info('Please, enter movie name');
      return;
    }
    getQueryByMovie(query).then(setFilm).catch(console.log);
  };

  return (
    <>
      <div className="wrapper">
        <form onSubmit={onSubmitHandler} className={css.form}>
          <input
            type="text"
            value={query}
            onChange={onChangeHandler}
            className={css.input}
          />
          <button type="submit" className={css.btn}>
            <CiSearch size={30} />
          </button>
        </form>
        {film.length > 0 && (
          <ul className={css.searchList}>
            {film.map(({ id, original_title, poster_path }) => (
              <FilmItem
                key={id}
                title={original_title}
                href={`${id}`}
                className={css.searchItem}
              >
                <img
                  src={
                    poster_path ? `${BASE_URL_IMG}${poster_path}` : placeholder
                  }
                  alt={original_title}
                />
              </FilmItem>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
