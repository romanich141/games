import { IGame } from '@/store/reducers/types';
import { useMemo } from 'react';
import { useSearchTextSelector, useGamesByProvider } from '@/store/selectors';

export const useSearchGamesSelector = () => {
  const searchText = useSearchTextSelector();
  const games = useGamesByProvider();

  return useMemo(() => {
    if (searchText.length === 0) {
      return games;
    }

    const result = Object.fromEntries(
      Object.entries(games).filter(([_, game]: IGame) =>
        game.title.toLowerCase().startsWith(searchText.toLowerCase().trim()),
      ),
    );

    return result;
  }, [games, searchText]);
};
