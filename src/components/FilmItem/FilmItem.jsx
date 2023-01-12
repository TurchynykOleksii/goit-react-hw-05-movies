import { useLocation, Link } from 'react-router-dom';
import css from './FilmItem.module.css';

export const FilmItem = ({ title, href, children }) => {
  const location = useLocation();
  return (
    <li className={css.itemList}>
      <Link to={href} state={{ from: location }} className={css.filmItem}>
        {children}
        <p className={css.title}>{title}</p>
      </Link>
    </li>
  );
};
