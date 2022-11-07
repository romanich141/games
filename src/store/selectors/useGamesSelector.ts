import { useState } from '../hooks';

export const useGamesSelector = () => {
  const { store } = useState();

  return store.games;
};
