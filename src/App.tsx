import { Routes, Route } from 'react-router-dom';
import { MainPage, PageNotFound, GamePage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/:provider/:game' element={<GamePage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
