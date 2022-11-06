import { useState } from '@/store/hooks';

export const useGamesSelector = () => {
  const { store } = useState();

  return store.games;
};
