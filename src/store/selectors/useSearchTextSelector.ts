import { TSearchGame } from '../reducers/types';
import { useState } from '../hooks';

export const useSearchTextSelector = (): TSearchGame => {
  const { store } = useState();

  return store.searchGame;
};
