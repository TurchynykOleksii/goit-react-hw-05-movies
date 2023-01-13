import { Routes, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import FilmList from '../pages/FilmList/FilmList';
import FilmInfo from '../pages/FilmInfo/FilmInfo';
import Cast from '../pages/Cast/Cast';
import Reviews from '../pages/Reviews/Reviews';
import FilmSearch from '../pages/FilmSearch/FilmSearch';

//const Layout = lazy(() => import('../components/Layout'));
// const FilmList = lazy(() => import('../pages/FilmList'));
// const FilmInfo = lazy(() => import('../pages/FilmInfo'));
// const Cast = lazy(() => import('../pages/Cast'));
// const Reviews = lazy(() => import('../pages/Reviews'));
// const FilmSearch = lazy(() => import('../pages/FilmSearch'));

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
