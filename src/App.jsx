import { Loader } from 'components/Loader';
import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';

const FilmList = lazy(() => import('./pages/FilmList/FilmList'));
const FilmInfo = lazy(() => import('./pages/FilmInfo/FilmInfo'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const FilmSearch = lazy(() => import('./pages/FilmSearch/FilmSearch'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
};
