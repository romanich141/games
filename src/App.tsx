import { Routes, Route } from 'react-router-dom';
import { HomePage, PageNotFound, GamePage } from './pages';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/:provider/:game' element={<GamePage />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  );
};
