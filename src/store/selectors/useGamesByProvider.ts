import { useMemo } from 'react';
import { IGame } from '../reducers/types';
import { useGamesSelector, useSelectedProviderSelector } from '../selectors';

export const useGamesByProvider = (): IGame => {
  const allGames = useGamesSelector();
  const selectedProvider = useSelectedProviderSelector();
  const whenProviderFilterNotChoosed = !selectedProvider;

  return useMemo(() => {
    if (whenProviderFilterNotChoosed) {
      return allGames;
    }

    return Object.fromEntries(
      Object.entries(allGames).filter(
        ([_, game]: IGame) => game.provider === selectedProvider,
      ),
    );
  }, [allGames, selectedProvider]);
};
