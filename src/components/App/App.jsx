import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from 'components/Header/Header';
import Loader from '../Loader/Loader';
import { LoaderContainer } from './App.styled';

const Home = lazy(() => import('../../pages/Home/Home'));
const Catalog = lazy(() => import('../../pages/Catalog/Catalog'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense
        fallback={
          <LoaderContainer>
            <Loader />
          </LoaderContainer>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
