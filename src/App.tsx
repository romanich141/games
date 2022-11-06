import { Routes, Route } from 'react-router-dom';
import { MainPage, PageNotFound } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
