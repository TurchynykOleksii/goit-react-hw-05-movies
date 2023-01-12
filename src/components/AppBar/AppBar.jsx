import { Link } from 'react-router-dom';
import css from './AppBar.module.css';

export const AppBar = () => {
  const navItems = [
    { href: '/', text: 'home' },
    { href: '/movies', text: 'movies' },
  ];

  return (
    <div className={css.header}>
      <div className="wrapper">
        <nav className={css.navigation}>
          {navItems.map(({ href, text }) => (
            <Link key={href} to={href} className={css.link}>
              {text}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};
