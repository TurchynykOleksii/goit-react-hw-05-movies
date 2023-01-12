import { Routes, Route } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { FilmList } from '../pages/FilmList';
import { FilmInfo } from '../pages/FilmInfo';
import { Cast } from '../pages/Cast';
import { Reviews } from '../pages/Reviews';
import { FilmSearch } from '../pages/FilmSearch';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FilmList />} />
        <Route path="movies" element={<FilmSearch />} />
        <Route path="movies/:filmId" element={<FilmInfo />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
