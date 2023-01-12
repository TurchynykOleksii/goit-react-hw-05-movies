import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCastId } from '../../services/api';
import { BASE_URL_IMG, placeholder } from '../../utils/hrefImg';
import css from './Cast.module.css';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { filmId } = useParams();

  useEffect(() => {
    getCastId(filmId).then(setCast).catch(console.log);
  }, [filmId]);

  if (!cast) {
    return;
  }

  return (
    <>
      {cast.length > 0 ? (
        <ul className={css.list}>
          {cast.map(({ name, profile_path, character }, i) => (
            <li key={i} className={css.listItem}>
              <img
                width="100"
                src={
                  profile_path ? `${BASE_URL_IMG}${profile_path}` : placeholder
                }
              />
              <div>
                <p>
                  <b>Actor name :</b> {name}
                </p>
                <p>
                  <b>Character :</b> {character}
                </p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No cast info for this movie</p>
      )}
    </>
  );
};
