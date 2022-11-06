import { TSearchGame } from '@/store/reducers/types';
import { useState } from '@/store/hooks';

export const useSearchTextSelector = (): TSearchGame => {
  const { store } = useState();

  return store.searchGame;
};
